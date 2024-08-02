import { Router } from "express";
import { get } from "lodash";
import { createOrder, getAllOrder, getOrderById } from "../controllers/order";

const OrderRoute = Router();

OrderRoute.get("/", getAllOrder);
OrderRoute.get("/:orderId", getOrderById);
OrderRoute.post("/", createOrder);
export default OrderRoute;
