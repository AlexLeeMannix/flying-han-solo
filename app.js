let express = require('express');
let app = express ();
let port = 3000;
let mongoose = require('moongoose')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb:localhost:27017/flying-han-solo')

app.use ('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
  console.log('server listening on port ' + port)
})
