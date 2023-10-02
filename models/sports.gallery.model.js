const mongoose = require("mongoose");
const base_url = "http://localhost:8030/"

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
        media_type: {
            type: String,
            trim: true
        },
        sports_image: {
            type: String,
            trim: true,
        },
        uploadedBy: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        team: {
            type: mongoose.Types.ObjectId,
            ref: "team"
        },
        sportsCategory: {
            type: mongoose.Types.ObjectId,
            ref: "sportsCategory"
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
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.sports_image) {
                    data.sports_image = `${base_url}sports_images/${data.sports_image}`;
                }
            },
        },
    }
);

const SportsGallery = mongoose.model("sportsGallery", sportsGallerySchema);
module.exports = SportsGallery