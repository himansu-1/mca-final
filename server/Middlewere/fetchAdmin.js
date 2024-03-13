
const jwt = require("jsonwebtoken")
const JWT_SIGN = "Himansu@2001"


const fetchAdmin=async (req,res,next)=>{
    let success = false
    const token =  req.header("auth-token")
    try {
    if (!token) {
        return res.status(401).send({success, arrors: "Token Problem"})
    }
        const data = jwt.verify(token,JWT_SIGN)
        console.log("here the PointerEvent",data)
        req.admin= data.admin
        console.log(req.admin)
        next()
    } catch (error) {
        res.status(500).json({success,error:"Some Error Occured.."})
        console.log(error)
        
    }

}

module.exports = fetchAdmin