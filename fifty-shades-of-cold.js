import { colors } from './fifty-shades-of-cold.data.js';

export const generateClasses = () => {
  const styleTag = document.createElement('style');
  document.getElementsByTagName('head')[0].appendChild(styleTag);
  colors.forEach((color) => {
    styleTag.innerHTML += `.${color} { background: ${color}; }\n`;
    console.log(color);
  });
};

export const generateColdShades = () => {
  let body = document.querySelector('body');
  colors.forEach((color) => {
    if (
      color.includes('aqua') ||
      color.includes('blue') ||
      color.includes('turquoise') ||
      color.includes('green') ||
      color.includes('cyan') ||
      color.includes('navy') ||
      color.includes('purple')
    ) {
      const element = document.createElement('div');
      element.className = color;
      element.textContent = color;
      body.appendChild(element);
    }
  });
};

export const choseShade = (shade) => {
  const body = document.querySelector('body');
  const color = body.getElementsByTagName('div');

  for (const div of color) {
    if (div.className !== shade) {
      div.className = shade;
    }
  }
};
