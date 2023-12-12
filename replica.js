const replica = (target, ...sources) => {
  if (sources.length < 2) {
    for (const [key, value] of Object.entries(sources[0])) {
      if (target.hasOwnProperty(key)) {
        if (Array.isArray(value) || Array.isArray(target[key])) {
          target[key] = value;
        } else if (typeof value !== 'object') {
          target[key] = value;
        } else {
          target[key] = Object.assign(target[key], value);
        }
      } else {
        target[key] = value;
      }
    }
    return target;
  }
  sources.forEach((e) => {
    for (const [key, value] of Object.entries(e)) {
      if (target.hasOwnProperty(key)) {
        console.log(target[key]);
        target[key] = Object.assign(
          target[key],
          Array.isArray(value) ? value[0] : value
        );
      } else {
        target[key] = value;
      }
    }
  });
  return target;
};
// console.log(replica({ a: [1, 2, 4] }, { a: { b: [4] } }).a); // { b: [4] }

// console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } })); // { a: { b: 1, c: 23 } }
// console.log(replica({ con: console.log }, { reg: /hello/ }));
// console.log(
//   replica(
//     {},
//     Object.freeze({ line: 'Replicants are like any other machine' }),
//     Object.freeze({ author: 'Rich' })
//   )
// );
// console.log(replica({ a: 4 }, { a: { b: 1 } }).a.b); // 1
// console.log(replica({ a: 2 }, { a: [4] })); // [4]
// console.log(Object.assign({ a: [1, 2, 4] }, { a: { b: [4] } }).a);
// console.log(Object.assign(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }))); //{ a: { b: 1, c: 23 } }
