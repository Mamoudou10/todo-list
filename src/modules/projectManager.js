import { createTodo } from './todo.js';

let projects = [];

function createProject(name) {
  return {
    name,
    todos: [],
  };
}

function addProject(name) {
  const project = createProject(name);
  projects.push(project);
  saveProjects();
  return project;
}

function getProject(name) {
  return projects.find((project) => project.name === name);
}

function getAllProjects() {
  return projects;
}

function saveProjects() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

function loadProjects() {
  const stored = localStorage.getItem('projects');
  if (!stored) return;

  const rawProjects = JSON.parse(stored);
  projects = rawProjects.map(p => {
    const project = createProject(p.name);
    project.todos = p.todos.map(todo => createTodo(
      todo.title,
      todo.description,
      todo.dueDate,
      todo.priority,
      todo.notes,
      todo.checklist
    ));
    return project;
  });
}

export {
  addProject,
  getProject,
  getAllProjects,
  saveProjects,
  loadProjects
};
