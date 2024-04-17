
const jwt = require("jsonwebtoken")
const JWT_SIGN = "Himansu@2001"


const fetchStaf =async (req,res,next)=>{
    let success = false
    const token =  req.header("auth-token")
    try {
    if (!token) {
        return res.status(401).send({success, arrors: "Token Problem"})
    }
        const data = jwt.verify(token,JWT_SIGN)
        console.log(data)
        req.staf= data.staf
        console.log("this is",req.staf)
        next()
    } catch (error) {
        res.status(500).json({success,error:"Some Error Occured.."})
        console.log(error)
        
    }

}

module.exports = fetchStaf