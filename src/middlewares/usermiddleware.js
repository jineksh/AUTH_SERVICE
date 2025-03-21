
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

module.exports = {
    validation
}