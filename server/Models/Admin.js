const mongoos = require("mongoose")

const adminSchema = new mongoos.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now(),
        require:true
    },
    homeCarousel:{
        img_1:{type:String},
        img_2:{type:String},
        img_3:{type:String}
    },
    studentCarousel:{
        img_1:{type:String},
        img_2:{type:String},
        img_3:{type:String}
    },
    stafData:{
        type: mongoos.SchemaTypes.Mixed,        
    }
})
const Admin = mongoos.model("Admin",adminSchema)

module.exports = Admin