console.log('Start!');

export const build = (n) => {
  let body = document.querySelector('body');

  for (let i = 1; i <= n; i++) {
    setTimeout(
      (index) => {
        let brick = document.createElement('div');
        brick.setAttribute('id', 'brick-' + index);

        if (index % 3 === 2) {
          brick.setAttribute('foundation', true);
        }

        console.log('TIMEOUT');
        body.appendChild(brick);
      },
      i * 10,
      i
    );
  }
};

export const repair = (...ids) => {
  for (let i = 0; i < ids.length; i++) {
    let selected = document.getElementById(ids[i]);
    if (selected.getAttribute('foundation') === 'true') {
      selected.setAttribute('repaired', 'in progress');
    } else {
      selected.setAttribute('repaired', 'true');
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
