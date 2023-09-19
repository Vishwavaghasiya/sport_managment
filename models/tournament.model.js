const mongoose = require("mongoose");

const tournamentSchema = new mongoose.Schema(
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

const Tournament = mongoose.model("tournament", tournamentSchema);
module.exports = Tournament