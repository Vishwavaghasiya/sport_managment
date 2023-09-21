const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        tournament: {
            type: mongoose.Types.ObjectId,
            ref: "tournament"
        },
        abbreviation: {
            type: String,
            trim: true
        },
        founded_year: {
            type: Number
        },
        home_venue: {
            type: String,
            trim: true
        },
        headCoach: {
            type: String,
            trim: true
        },
        championships: {
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

const Team = mongoose.model("team", TeamSchema);
module.exports = Team