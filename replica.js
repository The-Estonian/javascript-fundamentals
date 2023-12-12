const replica = (target, ...sources) => {
  return Object.assign(target, ...sources);
};

// console.log(replica({ con: console.log }, { reg: /hello/ }));

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
