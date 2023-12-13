import express  from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createForm, deleteForm, getAllForm, getForm, updateForm } from "../controllers/form.js";

const router = express.Router();

router.post("/"/*,verifyAdmin*/,createForm);

router.put("/:id"/*,verifyAdmin*/,updateForm);

router.delete("/:id"/*,verifyAdmin*/,deleteForm);

router.get("/:id",getForm);

router.get("/",getAllForm);


export default router