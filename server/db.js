const mongoos = require("mongoose")

const mongoURI = "mongodb://localhost:27017/bumca"

const connectToMongoose=()=>{
    mongoos.connect(mongoURI,()=>{console.log("----> Connected to Mongoose Successfully  :)")})
}

module.exports=connectToMongoose