const Joi = require("joi");

const createFounder = {
    body: Joi.object().keys(
        {
            name: Joi.string().required().trim(),
            DOB: Joi.string().required().trim(),
            user: Joi.string().required().trim(),
            sports_agency: Joi.string().required().trim(),
            clients: Joi.number().integer(),
            contactUs: Joi.string().required().trim()
        }
    )
}

module.exports = {
    createFounder
}