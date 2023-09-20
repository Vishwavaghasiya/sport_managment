const { Team } = require("../models");

const createTeam = async (reqBody) => {
    return Team.create(reqBody);
}

const getTeamList = async (req, res) => {
    return Team.find();
}

const getTeamById = async (teamId) => {
    return Team.findById(teamId);
}

const updateRecord = async (teamId, updateBody) => {
    return Team.findByIdAndUpdate(teamId, { $set: updateBody })
}

const deleteRecord = async (teamId) => {
    return Team.findByIdAndDelete(teamId);
}

module.exports = {
    createTeam,
    getTeamById,
    getTeamList,
    updateRecord,
    deleteRecord
}