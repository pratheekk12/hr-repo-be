const { findOne } = require('../models/users')
const User = require('../models/users')
const bycrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usersController ={}

usersController.register =(req,res)=>{
    const body = req.body
    const user = new User(body)
    user.save()
        .then((user)=>{
		console.log("Logged in user=",user);
            res.json(user)
        })
        .catch((err)=>{
		console.log("Log in error for  user=",user);
            res.json(err)
        })
}

usersController.login =(req,res)=>{
    const body = req.body
    User.findOne({email : body.email})
    .then((user)=>{
        if(user){
            //res.json(user)
            bycrpt.compare(body.password,user.password)
                .then((result)=>{
                    // res.send(result)
                    if(result){
                        //res.send("email password matches")
                        const tokenData ={
                            id : user._id
                        }
                        const token = jwt.sign(tokenData,'grssl@123',{expiresIn : '2d'})
                        console.log("User logged in successfully =",user); 
                        
                        res.json({
                            token : token,
                            userID:user._id,
                            username : user.username
                            
                        })
                    }else {
			    console.log('password does not match');
                        res.send('password does not match')
                    }
                })
                .catch((err)=>{
			console.log("error",err);
                    res.json(err)
                })
        }else{
		console.log('Invalid emai/password ', error);
            res.json({error : 'Invalid email /password'})
        }
    })
    .catch((err)=>{
	    console.log("error =",err);
        res.json(err)
    })

}

module.exports = usersController
