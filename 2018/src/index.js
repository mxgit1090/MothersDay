import './styles/index.scss';
import template from './views/template.pug';

if (document && document.body) {
  const main = document.getElementById('main');    
  main.innerHTML = template();
}
