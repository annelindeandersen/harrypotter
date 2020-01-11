const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to Mongo
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/harrypotter', { 
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true,
            useFindAndModify: false });
        console.log('Mongo is connected');
        // Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
        // by default, you need to set it to false.
        // mongoose.set('useFindAndModify', false);
    } catch(err) {
        console.log(err.message);
        // exit process with failure
        process.exit(1);
    }   
}

  module.exports = connectDB;