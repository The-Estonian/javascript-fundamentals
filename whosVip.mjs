// Number. Lastname Firstname
import { readdir } from 'node:fs/promises';
import * as fs from 'fs';
// const { readFileSync } = require('fs');

let nameArray = [];
let enteredDir;
if (process.argv.length < 3) {
  enteredDir = 'guests';
} else {
  enteredDir = process.argv[2];
}

const files = await readdir(enteredDir, (err, files) => {
  if (err) {
    files = [];
  }
});
for (let i = 0; i < files.length; i++) {
  let [firstname, lastname] = files[i].replace('.json', '').split('_');
  // console.log(`${i + 1}. ${lastname} ${firstname}`)
  let formattedName = lastname + ' ' + firstname;

  const dataJSON = fs.readFileSync(enteredDir + '/' + files[i]);
  let vipStatus = JSON.parse(dataJSON);
  if (vipStatus.answer === 'yes') {
    nameArray.push(formattedName);
  }
  //   console.log(vipStatus.answer);
}
nameArray.sort();
for (let i = 0; i < nameArray.length; i++) {
  nameArray[i] = i + 1 + '. ' + nameArray[i];
}

fs.writeFile('./vip.txt', nameArray.join('\n'), { flag: 'w+' }, (err) => {
  if (err) {
    console.log(err);
  }
});

// const files = [
//   ['Ubaid_Ballard.json', { answer: 'no' }],
//   ['Victoria_Chan.json', { answer: 'no' }],
//   ['Dominika_Mullen.json', { answer: 'no' }],
//   ['Heath_Denton.json', { answer: 'no' }],
//   ['Lilith_Hamilton.json', { answer: 'no' }],
// ];

// const { readFileSync } = require('fs');
// const data = readFileSync('./config.json');
// console.log(JSON.parse(data));

// r+	reading and writing
// w+	reading and writing pointer at the beginning of the file
// a	writing and writing pointer at the end of the file
// a+	reading and writing pointer at the end of the file
// testing
