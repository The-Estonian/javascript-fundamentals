const citiesOnly = (data) => {
  return data.map((item) => {
    return item.city;
  });
};

console.log(
  citiesOnly([
    {
      city: 'Los Angeles',
      temperature: '  101 °F   ',
    },
    {
      city: 'San Francisco',
      temperature: ' 84 ° F   ',
    },
  ])
);
