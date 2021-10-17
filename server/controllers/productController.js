import mongoose from 'mongoose';
import Product from '../models/productModel.js'

export const getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find()

        res.status(201).json({ data: allProducts })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const createProduct = async (req, res) => {
    const { createdBy, title, description, price, selection, size, selectedFile } = req.body

    try {
        const result = await Product.create({
            title,
            description,
            price,
            selection,
            size,
            imageUrl: selectedFile,
            createdBy,
        })

        res.status(201).json({ result })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params
    const { createdBy, title, description, price, selection, size, selectedFile } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);

    const updatedProduct = { createdBy, title, description, price, selection, size, selectedFile, _id: id }

    await Product.findByIdAndUpdate(id, updateProduct, { new: true })

    res.json(updatedProduct)
}

export const delteProduct = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`)

    await Product.findByIdAndRemove(id)

    res.json({ message: "Product deleted successfully" })
}
