const Task = require('../models/Task');

const getAllTasks = (req, res) => {
  res.send('get all tasks controller');
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTask = async (req, res) => {
  
  try {
      const {id: taskID} = req.params;
      const task = await Task.findById({_id:taskID}); 
      
      if(!task){
        res.status(404).json({error: `No task with id : ${taskID}`});
      }

      res.status(200).json({task});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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