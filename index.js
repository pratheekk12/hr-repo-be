const express = require('express')
var cors = require('cors');
const configureDB = require('./config/database')
const router = require('./config/routes')
var multer = require('multer');
const app =express()
var path = require("path"); 
const port = 3056



//read the environment

const dotenv = require('dotenv');
dotenv.config();

//
//for swagger documentation
//

const expressOasGenerator = require('express-oas-generator');
const { env } = require('process');

/** place handleResponses as the very first middleware for swagger*/

expressOasGenerator.handleResponses(app, {});

configureDB()
app.use(express.json(),cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use(router)

const fileStorageEngine =multer.diskStorage({
    destination : (req,file,cb)=>{
       // cb(null,'./resumes')
        cb(null, './public/resumes')

    },
    filename : (req,file,cb)=>{
        console.log(req.path)
        cb(null,file.originalname);
    },
})
const fileStorageEngine1 =multer.diskStorage({
    destination : (req,file,cb)=>{
       // cb(null,'./resumes')
        cb(null, './public/hires')

    },
    filename : (req,file,cb)=>{
        console.log(req.path)
        // cb(null,file.originalname+ Date.now);
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        const uniqueSuffix = Date.now() 
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extension);

    },
})

const upload = multer({storage : fileStorageEngine })

const upload1 = multer({storage : fileStorageEngine1 })
app.post('/api/hr-profiles/resume',upload.single("resume"),(req,res)=>{
    console.log("file uploaded", req.file.filename)
    res.send("sucess")
})



app.post('/api/hr-profiles/hire/documents',upload1.single("hire"),(req,res)=>{
    console.log("file uploaded", req.file)
    res.send("sucess")
})

app.listen(port,()=>{
    console.log("server is running on ",process.env.PORT)
})
