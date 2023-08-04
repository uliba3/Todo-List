import { TodoManager } from './logic.js';

const todoList = document.getElementById('todo-list');

function renderTodos() {
  // Clear existing todos
  todoList.innerHTML = '';
  // Render todos
  TodoManager.todos.forEach(todo => {
    const todoItem = document.createElement('div');
    const content = document.createElement('div');
    const date = document.createElement('div');

    content.textContent = todo.content;

    if (todo.dueDate === null) {
    } else {
        const year = todo.dueDate.getFullYear();
        const month = String(todo.dueDate.getMonth() + 1).padStart(2, '0');
        const day = String(todo.dueDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}/${month}/${day}`;
        date.textContent = formattedDate;
    }
    
    // ... (other rendering logic)
    todoItem.appendChild(date);
    todoItem.appendChild(content);
    todoList.appendChild(todoItem);
  });
}

export { renderTodos };
