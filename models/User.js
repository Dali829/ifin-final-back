import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username:{
        type:String ,
        required:true,
        unique:true
    },
    email:{
        type:String ,
        required:true,
        unique:true

    },
    country:{
        type:String ,
        required:false,

    },
    
    role:{
        type:String ,
        unique:false,
        default:"user"

    },
    password:{
        type:[String] ,
        
    },
    superAdmin:{
        type:Boolean ,
        required:false,
        default:false

    }
},{timestamps:true});
export default mongoose.model("User",UserSchema)




