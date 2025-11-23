// const jsonString = '{"name": "john", "age": 30, "city": "New York"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);


// const objectToConvert = {
//     name: "Alice",
//     age: 25
// };
// const json = JSON.stringify(objectToConvert);
// console.log(json); 




// import express from 'express'
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello how can i help ?')
})

app.get('/chicken', (req, res)=>{
  res.send('I would serve u chicken')
})

app.get('/idli', (req, res)=>{
  var customized_idli = {
    name: 'rava idli',
    size: '10cm diameter',
    is_samber: true,
    is_chutney: false
  }
  res.send(customized_idli)
})

app.listen(3000, ()=>{
  console.log('server is listening on port: 3000')
})