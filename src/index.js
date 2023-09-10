// /src/index.js
import { TodoManager } from './logic.js';
import { renderTodos } from './dom.js';

document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoContentInput = document.getElementById('todo-content');
  const dueDateInput = document.getElementById('due-date');

  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const content = todoContentInput.value;
    const dueDateValue = dueDateInput.value;
    const dueDate = dueDateValue ? new Date(dueDateValue) : null; // Handle empty due date

    TodoManager.addTodo(content, dueDate);
    TodoManager.saveToLocalStorage(); // Save todos to localStorage

    renderTodos();
    todoContentInput.value = '';
    dueDateInput.value = '';
  });

  function init() {
    TodoManager.loadFromLocalStorage();
    renderTodos();
  }

  init();
});
