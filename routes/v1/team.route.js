const express = require("express");

const { teamValidation } = require("../../validation");
const { teamController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/createTeam",
    validate(teamValidation.createTeam),
    teamController.createTeam
);

router.get(
    "/getList",
    teamController.getTeamList
);

router.get(
    "/getDetails/:teamId",
    teamController.getTeamDetails
);

router.put(
    "/update/:teamId",
    teamController.updateRecord
);

router.delete(
    "/delete/:teamId",
    teamController.deleteRecord
);

module.exports = router