

// import express from 'express'
const express = require('express')
const app = express()
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;


// Middleware Functions -----------------------------
const logRequest = (req, res, next)=>{

    
}


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