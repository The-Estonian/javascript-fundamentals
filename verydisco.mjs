let enteredArg = process.argv[2];
let argArr = enteredArg.split(' ');
for (let i = 0; i < argArr.length; i++) {
  let middleNum = Math.ceil(argArr[i].length / 2);
  argArr[i] = argArr[i].slice(middleNum) + argArr[i].slice(0, middleNum);
}
console.log(argArr.join(' '));
