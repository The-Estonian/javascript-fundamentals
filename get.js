const get = (src, path) => {
  let loops = path.split('.');
  let returnObj = src;
  for (let index = 0; index < loops.length; index++) {
    returnObj = returnObj[loops[index]];
  }
  return returnObj;
};

// const src = { nested: { key: 'peekaboo' } };
// const path = 'nested.key';
// console.log(get(src, path));
