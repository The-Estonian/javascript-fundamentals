const forEach = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    arr = func(arr[i]);
  }
  return [undefined, arr];
};
