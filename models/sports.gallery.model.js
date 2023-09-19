const mongoose = require("mongoose");

const sportsGallerySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        //image , video
        media_type: {
            type: String,
            trim: true
        },
        uploadedBy: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        sports_events: {
            type: String,
            trim: true
        },
        athlete: {
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

const SportsGallery = mongoose.model("sportsGallery", sportsGallerySchema);
module.exports = SportsGallery