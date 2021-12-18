const todoForm = document.getElementById('add-todo');
const todoUl = document.getElementById('todo-items');

const addTodo = event => {
  event.preventDefault();
  // Todo добавление нового todo
  alert('Add new todo');
};

todoForm.addEventListener('submit', event => addTodo(event));