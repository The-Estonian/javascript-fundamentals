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

  let getFirst = await getJSON(url1);
  let getSecond = await getJSON(url2);
  return await Promise.race([getFirst, getSecond]);
};

const gougleSearch = (q) => {
  const getWeb = queryServers(web, q);
  const getImage = queryServers(image, q);
  const getVideo = queryServers(video, q);
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('timeout')), 80)
  );

  Promise.all([getWeb, getImage, , getVideo, timeoutPromise]).then((data) => {
    return {
      web: getWeb,
      image: getImage,
      video: getVideo,
    };
  });
};

// queryServers('pouet', 'hello+world');

// return the fastest of those 2 calls:
// -> getJSON('/pouet?q=hello+world')
// -> getJSON('/pouet_backup?q=hello+world')
