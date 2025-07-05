function createTodo(title, description, dueDate, priority, notes = '', checklist = []) {
    return {
      id: Date.now(), // Unique ID
      title,
      description,
      dueDate,
      priority,
      completed: false,
      notes,
      checklist,
    };
  }
  
  export { createTodo };
  