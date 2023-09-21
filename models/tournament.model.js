const mongoose = require("mongoose");

const founderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        location: {
            type: String,
            trim: true
        },
        organizer: {
            type: String,
            trim: true
        },
        teams: {
            type: mongoose.Types.ObjectId,
            ref: "team"
        },
        founder: {
            type: mongoose.Types.ObjectId,
            ref: "founder"
        },
        matches: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timeseries: true,
        versionKey: false
    }
);

const founder = mongoose.model("founder", founderSchema);
module.exports = founder