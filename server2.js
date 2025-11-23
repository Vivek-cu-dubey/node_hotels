

// import express from 'express'
const express = require('express')
const app = express()
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body

// const Person = require('./models/Person');
// const Menuitem = require('./models/Menuitem');

app.get('/', (req, res) => {
    res.send('Welcome to our Hotel');
})


// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuitemRoutes');

// Use the routers
app.use('/person', personRoutes);
app.use('/menuitem', menuItemRoutes);




app.listen(3000, () => {
    console.log('server is listening on port: 3000')
})