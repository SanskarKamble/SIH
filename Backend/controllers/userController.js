const User = require("../models/userSchema");

const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password || !role) {
            res.status(201).json({ message: "Please enter all fields.", success: false });
        };
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(201).json({ message: "User with this email already exists.", success: false });
        };
        const newUser = await User.create({ name, email, password, role });
        await newUser.save();
        res.status(200).json({ message: "The user has been created successfully", newUser, success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(201).json({ message: "Please enter all fields", success: false });
        };
        const user = await User.findOne({ email: email });
        if (!user) {
            res.status(404).json({ message: "Incorrect Email", success: false });
        };
        const userPassword = user.password;
        if (password == userPassword) {
            res.status(200).json({ message: "User login successfully", success: true });
        } else {
            res.status(201).json({ message: "Password is incorrect", success: false });
        };
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

module.exports = { registerUser, loginUser };