const Joi = require("joi");

const createSportsGallery = {
    body: Joi.object().keys(
        {
            title: Joi.string().required().trim(),
            description: Joi.string().required().trim(),
            media_type: Joi.string().required().trim(),
            uploadedBy: Joi.string().required().trim(),
            sports_events: Joi.string().required().trim(),
            athlete: Joi.string().required().trim(),
        }
    )
}

module.exports = {
    createSportsGallery
}