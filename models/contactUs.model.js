const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        subject: {
            type: String,
            trim: true
        },
        message: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const ContactUs = mongoose.model("contactUs", contactUsSchema);
module.exports = ContactUs