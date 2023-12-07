// const regex =
//   /\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))(?::\d*)?\b/g;

// const regex = /^(localhost|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(:([0-9]|[1-9][0-9]|[1-9][0-9]{2}|[1-9][0-9]{3}|[1-5][0-9]{4}|6([0-4][0-9]{3}|5([0-4][0-9]{2}|5([0-2][0-9]|3[0-5])))))?$\b/g

const regex =
  /(?!(((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}):(?!(?![7-9]\d\d\d\d)(?!6[6-9]\d\d\d)(?!65[6-9]\d\d)(?!655[4-9]\d)(?!6553[6-9])(?!0+)(\d{1,5})))((((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4})(?::(?![7-9]\d\d\d\d)(?!6[6-9]\d\d\d)(?!65[6-9]\d\d)(?!655[4-9]\d)(?!6553[6-9])(?!0+)(\d{1,5}))?)/g;

function findIP(str) {
    console.log(str);
  return str.match(regex);
}

// testarr =
//   '115.42.150.37, 172.01.123.999:1234, 192.168.0.1, 110.234.52.124, 110.234.52.124:200, 0.0.0.0, 10.1.23.7';
// console.log(findIP(testarr));
// testarr1 = '192.168.1.123:8080, 172.01.123.254:1234, 0.0.0.0:68768';
// console.log(findIP(testarr1));
// https://regexr.com/
