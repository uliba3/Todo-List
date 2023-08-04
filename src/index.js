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

    TodoManager.addTodo(content, dueDate, 'Medium', []);

    renderTodos();
    todoContentInput.value = '';
    dueDateInput.value = '';
  });

  function init() {
    // Add some example todos
    TodoManager.addTodo('Complete project proposal', new Date('2023-08-15'), 'High', ['Research', 'Outline']);
    // ... (other example todos)

    // Render todos
    renderTodos();
  }

  init();
});
