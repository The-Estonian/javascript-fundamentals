const get = (key) => {
  return this.obj[key];
};

const set = (key, value) => {
  this.obj[key] = value;
  return value;
};
