const form = document.getElementById('add-todo');
const ul = document.getElementById('todo-items');
const input = document.getElementById('todo-text');


const listItemHandler = event => {
    const target = event.target;
    const listElement = event.currentTarget;

    switch (target?.dataset?.action) {
      case 'remove':
        listElement.remove();
        break;

      case 'complete':
        listElement.classList.add('complete');
        break;
    }
};

const addTodo = (todoText) => {
  const listItem = document.createElement('li');
  listItem.append(todoText);

  const removeButton = document.createElement('button');
  removeButton.dataset.action = 'remove';
  removeButton.append('x');
  listItem.append(removeButton);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.dataset.action = 'complete';
  checkbox.value = 'complete'
  listItem.prepend(checkbox);

  ul.append(listItem);
  listItem.addEventListener('click', event => listItemHandler(event));
};

const formHandler = event => {
  event.preventDefault();
  const inputValue = input.value;
  if (!inputValue) return;

  addTodo(inputValue);
  form.reset();
};

form.addEventListener('submit', event => formHandler(event));