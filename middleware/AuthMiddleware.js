// if token true (the same) auth true let pass it (comparaison  of token)

const jwt= require("jsonwebtoken")



module.exports.AuthMiddleware= async(req,res,next)=>{
    try{
    const token =req.headers.token
    if(!token) res.status(401).json.AuthMiddleware({msg:"Not authorized"})

        else{
            // var to compare the variable that i will call and my token regitred in the data
            const verifyToken= jwt.verify(token,process.env.JWT_SECRET)
            req.personId=verifyToken.id
            next()
         }
    }
    
    
    catch(error){
        res.status(500).json({msg:"something went wrong",error :error.message})

    }
}