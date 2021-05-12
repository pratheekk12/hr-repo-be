const Hire = require('../models/hires')

const hireController ={}

//To add a profile
hireController.create=(req,res)=>{
    const body = req.body
    const hire = new Hire(body)
    hire.save()
        .then((profile)=>{
            console.log("profile uploaded, id=")
            res.json(profile)
        })
        .catch((err)=>{
		console.log("profile could not be upload, id=");
            res.json(err)
        })
}

module.exports = hireController