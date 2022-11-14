require('dotenv').config()
const express=require('express');
const app=express();
const port=3000;
const connectDB=require('./db/connect')
const taskrouter=require('./routes/tasks')
const notfound=require('./middleware/not-found')

// middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks',taskrouter)
app.use(notfound);

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