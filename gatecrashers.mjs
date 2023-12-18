import * as http from 'node:http';
import { writeFile } from 'fs/promises';
import { Buffer } from 'node:buffer';

const AUTHORIZED_USERS = {
  Caleb_Squires: 'abracadabra',
  Tyrique_Dalton: 'abracadabra',
  Rahima_Young: 'abracadabra',
};

const server = http.createServer((request, response) => {
  const { method, url } = request;
  response.setHeader('Content-Type', 'application/json');

  if (method === 'POST' && url !== '/favicon.ico') {
    // Security part starts here
    const authheader = request.headers.authorization;
    if (authheader) {
    }
    if (!authheader) {
      let bodyRes = { error: 'Authorization Required%' };
      response.writeHead(401, {
        'Content-Length': Buffer.byteLength(bodyRes),
      });
      response.end(bodyRes);
    } else {
      const auth = Buffer.from(authheader.split(' ')[1], 'base64')
        .toString()
        .split(':');
      const user = auth[0];
      const pass = auth[1];

      if (AUTHORIZED_USERS[user] === pass) {
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

            let bodyRes = JSON.stringify({ error: 'server failed in catch' });
            response.writeHead(500, {
              'Content-Length': Buffer.byteLength(bodyRes),
            });
            response.end(bodyRes);
          });
      } else {
        let bodyRes = { error: 'Authorization Required%' };
        response.writeHead(401, {
          'Content-Length': Buffer.byteLength(bodyRes),
        });
        response.end(bodyRes);
      }
    }
  }
});

server.listen(5000, () => {
  console.log('Server on http://localhost:5000');
});
