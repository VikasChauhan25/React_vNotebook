const express=require('express');
const router=express.Router();
const fetchuser=require('../middleware/fetchuser');
const Note=require('../models/Note');
const { body, validationResult } = require('express-validator');

//ROUTE 1: Get All the Note using : GET "api/auth/getuser". login rerquired
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    const Notes=await Note.find({user: req.user.id});
    res.json(Notes);
})

//ROUTE 2: Add a new Note using : Post "api/auth/addnote". login rerquired
router.put('/addnote',fetchuser,[ body('title',"Enter  valid title").isLength({min: 3}),
body('description',"Description must be atleast 5 character").isLength({ min: 5 })],async (req,res)=>{
    try{
    const {title,description,tag}=req.body; 

    //If ther is error, returns Bad request and the error
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }

     const note=new Note({
        title,description,tag,user:req.user.id
     })
     const saveNote=await note.save();
    res.json(saveNote);
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }
})
//ROUTE 3: Update existing Note using : PUT "api/notes/updatenote". login rerquired

router.put('/updatenote/:id',fetchuser,async (req,res)=>{
   const {title,description,tag}=req.body;
   //Create a newNote Object
   try{
   const newNote={};
   if(title){newNote.title=title};
   if(description){newNote.description=description};
   if(tag){newNote.tag=tag};

   //Find the note to be updated and Update it
   let note=await Note.findById(req.params.id);
   if(!note){return res.status(404).send("Not Found")}

   if(note.user.toString()!==req.user.id){
       return res.status(401).send("Not Allowed");
   }

   note=await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
    res.json({note});
}catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error occured");
}
})

//ROUTE 4: Delete existing Note using : DELETE "api/notes/deletenote". login rerquired
router.delete('/deletenote/:id',fetchuser,async (req,res)=>{
    //Find the note to be delete and delete it
    try{
    let note=await Note.findById(req.params.id);
    if(!note){return res.status(404).send("Not Found")}
    //Allow deletion only if ud=ser owns this note
    if(note.user.toString()!==req.user.id){
        return res.status(401).send("Not Allowed");
    }
 
    note=await Note.findByIdAndDelete(req.params.id);
     res.json({"Success":"Note has been deletd",note: note});
}catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error occured");
}
 })
module.exports=router