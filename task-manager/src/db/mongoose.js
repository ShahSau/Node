const mongoose = require("mongoose")
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1.27017/task-manger-api',{
    useNewUrlParser: true,
    useCreateIndex:true
})

const User = mongoose.model('user',{
    name:{
        type:String
    },
    age:{
        type:Number,
        validate(value){
            if(value <0){
                throw new Error("age must be greater than 0")
            }
        }
    },
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("email is not valid")
            }
        }
    }
})

const Task = mongoose.model('task',{
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
})
const task1 = new Task({
    description:"HIIIFRFFFSS",
    completed: false
})
// const me = new User({
//     name:"sjja",
//     age:88
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(error)
// })