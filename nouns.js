const pronoun = (str) => {
  const strReg = str.replace(/,/g, ' ');
  const arr = strReg.split('\n').join(' ').split(' ');
  const pronounArr = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
  const megaObject = {};
  for (let x = 0; x < arr.length; x++) {
    arr[x] = arr[x].toLowerCase();
    if (arr[x] === 'i') {
      if (!megaObject.hasOwnProperty('i')) {
        let words = pronounArr.includes(arr[x + 1]) ? [] : [arr[x + 1]];
        megaObject['i'] = { word: words, count: 1 };
      } else {
        let words = megaObject.i.word;
        let counter = megaObject.i.count;
        if (!pronounArr.includes(arr[x + 1])) {
          words.push(arr[x + 1]);
        }
        counter++;
        megaObject['i'] = { word: words, count: counter };
      }
    }

    if (arr[x] === 'you') {
      if (!megaObject.hasOwnProperty('you')) {
        let words = pronounArr.includes(arr[x + 1])
          ? []
          : arr[x + 1] === undefined
          ? []
          : [arr[x + 1]];
        megaObject['you'] = { word: words, count: 1 };
      } else {
        let words = megaObject.you.word;
        let counter = megaObject.you.count;
        if (!pronounArr.includes(arr[x + 1])) {
          if (arr[x + 1] !== undefined) {
            words.push(arr[x + 1]);
          }
        }
        counter++;
        megaObject['you'] = { word: words, count: counter };
      }
    }
    if (arr[x] === 'he') {
      if (!megaObject.hasOwnProperty('he')) {
        let words = pronounArr.includes(arr[x + 1]) ? [] : [arr[x + 1]];
        megaObject['he'] = { word: words, count: 1 };
      } else {
        let words = megaObject.he.word;
        let counter = megaObject.he.count;
        if (!pronounArr.includes(arr[x + 1])) {
          words.push(arr[x + 1]);
        }
        counter++;
        megaObject['he'] = { word: words, count: counter };
      }
    }
    if (arr[x] === 'she') {
      if (!megaObject.hasOwnProperty('she')) {
        let words = pronounArr.includes(arr[x + 1]) ? [] : [arr[x + 1]];
        megaObject['she'] = { word: words, count: 1 };
      } else {
        let words = megaObject.she.word;
        let counter = megaObject.she.count;
        if (!pronounArr.includes(arr[x + 1])) {
          words.push(arr[x + 1]);
        }
        counter++;
        megaObject['she'] = { word: words, count: counter };
      }
    }
    if (arr[x] === 'it') {
      if (!megaObject.hasOwnProperty('it')) {
        let words = pronounArr.includes(arr[x + 1]) ? [] : [arr[x + 1]];
        megaObject['it'] = { word: words, count: 1 };
      } else {
        let words = megaObject.it.word;
        let counter = megaObject.it.count;
        if (!pronounArr.includes(arr[x + 1])) {
          words.push(arr[x + 1]);
        }
        counter++;
        megaObject['it'] = { word: words, count: counter };
      }
    }
    if (arr[x] === 'they') {
      if (!megaObject.hasOwnProperty('they')) {
        let words = pronounArr.includes(arr[x + 1]) ? [] : [arr[x + 1]];
        megaObject['they'] = { word: words, count: 1 };
      } else {
        let words = megaObject.they.word;
        let counter = megaObject.they.count;
        if (!pronounArr.includes(arr[x + 1])) {
          words.push(arr[x + 1]);
        }
        counter++;
        megaObject['they'] = { word: words, count: counter };
      }
    }

    if (arr[x] === 'we') {
      if (!megaObject.hasOwnProperty('we')) {
        let words = pronounArr.includes(arr[x + 1]) ? [] : [arr[x + 1]];
        megaObject['we'] = { word: words, count: 1 };
      } else {
        let words = megaObject.we.word;
        let counter = megaObject.we.count;
        if (!pronounArr.includes(arr[x + 1])) {
          words.push(arr[x + 1]);
        }
        counter++;
        megaObject['we'] = { word: words, count: counter };
      }
    }
  }
  return megaObject;
};

// // Object.prototype.hasOwnProperty();
// // arr.includes(prononunsArr)

// console.log(
//   pronoun(
//     'Using Array Destructuring, you you can iterate through objects easily.'
//   )
// );
// // { you: { word: [ 'can' ], count: 2 } }
// console.log(pronoun('If he you want to buy something you have to pay.'));

// // {
// //   he: { word: [], count: 1}
// //   you: { word: [ 'want', 'have' ], count: 2 }
// // }

// console.log(
//   pronoun(`Your reducer function's returned value is assigned to the accumulator,
// whose value is remembered across each iteration throughout the array and
// ultimately becomes the final, single resulting value.`)
// ); // ...

// console.log(
//   pronoun(`The seal method seals an object, preventing new properties from being
//  added to it and marking all existing properties as non-configurable. Values of present
// properties can still be changed as long as they are writable.`)
// );

// // {
// //       it: { word: ['and'], count: 1 },
// //       they: { word: ['are'], count: 1 },
// //     }

// console.log(
//   pronoun('I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go')
// );
// // // // );
// //  i: { word: ['buy', 'to'], count: 2 },
// //you: { word: ['buy', 'go'], count: 2 },
// // it: { word: ['have', 'buys', 'is'], count: 3 }//

// console.log(pronoun('we will rock you'));

// {
//     we: { word: ['will'], count: 1 },
//     you: { word: [], count: 1 },
//   }
