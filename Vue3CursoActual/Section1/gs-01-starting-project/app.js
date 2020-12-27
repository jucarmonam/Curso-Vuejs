const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
    const enteredValue = inputEl.value;
    const element = document.createElement('li');
    element.textContent = enteredValue;
    listEl.append(element);
    inputEl.value = '';
}

buttonEl.addEventListener('click', addGoal);