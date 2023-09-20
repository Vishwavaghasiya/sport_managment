const { teamService } = require("../services");

/**create team */
const createTeam = async (req, res) => {
    try {
        const reqBody = req.body;
        const team = await teamService.createTeam(reqBody);
        if (!team) {
            throw new Error("team not found !");
        }

        res.status(200).json({
            success: true,
            message: "team created !",
            data: team
        });
    } catch (error) {
        res.status(error?.message).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/** get list */
const getTeamList = async (req, res) => {
    try {
        const getList = await teamService.getTeamList();
        if (!getList) {
            throw new Error("team not found !");
        }

        res.status(200).json({
            success: true,
            message: "team list !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get details by id */
const getTeamDetails = async (req, res) => {
    try {
        const teamExist = await teamService.getTeamById(req.params.teamId);
        if (!teamExist) {
            throw new Error("team not found !");
        }

        res.status(200).json({
            success: true,
            message: "team is finded by id !",
            data: teamExist
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success : false,
            message : error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**update record */
const updateRecord = async (req, res) => {
    try {
        const teamId = req.params.teamId;
        const teamEx = await teamService.getTeamById(teamId);
        if (!teamEx) {
            throw new Error("Something wents wrong , please try again or later !");
        }

        const updated = await teamService.updateRecord(teamId, req.body);

        res.status(200).json({
            success: true,
            message: "Record updated !",
            data: updated
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**delete record */
const deleteRecord = async (req, res) => {
    try {
        const teamId = req.params.teamId;
        const teamExist = await teamService.getTeamList(teamId);
        if (!teamExist) {
            throw new Error("team is not found !");
        }

        await teamService.deleteRecord(teamId);

        res.status(200).json({
            success: true,
            message: "Record deleted successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createTeam,
    getTeamList,
    getTeamDetails,
    updateRecord,
    deleteRecord
}