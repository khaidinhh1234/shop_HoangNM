import Products from "../models/product";
export const createProduct = async (req, res) => {
  try {
    const Product = await Products.create(req.body);
    return res.status(201).json(Product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find().populate({
      path: "category",
      select: "name",
    });
    if (products.length === 0) {
      return res.status(200).json([]);
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getProduct = async (req, res) => {
  try {
    const Product = await Products.findById(req.params.id);
    res.status(200).json(Product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const Product = await Products.findByIdAndDelete(req.params.id);
    res.status(200).json(Product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const Product = await Products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(Product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
