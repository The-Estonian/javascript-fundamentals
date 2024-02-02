// Take a relative or absolute directory path as argument from the command line.
// Read this directory path.
// Get the number of entries in this directory.
// Print the result in console.

import { readdir } from 'node:fs/promises';

let enteredDir;
if (process.argv.length < 3) {
  enteredDir = './guests';
} else {
  enteredDir = process.argv[2];
}

const files = await readdir(enteredDir);
let counter = files.length;
console.log(counter);
// try {
//   const files = await readdir(enteredDir);
//   let counter = 0;
//   for (let i = 0; i < files.length; i++) {
//     counter++;
//   }
//   console.log(counter);
// } catch (err) {
//   console.log(err);
// }

// node tell-me-how-many.mjs
// node tell-me-how-many.mjs guests
// node tell-me-how-many.mjs ./guests
// node tell-me-how-many.mjs /home/kooduser/koodJohvi/piscine-js/tell-me-how-many/guests
