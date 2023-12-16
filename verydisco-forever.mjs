import * as fs from 'fs';
// import * as fs from 'fs';
// const content = 'Some content!';

// fs.writeFile('/Users/joe/test.txt', content, (err) => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });

// fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, (err) => {});

// r+	reading and writing
// w+	reading and writing pointer at the beginning of the file
// a	writing and writing pointer at the end of the file
// a+	reading and writing pointer at the end of the file
// verydisco-forever.txt;
let enteredArg = process.argv[2];
let argArr = enteredArg.split(' ');
for (let i = 0; i < argArr.length; i++) {
  let middleNum = Math.ceil(argArr[i].length / 2);
  argArr[i] = argArr[i].slice(middleNum) + argArr[i].slice(0, middleNum);
}

fs.writeFile('./verydisco-forever.txt', argArr.join(' '), (err) => {
  if (err) {
    console.log(err);
  }
});
