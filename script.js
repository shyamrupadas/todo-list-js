const todoForm = document.getElementById('add-todo');
const todoUl = document.getElementById('todo-items');
const inputTodo = document.getElementById('todo-text')

const addTodo = event => {
  event.preventDefault();
  const liEl = document.createElement('li');
  liEl.append(inputTodo.value);
  todoUl.append(liEl);

  // Todo ��������, ��� � ���� ����� ���-�� �������

};

todoForm.addEventListener('submit', event => addTodo(event));