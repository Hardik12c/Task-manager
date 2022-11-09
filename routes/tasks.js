const express=require('express')
const task=require('../models/taskschema')

const taskrouter=express.Router();

taskrouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    next();
})
.get((req,res)=>{
    res.end("giving all tasks");
})
.post(async(req,res)=>{
    try {
        const createdtask=await task.create(req.body);
        res.send({createdtask});
    } catch (error) {
        res.send(error);
    }
})

taskrouter.route('/:taskid')
.get((req,res)=>{
    res.end("giving this task");
})
.put((req,res)=>{
    res.end(`will update the task ${req.body.name}`)
})
.delete((req,res)=>{
    res.end(`will delete the task`);
})

module.exports=taskrouter;