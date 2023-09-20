const { sportsCategoryService } = require("../services");

/**create sportsCategory */
const createSportsCategory = async (req, res) => {
    try {
        const reqBody = req.body;
        const sportsCategory = await sportsCategoryService.createSportsCategory(reqBody);
        if (!sportsCategory) {
            throw new Error("sportsCategory not found !");
        }

        res.status(200).json({
            success: true,
            message: "sportsCategory created !",
            data: sportsCategory
        });
    } catch (error) {
        res.status(error?.message).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/** get list */
const getSportsCategoryList = async (req, res) => {
    try {
        const getList = await sportsCategoryService.getSportsCategoryList();
        if (!getList) {
            throw new Error("sportsCategory not found !");
        }

        res.status(200).json({
            success: true,
            message: "sportsCategory list !",
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
const getSportsCategoryDetails = async (req, res) => {
    try {
        const sportsCategoryExist = await sportsCategoryService.getSportsCategoryById(req.params.sportsCategoryId);
        if (!sportsCategoryExist) {
            throw new Error("sportsCategory not found !");
        }

        res.status(200).json({
            success: true,
            message: "sportsCategory is finded by id !",
            data: sportsCategoryExist
        })
    } catch (error) {

    }
}

/**update record */
const updateRecord = async (req, res) => {
    try {
        const sportsCategoryId = req.params.sportsCategoryId;
        const sportsCategoryEx = await sportsCategoryService.getSportsCategoryById(sportsCategoryId);
        if (!sportsCategoryEx) {
            throw new Error("Something wents wrong , please try again or later !");
        }

        const updated = await sportsCategoryService.updateRecord(sportsCategoryId, req.body);

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
        const sportsCategoryId = req.params.sportsCategoryId;
        const sportsCategoryExist = await sportsCategoryService.getSportsCategoryList(sportsCategoryId);
        if (!sportsCategoryExist) {
            throw new Error("sportsCategory is not found !");
        }

        await sportsCategoryService.deleteRecord(sportsCategoryId);

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
    createSportsCategory,
    getSportsCategoryList,
    getSportsCategoryDetails,
    updateRecord,
    deleteRecord
}