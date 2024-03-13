
const jwt = require("jsonwebtoken")
const JWT_SIGN = "Himansu@2001"


const fetchUser=async (req,res,next)=>{
    let success = false
    const token =  req.header("auth-token")
    try {
    if (!token) {
        return res.status(401).send({success, arrors: "Token Problem"})
    }
        const data = jwt.verify(token,JWT_SIGN)
        console.log(data)
        req.student= data.student
        console.log("this is",req.student)
        next()
    } catch (error) {
        res.status(500).json({success,error:"Some Error Occured.."})
        console.log(error)
        
    }

}

module.exports = fetchUser