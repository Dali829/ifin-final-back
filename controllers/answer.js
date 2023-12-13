import answer from "../models/answer.js";

export const createAnswer = async (req,res,next)=>{
    const newAnswer = new answer(req.body)
    try{
    const saveAnswer = await newAnswer.save()
    res.status(200).json(saveAnswer)
    }
    catch(err){
        next(err);
    }

}
export const updateAnswer = async (req,res,next)=>{
    try{
        const updateAnswer = await answer.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateAnswer)
        }
    catch(err){
        next(err);
    }

}
export const getAnswer = async (req,res,next)=>{
    try{
        const Answer = await answer.findById(req.params.id)
        res.status(200).json(Answer)
        }
    catch(err){
        next(err);
    }

}
export const deleteAnswer = async (req,res,next)=>{
    try{
        await answer.findByIdAndDelete(req.params.id)
       res.status(200).json(updateAnswer)
       }
    catch(err){
        next(err);
    }

}
export const getAllAnswer = async (req,res,next)=>{
    const failed = true;
    try{
    const Answers = await answer.find()
    res.status(200).json(Answers)
    }
    catch(err){
        next(err);
    }

}
