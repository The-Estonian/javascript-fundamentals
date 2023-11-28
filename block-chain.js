const blockChain = (data, prev) => {
  if (prev == null) {
    prev = { index: 0, hash: '0' };
  }
  return {
    index: prev.index + 1,
    hash: hashCode(
      (prev.index + 1).toString() + prev.hash + JSON.stringify(data)
    ),
    data: data,
    prev: prev,
    chain: function (data) {
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

// const first = blockChain({ a: 1 });
// console.log(first.index); //           -> 1
// console.log(first.data); //            -> { a: 1 }
// console.log(first.prev); //            -> { index: 0, hash: "0" }
// console.log(first.hash); //            -> '1103f27'
// console.log(hashCode('10{"a":1}')); // -> '1103f27'

// const second = first.chain({ hello: 'world' });
// console.log(second.hash); //                           -> '18drvvc'
// console.log(hashCode('21103f27{"hello":"world"}')); // -> '18drvvc'

// const chain = second
//   .chain({ value: 4455 })
//   .chain({ some: 'data' })
//   .chain({ cool: 'stuff' });

// const fork = second
//   .chain({ value: 335 })
//   .chain({ some: 'data' })
//   .chain({ cool: 'stuff' });

// console.log(chain.hash); //  -> '1qr3qfs'
// console.log(fork.hash); //   -> '1x9gsc1'
// console.log(chain.index); // -> 5
// console.log(fork.index); //  -> 5
