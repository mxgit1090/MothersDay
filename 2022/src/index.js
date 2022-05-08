import './styles/index.scss';
import template from './views/index.pug';

const PADDING = 32;
const RADIUS_MAX = 200;
const RADIUS_MIN = 60;

function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}

function vmin(v) {
  return Math.min(vh(v), vw(v));
}

function vmax(v) {
  return Math.max(vh(v), vw(v));
}

function getRadius() {
  const contentWidth = vmin(64);
  const radius = contentWidth / 2 - PADDING;
  if (radius >= RADIUS_MAX) {
    return RADIUS_MAX;
  } else if (radius <= RADIUS_MIN) {
    return RADIUS_MIN;
  }
  return radius;
}

function render() {
  const main = document.getElementById('main');
  const r = getRadius();
  main.innerHTML = template({
    r,
    cx: r * 2,
    cy: r * 2,
  });
}

if (document && document.body) {
  render();
}

window.addEventListener('resize', event => {
  // const { innerWidth, innerHeight } = event.target;
  render();
});
