const mongoose = require('mongoose');
// const express = require('express');

// Connect to MongoDB
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING); 
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true    
        console.log("Database connected: ",
             connect.connection.host, 
             connect.connection.name); 
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};



module.exports = connectDb;