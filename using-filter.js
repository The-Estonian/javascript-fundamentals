const filterShortStateName = (data) => {
  return data.filter((item) => {
    return item.length < 7;
  });
};

// console.log(filterShortStateName(['123456', 'abcdefgh']));

const filterStartVowel = (data) => {
  return data.filter((item) => {
    return (
      item[0] == 'a' ||
      item[0] == 'e' ||
      item[0] == 'i' ||
      item[0] == 'o' ||
      item[0] == 'u'
    );
  });
};

// console.log(filterStartVowel(['bash', 'aesh']));

const filter5Vowels = (data) => {
  return data.filter((item) => {
    let counter = 0;
    for (let i = 0; i < item.length; i++) {
      if (
        item[i] == 'a' ||
        item[i] == 'e' ||
        item[i] == 'i' ||
        item[i] == 'o' ||
        item[i] == 'u'
      ) {
        counter++;
      }
    }
    if (counter >= 5) {
      return true;
    }
    return false;
  });
};

// console.log(filter5Vowels(["aeiou", "aeioss", "aeioll", "aeiii"]));

const filter1DistinctVowel = (data) => {
  return data.filter((item) => {
    let middleman = '';
    for (let i = 0; i < item.length; i++) {
      if (
        item[i] == 'a' ||
        item[i] == 'e' ||
        item[i] == 'i' ||
        item[i] == 'o' ||
        item[i] == 'u'
      ) {
        if (middleman.length == 0) {
          middleman = item[i];
        } else {
          if (middleman != item[i]) {
            return false;
          }
        }
      }
    }
    return item;
  });
};

// console.log(
//   filter1DistinctVowel([
//     'aeiou',
//     'aeioss',
//     'aeioll',
//     'aeiii',
//     'asssss',
//     'papa',
//     'papao',
//   ])
// );

const multiFilter = (data) => {
  return data.filter((item) => {
    if (item.capital.length < 8) {
      return false;
    }
    if (
      item.name[0] == 'a' ||
      item.name[0] == 'e' ||
      item.name[0] == 'i' ||
      item.name[0] == 'o' ||
      item.name[0] == 'u'
    ) {
      return false;
    }
    if (item.region == 'South') {
      return false;
    }
    for (let i = 0; i < item.tag.length; i++) {
      if (
        item.tag[i] == 'a' ||
        item.name[i] == 'e' ||
        item.name[i] == 'i' ||
        item.name[i] == 'o' ||
        item.name[i] == 'u'
      ) {
        return true;
      }
    }
    return false;
  });
};

// console.log(
//   multiFilter([
//     { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
//     { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
//     {
//       tag: 'MO',
//       name: 'Missouri',
//       capital: 'Jefferson City',
//       region: 'Midwest',
//     },
//     {
//       tag: 'PA',
//       name: 'Pennsylvania',
//       capital: 'Harrisburg',
//       region: 'Northeast',
//     },
//     {
//       tag: 'RI',
//       name: 'Rhode Island',
//       capital: 'Providence',
//       region: 'Northeast',
//     },
//   ])
// );
