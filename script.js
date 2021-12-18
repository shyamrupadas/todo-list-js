const todoForm = document.getElementById('add-todo');
const todoUl = document.getElementById('todo-items');
const inputTodo = document.getElementById('todo-text')

const addTodo = event => {
  event.preventDefault();
  const liEl = document.createElement('li');
  liEl.append(inputTodo.value);
  todoUl.append(liEl);

  // Todo проверка, что в поле ввода что-то введено

};

todoForm.addEventListener('submit', event => addTodo(event));