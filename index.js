const express=require('express')
const app=express()
const connectDB=require('./config/connectDB')
connectDB()


app.use(express.json())
app.use('/api/contacts', require('./routes/contacts'))

const port=5000
app.listen(port, error=>{
    try {
        console.log(`the server is running on ${port}...`);
    } catch (error) {
        console.log(error);
    }
})
//step1: create the server
//step2: connect to the database 