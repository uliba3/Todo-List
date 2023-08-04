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
  
  };
  
  export { TodoItem, TodoManager };
  