const express = require("express");

const contactUsRoute = require("./contactUs.route");
const dashboardRoute = require("./dashboard.route");
const founderRoute = require("./founder.route");
const sportsCategoryRoute = require("./sports.category.route");
const sportsGalleryRoute = require("./sports.gallery.route");
const teamRoute = require("./team.route");
const tournamentRoute = require("./tournament.route");
const userRoute = require("./user.route");
const tokenRoute = require("./token.route");

const router = express.Router();

router.use("/contactUs", contactUsRoute);
router.use("/dashboard", dashboardRoute);
router.use("/founder", founderRoute);
router.use("/sportsCategory", sportsCategoryRoute);
router.use("/sportsGallery", sportsGalleryRoute);
router.use("/team", teamRoute);
router.use("/tournament", tournamentRoute);
router.use("/user", userRoute);
router.use("/token" , tokenRoute);

module.exports = router