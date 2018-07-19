// const User = require('./userModel')
//
//
// const userController = {
//   createUser (req, res, next) {
//     console.log('POST IS HAPPENING')
//     let newUser = new User({userName: req.body.userName});
//     console.log('newUser', newUser)
//     console.log(db)
//
//     newUser.save( err => {
//       if (err) return res.status(404).send(err);
//       User.find({}, (err, data) => {
//         if (err) return res.status(404).send(err);
//         res.send(data)
//     })
// })
// }
// }
// module.export = userController
