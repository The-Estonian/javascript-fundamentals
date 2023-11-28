const blockChain = (data, prev) => {
  if (prev == null) {
    prev = { index: 0, hash: '0' };
  }
  return {
    index: prev.index + 1,
    hash: hashCode((prev.index + 1).toString() + prev.hash + JSON.stringify(data)),
    data: data,
    prev: prev,
    chain: (data) => {
      return blockChain(data, this);
    },
  };
};

// must return new object with those stats or null version
// index provided by script, needs to be incremented after each block
// hash: hashCOde is func provided by script, needs index.string() prev.hash? and data stringify? To generate unique hash key for the block that has info about previous and next block
// data: input data
// prev: previous node
// chain: func for recursion for Next(data)

// const hashCode = (str) =>
//   (
//     [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
//   ).toString(36);

// let first = blockChain({ a: 1 });
// console.log(first.hash);
