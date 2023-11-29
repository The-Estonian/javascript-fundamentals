const round = (n) => {
  var trigger = false;
  if (n < 0) {
    trigger = true;
  }
  if (trigger) {
    var counter = 0;
    while (n < -1) {
      counter++;
      n++;
    }
    if (n < -0.5) {
      counter++;
    }
    return -counter;
  }
  counter = 0;
  while (n > 1) {
    counter++;
    n--;
  }
  if (n > 0.5) {
    counter++;
  }
  return counter;
};

const ceil = (n) => {
  var trigger = false;
  if (n < 0) {
    trigger = true;
  }
  if (trigger) {
    var counter = 0;
    while (n < -1) {
      counter++;
      n++;
    }
    return -counter;
  }
  counter = 0;
  while (n > 0.1) {
    counter++;
    n--;
  }
  return counter;
};

const floor = (n) => {
  var trigger = false;
  if (n < 0) {
    trigger = true;
  }
  if (trigger) {
    var counter = 0;
    while (n < 0) {
      counter++;
      n++;
    }
    return -counter;
  }
  counter = 0;
  while (n > 1) {
    counter++;
    n--;
  }
  return counter;
};

const trunc = (n) => {
  var ff = false;
  if (n > 0xfffffffff) {
    n -= 0xfffffffff;
    ff = true;
  }
  var trigger = false;
  if (n < 0) {
    trigger = true;
  }
  if (trigger) {
    var counter = 0;
    while (n < -1) {
      counter++;
      n++;
    }
    return -counter;
  }
  counter = 0;
  while (n > 1) {
    counter++;
    n--;
  }
  if (ff) {
    return 0xfffffffff + counter;
  }
  return counter;
};

const nums = [3.7, -3.7, 3.1, -3.1];
console.log(nums.map(round));
console.log(nums.map(floor));
console.log(nums.map(trunc));
console.log(nums.map(ceil));

// [4, -4, 3, -3]
// [3, -4, 3, -4]
// [3, -3, 3, -3]
// [4, -3, 4, -3]

// https://01.kood.tech/git/root/public/src/commit/7913d11bec0c573d8690e029734fa3489f9a81f8/js/tests/cut-corners_test.js
// right...
