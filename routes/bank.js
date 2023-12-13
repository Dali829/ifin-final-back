import express  from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createBank, deleteBank, getAllBank, getBank, updateBank } from "../controllers/bank.js";

const router = express.Router();

router.post("/"/*,verifyAdmin*/,createBank);

router.put("/:id"/*,verifyAdmin*/,updateBank);

router.delete("/:id"/*,verifyAdmin*/,deleteBank);

router.get("/:id",getBank);

router.get("/",getAllBank);


export default router