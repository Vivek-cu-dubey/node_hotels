// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt', 'Hi ' + user.username + '!', ()=>{
//     console.log('file is created');
// });

const notes = require('./notes.js');
var _ = require('lodash');

var data = ["person", "person", 1, 2, 1, 2, 'name', 'age', '2'];
var filter = _.uniq(data);
console.log(filter);


console.log(notes.age);

console.log('ram')