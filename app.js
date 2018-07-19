const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require ('body-parser');
const path = require('path')
const mongoose = require('mongoose')
const User = require('./users/userModel')
const Task = require('./tasks/taskModel')

//const userController = require('./users/userController')
//const teamDatabase = require('./teamDatabase')
const db = mongoose.connect('mongodb://localhost/teamDatabase')

mongoose.connection.once('open', () => {
  console.log('conneted to database')
  console.log(db)
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  console.log('USE IS HAPPENING')
  console.log('UserModel',User)
  res.sendFile(__dirname + '/client/index.html')
})

app.post('/adduser', (req, res) => {
  console.log('POST IS HAPPENING')
  User.find({userName: req.body.userName}, (err, data) => {
    console.log('find is working heres the data.userName', data.userName)
    console.log(data)
    if (data.length !== 0) {
      console.log('the if statement is working heres the data.userName', data.userName)
    res.sendFile(__dirname + '/client/fail.html')
    }
  })
  let newUser = new User({userName: req.body.userName});
  console.log('newUser', newUser)
  //console.log(db)

  newUser.save( err => {
    if (err) return res.status(404).send(err);
      res.status(200).sendFile(__dirname + '/client/taskDash.html')
    })
    // res.status(200).sendFile(__dirname + '/client/taskDash.html') //this should actually redirect to something instead of sending it but i'll worry about that later
  })


  app.post('/addTask', (req, res) => {
    console.log('ADD TASK IS HAPPENING')
    let newTask = new Task(
      {
        taskName: req.body.taskName,
        createBy: req.body.createdBy,
        assignedTo: req.body.assignedTo,
        dueDate: req.body.dueDate
    });
      console.log('newTask', newTask)

    newTask.save(err => {
      if (err) return res.status(404).send(err);
      Task.find({}, (err, data) => {
        console.log('database', data)
        res.send(data)
      })
  })
})




app.listen(port, () => {
  console.log('server listening on port ' + port)
})
