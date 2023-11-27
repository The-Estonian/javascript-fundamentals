const baseCalc = (seconds, multiplier) => {
  return (seconds / 31557600) * multiplier;
};

const dogYears = (planet, ageSeconds) => {
  switch (planet) {
    case 'earth':
      return Math.round(baseCalc(ageSeconds, 7) * 100) / 100;
    case 'mercury':
      return (
        Math.round(baseCalc(ageSeconds, 7 * 0.2408467) * 10000000) / 10000000
      );
    case 'venus':
      return (
        Math.round(baseCalc(ageSeconds, 7 * 0.61519726) * 100000000) / 100000000
      );
    case 'mars':
      return (
        Math.round(baseCalc(ageSeconds, 7 * 1.8808158) * 10000000) / 10000000
      );
    case 'jupiter':
      return (
        Math.round(baseCalc(ageSeconds, 7 * 11.862615) * 1000000) / 1000000
      );
    case 'saturn':
      return (
        Math.round(baseCalc(ageSeconds, 7 * 29.447498) * 1000000) / 1000000
      );
    case 'uranus':
      return (
        Math.round(baseCalc(ageSeconds, 7 * 84.016846) * 1000000) / 1000000
      );
    case 'neptune':
      return Math.round(baseCalc(ageSeconds, 7 * 164.79132) * 100000) / 100000;
  }
};
