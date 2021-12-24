const todoForm = document.getElementById('add-todo');
const todoUl = document.getElementById('todo-items');
const inputTodo = document.getElementById('todo-text');

const deleteTodo = todoEL => {
  // Todo удаление todo

};

const addTodo = () => {
  const liEl = document.createElement('li');
  liEl.append(inputTodo.value);


  const deleteButtonEl = document.createElement('button');
  deleteButtonEl.append('x');
  liEl.append(deleteButtonEl);

  todoUl.append(liEl);
  deleteButtonEl.addEventListener('click', event => deleteTodo(event));
};

const addTodoHandler = event => {
  event.preventDefault();
  if (!inputTodo.value) return;

  addTodo(inputTodo.value);
  inputTodo.value = '';
};

todoForm.addEventListener('submit', event => addTodoHandler(event));