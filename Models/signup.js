const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phno:{type:String,required:true},
    password:{type:String,required:true}
});
module.exports=mongoose.model('smartcityadmin',schema);
