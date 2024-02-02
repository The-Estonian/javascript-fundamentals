const baseCalc = (seconds, multiplier) => {
  return (seconds / 31557600) * multiplier;
};

const dogYears = (planet, ageSeconds) => {
  switch (planet) {
    case 'earth':
      return Math.round(baseCalc(ageSeconds, 7) * 100) / 100;
    case 'mercury':
      return Math.round(baseCalc(ageSeconds, 7 / 0.2408467) * 100) / 100;
    case 'venus':
      return Math.round(baseCalc(ageSeconds, 7 / 0.61519726) * 100) / 100;
    case 'mars':
      return Math.round(baseCalc(ageSeconds, 7 / 1.8808158) * 100) / 100;
    case 'jupiter':
      return Math.round(baseCalc(ageSeconds, 7 / 11.862615) * 100) / 100;
    case 'saturn':
      return Math.round(baseCalc(ageSeconds, 7 / 29.447498) * 100) / 100;
    case 'uranus':
      return Math.round(baseCalc(ageSeconds, 7 / 84.016846) * 100) / 100;
    case 'neptune':
      return Math.round(baseCalc(ageSeconds, 7 / 164.79132) * 100) / 100;
  }
};

console.log(dogYears('mercury', 2134835688));
