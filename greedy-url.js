const getURL = (url) => {
  var cleanURL = url.match(
    /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/
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
    if (matches !== null && matches.length === 1) {
      newURLArr.push(allURLs[i]);
    }
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
    if (matches !== null && matches.length === 1) {
      newURLArr.push(allURLs[i]);
    }
  }
  return newURLArr;
};

//https://regexr.com/39nr7

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

// console.log(
//   greedyQuery(
//     'http://www.example.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot'
//   )
// );
