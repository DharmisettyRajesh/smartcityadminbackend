const {validationResult}=require('express-validator');
const nodemailer = require('nodemailer');
const bcrypt= require('bcryptjs');
const fast2sms=require('fast-two-sms');
const httperror=require('../Models/http-error');
const signup=require('../Models/signup');
const search=require('../Models/upload');
const jwt=require('jsonwebtoken');
const _=require('lodash');
const Signup=async (req,res,next) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return next(
            new httperror('Invalid inputs passed',422)
        );
    }
    const {name,email,phno,password}=req.body;
    let existingUser;
    try{
        existingUser =await signup.findOne({email:email});
    }
    catch(err){
        const error=new httperror('Signup failed plaese try again later',422);
        return next(error);
    }
    if(existingUser){
        const error=new httperror('user already exists',422);
        return next(error);
    }
    var existingNumber;
    try{
        exitstingNumber = await signup.findOne({phno:phno});
    }
    catch(err){
        const error=new httperror('Signingup failed,please try again later',500);
        return next(error);
    }
    if(existingNumber){
        const error=new httperror('user with phone number already exists',500);
        return next(error);
    }
    const createdUser=new signup({
        name,
        email,
        phno,
        password
    });
    try{
        await createdUser.save();
    }catch(err){
        const error=new httperror('signup failed',500);
        return next(error);
    }
    let token;
    try{
        token=jwt.sign({userId:createdUser.id,email:createdUser.email},`${process.env.JWT_KEy}`,{expiresIn:'1h'});
    }
    catch(err){
        const error=new httperror(
            'signingup failed',500
        );
        return next(error);
    }
    let transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'dharmisettyrajesh009@gmail.com',
            pass:'Rajesh@523'
          },
         tls:{
             rejectUnauthorized:false
         }
         });
         let mailOptions={
             from:'dharmisettyrajesh009@gmail.com',
             to:email,
             subject:'Successful Registration',
             html:`<h1>You are successfully registered with our Company</h1>`
            };
         transporter.sendMail(mailOptions,function(err,data){
             if(err){
                 res.status(201).json({message:'something went wrong'});
                 return;
             }
             else{
                 res.json({message:'email sent successfully'});
                 return;
             }
         });
      var options = {authorization : '0kMDadSRITlwYpKcgmQZqBriFzujnoV5UO32xP74e8A6LCyWvN8DMIhgvudKfikqO4RTCZtjXasw0NQ5' , message : 'you are registered successfully with our company for more details contact us' ,  numbers : [phno]} 
      fast2sms.sendMessage(options);
      res.status(201).json( {userId:createdUser.id,email : createdUser.email,token:token});
}
const Login=async (req, res, next) => {
    const {email,password}=req.body; 
    let existingUser;
    try{
        existingUser = await signup.findOne({email:email});
    }
    catch(err) {
        const error =new httperror(
            'Login failed',500
        );
        return next(error);
    }
    if(!existingUser)
    {
        const error =new httperror(
            'invalid credentials login failed',500
        );
        return next(error);
    }
    let createdUser=false;
    try{
        createdUser=await bcrypt.compare(password,existingUser.password);

    }
    catch(err){
        const error=new httperror(
            'password matching failed',500
        )
        return next(error);
    }
    if(createdUser){
        const error=new httperror(
            'password incorrect',500
        )
        return next(error);
    }
    let token;
    try{
        token=jwt.sign({userId: createdUser.id,email:createdUser.email},"Rajeshraju",{expiresIn:'1h'});
    }
    catch(err){
        const error=new httperror(
            'Login Failed',500
        );
        return next(error);
    }
    res.status(201).json({userId:existingUser.id,email:existingUser.email,token:token})
}
const uploadDetails1=async (req, res, next) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return next(
            new httperror('Invalid inputs passed',422)
        );
    }  
    let {City,Power,Water,Gas,Transportation,Education,Hospitals}=req.body;
    City=City.toLowerCase();
    var existingCity;
    try{
        existingCity=await search.findOne({City:City});
    }
    catch(err){
        return next(
            new httperror('Something Went wrong Please try again',422)
        );
    }
    if(existingCity)
    {
      await search.updateOne({City:City},{$set:{Power:Power,Water:Water,Gas:Gas,Transportation:Transportation,Education:Education,Hospitals:Hospitals}});
       res.status(200).json({message:'City details updated success'});
       return next();
    }
    else{
       const createCity=new search({
            City,
            Power,
            Water,
            Gas,
            Transportation,
            Education,
            Hospitals
       });
       try{
           await createCity.save();
           console.log("hello")
       }
       catch(err){
        const error = new httperror(
            'deails save up failed, please try again later.',
            500
          );
          return next(error);
       }
       res.status(200).json({message:'New City created successfully'});

    }
}
exports.Signup=Signup;
exports.Login=Login;
exports.uploadDetails1=uploadDetails1;