import compaigne from "../models/compaigne.js";

export const createCompaigne = async (req,res,next)=>{
    const newcompaigne = new compaigne(req.body)
    try{
    const saveCompaigne = await newcompaigne.save()
    res.status(200).json(saveCompaigne)
    }
    catch(err){
        next(err);
    }

}
export const updateCompaigne = async (req,res,next)=>{
    try{
        const updateCompaigne = await compaigne.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateCompaigne)
        }
    catch(err){
        next(err);
    }

}
export const getCompaigne = async (req,res,next)=>{
    try{
        const Compaigne = await compaigne.findById(req.params.id)
        res.status(200).json(Compaigne)
        }
    catch(err){
        next(err);
    }

}
export const deleteCompaigne = async (req,res,next)=>{
    try{
        await compaigne.findByIdAndDelete(req.params.id)
       res.status(200).json(updateCompaigne)
       }
    catch(err){
        next(err);
    }

}
export const getAllCompaigne = async (req,res,next)=>{
    const failed = true;
    try{
    const Compaignes = await compaigne.find()
    res.status(200).json(Compaignes)
    }
    catch(err){
        next(err);
    }

}
