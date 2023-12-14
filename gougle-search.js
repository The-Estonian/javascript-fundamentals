const queryServers = async (serverName, q) => {
  let url1 =
    '/' +
    serverName +
    '?q=' +
    JSON.stringify(q)
      .replace(/[{"}]/g, '')
      .replace(/:/g, '=')
      .replace(/ /g, '+')
      .replace(/,/g, '&');
  let url2 =
    '/' +
    serverName +
    '_backup' +
    '?q=' +
    JSON.stringify(q)
      .replace(/[{"}]/g, '')
      .replace(/:/g, '=')
      .replace(/ /g, '+')
      .replace(/,/g, '&');

  let getFirst = getJSON(url1);
  let getSecond = getJSON(url2);
  const result = await Promise.race([getFirst, getSecond]);
  console.log(result);
  return result;
};

const gougleSearch = (q) => {
  const getWeb = queryServers('web', q);
  const getImage = queryServers('image', q);
  const getVideo = queryServers('video', q);
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('timeout')), 80)
  );

  Promise.all([getWeb, getImage, , getVideo, timeoutPromise])
    .then((data) => {
      console.log({
        web: data[0],
        image: data[1],
        video: data[2],
      });
      return {
        web: data[0],
        image: data[1],
        video: data[2],
      };
    })
    .catch((err) => new Error('timeout'));
};

// let getJSON = async (url) => url;
// setTimings = (timings) =>
//   (getJSON = (url) =>
//     new Promise((s) =>
//       setTimeout(s, timings[url.split(/\/([^?]+)?/)[1]] || 0, url)
//     ));
// setTimings({ web_backup: 3, image: 2, video_backup: 4 });
// queryServers('web', 'asd');
// queryServers('image', 'asd');
// queryServers('video', 'asd');
// gougleSearch('asd');

// return the fastest of those 2 calls:
// -> getJSON('/pouet?q=hello+world')
// -> getJSON('/pouet_backup?q=hello+world')
