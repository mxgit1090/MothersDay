import './styles/index.scss';
import template from './views/template.pug';

const context = { message: 'Hello World' };

if (document && document.body) {
    const main = document.getElementById('main');
    console.log(main);
    main.innerHTML = template(context);
}
