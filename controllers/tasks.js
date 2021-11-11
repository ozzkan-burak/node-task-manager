const getAllTasks = (req, res) => {
  res.send('get all tasks controller');
};

const createTask = (req, res) => {
  res.send('task created');
};

const getTask = (req, res) => {
  res.send('get single task');
};

const updateTask = (req, res) => {
  res.send('task updated');
};

const deleteTask = (req, res) => {
  res.send('task deleted');
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}