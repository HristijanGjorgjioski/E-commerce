import User from "../models/userModel.js"

exports.login = (req, res) => {
    const { username, password } = req.body

    try {
        const oldUser = await User.findOne({ username })

        if(!oldUser) return res.status(404).json({ message: "User does not exist" })

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)

        if(!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' })

        res.status(200).json({ oldUser: user })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}
