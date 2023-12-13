import express  from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createClient, getAllClients } from "../controllers/client.js";

const router = express.Router();

router.post("/"/*,verifyAdmin*/,createClient);


router.get("/",getAllClients);


export default router