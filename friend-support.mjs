import * as http from 'node:http';

import * as fs from 'fs';

let server = http.createServer(function (req, res) {
  try {
    const allFileNames = fs.readdirSync('./guests');
    let trigger = true;
    for (let i = 0; i < allFileNames.length; i++) {
      if (req.url == '/' + allFileNames[i].replace('.json', '')) {
        const dataJSON = fs
          .readFileSync('./guests/' + allFileNames[i])
          .toString('utf8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(dataJSON));
        res.end();
        trigger = false;
        break;
      }
    }
    // error defined as guest not found
    if (trigger) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify({ error: 'guest not found' }) + '\n');
      res.end();
    }
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ error: 'server failed' }) + '\n');
    res.end();
  }
});
console.log('Server on http://localhost:5000');
server.listen(5000);
