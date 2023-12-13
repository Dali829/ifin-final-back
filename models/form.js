import mongoose from 'mongoose';

const FormSchema = new mongoose.Schema({
    question:{
        type:String ,
        required:true
    },
    answer: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer"
     },
    Required:{
        type:Boolean ,
        required:false
    }

});
export default mongoose.model("Form",FormSchema)




