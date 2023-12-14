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
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('timeout')), 80)
  );

  const getWeb = queryServers('web', q);
  const getImage = queryServers('image', q);
  const getVideo = queryServers('video', q);

  try {
    const waitingAllPromises = await Promise.race([
      Promise.all([getWeb, getImage, getVideo]),
      timeout,
    ]);
    // console.log(waitingAllPromises)
    return {
      web: waitingAllPromises[0],
      image: waitingAllPromises[1],
      video: waitingAllPromises[2],
    };
  } catch (error) {
    throw error;
  }
};

// let getJSON = async (url) => url;
// setTimings = (timings) =>
//   (getJSON = (url) =>
//     new Promise((s) =>
//       setTimeout(s, timings[url.split(/\/([^?]+)?/)[1]] || 0, url)
//     ));
// // setTimings({ web_backup: 3, image: 2, video_backup: 4 });
// setTimings({ web: 85, web_backup: 99 });
// console.log(gougleSearch('kxo3h6iilqj'));
// queryServers('web', 'asd');
// queryServers('image', 'asd');
// queryServers('video', 'asd');

// return the fastest of those 2 calls:
// -> getJSON('/pouet?q=hello+world')
// -> getJSON('/pouet_backup?q=hello+world')
