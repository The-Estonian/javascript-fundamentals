const retry = (count, callback) => {
  return async (...args) => {
    for (let i = 0; i <= count; i++) {
      try {
        // Use Promise.race to either resolve the callback or reject after a timeout
        const result = await Promise.race([
          callback(...args),
          new Promise(
            (_, reject) => setTimeout(() => reject(new Error()), 1000) //miks see on vajalik????
          ),
        ]);
        return result;
      } catch (error) {
        if (i === count) {
          // If the maximum number of retries is reached, throw an error
          throw error;
        }
      }
    }
  };
};

const timeout = (delay, callback) => {
  return async (...args) => {
    const callbackPromise = callback(...args);

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), delay)
    );

    try {
      const result = await Promise.race([callbackPromise, timeoutPromise]);
      return result;
    } catch (error) {
      throw error;
    }
  };
};

const ctx = {
  r: Math.random().toString(36).slice(2),
  failNTimes:
    (n) =>
    async (...v) =>
      --n < 0 ? v : Promise.reject(Error(`x:${v}`)),
  delayed:
    (delay) =>
    (...v) =>
      new Promise((s) => setTimeout(s, delay, v)),
};

console.log(retry(0, ctx.failNTimes(0))(ctx.r));
console.log(ctx.r);
