import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
    firstName:{
        type:String ,
        required:true,
        
    },
    lastName:{
        type:String ,
        required:true,
        
    },
    dateBirth:{
        type:String ,
        required:true,
        
    },
    idNumber:{
        type:String ,
        required:true,
        
    },
    province:{
        type:String ,
        required:true,
        
    },
    district:{
        type:String ,
        required:true,
        
    },
    phone:{
        type:Number ,
        required:true,
        unique:true

    },
   
    email:{
        type:String ,
        required:true,
        unique:true

    },
    
  
    password:{
        type:String ,
        
    }
},{timestamps:true});
export default mongoose.model("Client",ClientSchema)




