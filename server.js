'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/auth_route');

var dbPort = process.env.MONGODB_URI || 'mongodb://localhost/dev_db';

mongoose.connect(dbPort);

app.use('/', authRoute);

app.use((err,req,res,next)=> {
  res.status(500).json({message:err.message});
  next(err);
});

app.listen(3000,()=> console.log('Cats up on 3000'));
