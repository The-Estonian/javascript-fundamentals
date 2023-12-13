const debounce = (func, delay) => {
  let timer;
  return function () {
    let self = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(self, args);
    }, delay);
  };
};

const opDebounce = (func, delay, leading = false) => {
  let timer;

  return function (...args) {
    if (leading && !timer) {
      func.apply(this, args);
    }

    clearTimeout(timer);

    timer = setTimeout(() => {
      if (!leading) {
        func.apply(this, args);
      }
      timer = null;
    }, delay);
  };
};
// const add = (arr, el) => arr.push(el);

// const setIntervalSync = (fn, delay, limit = 0) => new Promise(s => {
//   let count = 1;
//   const start = Date.now();

//   const loop = () => {
//     const tick = Date.now();
//     const elapsed = tick - start;

//     if (elapsed > count * delay) {
//       fn();
//       count++;
//     }

//     elapsed < limit
//       ? setTimeout(loop)
//       : s();
//   };

//   setTimeout(loop);
// });

// const run = async (callback, { delay, count }) => {
//   const arr = [];
//   await setIntervalSync(() => callback(arr, 1), delay, count * delay + 5);
//   return arr.length;
// };

// const executeRuns = async () => {
//   console.log(await Promise.all([
//     run(opDebounce(add, 40), { delay: 20, count: 5 }),
//     run(opDebounce(add, 40), { delay: 20, count: 2 }),
//   ]))
// };

// executeRuns();
