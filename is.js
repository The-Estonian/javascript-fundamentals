is.num = (n) => {
  return typeof n === 'number';
};

is.nan = (n) => {
  return Number.isNan(n);
};

is.str = (n) => {
  return typeof n === 'string';
};

is.bool = (n) => {
  return typeof n === 'boolean';
};

is.undef = (n) => {
  return n === undefined;
};

is.def = (n) => {
  return !is.undefined(n);
};

is.arr = (arr) => {
  return Array.isArray(arr);
};

is.obj = (obj) => {
  return typeof n === 'object';
};

is.fun = (fun) => {
  return typeof n === 'function';
};

is.truthy = (item) => {
  return !!item;
};

is.falsy = (item) => {
  return !item;
};
