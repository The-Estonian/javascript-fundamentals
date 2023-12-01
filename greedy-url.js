const getURL = (url) => {
  var cleanURL = url.match(
    /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?(?:[-a-zA-Z0-9()\[\],@:%_\+.~#?&\/=]*)/g
  );
  return cleanURL;
};

const greedyQuery = (url) => {
  var allURLs = getURL(url);
  const newURLArr = [];
  for (let i = 0; i < allURLs.length; i++) {
    const matches = allURLs[i].match(/[?&]([^=]+)=([^&]+)/g);
    if (matches !== null && matches.length > 1) {
      newURLArr.push(allURLs[i]);
    }
  }
  return newURLArr;
};

const notSoGreedy = (url) => {
  var allURLs = getURL(url);
  const newURLArr = [];
  for (let i = 0; i < allURLs.length; i++) {
    const matches = allURLs[i].match(/[?&]([^=]+)=([^&]+)/g);
    if (matches !== null && matches.length >= 2 && matches.length <= 3) {
      newURLArr.push(allURLs[i]);
    }
  }
  return newURLArr;
};

// testurl =
//   'qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you';
// testurl2 = 'http://www_example.com/';
// console.log(getURL(testurl));
// console.log(greedyQuery(testurl));
// console.log(notSoGreedy(testurl));
// console.log(getURL(testurl2));
