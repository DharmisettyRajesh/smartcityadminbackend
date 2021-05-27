const express=require('express');

const controllers=require('../Controllers/Signup');
const app = express.Router();

app.post('/signup',controllers.Signup);
app.post('/login',controllers.Login);
app.post('/upload',controllers.uploadDetails1);

module.exports=app;