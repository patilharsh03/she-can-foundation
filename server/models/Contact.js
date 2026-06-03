const mongoose = require("mongoose");

const contactScheme = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
        },

        message: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

// 9BykQqzuoAFwIB2j
module.exports = mongoose.model("Contact", contactScheme);