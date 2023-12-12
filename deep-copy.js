const deepCopy = (obj) => {
  let target = Array.isArray(obj) ? [] : {};
  for (let prop in obj) {
    let value = obj[prop];
    if (value && typeof value === 'object') {
      target[prop] = deepCopy(value);
    } else {
      target[prop] = value;
    }
  }
  return target;
}

