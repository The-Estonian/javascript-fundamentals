const sign = (n) => {
  if (n == 0) {
    return 0;
  } else if (n > 0) {
    return 1;
  } else if (n < 0) {
    return -1;
  }
};

const sameSign = (var1, var2) => {
  input1 = sign(var1);
  input2 = sign(var2);
  if (input1 == input2) {
    return true;
  }
  return false;
};
