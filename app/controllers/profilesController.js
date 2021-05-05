const Profile = require('../models/profiles')

const profileController ={}

//To add a profile
profileController.create=(req,res)=>{
    const body = req.body
    const profile = new Profile(body)
    profile.save()
        .then((profile)=>{
            console.log("profile uploaded, id=",profile._id, profile)
            res.json(profile)
        })
        .catch((err)=>{
		console.log("profile could not be upload, id=",profile);
            res.json(err)
        })
}

//Api to get all Profiles
profileController.list =(req,res)=>{
    Profile.find()
    .then((profiles)=>{
	    console.log("all profiles returned");
        res.json(profiles)
    })
    .catch((err)=>{
	    console.log("error in returning all profiles");
        res.json(err)
    })
}


//Api to get Particular profile
profileController.show =(req,res)=>{
    const id =req.params.id
    Profile.findById(id)
        .then((profile)=>{
		console.log("profile returned, id=",id);
            res.json(profile)
        })
        .catch((err)=>{
		console.log("error in returning profile..");
            res.json(err)
        })
}

//Api to update a profile
profileController.profileUpdate=(req,res)=>{
    const body = req.body
    const id =req.params.id
    
    Profile.findByIdAndUpdate(id,body,{new : true, runValidators: true})
        .then((profile)=>{
		console.log("Profile updated, profie=",profile);
            res.json(profile)
        })
        .catch((err)=>{
		console.log("Error in Profile update, profie=",err);
            res.json(err)
        })
}

module.exports = profileController
