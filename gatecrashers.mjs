import * as http from 'node:http';
import * as fs from 'fs';
import { Buffer } from 'node:buffer';

const AUTHORIZED_USERS = {
  Caleb_Squires: 'abracadabra',
  Tyrique_Dalton: 'abracadabra',
  Rahima_Young: 'abracadabra',
};

const server = http.createServer((request, response) => {
  const { method, url, headers } = request;
  response.setHeader('Content-Type', 'application/json');
  if (method === 'POST' && url !== '/favicon.ico') {
    // Security part starts here
    console.log(request.headers);
    const authheader = request.headers.authorization;
    if (authheader) {
      if (!authheader) {
        response.writeHead(401, {
          'Content-Length': 0,
          'WWW-Authenticate': 'Basic realm="Authorization Required"',
        });
        response.end();
      }

      const auth = Buffer.from(authheader.split(' ')[1], 'base64')
        .toString()
        .split(':');
      const user = auth[0];
      const pass = auth[1];

      if (AUTHORIZED_USERS[user] === pass) {
        // Security part ends here

        request.on('data', async (data) => {
          //   const data = Buffer.concat(body).toString();
          const filePath = `./guests${url}.json`;

          await fs.promises.writeFile(
            filePath,
            data.toString('utf8'),
            {
              encoding: 'utf8',
              flag: 'w',
            },
            (err) => {
              const serverFailedResponse = JSON.stringify({
                error: 'server failed in catch',
              });
              response.writeHead(500, {
                'Content-Length': Buffer.byteLength(serverFailedResponse),
              });
              response.end(serverFailedResponse);
            }
          );
          response.writeHead(201, {
            // 'Content-Length': Buffer.from(data),
          });
          response.end();
        });
      } else {
        // New else security error
        response.writeHead(401, {
          'Content-Length': 0,
          'WWW-Authenticate': 'Basic realm="Authorization Required"',
        });
        response.end();
        // End new else security error
      }
    }
  } else if (method === 'POST' && url !== '/favicon.ico') {
    try {
      request.on('end', async () => {
        // kui viitsimist siis võib proovida ilma asyncita
        const data = Buffer.concat(body).toString();
        const filePath = `./guests${url}.json`;

        try {
          await fs.promises.writeFile(filePath, data, {
            encoding: 'utf8',
            flag: 'w',
          }); // ta muidu sulgeb selle faili ja ei jõua lõpuni kirjutada
          response.writeHead(201, {
            'Content-Length': Buffer.byteLength(data),
          });
          response.end(data);
        } catch (error) {
          const serverFailedResponse = JSON.stringify({
            error: 'server failed',
          });
          response.writeHead(500, {
            'Content-Length': Buffer.byteLength(serverFailedResponse),
          });
          response.end(serverFailedResponse);
        }
      });
    } catch (error) {
      const serverFailedResponse = JSON.stringify({ error: 'server failed' });
      response.writeHead(500, {
        'Content-Length': Buffer.byteLength(serverFailedResponse),
      });
      response.end(serverFailedResponse);
    }
  }
});

server.listen(5000, () => {
  console.log('Server on http://localhost:5000');
});

// https://stackoverflow.com/questions/4295782/how-to-process-post-data-in-node-js
