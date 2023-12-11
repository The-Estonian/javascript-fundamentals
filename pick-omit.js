const pick = (obj, strings) => {
  const result = {};
  const keysToPick = typeof strings === 'string' ? [strings] : strings;

  for (let key in obj) {
    if (keysToPick.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

const omit = (obj, strings) => {
  const result = {};
  const keysToPick = typeof strings === 'string' ? [strings] : strings;

  for (let key in obj) {
    if (obj.hasOwnProperty(key) && !keysToPick.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
};
