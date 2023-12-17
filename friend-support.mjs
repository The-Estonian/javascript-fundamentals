import * as http from 'node:http';
import * as fs from 'fs';
import { Buffer } from 'node:buffer';

let server = http.createServer((request, response) => {
  const { method, url, headers } = request;
  response.setHeader('Content-Type', 'application/json');
  if (method === 'GET' && request.url !== '/favicon.ico') {
    try {
      // server.kill();
      fs.readFile('./guests' + request.url + '.json', 'utf8', (err, data) => {
        try {
          response
            .writeHead(200, {
              'Content-Length': Buffer.byteLength(data),
            })
            .end(data);
        } catch (err) {
          if (err.code === 'ENOENT') {
            let data = JSON.stringify({ error: 'guest not found' });
            response
              .writeHead(404, {
                'Content-Length': Buffer.byteLength(data),
              })
              .end(data);
          } else {
            let data = JSON.stringify({ error: 'server failed' });
            response
              .writeHead(500, {
                'Content-Length': Buffer.byteLength(data),
              })
              .end(data);
          }
        }
      });
    } catch (err) {
      if (err.code === 'ENOENT') {
        let data = JSON.stringify({ error: 'guest not found' });
        response
          .writeHead(404, {
            'Content-Length': Buffer.byteLength(data),
          })
          .end(data);
      } else {
        let data = JSON.stringify({ error: 'server failed' });
        response
          .writeHead(500, {
            'Content-Length': Buffer.byteLength(data),
          })
          .end(data);
      }
    }
  }
  const asd = response.getHeaders();
  console.log(asd);
});

server.listen(5000, () => {
  console.log('Server on http://localhost:5000');
});

// https://www.geeksforgeeks.org/node-js-response-writehead-method/
