const mongoos = require("mongoose")

const studentSchema = new mongoos.Schema({
    // user:{
    //     // This is a type of 'foreign key' in SQL
    //     type: mongoos.Schema.Types.ObjectId,
    //     ref: 'user'
    // },
    profile_img:{
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
    get:{
        type:String,
        require:true,
        default:"bumca_student_details"
    },
    phone:{
        type:String
    },
    passing_year:{
        type:Number,
        require:true
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

module.exports = mongoos.model("Student",studentSchema)