import * as http from 'node:http';
import { writeFile } from 'fs/promises';
import { Buffer } from 'node:buffer';

const server = http.createServer((request, response) => {
  const { method, url } = request;
  response.setHeader('Content-Type', 'application/json');

  if (method === 'POST' && url !== '/favicon.ico') {
    // Security part starts here
    const authheader = request.headers.authorization;
    if (authheader || !req.headers.authorization.indexOf('Basic ') === -1) {
      const auth = Buffer.from(authheader.split(' ')[1], 'base64')
        .toString()
        .split(':');
      const user = auth[0];
      const pass = auth[1];
      if (
        ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'].includes(user) &&
        pass === 'abracadabra'
      ) {
        let guest = request.url.slice(1);
        let fileName = `guests/${guest}.json`;
        let bodyReq = request.headers['body'];
        writeFile(fileName, bodyReq)
          .then(() => {
            let bodyRes = bodyReq;
            response.writeHead(200, {
              'Content-Length': Buffer.byteLength(bodyRes),
            });
            response.end(bodyRes);
          })
          .catch((err) => {
            // Handle the error here
            console.error('Error:', err);

            let bodyRes = JSON.stringify({ error: 'Server Error' });
            response.writeHead(500, {
              'Content-Length': Buffer.byteLength(bodyRes),
            });
            response.end(bodyRes);
          });
      }
    } else {
      let bodyRes = { error: 'Authorization Required%' };
      response.writeHead(401, {
        'Content-Length': Buffer.byteLength(bodyRes),
      });
      response.end(bodyRes);
    }
  }
});

server.listen(5000, 'localhost', () => {
  console.log('Server on http://localhost:5000');
});
