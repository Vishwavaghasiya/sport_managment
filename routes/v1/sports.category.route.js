const express = require("express");

const { sportsCategoryValidation } = require("../../validation");
const { sportsCategoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/createsportsCategory",
    validate(sportsCategoryValidation.createSportsCategory),
    sportsCategoryController.createSportsCategory
);

router.get(
    "/getList",
    sportsCategoryController.getSportsCategoryList
);

router.get(
    "/getDetails/:sportsCategoryId",
    sportsCategoryController.getSportsCategoryDetails
);

router.put(
    "/update/:sportsCategoryId",
    sportsCategoryController.updateRecord
);

router.delete(
    "/delete/:sportsCategoryId",
    sportsCategoryController.deleteRecord
);

module.exports = router