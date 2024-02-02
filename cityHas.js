const hasCity = (str, arr) => {
  return (city) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == city) {
        return `${city} is a city from ${str}`;
      }
    }
    return `${city} is not a city from ${str}`;
  };
};

// isFrench = hasCity('France', [
//   'Bordeaux',
//   'Paris',
//   'Lille',
//   'Lyon',
//   'Marseille',
//   'Saint-Étienne',
// ]);

// console.log(isFrench('Lille'));
