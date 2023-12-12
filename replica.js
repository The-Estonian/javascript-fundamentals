const replica = (target, sources) => {
  return Object.assign(target, sources);
};

console.log(replica({ con: console.log }, { reg: /hello/ }));

// {
//   con: console.log,
//   reg: /hello/,
// }