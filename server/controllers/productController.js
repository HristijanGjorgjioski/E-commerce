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
