const todoForm = document.getElementById('add-todo');
const todoUl = document.getElementById('todo-items');
const inputTodo = document.getElementById('todo-text')

const addTodo = event => {
  event.preventDefault();
  if (inputTodo.value) {
    const liEl = document.createElement('li');
    liEl.append(inputTodo.value);
    todoUl.append(liEl);
    inputTodo.value = '';
  }
};

todoForm.addEventListener('submit', event => addTodo(event));