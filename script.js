const form = document.getElementById('add-todo');
const ul = document.getElementById('todo-items');
const input = document.getElementById('todo-text');


const addTodo = (todoText) => {
  const listItem = document.createElement('li');
  listItem.append(todoText);

  const removeButton = document.createElement('button');
  removeButton.dataset.action = 'remove';
  removeButton.append('x');
  listItem.append(removeButton);

  ul.append(listItem);
  listItem.addEventListener('click', event => {
    const target = event.target;
    const listElement = event.currentTarget;

    if (target?.dataset?.action === 'remove') {
      listElement.remove();
    }
  });
};

const addTodoHandler = event => {
  event.preventDefault();
  const inputValue = input.value;
  if (!inputValue) return;

  addTodo(inputValue);
  form.reset();
};

form.addEventListener('submit', event => addTodoHandler(event));