import { styles } from './pimp-my-style.data.js';

export const pimp = (e) => {
  if (e.target.classList.length === 1) {
    e.target.classList.add(styles[0]);
  } else {
    for (let i = 0; i < styles.length; i++) {
      if (e.target.classList[e.target.classList.length - 1] === 'unpimp') {
        if (e.target.classList[e.target.classList.length - 2] === 'button') {
          e.target.classList.remove(
            e.target.classList[e.target.classList.length - 1]
          );
        } else {
          e.target.classList.remove(
            e.target.classList[e.target.classList.length - 2]
          );
        }

        break;
      } else {
        if (e.target.classList[e.target.classList.length - 1] === styles[i]) {
          e.target.classList.add(styles[i + 1]);
          if (i === 13) {
            e.target.classList.add('unpimp');
          }
          break;
        }
      }
    }
  }
};
