const mongoose = require("mongoose");

const connectDB = async (req, res) => {
    mongoose.connect("mongodb+srv://vishgood1912:2kKi0KuvQnbCpa1o@cluster0vish.kbxvqrx.mongodb.net/sport")
        .then((data) => { console.log("Database connection successfully !") })
        .catch((error) => { console.log("Database connection eroor", error) })
}

module.exports = { connectDB }