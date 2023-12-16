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
        res.write(dataJSON);
        res.end();
        trigger = false;
        break;
      }
    }
    // error defined as guest not found
    if (trigger) {
      res.statusCode = 404;
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.write(Buffer.from(JSON.stringify({ error: 'guest not found' })));
      res.end();
    }
  } catch (err) {
    // console.log(err);
    res.statusCode = 500;
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.write(Buffer.from(JSON.stringify({ error: 'server failed' })));
    res.end();
  }
});
console.log('Server on http://localhost:5000');
server.listen(5000);

// +   body: '{"message":"kps8i"}',
// -   body: {
// -     message: 'kps8i'
// -   }
