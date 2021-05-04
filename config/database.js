const mongoose = require('mongoose')

const configureDB =() =>{
    // mongoose.connect('mongodb://localhost:27017/resume-bank',{
    mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex : true
    })
        .then(()=>{
            console.log("Connected to db", process.env.MONGODB_URI)
        })
        .catch((err)=>{
            console.log(err)
        })
}

module.exports = configureDB
