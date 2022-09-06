const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Animal name is required."],
        minLength: [3, "Name must be a minimum of 3 characters."]
    },
    type: {
        type: String,
        required: [true, "Type of animal is required."],
        minLength: [3, "Type must be a minimum of 3 characters."]
    },
    desc: {
        type: String,
        required: [true, "Description is required."],
        minLength: [3, "Description must be a minimum of 3 characters."]
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },

    likes: {
        type: Number,
        default: 0,
    }

}, { timestamps: true });

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;