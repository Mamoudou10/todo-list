const projects = [];

function createProject(name) {
  return {
    name,
    todos: [],
  };
}

function addProject(name) {
  const project = createProject(name);
  projects.push(project);
  return project;
}

function getProject(name) {
  return projects.find((project) => project.name === name);
}

function getAllProjects() {
  return projects;
}

export { addProject, getProject, getAllProjects };
