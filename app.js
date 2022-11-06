const express=require('express');
const app=express();
const port=3000;
const connectDB=require('./db/connect')
require('dotenv').config()



app.get('/',(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('./public/index.html');
})
const startserver=async()=>{
    try {
        await connectDB(process.env.connectionstring);
        app.listen(port, () => {
            console.log(`app listening on port http://localhost:${port}/`)
          })
    } catch (error) {
        console.log(error);
    }
}
startserver();