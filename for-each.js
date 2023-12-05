const forEach = (arr, func) => {
  let thearr = [];
  for (let i = 0; i < arr.length; i++) {
    thearr.push(func(arr[i]));
  }
  return thearr;
};
