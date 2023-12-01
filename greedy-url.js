const getURL = (url) => {
  var cleanURL = url.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return cleanURL;
};

const greedyQuery = (url) => {
  var allURLs = getURL(url);
  //   console.log(allURLs);
  const newURLArr = [];
  for (let i = 0; i < allURLs.length; i++) {
    const matches = allURLs[i].match(/[?&]([^=]+)=([^&]+)/g);
    // if (matches !== null && matches.length > 1) {
    //     console.log(matches.length);
    // }
    if (matches !== null && matches.length > 1) {
      newURLArr.push(allURLs[i]);
    }
  }
  return newURLArr;
};

const notSoGreedy = (url) => {
  var allURLs = getURL(url);
  //   console.log(allURLs);
  const newURLArr = [];
  for (let i = 0; i < allURLs.length; i++) {
    const matches = allURLs[i].match(/[?&]([^=]+)=([^&]+)/g);
    // if (matches !== null && matches.length > 1) {
    //     console.log(matches.length);
    // }
    if (matches !== null && matches.length >= 2 && matches.length <= 3) {
      newURLArr.push(allURLs[i]);
    }
  }
  return newURLArr;
};

// testurl =
//   'qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you';

// console.log(getURL(testurl));
// console.log(greedyQuery(testurl));
// console.log(notSoGreedy(testurl));
