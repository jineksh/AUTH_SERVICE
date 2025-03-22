
const validation = (req,res,next)=>{
    if(!req.body.email || !req.body.password){
        return res.status(401).json({
            data : {},
            message : 'Please Send email or password',
            success : false
        })
    }
    else{
        next();
    }
}


const validrole = (req,res,next)=>{
    if(!req.body.id){
        return res.status(401).json({
            data : {},
            message : 'Please Send userID',
            success : false
        })
    }
    next();
} 
module.exports = {
    validation,validrole
}