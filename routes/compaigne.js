import express  from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createCompaigne, deleteCompaigne, getAllCompaigne, getCompaigne, updateCompaigne } from "../controllers/Compaigne.js";

const router = express.Router();

router.post("/"/*,verifyAdmin*/,createCompaigne);

router.put("/:id"/*,verifyAdmin*/,updateCompaigne);

router.delete("/:id"/*,verifyAdmin*/,deleteCompaigne);

router.get("/:id",getCompaigne);

router.get("/",getAllCompaigne);


export default router