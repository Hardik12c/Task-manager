const express=require('express')
const task=require('../models/taskschema')

const taskrouter=express.Router();

taskrouter.route('/')
.get(async(req,res)=>{
    try {
        const gettasks= await task.find({});
        res.status(200).json({gettasks});
    } catch (error) {
        res.send(error);
    }
    
})
.post(async(req,res)=>{
    try {
        const createdtask=await task.create(req.body);
        res.status(201).json({createdtask});
    } catch (error) {
        res.send(error);
    }
})

taskrouter.route('/:taskid')
.get(async(req,res)=>{
    try {
        const singletask=await task.findOne({_id:req.params.taskid});
        if(!singletask){
            return res.status(404).json({message:"task not found"});
        }
        res.status(200).json({singletask});
    } catch (error) {
        res.status(500).send(error);
    }
})
.put(async(req,res)=>{
    try {
        const updatetask=await task.findOneAndUpdate({_id:req.params.taskid},req.body,{
            runValidators:true,new:true,
        });
        if(!updatetask){
            return res.status(404).json({message:"task not found"});
        }
        res.status(200).json({task:updatetask,mission:"success"});
    } catch (error) {
        res.status(500).send(error);
    }
})
.delete(async(req,res)=>{
    try {
        const deletetask=await task.findOneAndDelete({_id:req.params.taskid});
        if(!deletetask){
            return res.status(404).json({message:"task not found"});
        }
        res.status(200).json({deletetask});
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports=taskrouter;