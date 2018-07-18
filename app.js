const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require ('body-parser');
const path = require('path')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const mongoose = require('mongoose')
const User = require('./userModel')
mongoose.connect('mongodb:localhost:27017/flying-han-solo')
mongoose.connection.once('open', () => {
  console.log('conneted to database')
})

app.get('/', (req, res) => {
  console.log('USE IS HAPPENING')
  res.sendFile(__dirname + '/index.html')
})

app.post('/adduser', (req, res) => {
  console.log('POST IS HAPPENING')
  let data = new User(req.body);
  console.log('data', data)
  data.save()
  .then(newUser => {
    res.send({user: 'newUser saved to database'});
  })
  .catch( err => {
    res.status(400).send('unable to save to database');
  });

})

app.listen(port, () => {
  console.log('server listening on port ' + port)
})
