import './style.css';
import {
  addProject,
  getProject,
  getAllProjects,
  loadProjects,
  saveProjects
} from './modules/projectManager.js';

import { createTodo } from './modules/todo.js';
import { renderProjectList, renderTodoList } from './modules/dom.js';

let currentProject = 'Default';

// 🟡 Load saved projects if available
loadProjects();

// 🟢 If nothing is loaded, create a default project
if (!getProject(currentProject)) {
  addProject(currentProject);
}

// 🔁 Re-render UI
renderProjectList((projectName) => {
  currentProject = projectName;
  renderTodoList(currentProject);
});
renderTodoList(currentProject);

// ➕ Add new project
const addProjectBtn = document.getElementById('add-project-btn');
addProjectBtn.addEventListener('click', () => {
  const input = document.getElementById('new-project-name');
  const name = input.value.trim();

  if (name && !getProject(name)) {
    addProject(name);
    input.value = '';
    renderProjectList((projectName) => {
      currentProject = projectName;
      renderTodoList(currentProject);
    });
  }
});
