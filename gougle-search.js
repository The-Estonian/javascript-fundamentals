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
  return result;
};

const gougleSearch = async (q) => {
  const getWeb = await queryServers('web', q);
  const getImage = await queryServers('image', q);
  const getVideo = await queryServers('video', q);
  //   const timeoutPromise = new Promise((_, reject) =>
  //     setTimeout(() => reject(new Error('timeout')), 80)
  //   );

  const waitingAllPromises = await Promise.all([
    getWeb,
    getImage,
    getVideo,
  ]).catch((err) => new Error('timeout'));
  console.log(waitingAllPromises);
  return {
    web: waitingAllPromises[0],
    image: waitingAllPromises[1],
    video: waitingAllPromises[2],
  };
};

// let getJSON = async (url) => url;
// setTimings = (timings) =>
//   (getJSON = (url) =>
//     new Promise((s) =>
//       setTimeout(s, timings[url.split(/\/([^?]+)?/)[1]] || 0, url)
//     ));
// setTimings({ web_backup: 3, image: 2, video_backup: 4 });
// console.log(gougleSearch('kxo3h6iilqj'));
// queryServers('web', 'asd');
// queryServers('image', 'asd');
// queryServers('video', 'asd');

// return the fastest of those 2 calls:
// -> getJSON('/pouet?q=hello+world')
// -> getJSON('/pouet_backup?q=hello+world')
