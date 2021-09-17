const mongoose=require('mongoose')
const schema=mongoose.Schema;

const ContactSchema= new schema({
    name:{
        type:String,
        required:true,
  
    },
    email:{
        type:String,
        unique:true
    },
    dateCreation:{
        type:Date,
        default:Date.now()
    }
})

module.exports= Contacts= mongoose.model('contact',ContactSchema)

//created a schema 
//created a model
//exported the model  