const express = require('express'); 

const app = express(); 

const mongoose = require('mongoose');

const studentRoutes = require('./api/routes/students');
const userRoutes = require('./api/routes/users');


mongoose.connect('mongodb+srv://badar:badar@cluster0.jxdfs.mongodb.net/?retryWrites=true&w=majority')


app.use(express.json());

app.use(express.urlencoded({

    extended: true 
}))

app.use('/students', studentRoutes);
app.use('/users', userRoutes);


module.exports = app;