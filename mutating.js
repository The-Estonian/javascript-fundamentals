const person = {
  name: 'Rick',
  age: 77,
  country: 'US',
};

const clone1 = { ...person };
const clone2 = { ...person };
const samePerson = new Object(person);

person.age++;
person.country = 'FR';
