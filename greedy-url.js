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
    const matches = allURLs[i].match(
      /\?([-a-zA-Z0-9\[\],()@]*=[-a-zA-Z0-9\[\],()@]*&){2,255}([-a-zA-Z0-9\[\],()@]*=[-a-zA-Z0-9\[\],()@]*)/g
    );
    newURLArr.push(matches);
  }
  return newURLArr;
};

const notSoGreedy = (url) => {
  var allURLs = getURL(url);
  const newURLArr = [];
  for (let i = 0; i < allURLs.length; i++) {
    const matches = allURLs[i].match(
      /\?([-a-zA-Z0-9\[\],()@%]*=[-a-zA-Z0-9\[\],()@%]*&){1,2}([-a-zA-Z0-9\[\],()@%]*=[-a-zA-Z0-9\[\],()@%]*)$/g
    );
    {
      newURLArr.push(matches);
    }
    return newURLArr;
  }
};

// testurl =
//   'qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you';
// testurl2 = 'http://www_example.com/';
// var test3 =
//   'http://hummm/how?how=come&same=[123,21]&you=nextperson&id=123312&next=123DSAD&ok=true&notOk=true';
// console.log(getURL(testurl));
// console.log(greedyQuery(testurl));
// console.log(notSoGreedy(testurl));
// console.log(getURL(testurl2));
// console.log(greedyQuery(test3));
