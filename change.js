const get = (key) => {
  return this.Object[key];
};

const set = (key, value) => {
  this.Object[key] = value;
  return value;
};
