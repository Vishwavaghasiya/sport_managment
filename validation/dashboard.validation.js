const Joi = require("joi");

const createDashboard = {
    body: Joi.object().keys(
        {
            user: Joi.string().required().trim(),
            contactUs: Joi.string().required().trim(),
            email: Joi.string().required().trim(),
            teams: Joi.string().required().trim(),
            players: Joi.number().integer(),
            player_name: Joi.string().required().trim(),
            position: Joi.string().required().trim(),
            upcoming_events: Joi.string().required().trim(),
            event_name: Joi.string().required().trim()
        }
    )
}

module.exports = {
    createDashboard
}