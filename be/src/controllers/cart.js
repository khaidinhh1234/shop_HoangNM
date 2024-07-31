import { StatusCodes } from "http-status-codes";
import Cart from "../models/Cart";

export const getByIdCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ userId }).populate("products.productId");
    if (!cart || cart.length === 0) {
      return res.status(200).json([]);
    }
    const carts = {
      products: cart.products.map((product) => {
        return {
          productId: product.productId._id,
          feature_image: product.productId.feature_image,
          name: product.productId.name,
          discount: product.productId.name,
          regular_price: product.productId.regular_price,
          quantity: product.quantity,
        };
      }),
      totalPrice: cart.products.reduce(
        (total, product) =>
          total + product.productId.regular_price * product.quantity,
        0
      ),
      finalTotalPrice: cart.products.reduce(
        (total, product) =>
          total + product.productId.regular_price * product.quantity,
        0
      ),
    };
    res.status(200).json(carts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const removeProductId = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Not found" });
    }

    cart.products = cart.products.filter(
      (product) =>
        product.productId && product.productId.toString() !== productId
    );
    await cart.save();
    return res.json({ cart });
  } catch (error) {
    res.status(500).json({ error: "Sản phẩm không tồn tại " });
  }
};
export const createCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, products: [] });
    } //check tồn tại

    const check = await cart.products.findIndex(
      (product) => product.productId.toString() == productId
    );
    console.log(check);
    if (check !== -1) {
      cart.products[check].quantity + quantity < 10
        ? (cart.products[check].quantity += quantity)
        : cart.products[check].quantity;
    } else {
      cart.products.push({ productId, quantity });
    }
    await cart.save();
    res.status(StatusCodes.CREATED).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const removeteCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const cart = await Cart.findOne({ userId }).populate("products.productId");
    if (!cart) return res.status(404).json([], { message: "Not found" });
    const check = cart.products.findIndex(
      (item) => item.productId.toString() === productId
    );
    if (check !== -1) {
      cart.products[check].remove();
    }
    await cart.save();
    return res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const inscreaseQuantity = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const cart = await Cart.findOne({ userId }).populate("products");
    if (!cart) return res.status(404).json({}).json({ message: "Not found" });
    const product = cart.products.find(
      (item) => item.productId.toString() === productId
    );
    if (!product) {
      return res.status(404).json([]).json({ message: "Not found" });
    }
    if (product.quantity < 10) {
      product.quantity++;
    }

    await cart.save();
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const descreaseQuantity = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Not found" });
    const product = cart.products.find(
      (item) => item.productId.toString() === productId
    );
    if (!product) return res.status(404).json({ message: "Not found" });
    if (product.quantity >= 2) {
      product.quantity--;
    }

    await cart.save();
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
