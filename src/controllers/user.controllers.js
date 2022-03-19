const express = require('express')
const User = require('../models/user.models')
const fs = require('fs')
const uploads = require('../middlewares/uploads')

const router = express.Router()
router.get('',async(req, res)=>{
try {
 const user = await User.find().lean().exec()
 return res.status(200).send({user:user})
    
} catch (err) {
    return res.status(500).send({err:err.message})
}
})



router.post("",uploads.single("profile_pic"),async(req,res)=>{

    try {
        const user = await User.create({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        profile_pic:req.file.path
        })
             return res.status(200).send(user);

    } catch (err) {
        return res.status(400).send({message:err.message});
    }

})


router.patch('/:id',uploads.single("profile_pic"),async (req, res) => {

    try {
       
        const user = await User.findByIdAndUpdate(
         (req.params.id),
           { profile_pic: req.file.path }
        );
        return res.status(201).send({user})
    
    } catch(e) {
        return res.status(500).json({message:e.message,status:"Failed"})
    }
    
    })

router.delete("/:id",async(req,res)=>{
    const user = await User.findByIdAndDelete({_id:req.params.id})
    
})


module.exports = router