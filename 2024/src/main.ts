import 'normalize.css';
import 'animate.css';
import './style.scss';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="main-button">
    TOUCH ME!
  </div>
  <div id="text">
  </div>
`;

const textContainer = document.getElementById('text')!;
const mainButton = document.querySelector<HTMLElement>('#main-button')!;
// mainButton.style.animationComposition = 'add';

mainButton.addEventListener("click", function() {
  this.classList.add('animate__animated', 'animate__fadeOut', 'animate__heartBeat', 'animate__faster');
});

mainButton.addEventListener("animationend", function() {
  this.style.display = 'none';
  document.body.classList.add('opened');
  addText('Happy');
  addText("Mother's");
  addText("Day!");
});

let textOrder = 0;

function addText(inputText: string) {
  const line = document.createElement('div');
  line.classList.add('animate__animated', 'animate__fadeIn');
  const lineDelay = textOrder * 0.5;
  line.style.animationDelay = `${lineDelay}s`;
  inputText.split('').forEach((char, index) => {
    const charElement = document.createElement('div');
    charElement.classList.add('text');
    charElement.innerHTML = char;
    charElement.style.animationDelay = `${lineDelay + index * 0.1}s`;
    line.appendChild(charElement);
  });
  textContainer.appendChild(line);
  textOrder++;
}


