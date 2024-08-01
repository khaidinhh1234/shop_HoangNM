import Products from "../models/product";

export const SearchProduct = async (req, res) => {
    try {
        const { keyword } = req.query;

        if (!keyword) {
            return res.status(400).json({ msg: 'Keyword is required' });
        }

        // Tìm kiếm sản phẩm dựa trên từ khóa
        const products = await Products.find({
            name: { $regex: keyword, $options: 'i' },
        });

        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};