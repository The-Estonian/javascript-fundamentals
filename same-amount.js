const sameAmount = (str, exp1, exp2) => {
  console.log(str);
  let regex1 = new RegExp(exp1, 'g'); // converting to global
  let regex2 = new RegExp(exp2, 'g'); // converting to global
  regex1 = str.match(regex1);
  regex2 = str.match(regex2);
  // console.log(regex1.length);
  // console.log(regex2.length);
  if (regex1 !== null && regex2 !== null) {
    return regex1.length === regex2.length;
  }
  return false;
};

// console.log(sameAmount('hellow', /h/, /w/));○
// console.log(sameAmount('hello', /h/, /w/));
// console.log(sameAmount('q', /q /, /qqqqqqq/));
console.log(
  sameAmount(
    'qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd',
    /q /,
    /qqqqqqq/
  )
);
// console.log(sameAmount('hello how are you', /l/, /e/));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global
