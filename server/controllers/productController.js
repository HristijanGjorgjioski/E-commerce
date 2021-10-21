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

export const searchProductByFilter = async (req, res) => {
    const { gender, size, selection } = req.query
    console.log(req.query)

    try {
        const products = await Product.find({ 
            $and: [ 
                { $or: [{ size }] },
                { $or: [{ gender }] },
                { $or: [{ selection }] },
                { $or: [{ size, selection }] },
                { $or: [{ size, gender }] },
                { $or: [{ size, gender, selection }] },
                { $or: [{ size, selection }] },
                { $or: [{ size, selection, gender }] },
                { $or: [{ size, selection }] },
            ] 
        })

        res.status(201).json({ data: products })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const createProduct = async (req, res) => {
    const { createdBy, title, description, price, selection, size, gender, imageUrl } = req.body

    try {
        const result = await Product.create({
            title,
            description,
            price,
            selection,
            size,
            gender,
            imageUrl,
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
    const { createdBy, title, description, price, selection, size, imageUrl, gender } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);

    const updatedProduct = { createdBy, title, description, price, selection, gender, size, imageUrl, _id: id }

    await Product.findByIdAndUpdate(id, updatedProduct, { new: true })

    res.json(updatedProduct)
}

export const deleteProduct = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`)

    await Product.findByIdAndRemove(id)

    res.json({ message: "Product deleted successfully" })
}
