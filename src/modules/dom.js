import { getAllProjects, getProject } from './projectManager.js';

const projectListEl = document.getElementById('project-list');
const todoListEl = document.getElementById('todo-list');

function renderProjectList(onProjectClick) {
  projectListEl.innerHTML = '';

  getAllProjects().forEach(project => {
    const btn = document.createElement('button');
    btn.textContent = project.name;
    btn.addEventListener('click', () => onProjectClick(project.name));
    projectListEl.appendChild(btn);
  });
}

function renderTodoList(projectName) {
  const project = getProject(projectName);
  if (!project) return;

  todoListEl.innerHTML = '';

  project.todos.forEach(todo => {
    const todoItem = document.createElement('div');
    todoItem.className = `todo-item priority-${todo.priority}`;
    todoItem.innerHTML = `
      <strong>${todo.title}</strong> - ${todo.dueDate}
      <button data-id="${todo.id}" class="delete-btn">🗑</button>
    `;

    if (todo.completed) {
      todoItem.style.textDecoration = 'line-through';
    }

    todoListEl.appendChild(todoItem);
  });
}

export { renderProjectList, renderTodoList };
