const forEach = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = func(arr[i]);
  }
};
