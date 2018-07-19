class Project {
  constructor(data)
}
class List {
  constructor(task) {
  this.name = task.taskName
  this.details = []
  this.addDetail = (taskData) => {
    this.details.push(new Task(taskData));
  }
}
class Task {
  constructor(data){
    this.name = task.taskName
    this.creator = task.createdBy
    this.owner = task.assignedTo
    this.dueDate = task.dueDate
  }
}

$(document).on('ready', () => {
  const subHeader = $('<h2>').text('Task List')
$('#taskList').append(subHeader);
let helper = (data) => {
  console.log(JSON.parse(data))
}
 $.get('/addTask').done(data => {
   console.log('test data',data);
 });
}
