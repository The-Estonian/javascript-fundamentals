const every = (arr, func) => {
  let trigger = true;
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      return false;
    }
  }
  return trigger;
};

const some = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return true;
    }
  }
  return false;
};

const none = (arr, func) => {
  let trigger = true;
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      trigger = true;
    } else {
      return false;
    }
  }
  return trigger;
};
