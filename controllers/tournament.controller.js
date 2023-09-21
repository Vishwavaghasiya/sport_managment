const { tournamentService } = require("../services");

/**create Tournament */
const createTournament = async (req, res) => {
    try {
        const reqBody = req.body;
        const tournament = await tournamentService.createTournament(reqBody);
        if (!tournament) {
            throw new Error("Tournament not found !");
        }

        res.status(200).json({
            success: true,
            message: "Tournament created !",
            data: tournament
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get list */
const getTournamentList = async (req, res) => {
    try {
        const getList = await tournamentService.getTournamentList();
        if (!getList) {
            throw new Error("Tournament not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get list successfully !",
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
const getTournamentDetails = async (req, res) => {
    try {
        const tournamentExist = await tournamentService.getTournamentById(req.params.tournamentId);
        if (!tournamentExist) {
            throw new Error("tournament not found !");
        }

        res.status(200).json({
            success: true,
            message: "Tournament is finded by id !",
            data: tournamentExist
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**update record */
const updateRecord = async (req, res) => {
    try {
        const tournamentId = req.params.tournamentId;
        const tournamentEx = await tournamentService.getTournamentById(tournamentId);
        if (!tournamentEx) {
            throw new Error("Record not found!");
        }

        const updated = await tournamentService.updateRecord(tournamentId, req.body);

        res.status(200).json({
            success: true,
            message: "Record updated !",
            data: updated
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Record not found !"
        });
    }
}

/**delete record */
const deleteRecord = async (req, res) => {
    try {
        const tournamentId = req.params.tournamentId;
        const tournamentExist = await tournamentService.getTournamentList(tournamentId);
        if (!tournamentExist) {
            throw new Error("tournament is not found !");
        }

        await tournamentService.deleteRecord(tournamentId);

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
    createTournament,
    getTournamentList,
    getTournamentDetails,
    updateRecord,
    deleteRecord
}