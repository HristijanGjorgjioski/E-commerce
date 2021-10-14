import Product from '../models/productModel.js'

export const createProduct = async (req, res) => {
    const { createdBy, title, description, price, collection, size, imageUrl } = req.body

    try {
        const result = await Product.create({
            title,
            description,
            price,
            selection: collection,
            size,
            imageUrl,
            createdBy,
        })

        res.status(201).json({ result })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}
