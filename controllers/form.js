import form from "../models/form.js";

export const createForm = async (req,res,next)=>{
    const newform = new form(req.body)
    try{
    const saveForm = await newform.save()
    res.status(200).json(saveForm)
    }
    catch(err){
        next(err);
    }

}
export const updateForm = async (req,res,next)=>{
    try{
        const updateForm = await form.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateForm)
        }
    catch(err){
        next(err);
    }

}
export const getForm = async (req,res,next)=>{
    try{
        const Form = await form.findById(req.params.id)
        res.status(200).json(Form)
        }
    catch(err){
        next(err);
    }

}
export const deleteForm = async (req,res,next)=>{
    try{
        await form.findByIdAndDelete(req.params.id)
       res.status(200).json(updateForm)
       }
    catch(err){
        next(err);
    }

}
export const getAllForm = async (req,res,next)=>{
    const failed = true;
    try{
    const Forms = await form.find().populate("answer")
    res.status(200).json(Forms)
    }
    catch(err){
        next(err);
    }

}
