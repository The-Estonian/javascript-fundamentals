import * as http from 'http';
import { writeFile } from 'fs/promises';
import { Buffer } from 'node:buffer';

// Create a local server to receive data from
const server = http.createServer((request, response) => {
  let statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  const errHandler = (err, statusCode, message) => {
    let bodyRes = JSON.stringify({ error: message });
    response
      .writeHead(statusCode, {
        'Content-Length': Buffer.byteLength(bodyRes),
      })
      .end(bodyRes);
  };
  let auth = basicAuth(request);
  //console.log("auth", auth);
  switch (auth) {
    case 'no credentials':
      errHandler('no credentials found', 401, 'no credentials found');
      return;
    case 'wrong credentials':
      errHandler('wrong credentials', 401, 'Authorization Required%');
      return;
  }
  let guest = request.url.slice(1);
  let fileName = `guests/${guest}.json`;
  let bodyReq = request.headers['body'];
  writeFile(fileName, bodyReq)
    .then(() => {
      let bodyRes = bodyReq;
      response.writeHead(200, {
        'Content-Length': Buffer.byteLength(bodyRes),
      });
      response.end(bodyRes);
    })
    .catch((err) => errHandler(err, 500, 'Server Error'));
});

function basicAuth(req) {
  // check for basic auth header
  if (
    !req.headers.authorization ||
    req.headers.authorization.indexOf('Basic ') === -1
  ) {
    return 'no credentials';
  }
  // verify auth credentials
  const base64Credentials = req.headers.authorization.split(' ')[1];
  const [username, password] = Buffer.from(base64Credentials, 'base64')
    .toString()
    .split(':');
  const users = ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'];
  if (users.includes(username) && password === 'abracadabra') {
    return 'ok';
  }
  return 'wrong credentials';
}

const port = 5000;
const host = 'localhost';

server.listen(port, host, () =>
  console.log(`Server is running on http://${host}:${port}`)
);
