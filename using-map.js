const citiesOnly = (data) => {
  return data.map((item) => {
    return item.city;
  });
};

// console.log(
//   citiesOnly([
//     {
//       city: 'Los Angeles',
//       temperature: '  101 °F   ',
//     },
//     {
//       city: 'San Francisco',
//       temperature: ' 84 ° F   ',
//     },
//   ])
// ); // ['Los Angeles', 'San Francisco']

const upperCasingStates = (data) => {
  return data.map((item) => {
    let words = item.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  });
};

// console.log(upperCasingStates(['alabama', 'new jersey'])); // ['Alabama', 'New Jersey']

const fahrenheitToCelsius = (data) => {
  return data.map((temp) => {
    return Math.floor((temp.slice(0, -2) - 32) * (5 / 9)) + '°C';
  });
};

console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F'])); // -> ['20°C', '15°C', '-4°C']

const trimTemp = (data) => {
  return data.map((item) => {
    return {
      city: item.city,
      temperature: item.temperature.trim(),
      state,
      region,
    };
  });
};

// console.log(
//   trimTemp([
//     { city: 'Los Angeles', temperature: '  101 °F   ' },
//     { city: 'San Francisco', temperature: ' 84 ° F   ' },
//   ])
// ); /* -> [
//   { city: 'Los Angeles', temperature: '101°F' },
//   { city: 'San Francisco', temperature: '84°F' },
// ] */

const tempForecasts = (data) => {
  return data.map((item) => {
    let words = item.state.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return `${
      Math.floor((item.temperature.trim().slice(0, -2) - 32) * (5 / 9)) +
      '°Celsius'
    } in ${item.city}, ${words.join(' ')}`;
  });
};

console.log(
  tempForecasts([
    {
      city: 'Pasadena',
      temperature: ' 101 °F',
      state: 'california',
      region: 'West',
    },
  ])
); // -> ['38°Celsius in Pasadena, California']
