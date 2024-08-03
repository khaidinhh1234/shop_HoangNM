import Cart from "../models/Cart";
import Order from "../models/Order";
import { StatusCodes } from "http-status-codes";
export const createOrder = async (req, res) => {
  const { userId, items, customerName, totalPrice } = req.body;

  try {
    const order = await Order.create({
      userId,
      items,
      customerName,
      totalPrice,
    });
    await Cart.findOneAndDelete({ userId });

    return res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find().populate("userId");
    if (orders.length === 0) {
      return res.status(200).json([]);
    }
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getOrderById = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await Order.findById(orderId).populate("userId");
    if (!order) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updateOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Not found" });
    }
    const data = await Order.findByIdAndUpdate({ _id: orderId }, req.body, {
      new: true,
    });
    return res.status(StatusCodes.OK).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteClientorder = async (req, res) => {
  const { userId } = req.params;
  try {
    const order = await Order.findById(userId);
    if (!order) {
      return res.status(404).json({ message: "Not found" });
    }
    await Order.findByIdAndDelete(userId);
    return res.status(200).json({ message: "Delete success" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const deleteOrder = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Not found" });
    }
    await Order.findByIdAndDelete(orderId);
    return res.status(200).json({ message: "Delete success" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
