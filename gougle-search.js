const queryServers = (serverName, q) => {
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
  console.log(url1);
  console.log(url2);
};

const gougleSearch = (q) => {
  const getWeb = queryServers(web, q);
  const getImage = queryServers(image, q);
  const getVideo = queryServers(video, q);
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('timeout')), 80)
  );

  Promise.race([getWeb, getImage, , getVideo, timeoutPromise]).then((data) => {
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
