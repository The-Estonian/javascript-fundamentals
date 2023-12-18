import * as http from 'node:http';
import * as fs from 'fs';
import { Buffer } from 'node:buffer';

const server = http.createServer((request, response) => {
  const { method, url } = request;
  response.setHeader('Content-Type', 'application/json');

  if (method === 'POST' && url !== '/favicon.ico') {
    try {
      const body = [];
      request.on('data', (chunk) => {
        body.push(chunk);
      });

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
