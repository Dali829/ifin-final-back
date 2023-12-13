import mongoose from 'mongoose';

const AnswerSchema = new mongoose.Schema({
    title:{
        type:String ,
        required:true,
        unique:true
    }
});
export default mongoose.model("Answer",AnswerSchema)




