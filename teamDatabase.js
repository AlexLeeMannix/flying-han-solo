// const MongoClient = require('mongodb').MongoClient;
// const db = require('mongodb').db;
//
// let dbExists = new Promise((resolve, reject) => {
//   MongoClient.connect('mongodb://localhost/27017',
// (err, client) => {
//   console.log('Connected to')
//   if(err) reject('SOMEE CONNECTION ISSUE');
// 	resolve(client);
// 	});
// })
//
// let createArrayOfDocuments = (data,db) => Object.keys(data).forEach((el) => {
// 	let newObj = {
// 		"userName":data[el].userName
// 	}
// 	db.collection('Users').insert(newObj)
// });
//
//
//
// module.exports = function(data) {
//  dbExists
// 	.then((db)=>{
// 			db.collection('Users').drop();
// 		 return new Promise ((resolve, reject) =>{
// 			 createArrayOfDocuments(data,db)
// 			 resolve(db);
// 			})
// 	})
// 	.catch(error => console.log(error))
// };
