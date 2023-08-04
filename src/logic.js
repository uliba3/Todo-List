class TodoItem {
    constructor(content, dueDate, priority) {
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
  
    addTodo(content, dueDate, priority) {
      const todo = new TodoItem(content, dueDate);
      this.todos.push(todo);
      console.log(todo);
      return todo;
    },
  
    // ... (other methods for updating todos, etc.)
  };
  
  export { TodoItem, TodoManager };
  