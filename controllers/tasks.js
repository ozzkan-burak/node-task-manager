const Task = require('../models/Task');

const getAllTasks = (req, res) => {
  try {
    Task.find({})
      .then((tasks) => {
        res.status(200).json({ tasks });
      })
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
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


module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}