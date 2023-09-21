const express = require("express");

const { tournamentValidation } = require("../../validation");
const { tournamentController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/createtournament",
    validate(tournamentValidation.createTournament),
    tournamentController.createTournament
);

router.get(
    "/getList",
    tournamentController.getTournamentList
);

router.get(
    "/getDetails/:tournamentId",
    tournamentController.getTournamentDetails
);

router.put(
    "/update/:tournamentId",
    tournamentController.updateRecord
);

router.delete(
    "/delete/:tournamentId",
    tournamentController.deleteRecord
);

module.exports = router