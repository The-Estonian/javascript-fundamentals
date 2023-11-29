const split = (str, trigger) => {
  var returnArray = [];
  var trailingStr = '';
  for (let index = 0; index < str.length; ) {
    if (str.slice(index, index + trigger.length) == trigger) {
      returnArray.push(trailingStr);
      trailingStr = '';
      index += trigger.length;
      continue;
    }
    trailingStr += str[index];
    index++;
  }
  returnArray.push(trailingStr);
  return returnArray;
};

const join = (arr, trigger) => {
  if (trigger == null) {
    trigger = ',';
  }
  var returnString = '';
  for (let index = 0; index < arr.length; index++) {
    if (index != 0) {
      returnString += trigger;
    }
    returnString += arr[index];
  }
  return returnString;
};

// console.log(split('abxcdxefxgh', 'x'));
// console.log(join(['ab', 'cd', 'ef', 'gh'], ':'));
// console.log(split('ggg - ddd - b', ' - '));
// console.log(split('a b c', ' '));
// console.log(split('ee,ff,g,', ','));
// console.log(join(['ee', 'ff', 'g', ''], ','));
// console.log(join(['ggg', 'ddd', 'b'], ' - '));
// console.log(join(['a', 'b', 'c'], ' '));

// console.log(split('a b c', ' ') == ['a', 'b', 'c']);
// console.log(split('ggg - ddd - b', ' - ') == ['ggg', 'ddd', 'b']);
// console.log(split('ee,ff,g,', ',') == ['ee', 'ff', 'g', '']);
// console.log(join(['ee', 'ff', 'g', ''], ',') === 'ee,ff,g,');
// console.log(join(['ggg', 'ddd', 'b'], ' - ') === 'ggg - ddd - b');
// console.log(join(['a', 'b', 'c'], ' ') === 'a b c');
