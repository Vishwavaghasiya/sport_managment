const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        contactUs: {
            type: mongoose.Types.ObjectId,
            ref: "contactUs"
        },
        email: {
            type: mongoose.Types.ObjectId,
            ref: "contactUs"
        },
        teams: {
            type: String,
            trim: true
        },
        players: {
            type: Number,
            trim: true
        },
        player_name: {
            type: String,
            trim: true
        },
        position: {
            type: String,
            trim: true
        },
        upcoming_events: {
            type: String,
            trim: true
        },
        event_name: {
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

const Dashboard = mongoose.model("dashboard", dashboardSchema);
module.exports = Dashboard