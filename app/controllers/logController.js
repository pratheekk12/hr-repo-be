const Log = require('../models/logs')

const logController ={}

logController.create =(req,res)=>{
    const body = req.body
    //console.log(body)
    const log = new Log(body)
    // console.log(log)
    console.log(body)
    log.save()

    .then((log)=>{
        console.log(log,"after")
        res.json(log)
    })
    .catch((err)=>{
        res.json(log)
    })
}



logController.show =(req,res)=>{
    const id = req.body.id
    console.log(req.body)
    console.log(id)
    Log.find({"profileID":id})
        .then((profile)=>{
            res.json(profile)
        })
        .catch((err)=>{
            res.json(err)
        })
}





module.exports = logController