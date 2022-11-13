const express=require('express')
const Task=require('../models/taskschema')

const taskrouter=express.Router();

taskrouter.route('/')
.get(async(req,res)=>{
    try {
        const tasks= await Task.find({});
        res.status(200).json({tasks});
    } catch (error) {
        console.log(error);
        res.send(error);
    }
    
})
.post(async(req,res)=>{
    try {
        const createdtask=await Task.create(req.body);
        res.status(201).json({createdtask});
    } catch (error) {
        res.send(error);
    }
})

taskrouter.route('/:id')
.get(async(req,res)=>{
    try {
        const task=await Task.findOne({_id:req.params.id});
        if(!task){
            return res.status(404).json({message:"task not found"});
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).send(error);
    }
})
.patch(async(req,res)=>{
    try {
        const task=await Task.findOneAndUpdate({_id:req.params.id},req.body,{
            runValidators:true,new:true,
        });
        if(!task){
            return res.status(404).json({message:"task not found"});
        }
        res.status(200).json({task:task,mission:"success"});
    } catch (error) {
        res.status(500).send(error);
    }
})
.delete(async(req,res)=>{
    try {
        const task=await Task.findOneAndDelete({_id:req.params.id});
        if(!task){
            return res.status(404).json({message:"task not found"});
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports=taskrouter;