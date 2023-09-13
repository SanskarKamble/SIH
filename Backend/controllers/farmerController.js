const Farmer = require('../models/farmerSchema');
const User = require('../models/userSchema');

const createFarmer = async (req, res) => {
    try {
        const userEmail = req.params.email;
        const existingUser = await User.findOne({ email: userEmail });
        if (!existingUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        const { contactNumber, location, nearestMarketPlace, acresOfLand, averageCost, awareness } = req.body;
        const farmer = new Farmer({
            email: userEmail,
            contactNumber,
            location,
            nearestMarketPlace,
            acresOfLand,
            averageCost,
            awareness
        });
        const savedFarmer = await farmer.save();
        res.status(201).json(savedFarmer);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    };
};

module.exports = { createFarmer };
