const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels' 

// Setup MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Get the default connection
// Mongoose maintains a default connections object representing the MongoDB connection.
const db = mongoose.connection;

// Define event listners for database connection

db.on('connected', ()=>{
    console.log('Connected to MongoDB server');
})

db.on('error', (err)=>{
    console.error(' MongoDB connection error:');
})

db.on('disconnected', ()=>{
    console.log('MongoDB disconnected');
})

// Export the database connection
module.exports = db;

process.on('SIGINT', async()=>{
    await
    mongoose.connection.close();
    // console.log("MongoDB disconnected (App Terminated)");
    process.exit(0);
})