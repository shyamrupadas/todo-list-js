const form = document.getElementById('add-todo');
const ul = document.getElementById('todo-items');
const input = document.getElementById('todo-text');

const deleteTodo = todoEL => {
// Todo удаление todo
};

const addTodo = (todoText) => {
  const liEl = document.createElement('li');
  liEl.append(todoText);


  const deleteButtonEl = document.createElement('button');
  deleteButtonEl.append('x');
  liEl.append(deleteButtonEl);

  ul.append(liEl);
  deleteButtonEl.addEventListener('click', event => deleteTodo(event));
};

const addTodoHandler = event => {
  event.preventDefault();
  const inputValue = input.value;
  if (!inputValue) return;

  addTodo(inputValue);
  input.value = '';
};

form.addEventListener('submit', event => addTodoHandler(event));