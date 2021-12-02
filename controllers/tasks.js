const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');


const getAllTasks = asyncWrapper( async (req, res) => {
 
  const tasks = await Task.find({})
  res.status(200).json({ tasks });
});


const createTask = asyncWrapper( async (req, res) => {
 
    const task = await Task.create(req.body);
    res.status(201).json({ task });s
});

const getTask = asyncWrapper( async (req, res) => {
  
 
      const {id: taskID} = req.params;
      const task = await Task.findById({_id:taskID}); 
      
      if(!task){
        res.status(404).json({error: `No task with id : ${taskID}`});
      }

      res.status(200).json({task});

});


const deleteTask = async (req, res) => {
  
  try {
    const {id: taskID} = req.params;
    const task = await Task.findByIdAndDelete({_id:taskID}); 
    
    if(!task){
      res.status(404).json({error: `No task with id : ${taskID}`});
    }
    
    res.status(200).json({task});
    
  }catch (error) {
    res.status(500).json({ error: error.message });
  }
  
  res.send('task deleted');
};

const updateTask = async (req, res) => {
  try {
    const {id: taskID} = req.params;
    //const {title, description, completed} = req.body;
    const task = await Task.findByIdAndUpdate({_id:taskID}, req.body, {new: true, runValidators: true});
    res.status(200).json({task});

    if(!task) {
      return res.status(404).json({error: `No task with id : ${taskID}`});
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editTask = async (req, res) => {
  try {
    const {id: taskID} = req.params;
    //const {title, description, completed} = req.body;
    const task = await Task.findByIdAndUpdate({_id:taskID}, req.body, {new: true, runValidators: true, overwrite: true});
    res.status(200).json({task});

    if(!task) {
      return res.status(404).json({error: `No task with id : ${taskID}`});
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask
}