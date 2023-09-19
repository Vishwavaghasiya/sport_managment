const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
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