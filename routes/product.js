import express  from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createProduct, deleteProduct, getAllProduct, getProduct, updateProduct } from "../controllers/product.js";

const router = express.Router();

router.post("/"/*,verifyAdmin*/,createProduct);

router.put("/:id"/*,verifyAdmin*/,updateProduct);

router.delete("/:id"/*,verifyAdmin*/,deleteProduct);

router.get("/:id",getProduct);

router.get("/",getAllProduct);


export default router