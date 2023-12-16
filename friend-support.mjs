import * as http from 'node:http';
import * as fs from 'fs';

let server = http.createServer(function (req, res) {
  try {
    const allFileNames = fs.readdirSync('./guests');
    for (let i = 0; i < allFileNames.length; i++) {
      if (req.url == '/' + allFileNames[i].replace('.json', '')) {
        const dataJSON = fs
          .readFileSync('./guests/' + allFileNames[i])
          .toString('utf8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(dataJSON);
        res.end();
        trigger = false;
        break;
      }
    }
  } catch (err) {
    console.log(err);
    if (err.code == 'ENOENT') {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(Buffer.byteLength(JSON.stringify({ error: 'guest not found' })));
    } else {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(Buffer.byteLength(JSON.stringify({ error: 'server failed' })));
    }
  }
});
console.log('Server on http://localhost:5000');
server.listen(5000);
