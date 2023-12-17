import * as http from 'node:http';
import * as fs from 'fs';
import { Buffer } from 'node:buffer';

let server = http.createServer((request, response) => {
  const { method, url, headers } = request;
  if (method === 'GET' && request.url !== '/favicon.ico') {
    response.setHeader('Content-Type', 'application/json');
    try {
      // server.kill();
      fs.readFile('./guests' + request.url + '.json', 'utf8', (err, data) => {
        if (err) {
          console.log(err);
        }
        try {
          response
            .writeHead(200, {
              'Content-Length': Buffer.byteLength(data),
            })
            .end(data);
        } catch (err) {
          let data = JSON.stringify({ error: 'guest not found' });
          response
            .writeHead(404, {
              'Content-Length': Buffer.byteLength(data),
            })
            .end(data);
        }
      });
    } catch (err) {
      let data = JSON.stringify({ error: 'server failed' });
      response
        .writeHead(500, {
          'Content-Length': Buffer.byteLength(data),
        })
        .end(data);
    }
  }
});
console.log('Server on http://localhost:5000');
server.listen(5000);

// https://www.geeksforgeeks.org/node-js-response-writehead-method/
