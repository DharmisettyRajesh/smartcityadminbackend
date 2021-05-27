const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    City:{type:String},
    Electricity:{type:String},
    Power:{type:String},
    Water:{type:String},
    Transportation:{type:String},
    Education:{type:String},
    Hospitals:{type:String},
});
module.exports=mongoose.model('cities datas',schema);
