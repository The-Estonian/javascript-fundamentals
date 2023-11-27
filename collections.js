const arrToSet = (arr) => {
  return new Set(arr);
};

const arrToStr = (arr) => {
  return arr.toString().replaceAll(',', '');
};

const setToArr = (arr) => {
  return Array.from(arr);
};

const setToStr = (arr) => {
  return arrToStr(setToArr(arr));
};

const strToArr = (str) => {
  return str.split('');
};

const strToSet = (str) => {
  return arrToSet(strToArr(str));
};

const mapToObj = (dict) => {
  return Object.fromEntries(dict);
};

const objToArr = (object) => {
  return new Map(Object.values(object));
};

const objToMap = (object) => {
  return new Map(Object.entries(object));
};

const arrToObj = (arr) => {
  return Object.assign({}, arr);
};

const strToObj = (str) => {
  return Object.assign({}, strToArr(str));
};

const superTypeOf = (n) => {
  if (n instanceof Map) {
    return 'Map';
  } else if (n instanceof Set) {
    return 'Set';
  } else if (typeof n === 'object') {
    return 'Object';
  } else if (typeof n === 'string') {
    return 'String';
  } else if (typeof n === 'number') {
    return 'Number';
  } else if (Array.isArray(n)) {
    return 'Array';
  } else if (n === null) {
    return 'null';
  } else if (n === undefined) {
    return 'undefined';
  } else if (typeof n === 'function') {
    return 'Function';
  }
};
