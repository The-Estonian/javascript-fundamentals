export const generateLetters = () => {
  const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  let body = document.querySelector('body');

  for (let i = 0; i < 120; i++) {
    const element = document.createElement('div');
    element.innerHTML = alphabet[random(0, 25)];

    element.style.fontSize = 10 + i + "px";

    if (i < 40) {
        element.style.fontWeight = 300;
    } else if (i >= 40 && i < 80){
        element.style.fontWeight = 400;
    } else {
        element.style.fontWeight = 600;
    }
    body.appendChild(element);
  }
};
