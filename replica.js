const isObject = (item) => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

const replica = (target, ...sources) => {
  if (!sources.length) return target;
  if (!isObject(sources)) {
    return Object.assign(target, ...sources);
  }
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        replica(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return replica(target, ...sources);
};
// Object.prototype.hasOwnProperty();
console.log(replica({ con: console.log }, { reg: /hello/ }));

// {
//   con: console.log,
//   reg: /hello/,
// }

// console.log(
//   replica(
//     {},
//     Object.freeze({ line: 'Replicants are like any other machine' }),
//     Object.freeze({ author: 'Rich' })
//   )
// );

// { line: 'Replicants are like any other machine', author: 'Rich' }

// console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }));

// { a: { b: 1, c: 23 } }
