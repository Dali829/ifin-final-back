import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    productName:{
        type:String ,
        required:true
    },
    APRC:{
        type:Number ,
    
    },
   ProfiteRate:{
        type:Number ,
    
    },
    monthlyInstallment:{
        type:Number ,
    
    },
    totalPayment:{
        type:Number ,
    
    },
    bankName: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bank",
        required:true
     },
     productCategory: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required:true
     },
     
    topOffer:{
        type:Boolean ,
        required:false,
      
    }

});
export default mongoose.model("Product",ProductSchema)




