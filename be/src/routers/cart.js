import { Router } from "express";
import {
  createCart,
  descreaseQuantity,
  getByIdCart,
  inscreaseQuantity,
  removeCartMany,
  removeProductId,
} from "../controllers/cart";
const CartRoute = Router();

CartRoute.get("/:userId", getByIdCart);

CartRoute.post("/add-to-cart", createCart);

CartRoute.delete("/delete-product", removeProductId);

CartRoute.post("/inscrease", inscreaseQuantity);

CartRoute.post("/descrease", descreaseQuantity);

export default CartRoute;
