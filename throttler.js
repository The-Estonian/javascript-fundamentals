const throttle = (fun, wait) => {
  var lastTime = 0;
  return function () {
    var now = Date.now();
    if (now - lastTime > wait) {
      fun.apply(this, arguments);
      lastTime = now;
    }
  };
};

const opThrottle = (
  func,
  delay,
  options = { leading: false, trailing: false }
) => {
  let timer = null,
    lastRan = null,
    trailingArgs = null;

  return function (...args) {
    if (timer) {
      //called within cooldown period
      lastRan = this; //update context
      trailingArgs = args; //save for later
      return;
    }

    if (options.leading) {
      // if leading
      func.call(this, ...args); //call the 1st instance
    } else {
      // else it's trailing
      lastRan = this; //update context
      trailingArgs = args; //save for later
    }

    const coolDownPeriodComplete = () => {
      if (options.trailing && trailingArgs) {
        // if trailing and the trailing args exist
        func.call(lastRan, ...trailingArgs); //invoke the instance with stored context "lastRan"
        lastRan = null; //reset the status of lastRan
        trailingArgs = null; //reset trailing arguments
        timer = setTimeout(coolDownPeriodComplete, delay); //clear the timout
      } else {
        timer = null; // reset timer
      }
    };

    timer = setTimeout(coolDownPeriodComplete, delay);
  };
};

// const add = (arr, el) => arr?.push(el)
// const run = (callback, callLimit, nbr) =>
//   new Promise((r) => {
//     let arr = []
//     let inter = setInterval(() => callback(arr, 1), callLimit)
//     setTimeout(() => {
//       clearInterval(inter)
//       r(arr.length)
//     }, callLimit * nbr)
//   })

//   const executeRuns = async () => {
//     console.log(await run(opThrottle(add, 26, { trailing: true }), 16, 4), 1);
// };

// executeRuns();
// console.log(await run(opThrottle(add, 15, { leading: true }), 10, 10), 5)
// console.log(await run(opThrottle(add, 26, { leading: true }), 16, 4), 2)
// console.log(await run(opThrottle(add, 10), 5, 2), 0);
// console.log(await run(opThrottle(add, 26, { trailing: true, leading: true }), 16, 4),
// 2);
