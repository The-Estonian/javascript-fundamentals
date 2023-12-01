const regex = /((?:\d+\.){3}(?:\d+)(?::\d*)?)/g;

function findIP(str) {
  return str.match(regex);
}

// testarr = '115.42.150.37, 192.168.0.1, 110.234.52.124, 110.234.52.124:200';
// findIP(testarr);
