import client from "../models/client.js";

export const createClient = async (req,res,next)=>{
    const newClient = new client(req.body)
    try{
    const saveClient = await newClient.save()
    res.status(200).json(saveClient)
    }
    catch(err){
        next(err);
    }

}


export const getAllClients = async (req,res,next)=>{
    const failed = true;
    try{
    const Clients = await client.find()
    res.status(200).json(Clients)
    }
    catch(err){
        next(err);
    }

}
