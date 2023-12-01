const vowelDots = (str) => {
  const vowels = /[aeiouAEIOU]/g;
  let middleSticher = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(vowels)) {
      middleSticher += str[i].match(vowels)[0] + '.';
    } else {
      middleSticher += str[i];
    }
  }
  return middleSticher;
};

// console.log(vowelDots('Hello there!'));
