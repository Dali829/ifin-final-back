import mongoose from 'mongoose';

const CompaigneSchema = new mongoose.Schema({
    compaigneTitle:{
        type:String ,
        required:true
    },
    description:{
        type:String ,
        required:false
    },
    startingDate:{
        type:String ,
        required:false
    }, 
    endingDate:{
        type:String ,
        required:false
    },
    endingSoon:{
        type:Boolean ,
        required:false
    }
    
});
export default mongoose.model("Compaigne",CompaigneSchema)