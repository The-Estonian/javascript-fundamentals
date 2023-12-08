export const createCircle = () => {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    let circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.backgroundColor = 'white';
    circle.style.left = e.clientX - 25 + 'px';
    circle.style.top = e.clientY - 25 + 'px';
    body.appendChild(circle);
    moveCircle();
  });
};

export const moveCircle = () => {
  const body = document.querySelector('body');
  const box = document.querySelector('.box');
  const moveBall = (e) => {
    if (body.childNodes.length > 4) {
      let changeChild = body.lastChild;
      changeChild.style.left = e.clientX - 25 + 'px';
      changeChild.style.top = e.clientY - 25 + 'px';

      const coords = box.getBoundingClientRect();
      let recTop = parseInt(changeChild.style.top.slice(0, -2));
      let recBot = parseInt(changeChild.style.top.slice(0, -2));
      let recLeft = parseInt(changeChild.style.left.slice(0, -2));
      let recRight = parseInt(changeChild.style.left.slice(0, -2));
      if (
        recTop >= coords.top &&
        recBot <= coords.bottom - 50 &&
        recLeft >= coords.left &&
        recRight <= coords.right - 50
      ) {
        console.log('MIDDLE');
        changeChild.style.backgroundColor = 'var(--purple)';
        body.removeEventListener('mousemove', moveBall);
      }
    }
  };
  body.addEventListener('mousemove', moveBall);
};

export const setBox = () => {
  const body = document.querySelector('body');
  let box = document.createElement('div');
  box.classList.add('box');
  body.appendChild(box);
};

// getBoundingClientRect()
