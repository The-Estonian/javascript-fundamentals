// const flat = (arr, depth) => {
//   let newArray = [];
//   if (depth == 1) {
//     return newArray;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       newArray = newArray.concat(flat(arr[i]), depth - 1);
//     } else {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// };

// let items = [0, 1, [2, [3, [4, 5]]]];

// console.log(flat([0, 1, [2, [3, [4, 5]]]]));
let trigger = '';
console.log('hello'.slice(0, 1+trigger.length) === trigger);
