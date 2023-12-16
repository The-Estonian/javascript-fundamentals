import * as fs from 'fs';
import { Buffer } from 'node:buffer';
// let input = process.argv[2];

// input = 'abcdefgh';

// const encoded = Buffer.from(input, 'utf8').toString('base64');
// console.log(encoded);

// let decoded = Buffer.from(encoded, 'base64').toString('utf8'); // good
// console.log(decoded);

let inputFile;
let encoding = false;
let newFileName;
if (process.argv.length < 4) {
  console.error('more parameters plz');
  process.exit(1);
} else if (process.argv.length === 4) {
  inputFile = process.argv[2];
  if (process.argv[3] === 'encode') {
    encoding = true;
    newFileName = 'cypher.txt';
  } else {
    encoding = false;
    newFileName = 'clear.txt';
  }
} else {
  inputFile = process.argv[2];
  if (process.argv[3] === 'encode') {
    encoding = true;
    newFileName = 'cypher.txt';
  } else {
    encoding = false;
    newFileName = 'clear.txt';
  }
  newFileName = process.argv[4];
}

// got inputfile, encode/decode, outputfile
console.log(newFileName);
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  if (encoding) {
    fs.writeFile(
      './' + newFileName,
      Buffer.from(data, 'utf8').toString('base64'),
      { flag: 'w+' },
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  } else {
    fs.writeFile(
      './' + newFileName,
      Buffer.from(data, 'base64').toString('utf8'),
      { flag: 'w+' },
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  }
});
// filename encode filename=cypher.txt
// filename decode filename=clear.txt

// r+	reading and writing
// w+	reading and writing pointer at the beginning of the file
// a	writing and writing pointer at the end of the file
// a+	reading and writing pointer at the end of the file
