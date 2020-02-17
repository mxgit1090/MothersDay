// @todo: find or create an appropriate rollup-plugin for Stylus
// import './styles/index.styl';
import template from './views/index.pug';

if (document && document.body) {
  const main = document.getElementById('main');
  main.innerHTML = template();
}
