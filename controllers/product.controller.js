import mongoose from "mongoose";
import Product from "../models/product.model.js";


export const getProductById = async (req, res) => {

    const { id } = req.params
    const product_id = Number(id)

    if (isNaN(product_id)) {
        return res.status(400).json({
            message: "Invalid ID",
        });
    }


    try {
        const product = await Product.findOne({ id: id })
        if(!product){
            return res.status(404).json({
            message: "No product with that id",
        });
        }
        res.status(200).json({
            message: "Product Fetched Successfully",
            data: product
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const createProduct = async (req, res) => {

    const product = req.body

    if (!product.title || !product.image || !product.description || !product.price || !product.stock || !product.id) {
        return res.status(400).json(
            {
                message: "Invalid request: please provide all fields"
            }
        )
    }

    const addProduct = new Product(product)

    try {
        await newProduct.save()
        res.status(200).json({
            message: "Product Successfully added to database",
            data: addProduct
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

