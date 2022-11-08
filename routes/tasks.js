const express=require('express')

const taskrouter=express.Router();

taskrouter.route('/')
.get((req,res)=>{
    res.end("giving all tasks");
})
.post((req,res)=>{
    res.end(`will add the task ${req.body.name} with status ${req.body.completed}`);
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