export const compose = () => {
  let body = document.querySelector('body');
  body.addEventListener('keydown', (e) => {
    if (e.keyCode > 64 && e.keyCode < 91 && e.shiftKey === false) {
      let note = document.createElement('div');
      console.log(e);
      note.classList.add('note');
      note.innerHTML = e.key;
      note.style.backgroundColor = `#${Math.floor(
        (e.keyCode * 16777215) / 222
      ).toString(16)}`;
      body.appendChild(note);
    }
    if (e.key === 'Backspace') {
      if (body.lastElementChild.nodeName === 'DIV') {
        body.removeChild(body.lastElementChild);
      }
    }
    if (e.key === 'Enter') {
      body.innerHTML = '';
    }
  });
};

// DOM removeChild()
// 65 - 90 // 13 Enter // 8 Backspace
//Math.floor(e.keyCode * 16777215 / 222).toString(16);
// #2e2d88

// const input = document.querySelector('input');

// input.addEventListener('keypress', logKey);

// if (window.event) {
//   // IE
//   keynum = e.keyCode;
// } else if (e.which) {
//   // Netscape/Firefox/Opera
//   keynum = e.which;
// }

// The 0 to 9 keys are codes 48 to 57.
// The A to Z keys are codes 65 to 90.
// Keys on the number pad are codes 96 to 105.
// Function keys F1 to F12 are 112 to 123.
