const jwt =require('jsonwebtoken')

    //admin authentication middleware

    const authAdmin=async(req,res,next)=>{
        try {
            const {atoken}=req.headers
            if(!atoken){
                return res.status(401).json({msg:"Please login first"})
            }
            const token_decode=await jwt.verify(atoken,process.env.JWT_SECRET)
            if(token_decode!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
                return res.status(401).json({msg:"Invalid credentials"})
            }
            next()
            } catch (error) {
                res.status(500).json({msg:"galat"})
                }
                }
                module.exports=authAdmin
    
