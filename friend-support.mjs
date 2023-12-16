import * as http from 'node:http';
import * as fs from 'fs';

let server = http.createServer(function (req, res) {
  try {
    // const allFileNames = fs.readdirSync('./guests');
    // for (let i = 0; i < allFileNames.length; i++) {
    //   if (req.url == '/' + allFileNames[i].replace('.json', '')) {
    const dataJSON = fs
      .readFileSync('./guests' + req.url + '.json')
      .toString('utf8');
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.write(dataJSON);
    res.end();
    //   }
    // }
  } catch (err) {
    // console.log(err);
    if (err.code == 'ENOENT') {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 404;
      res.end(Buffer.from(JSON.stringify({ error: 'guest not found' })));
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 500;
      res.end(Buffer.from(JSON.stringify({ error: 'server failed' })));
    }
  }
});
console.log('Server on http://localhost:5000');
server.listen(5000);
