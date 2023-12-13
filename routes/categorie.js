import express  from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createCategorie, deleteCategorie, getAllCategorie, getCategorie, updateCategorie } from "../controllers/categorie.js";

const router = express.Router();

router.post("/"/*,verifyAdmin*/,createCategorie);

router.put("/:id"/*,verifyAdmin*/,updateCategorie);

router.delete("/:id"/*,verifyAdmin*/,deleteCategorie);

router.get("/:id",getCategorie);

router.get("/",getAllCategorie);


export default router