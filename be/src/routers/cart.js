import { Router } from "express";
import {
  createCart,
  descreaseQuantity,
  getByIdCart,
  inscreaseQuantity,
} from "../controllers/cart";
const CartRoute = Router();

CartRoute.get("/:userId", getByIdCart);

CartRoute.post("/add-to-cart", createCart);

CartRoute.post("/add-to-cart");

CartRoute.post("/inscrease", inscreaseQuantity);

CartRoute.post("/descrease", descreaseQuantity);

export default CartRoute;
