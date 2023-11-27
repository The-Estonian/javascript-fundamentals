const words = (arr) => {
  return arr.split(' ');
};

const sentence = (arr) => {
  return arr.join(' ');
};

const yell = (e) => {
  return e.toUpperCase();
};

const whisper = (e) => {
  return '*' + e.toLowerCase() + '*';
};

const capitalize = (e) => {
  return e[0].toUpperCase() + e.slice(1).toLowerCase();
};
