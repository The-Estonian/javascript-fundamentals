import * as http from 'node:http';
import * as fs from 'fs';

let server = http.createServer((request, response) => {
  const { method, url, headers } = request;
  let data;
  let statusC;
  if (method === 'GET' && request.url !== '/favicon.ico') {
    try {
      let fileData = fs.readFileSync('./guests' + request.url + '.json');
      statusC = 200;
      data = fileData.toString('utf8');
      console.log(data);
    } catch (err) {
      // console.log(err);
      if (err.code == 'ENOENT') {
        statusC = 404;
        data = JSON.stringify({ error: 'guest not found' });
      } else {
        statusC = 500;
        data = JSON.stringify({ error: 'server failed' });
      }
    }
  }
  // response.statusCode = statusC;
  response.writeHead(statusC, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
  });
  response.end();
});
console.log('Server on http://localhost:5000');
server.listen(5000);
