const mongoose = require("mongoose");

// const mongodb = {
//     url: "mongodb+srv://vishgood1912:2kKi0KuvQnbCpa1o@cluster0vish.kbxvqrx.mongodb.net/sport_managment",
//     options: {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     }
// }

const connectDB = async (req, res) => {
    mongoose.connect("mongodb+srv://vishgood1912:2kKi0KuvQnbCpa1o@cluster0vish.kbxvqrx.mongodb.net/sport_managment")
        .then((data) => { console.log("Database connection successfully !") })
        .catch((error) => { console.log("Database connection eroor", error) })
}

module.exports = { connectDB }