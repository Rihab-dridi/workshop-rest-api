require('dotenv').config()
const mongoose=require('mongoose')
const connectDB=()=>mongoose.connect('mongodb://localhost/worshop_restApi', ()=>{
    try {
        console.log('database is connected...');
    } catch (error) {
        console.log(error);
    }
})
module.exports=connectDB