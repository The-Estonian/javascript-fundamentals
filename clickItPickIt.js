export const pick = () => {
  const windowBody = document.querySelector('body');
  console.log('Window Y axis: ', window.innerHeight); // window Y axis
  console.log('Window X axis: ', window.innerWidth); // window X axis
  const middleBox = document.createElement('div');
  middleBox.classList.add('hsl');
  const hueBox = document.createElement('div');
  hueBox.classList.add('hue', 'text');
  const luminosityBox = document.createElement('div');
  luminosityBox.classList.add('luminosity', 'text');
  const crosshairSVG = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  const axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axisX.setAttribute('id', 'axisX');
  const axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axisY.setAttribute('id', 'axisY');

  crosshairSVG.appendChild(axisX);
  crosshairSVG.appendChild(axisY);

  const colorize = (e) => {
    let pageHue = Math.round(e.pageX / (window.innerWidth / 360));
    let pageLuminosity = Math.round(e.pageY / (window.innerHeight / 100));
    middleBox.innerHTML = `hsl(${pageHue}, 50%, ${pageLuminosity}%)`;
    hueBox.innerHTML = `hue\n${pageHue}`;
    luminosityBox.innerHTML = `${pageLuminosity}\nluminosity`;
    windowBody.style.background = `hsl(${pageHue}, 50%, ${pageLuminosity}%)`;
    // console.log('Mouse X: ', e.pageX); // mouse location on X axis
    // console.log('Mouse Y: ', e.pageY); // mouse location on Y axis
    axisY.setAttribute('x1', 0);
    axisY.setAttribute('y1', e.pageY);
    axisY.setAttribute('x2', window.innerWidth);
    axisY.setAttribute('y2', e.pageY);

    axisX.setAttribute('x1', e.pageX);
    axisX.setAttribute('y1', 0);
    axisX.setAttribute('x2', e.pageX);
    axisX.setAttribute('y2', window.innerHeight);
  };
  windowBody.appendChild(middleBox);
  windowBody.appendChild(hueBox);
  windowBody.appendChild(luminosityBox);
  windowBody.appendChild(crosshairSVG);
  windowBody.addEventListener('mousemove', colorize);
  windowBody.addEventListener('click', (e) => {
    console.log(axisX.getAttribute('x1'));
    console.log(axisX.getAttribute('x2'));
    console.log();
    console.log();
    let pageHue = Math.round(e.pageX / (window.innerWidth / 360));
    let pageLuminosity = Math.round(e.pageY / (window.innerHeight / 100));
    navigator.clipboard.writeText(`hsl(${pageHue}, 50%, ${pageLuminosity}%)`);
  });
};
