import express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import compaigneRoute from './routes/compaigne.js'
import bankRoute from "./routes/bank.js"
import answerRoute from "./routes/answer.js"
import formRoute from "./routes/form.js"
import categorieRoute from "./routes/categorie.js"
import productRoute from "./routes/product.js"
import clientRoute from "./routes/client.js"
import cookieParser from "cookie-parser";
import cors from 'cors'
const app = express()
dotenv.config()

const connect =async () =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB")  
    } catch (error) {
        throw error
      }
};
mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected!")
})
mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected!")
})

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/bank",bankRoute);
app.use("/api/compaigne",compaigneRoute);
app.use("/api/answer",answerRoute);
app.use("/api/form",formRoute);
app.use("/api/categorie",categorieRoute);
app.use("/api/product",productRoute);
app.use("/api/client",clientRoute);








app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

app.listen(8800,()=>{
    connect()
    console.log("connected to backend")
})