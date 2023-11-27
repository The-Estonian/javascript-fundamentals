const first = (arr) => {
  return arr[0];
};

const last = (arr) => {
  return arr[arr.length - 1];
};

const kiss = (arr) => {
  return [last(arr), first(arr)];
};
