// document.createElement('link');
//  linkToAdd.rel = 'stylesheet';
// document.head.appendChild(linkToAdd);
// .blue {
//   background: blue;
// }
import { colors } from './fifty-shades-of-cold.data.js';

export const generateClasses = () => {
  let newStyles = document.createElement('style');
  newStyles.rel = 'stylesheet';
  let styleInjection = '';
  for (let i = 0; i < colors.length; i++) {
    styleInjection += `.${colors[i]} {background: ${colors[i]};} `;
  }
  newStyles.innerHTML = styleInjection;
  document.head.appendChild(newStyles);
};

// aqua, blue, turquoise, green, cyan, navy or purple
export const generateColdShades = () => {
  const currentBody = document.querySelector('body');
  const selectedColors = [
    'aqua',
    'blue',
    'turquoise',
    'green',
    'cyan',
    'navy',
    'purple',
  ];
  for (let i = 0; i < colors.length; i++) {
    if (selectedColors.indexOf(colors[i]) > -1) {
      let newDiv = document.createElement('div');
      newDiv.classList.add(colors[i]);
      newDiv.innerHTML = colors[i];
      currentBody.appendChild(newDiv);
    }
  }
};

export const choseShade = () => {};
