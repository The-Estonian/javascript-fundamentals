const round = (n) => {
  trigger = false;
  if (n < 0) {
    trigger = true;
  }
  if (trigger) {
    counter = 0;
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
  trigger = false;
  if (n < 0) {
    trigger = true;
  }
  if (trigger) {
    counter = 0;
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
  trigger = false;
  if (n < 0) {
    trigger = true;
  }
  if (trigger) {
    counter = 0;
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
  trigger = false;
  if (n < 0) {
    trigger = true;
  }
  if (trigger) {
    counter = 0;
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
  return counter;
};

// const nums = [3.7, -3.7, 3.1, -3.1];
// console.log(nums.map(round));
// console.log(nums.map(floor));
// console.log(nums.map(trunc));
// console.log(nums.map(ceil));

// [4, -4, 3, -3]
// [3, -4, 3, -4]
// [3, -3, 3, -3]
// [4, -3, 4, -3]
