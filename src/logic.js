class TodoItem {
    constructor(content, dueDate) {
      this.content = content;
      this.dueDate = dueDate;
      this.completed = false;
    }
  
    toggleCompleted() {
      this.completed = !this.completed;
    }
  
    editContent(newContent) {
      this.content = newContent;
    }
  
    editDueDate(newDueDate) {
      this.dueDate = newDueDate;
    }
  }
  
  const TodoManager = {
    todos: [],
  
    addTodo(content, dueDate) {
      const todo = new TodoItem(content, dueDate);
      this.todos.push(todo);
      console.log(todo);
      return todo;
    },
    
    deleteTodo(index) {
      if (index >= 0 && index < this.todos.length) {
        this.todos.splice(index, 1);
      }
    },

    moveUpTodo(index) {
      if (index > 0 && index < this.todos.length) {
        const temp = this.todos[index];
        this.todos[index] = this.todos[index - 1];
        this.todos[index - 1] = temp;
      }
    },

    moveDownTodo(index) {
      if (index >= 0 && index < this.todos.length - 1) {
        const temp = this.todos[index];
        this.todos[index] = this.todos[index + 1];
        this.todos[index + 1] = temp;
      }
    },

    saveToLocalStorage() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
  
    loadFromLocalStorage() {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        this.todos = JSON.parse(storedTodos);
      }
    },
  
  };
  
  export { TodoItem, TodoManager };
  