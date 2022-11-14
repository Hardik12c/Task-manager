const notfound=(req,res)=>{
    res.status(404).send("router doesn't exist");
}
module.exports=notfound;