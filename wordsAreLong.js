const longWords = (data) => {
  return data.every((item) => item.length >= 5);
};

const oneLongWord = (data) => {
  return data.some((item) => {
    return item.length >= 10;
  });
};

const noLongWords = (data) => {
  return data.every((item) => {
    return !(item.length >= 7);
  });
};
