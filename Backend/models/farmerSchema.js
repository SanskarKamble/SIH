const mongoose = require("mongoose");

const farmerSchema = new mongoose.Schema({
    email: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    contactNumber: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    nearestMarketPlace: {
        type: String,
        required: true
    },
    acresOfLand: {
        type: Number,
        required: true
    },
    averageCost: {
        type: Number,
        required: true
    },
    awareness: {
        type: Boolean,
        required: true,
        default: false,
    }
});

const farmerModel = mongoose.model("Farmer", farmerSchema);
module.exports = farmerModel;