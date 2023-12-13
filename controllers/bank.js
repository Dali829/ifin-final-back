import bank from "../models/bank.js";

export const createBank = async (req,res,next)=>{
    const newbank = new bank(req.body)
    try{
    const saveBank = await newbank.save()
    res.status(200).json(saveBank)
    }
    catch(err){
        next(err);
    }

}
export const updateBank = async (req,res,next)=>{
    try{
        const updateBank = await bank.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateBank)
        }
    catch(err){
        next(err);
    }

}
export const getBank = async (req,res,next)=>{
    try{
        const Bank = await bank.findById(req.params.id)
        res.status(200).json(Bank)
        }
    catch(err){
        next(err);
    }

}
export const deleteBank = async (req,res,next)=>{
    try{
        await bank.findByIdAndDelete(req.params.id)
       res.status(200).json(updateBank)
       }
    catch(err){
        next(err);
    }

}
export const getAllBank = async (req,res,next)=>{
    const failed = true;
    try{
    const Banks = await bank.find()
    res.status(200).json(Banks)
    }
    catch(err){
        next(err);
    }

}
