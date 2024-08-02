import { Router } from "express";
import { SearchProduct } from "../controllers/Search";

const searchProduct = Router();

searchProduct.get("/", SearchProduct);

export default searchProduct;
