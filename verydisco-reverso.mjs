import * as fs from 'fs';

let enteredFile = process.argv[2];

fs.readFile(enteredFile, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  }
  let argArr = data.split(' ');
  for (let i = 0; i < argArr.length; i++) {
    let middleNum = Math.floor(argArr[i].length / 2);
    argArr[i] = argArr[i].slice(middleNum) + argArr[i].slice(0, middleNum);
  }
  console.log(argArr.join(' '));
});
