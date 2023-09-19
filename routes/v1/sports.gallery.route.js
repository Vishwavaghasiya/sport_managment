const express = require("express");

const { sportsGalleryValidation } = require("../../validation");
const { sportsGalleryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/createsportsGallery",
    validate(sportsGalleryValidation.createSportsGallery),
    sportsGalleryController.createSportsGallery
);

// router.get(
//     "/getList",
//     sportsGalleryController.getSportsGalleryList
// );

// router.get(
//     "/getDetails/:sportsGalleryId",
//     sportsGalleryController.getSportsGalleryDetails
// );

// router.put(
//     "/update/:sportsGalleryId",
//     sportsGalleryController.updateRecord
// );

// router.delete(
//     "/delete/:sportsGalleryId",
//     sportsGalleryController.deleteRecord
// );

module.exports = router