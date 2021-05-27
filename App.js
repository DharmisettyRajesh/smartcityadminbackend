const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const cors=require('cors');

const routes=require('./Routes/signup.js');

app.use(cors());
app.use(bodyparser.json());
app.use('/api',routes);
app.use('/',express.static(path.join(__dirname, 'public')));
const port=process.env.PORT||5001;
mongoose.connect(
    `mongodb+srv://${process.env.DATABASEUSER}:${process.env.DATABASEPASSWORD}@cluster0-grn1p.mongodb.net/${process.env.DATABASENAME}?retryWrites=true&w=majority`,{useNewUrlParser:true,useUnifiedTopology:true}

).then(()=>{
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
}) 
})
.catch((error)=>{
    console.log("Something went wrong");
    console.log(error);
})