import express  from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createAnswer, deleteAnswer, getAllAnswer, getAnswer, updateAnswer } from "../controllers/answer.js";

const router = express.Router();

router.post("/"/*,verifyAdmin*/,createAnswer);

router.put("/:id"/*,verifyAdmin*/,updateAnswer);

router.delete("/:id"/*,verifyAdmin*/,deleteAnswer);

router.get("/:id",getAnswer);

router.get("/",getAllAnswer);


export default router