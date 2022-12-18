const jwt=require("jsonwebtoken")

const authCheck= async(req,res,next)=>{
const token=req.headers.token?.split(" ")[1]
if(!token)return res.status(400).send({"msg":"Token Not Found"})

jwt.verify(token,"todoapp",(err,decoded)=>{
    if(err)return res.status(400).send({"msg":"Not authenticated"})
    req.body.userID=decoded.userID
    next()
})
}

module.exports={authCheck}