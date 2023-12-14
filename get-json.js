const getJSON = async (path, params) => {
  let url =
    path +
    '?' +
    JSON.stringify(params)
      .replace(/[{"}]/g, '')
      .replace(/:/g, '=')
      .replace(/ /g, '+')
      .replace(/,/g, '&');
  //   console.log(url);

  const returner = await fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    // console.log(res.ok);
    // console.log(res.status);
    // console.log(await res.json());
    // console.log(await res.text());
    return res.json();
  });

  if (returner.error) {
    throw new Error(returner.error);
  }

  return returner.data;
};
// '/test', { query: 'hello world', b: 5 })
// '/test?query=hello+world&b=5';

// const fakeFetch = async ({ data, error, ...opts } = {}) => ({
//   ok: !opts.status,
//   type: 'basic',
//   status: 200,
//   statusText: 'OK',
//   json: async () => ({ data, error }),
//   text: async () => JSON.stringify({ data, error }),
//   ...opts,
// });

// // let url;
// fetch = async (arg) => fakeFetch({ url: (url = arg) });
// console.log(getJSON('/test', { query: 'hello world', b: 5 }));

// const data = Math.random();
// console.log('RANDOM', data);
// fetch = (url) => fakeFetch({ url, data });
// console.log(getJSON('/', { q: 1 }));

// const getJSON = async (path, params) => {
//   let url =
//     path +
//     '?' +
//     JSON.stringify(params)
//       .replace(/[{"}]/g, '')
//       .replace(/:/g, '=')
//       .replace(/ /g, '+')
//       .replace(/,/g, '&');

//   const result = await fetch(url).then((res) => {
//     // console.log(res.ok)
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }
//     // console.log(res.json())
//     return res.json();
//   });
//   if (result.error) {
//     throw new Error(result.error);
//   }
//   // console.log(result.data)
//   return result.data;
// };
