const mongoose=require('mongoose')

const taskschema =new mongoose.Schema({
    name: {type:String,
        required:[true,'Please Provide the name'],
        trim:true,
        maxlength:[20,'name can not be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false,
    }
})

module.exports= mongoose.model('Task',taskschema);