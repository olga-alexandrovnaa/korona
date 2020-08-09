const body = document.body;
const newP = document.createElement('a');
newP.textContent = "Hello! I'm new Ola's Sait";
newP.classList.add('myp');
newP.href='http://yandex.ru';

body.append(newP);

let margin = 1;

function move() {
  newP.style.marginLeft = `${margin++}px`;
}

const intervalId = setInterval(move, 100);

setTimeout(() => clearInterval(intervalId), 5000);

newP.addEventListener('mouseenter', () => {
  newP.style.color = 'tomato';
});

newP.addEventListener('mouseleave', () => {
  newP.style.color = 'black';
});

document.querySelector('.alert-btn').addEventListener('click', () => {
  const name = document.querySelector('.name').value;
  const surname = document.querySelector('.surname').value;
  console.log(`${name+surname}`);
  const res = Number(name) + Number(surname);
  console.log(`${res}`);
  document.querySelector('.result').textContent = res;
});

