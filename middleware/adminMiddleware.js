// if token true (the same) auth true let pass it (comparaison  of token)

const jwt= require("jsonwebtoken")



module.exports.adminMiddleware= async(req,res,next)=>{
    try{
    const token =req.headers.token
    if(!token) res.status(401).json.adminMiddleware({msg:"Not authorized/Admin"})

        else{
            // we have token and we wil verify if true or no
            const verifyToken= jwt.verify(token,process.env.JWT_SECRET)
            if (!verifyToken)
                res.status.json({msg:"You are not Auth"})
            else{
                if(verifyToken.role =="admin"){
                    req.body.userId=verifyToken.id
                    next()
                }
                else{
                    res.status.json({msg:"you are not autorized as admin"})
    
                }
            } 
         }
    }
    
    
    catch(error){
        res.status(500).json({msg:"something went wrong",error :error.message})

    }
}