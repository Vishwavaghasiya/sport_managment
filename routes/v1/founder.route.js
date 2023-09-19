const express = require("express");

const { founderValidation } = require("../../validation");
const { founderController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/createfounder",
    validate(founderValidation.createFounder),
    founderController.createFounder
);

// router.get(
//     "/getList",
//     founderController.getFounderList
// );

// router.get(
//     "/getDetails/:founderId",
//     founderController.getFounderDetails
// );

// router.put(
//     "/update/:founderId",
//     founderController.updateRecord
// );

// router.delete(
//     "/delete/:founderId",
//     founderController.deleteRecord
// );

module.exports = router