import './styles/index.scss';
import template from './views/index.pug';

if (document && document.body) {
  const main = document.getElementById('main');    
  main.innerHTML = template();
}
