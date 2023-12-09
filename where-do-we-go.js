import { places } from './where-do-we-go.data.js';

export const explore = () => {
  const picBody = document.querySelector('body');

  const picArray = [];
  const coordArray = [];
  const colorArray = [];
  const nameArray = [];
  let sortedPlaces = places,
    item_order = [
      'mistyrose',
      'cornflowerblue',
      'crimson',
      'yellow',
      'seashell',
      'sandybrown',
      'gold',
      'deeppink',
      'mediumturquoise',
      'darkviolet',
      'white',
      'springgreen',
      'orange',
      'greenyellow',
      'firebrick',
      'lightcoral',
      'cyan',
      'blue',
      'hotpink',
      'lime',
      'violet',
    ];
  sortedPlaces.sort(
    (a, b) => item_order.indexOf(a.color) - item_order.indexOf(b.color)
  );
  sortedPlaces.forEach((place) => {
    picArray.push(
      place.name.split(',')[0].toLowerCase().replace(/ /g, '-') + '.jpg'
    );
    coordArray.push(place.coordinates);
    colorArray.push(place.color);
    nameArray.push(place.name);
  });
  for (let i = 0; i < picArray.length; i++) {
    const picSection = document.createElement('section');

    picSection.style.background = `url(./where-do-we-go_images/${picArray[i]})`;

    picBody.appendChild(picSection);
  }

  const aSection = document.createElement('a');
  aSection.classList.add('location');
  aSection.style.color = colorArray[0];
  aSection.setAttribute('target', '_blank');
  aSection.href = `https://www.google.com/maps/place/${coordArray[0]}`;
  aSection.innerHTML = `${nameArray[0]}\n${coordArray[0]}`;
  picBody.appendChild(aSection);

  const compass = document.createElement('div');
  compass.classList.add('direction');
  compass.innerHTML = 'N';

  picBody.appendChild(compass);
  let multiply = 1;
  document.addEventListener('scroll', (e) => {
    const linkSection = document.querySelector('a');
    console.log(window.innerHeight);
    console.log(window.scrollY);
    if (
      window.scrollY >
      Math.round(window.innerHeight * multiply - window.innerHeight / 2 - 1)
    ) {
      linkSection.innerHTML = `${nameArray[multiply]}\n${coordArray[multiply]}`;
      linkSection.style.color = colorArray[multiply];
      linkSection.href = `https://www.google.com/maps/place/${coordArray[multiply]}`;
      multiply++;
    } else {
      multiply--;
    }
  });
  let oldScroll = 0;
  window.onscroll = (e) => {
    const compass = document.querySelector('.direction');
    if (oldScroll > window.scrollY) {
      compass.innerHTML = 'N';
    } else {
      compass.innerHTML = 'S';
    }
    oldScroll = window.scrollY;
  };
};
