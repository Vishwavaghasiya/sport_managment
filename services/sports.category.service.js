const { SportsCategory } = require("../models");

const createSportsCategory = async (reqBody) => {
    return SportsCategory.create(reqBody);
}

const getSportsCategoryList = async (req, res) => {
    return SportsCategory.find();
}

const getSportsCategoryById = async (sportsCategoryId) => {
    return SportsCategory.findById(sportsCategoryId);
}

const updateRecord = async (sportsCategoryId, updateBody) => {
    return SportsCategory.findByIdAndUpdate(sportsCategoryId, { $set: updateBody })
}

const deleteRecord = async (sportsCategoryId) => {
    return SportsCategory.findByIdAndDelete(sportsCategoryId);
}

module.exports = {
    createSportsCategory,
    getSportsCategoryById,
    getSportsCategoryList,
    updateRecord,
    deleteRecord
}