const mult2 = (n) => {
  return (n1) => {
    return n * n1;
  };
};

const add3 = (n) => {
  return (n1) => {
    return (n2) => {
      return n + n1 + n2;
    };
  };
};

const sub4 = (n) => (n1) => (n2) => (n3) => n - n1 - n2 - n3;
