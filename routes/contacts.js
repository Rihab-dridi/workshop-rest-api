const express=require('express')
const router=express.Router()
let CONTACTS=require('../Models/CONTACTS')
//CRUD
//CREATE a contact
//Read the contacts
//UPDATE a contact
//DELETE a contact

//@role:testing
//@url: http://localhost:5000/api/contacts/test
//pubilc/private
router.get('/test',(req,res)=>{
    res.send('it is working')
})

//@role:Create a new contacts
//@url: http://localhost:5000/api/contacts/add
//pubilc/private
router.post('/add',async (req,res)=>{

    const {name,email}=req.body

    try {
        const newContact= new CONTACTS({name,email})
        const contact= await newContact.save()
 res.status(200).json({msg:` ${name} has been added to your contacts`,contact})

    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

//@role:get all the contacts
//@url: http://localhost:5000/api/contacts/all
//pubilc/private
router.get('/all', async(req,res)=>{
try {
    const contacts= await CONTACTS.find()
    res.status(200).json({contacts})
} catch (error) {
    res.status(400).json({message:error.message})
}
})


//@role:delete a  contacts
//@url: http://localhost:5000/api/contacts/delete/:id
//pubilc/private
router.delete('/delete/:id',async(req,res)=>{
const ID =req.params.id
try {
    const contact= await CONTACTS.findByIdAndDelete(ID) 
    res.status(200).json({msg:'the contact has been deleted',contact })
} catch (error) {
    res.status(400).json({message:error.message})
}

} )


//@role:update a  contacts
//@url: http://localhost:5000/api/contacts/edit/:name
//pubilc/private
router.put('/edit/:name', async(req,res)=>{
    const NAME=req.params.name
try {
    const contact= await  CONTACTS.findOneAndUpdate({name:NAME},{$set: req.body } )
    res.status(200).json({contact})
} catch (error) {
    res.status(400).json({message:error.message})
}

})
module.exports=router