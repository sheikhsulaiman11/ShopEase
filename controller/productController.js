import { Product } from "../model/productModel.js";

// GET all products — renders home page
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.render("products", { products, user: req.user });
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
};

// GET single product
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send("Product not found");
        res.render("productDetail", { product, user: req.user });
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
};
