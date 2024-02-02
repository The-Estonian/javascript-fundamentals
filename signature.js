const sign = (n) => {
  if (n == 0) {
    return 0;
  } else if (n > 0) {
    return 1;
  } else if (n < 0) {
    return -1;
  }
};

const sameSign = (n1, n2) => {
  const firstVar = sign(n1);
  const secondVar = sign(n2);
  if (firstVar == secondVar) {
    return true;
  }
  return false;
};
console.log(sameSign(-2, -1));
