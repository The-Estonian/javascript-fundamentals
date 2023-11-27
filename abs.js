const isPositive = (n) => {
  if (n >= 0) {
    return true;
  }
  return false;
};

const abs = (n) => {
  if (isPositive(n)) {
    return n;
  }
  return n * -1;
};
