const all = async (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object') {
      obj[key] = await value;
    }
  }
  console.log(obj);
  return await obj;
};

// console.log(all({})); //{}
// console.log(all({ a: 1, b: true })); //{ a: 1, b: true }
// console.log(
//   all({
//     a: Promise.resolve(1),
//     b: Promise.resolve(true),
//   })
// ); //{ a: 1, b: true }
// let ctx = Math.random();
// console.log(
//   all(
//     Object.freeze({
//       a: Promise.resolve(ctx).then((v) => v + 1),
//       b: ctx,
//     })
//   )
// ); // { a: ctx + 1, b: ctx }
