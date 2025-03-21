const  Userservice  =require('../service/user-service');
const { StatusCodes }=require('http-status-codes');
const userservices = new Userservice();
const createuser = async(req,res)=>{
    try{
        const user = await userservices.createuser({
            email : req.body.email,
            password : req.body.password
        });
        return res.status(StatusCodes.OK).json({
            data : user,
            message : 'user is create',
            success : true

        });
    }
    catch(err){
        console.log('Something went wrong in controller'+err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data : err,
            message : 'user is not create',
            success : false
        })
    }
}

const SignIn = async(req,res)=>{
    try {
        const response = await userservices.signin({
            email : req.body.email,
            password : req.body.password
        });
        return res.status(StatusCodes.OK).json({
            data : response,
            message : 'SignIn Done',
            success : true
        })
    } catch (error) {
        console.log('Something went wrong in Signin controller'+error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data : error,
            message : 'user is not Signin',
            success : false
        })
    }
}

module.exports = {
    createuser,SignIn
}