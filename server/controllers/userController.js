import User from "../models/userModel.js"

export const login = async (req, res) => {
    const { username, password } = req.body

    try {
        const oldUser = await User.findOne({ username })

        if(!oldUser) return res.status(404).json({ message: "User does not exist" })

        // const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)

        // if(!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' })

        return res.status(200).json({ oldUser })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}
