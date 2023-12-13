import mongoose from 'mongoose';

const BankSchema = new mongoose.Schema({
    bankName:{
        type:String ,
        required:true
    },
    country:{
        type:String ,
        required:false
    },
    bankLogo:{
        type:String ,
        required:false
    }, 
    referalLink:{
        type:String ,
        required:false
    },
    phoneNumber:{
        type:String ,
        required:false
    },
    bankEmail:{
        type:String ,
        required:false
    },
    adresse:{
        type:String ,
        required:false
    }
});
export default mongoose.model("Bank",BankSchema)