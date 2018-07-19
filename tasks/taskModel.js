const mongoose = require('mongoose')
const Schema = mongoose.Schema


let taskSchema = new Schema({
  taskName: String,
  createBy: String,
  assignedTo: String,
  dueDate: String,

});

const Task = mongoose.model('Task',taskSchema)
module.exports = Task
