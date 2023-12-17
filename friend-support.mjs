import * as http from 'node:http';
import * as fs from 'fs';

let server = http.createServer((request, response) => {
  const { method, url, headers } = request;
  if (method === 'GET' && request.url !== '/favicon.ico') {
    response.setHeader('Content-Type', 'application/json');
    try {
      fs.readFile('./guests' + request.url + '.json', 'utf8', (err, data) => {
        if (err) {
          console.log(err);
        }
        response.statusCode = 200;
        try {
          response.write(data);
        } catch (err) {
          response.statusCode = 404;
          response.write(
            Buffer.from(JSON.stringify({ error: 'guest not found' }))
          );
          response.end();
        }
        response.end();
      });
    } catch (err) {
      response.statusCode = 500;
      response.write(JSON.stringify({ error: 'server failed' }), 'utf8');
      response.end();
    }
  }
});
console.log('Server on http://localhost:5000');
server.listen(5000);
