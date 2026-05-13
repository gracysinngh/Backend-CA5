let tasks = [
  { id: 1, title: "Learn Node" },
  { id: 2, title: "Build API" }
];

// Simulated async DB call
const getTasks = () => Promise.resolve(tasks);

const createTask = (title) => {
  const newTask = { id: tasks.length + 1, title };
  tasks.push(newTask);
  return Promise.resolve(newTask);
};

module.exports = { getTasks, createTask };
