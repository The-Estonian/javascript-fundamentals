const testString1 = 'Well hi';
const testString2 = 'Well h';
const testString3 = 'hi how are hi you?';
const testString4 = 'how are hi you?';
const testString5 = 'how are hi you?hi';
const testString6 = 'how are hi you?';
const testString7 = 'hihow are hi you?hi';
const testString8 = 'how are hi you?';

const normal = /hi/;
let begin = /^hi/;
let end = /hi$/;
let beginEnd = /^hi.*hi$/;
console.log(testString1.match(normal));
console.log(testString2.match(normal));
console.log(testString3.match(begin));
console.log(testString4.match(begin));
console.log(testString5.match(end));
console.log(testString6.match(end));
console.log(testString7.match(beginEnd));
console.log(testString8.match(beginEnd));
