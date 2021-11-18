const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, 'Task name is required'],
    minlength: [3, 'Task name must be at least 3 characters long'],
    maxlength: [30, 'Task name must be at most 30 characters long'],
    trim: true
  },
  completed:{
    type: Boolean,
    default: false
  },
});

module.exports = mongoose.model('Task', TaskSchema);