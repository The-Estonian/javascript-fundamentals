const baseCalc = (seconds, multiplier) => {
  return (seconds / 31557600) * multiplier;
};

const dogYears = (planet, ageSeconds) => {
  switch (planet) {
    case 'earth':
      return baseCalc(ageSeconds, 7);
    case 'mercury':
      return baseCalc(ageSeconds, 7 * 0.2408467);
    case 'venus':
      return baseCalc(ageSeconds, 7 * 0.61519726);

    case 'mars':
      return baseCalc(ageSeconds, 7 * 1.8808158);

    case 'jupiter':
      return baseCalc(ageSeconds, 7 * 11.862615);

    case 'saturn':
      return baseCalc(ageSeconds, 7 * 29.447498);

    case 'uranus':
      return baseCalc(ageSeconds, 7 * 84.016846);

    case 'neptune':
      return baseCalc(ageSeconds, 7 * 164.79132);
  }
};
