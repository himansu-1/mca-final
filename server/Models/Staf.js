const mongoos = require("mongoose")

const stafSchema = new mongoos.Schema({
    profile_img:{
        type:String,
    },
    nameTag:{
        type:String,
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String
    },
    phone:{
        type:String
    },
    dob:{
        type:Date
    },
    profession:{
        type:String
    },
    address:{
        type:String
    },
    business_organization:{
        type:String
    },
    position:{
        type:String
    },
    website:{
        type:String
    },
    comments:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now(),
        require:true
    },
})

module.exports = mongoos.model("Staf",stafSchema)