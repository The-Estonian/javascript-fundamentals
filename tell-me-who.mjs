// Number. Lastname Firstname
import { readdir } from 'node:fs/promises';
let nameArray = [];
let enteredDir = process.argv[2];

const files = await readdir(enteredDir);
for (let i = 0; i < files.length; i++) {
  let [firstname, lastname] = files[i].replace('.json', '').split('_');
  // console.log(`${i + 1}. ${lastname} ${firstname}`)
  let formattedName = lastname + ' ' + firstname;
  nameArray.push(formattedName);
}
nameArray.sort();
for (let i = 0; i < nameArray.length; i++) {
  console.log(`${i + 1}. ${nameArray[i]}`);
}
