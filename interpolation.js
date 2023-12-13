const interpolation = ({ step, start, end, callback, duration }) => {
  const points = [];
  const distance = end - start;
  const realStep = distance / step;
  let currentStep = 0;

  const intervalId = setInterval(() => {
    const subArray = [];
    const currentXRaw = start + realStep * currentStep;
    const currentXWellDone = parseFloat(currentXRaw.toFixed(2));
    const currentY = (duration / step) * (currentStep + 1);

    subArray.push(currentXWellDone, currentY);
    points.push(subArray);

    callback(subArray);

    currentStep++;

    if (currentStep >= step) {
      clearInterval(intervalId);
    }
  }, duration / step);
};

// const run = async ({ step, start, end, duration, waitTime = 15 }) => {
//     let arr = []
//     const round = (nbr) => Math.round(nbr * 100) / 100
//     const callback = (el) =>
//       arr.push(Array.isArray(el) ? el.map(round) : round(el))
//     interpolation({ step, start, end, callback, duration })
//     await new Promise((s) => setTimeout(s, waitTime))
//     return arr
//   }

// const executeRuns = async () => {
//   console.log(await run({ step: 5, start: 0, end: 1, duration: 10 }))
// };

// executeRuns();
