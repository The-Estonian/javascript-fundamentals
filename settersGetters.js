const get = (src, path) => {
  let loops = path.split('.');
  let returnObj = src;
  try {
    for (let index = 0; index < loops.length; index++) {
      returnObj = returnObj[loops[index]];
    }
    return returnObj;
  } catch {
    return undefined;
  }
};

const src = { nested: { key: 'peekaboo' } };
const path = 'nx.nx';
console.log(get(src, path));
