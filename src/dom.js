import { TodoManager } from './logic.js';

const todoList = document.getElementById('todo-list');

function renderTodos() {
  // Clear existing todos
  todoList.innerHTML = '';

  // Render todos
  TodoManager.todos.forEach((todo, index) => {
    const todoItem = document.createElement('div');
    const checkbox = document.createElement('input');
    const content = document.createElement('div');
    const date = document.createElement('div');
    const deleteButton = document.createElement('button'); // Create a delete button
    const upButton = document.createElement('button');
    const downButton = document.createElement('button');

    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      todo.toggleCompleted();
      renderTodos();
    });

    content.textContent = todo.content;

    if (todo.dueDate === null) {
    } else {
      const year = todo.dueDate.getFullYear();
      const month = String(todo.dueDate.getMonth() + 1).padStart(2, '0');
      const day = String(todo.dueDate.getDate()).padStart(2, '0');
      const formattedDate = `${year}/${month}/${day}`;
      date.textContent = formattedDate;
    }

    deleteButton.textContent = 'Delete'; // Set button text
    upButton.textContent = '↑';
    downButton.textContent = '↓';

    deleteButton.addEventListener('click', () => {
      TodoManager.deleteTodo(index); // Delete todo when button is clicked
      TodoManager.saveToLocalStorage();
      renderTodos();
    });

    upButton.addEventListener('click', () => {
      TodoManager.moveUpTodo(index);
      TodoManager.saveToLocalStorage();
      renderTodos();
    });

    downButton.addEventListener('click', () => {
      TodoManager.moveDownTodo(index);
      TodoManager.saveToLocalStorage();
      renderTodos();
    })

    todoItem.appendChild(checkbox);
    todoItem.appendChild(date);
    todoItem.appendChild(content);
    todoItem.appendChild(deleteButton); // Append the delete button
    todoItem.appendChild(upButton);
    todoItem.appendChild(downButton);
    todoList.appendChild(todoItem);
  });
}

export { renderTodos };
