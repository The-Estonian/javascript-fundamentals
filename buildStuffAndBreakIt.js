console.log('Start!');

export const build = (n) => {
  let body = document.querySelector('body');

  for (let i = 1; i <= n; i++) {
    setTimeout(
      (index) => {
        let brick = document.createElement('div');
        brick.setAttribute('id', 'brick-' + index);

        if (index % 3 === 2) {
          brick.dataset.foundation = true;
        }
        body.appendChild(brick);
      },
      i * 100,
      i
    );
  }
};

export const repair = (...ids) => {
  for (let i = 0; i < ids.length; i++) {
    console.log(ids[i]);
    let selected = document.getElementById(ids[i]);
    console.log(selected);
    if (selected.getAttribute('foundation') === true) {
      selected.dataset.repaired = 'in progress';
    } else {
      selected.dataset.repaired = true;
    }
  }
};

export const destroy = () => {
  let selectAllBricks = document.querySelector('body');
  console.log(selectAllBricks.lastChild);
  if (selectAllBricks.lastChild.localName == 'div') {
    selectAllBricks.removeChild(selectAllBricks.lastChild);
  }
};
