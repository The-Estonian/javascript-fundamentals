import { gossips } from './gossip-grid.data.js';

export const grid = () => {
  const windowBody = document.querySelector('body');

  // first range slider
  const firstRange = document.createElement('input');
  const firstRangeDiv = document.createElement('div');
  firstRangeDiv.classList.add('range');
  firstRange.setAttribute('type', 'range');
  firstRange.setAttribute('id', 'width');
  firstRange.setAttribute('min', '200');
  firstRange.setAttribute('max', '800');
  firstRange.defaultValue = '250';
  firstRange.classList.add('range');
  firstRange.name = 'firstRange';
  const firstLabel = document.createElement('label');
  firstLabel.innerHTML = 'width';
  firstLabel.htmlFor = 'firstRange';
  const firstSpan = document.createElement('span');
  firstSpan.innerHTML = '250';
  firstRangeDiv.appendChild(firstLabel);
  firstRangeDiv.appendChild(firstRange);
  firstRangeDiv.appendChild(firstSpan);

  // second range slider
  const secondRange = document.createElement('input');
  const secondRangeDiv = document.createElement('div');
  secondRangeDiv.classList.add('range');
  secondRange.setAttribute('type', 'range');
  secondRange.setAttribute('id', 'fontSize');
  secondRange.setAttribute('min', '20');
  secondRange.setAttribute('max', '40');
  secondRange.defaultValue = '25';
  secondRange.classList.add('range');
  secondRange.name = 'secondRange';
  const secondLabel = document.createElement('label');
  secondLabel.innerHTML = 'fontSize';
  secondLabel.htmlFor = 'secondRange';
  const secondSpan = document.createElement('span');
  secondSpan.innerHTML = '25';
  secondRangeDiv.appendChild(secondLabel);
  secondRangeDiv.appendChild(secondRange);
  secondRangeDiv.appendChild(secondSpan);

  // third range slider
  const thirdRange = document.createElement('input');
  const thirdRangeDiv = document.createElement('div');
  thirdRangeDiv.classList.add('range');
  thirdRange.setAttribute('type', 'range');
  thirdRange.setAttribute('id', 'background');
  thirdRange.setAttribute('min', '20');
  thirdRange.setAttribute('max', '75');
  thirdRange.defaultValue = '60';
  thirdRange.classList.add('range');
  thirdRange.name = 'thirdRange';
  const thirdLabel = document.createElement('label');
  thirdLabel.innerHTML = 'background';
  thirdLabel.htmlFor = 'thirdRange';
  const thirdSpan = document.createElement('span');
  thirdSpan.innerHTML = '60';
  thirdRangeDiv.appendChild(thirdLabel);
  thirdRangeDiv.appendChild(thirdRange);
  thirdRangeDiv.appendChild(thirdSpan);

  // div for all ranges
  const rangeDiv = document.createElement('div');
  rangeDiv.classList.add('ranges');
  rangeDiv.appendChild(firstRangeDiv);
  rangeDiv.appendChild(secondRangeDiv);
  rangeDiv.appendChild(thirdRangeDiv);

  // append range div to body
  windowBody.appendChild(rangeDiv);

  firstRange.addEventListener('input', (e) => {
    const allGossips = document.querySelectorAll('.gossip');
    allGossips.forEach((e) => {
      e.style.width = firstRange.value + 'px';
    });
    firstSpan.innerHTML = firstRange.value;
  });
  secondRange.addEventListener('input', (e) => {
    const allGossips = document.querySelectorAll('.gossip');
    allGossips.forEach((e) => {
      e.style.fontSize = secondRange.value + 'px';
    });
    secondSpan.innerHTML = secondRange.value;
  });
  thirdRange.addEventListener('input', (e) => {
    const allGossips = document.querySelectorAll('.gossip');
    allGossips.forEach((e) => {
      e.style.background = `hsl(280, 50%, ${thirdRange.value}%)`;
    });
    thirdSpan.innerHTML = thirdRange.value;
  });

  const loadFormAndGossips = () => {
    const formDiv = document.createElement('form');
    const gossipForm = document.createElement('form');
    gossipForm.classList.add('gossip');
    const gossipFormTextarea = document.createElement('textarea');
    gossipFormTextarea.setAttribute('placeholder', 'Got a gossip to share?');
    const gossipFormSubmit = document.createElement('button');
    gossipFormSubmit.innerHTML = 'Share gossip!';
    gossipFormSubmit.style.background = 'transparent';
    gossipFormSubmit.style.fontSize = '1.1rem';
    gossipFormSubmit.style.fontWeight = '600';
    gossipFormSubmit.style.color = 'white';
    gossipFormSubmit.style.padding = '0.5rem';
    gossipFormSubmit.setAttribute('type', 'submit');
    gossipForm.appendChild(gossipFormTextarea);
    gossipForm.appendChild(gossipFormSubmit);
    formDiv.appendChild(gossipForm);
    windowBody.appendChild(formDiv);

    for (let i = 0; i < gossips.length; i++) {
      const eachGossip = document.createElement('div');
      eachGossip.classList.add('gossip');
      eachGossip.innerHTML = gossips[i];
      windowBody.appendChild(eachGossip);
    }
    gossipForm.addEventListener('submit', (e) => {
      e.preventDefault();
      gossips.unshift(gossipFormTextarea.value);
      windowBody.innerHTML = '';
      grid();
    });
  };
  loadFormAndGossips();
};
