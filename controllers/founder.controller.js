const { founderService } = require("../services");

/**create founder */
const createFounder = async (req, res) => {
    try {
        const reqBody = req.body;
        const founder = await founderService.createFounder(reqBody);
        if (!founder) {
            throw new Error("founder not found !");
        }

        res.status(200).json({
            success: true,
            message: "founder created !",
            data: founder
        });
    } catch (error) {
        res.status(error?.message).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/** get list */
const getFounderList = async (req, res) => {
    try {
        const getList = await founderService.getFounderList();
        if (!getList) {
            throw new Error("founder not found !");
        }

        res.status(200).json({
            success: true,
            message: "founder list !",
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
const getFounderDetails = async (req, res) => {
    try {
        const founderExist = await founderService.getFounderById(req.params.founderId);
        if (!founderExist) {
            throw new Error("founder not found !");
        }

        res.status(200).json({
            success: true,
            message: "founder is finded by id !",
            data: founderExist
        })
    } catch (error) {

    }
}

/**update record */
const updateRecord = async (req, res) => {
    try {
        const founderId = req.params.founderId;
        const founderEx = await founderService.getFounderById(founderId);
        if (!founderEx) {
            throw new Error("Something wents wrong , please try again or later !");
        }

        const updated = await founderService.updateRecord(founderId, req.body);

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
        const founderId = req.params.founderId;
        const founderExist = await founderService.getFounderList(founderId);
        if (!founderExist) {
            throw new Error("founder is not found !");
        }

        await founderService.deleteRecord(founderId);

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
    createFounder,
    getFounderList,
    getFounderDetails,
    updateRecord,
    deleteRecord
}