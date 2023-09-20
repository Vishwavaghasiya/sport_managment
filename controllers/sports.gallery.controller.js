const { sportsGalleryService } = require("../services");

/**create sportsGallery */
const createSportsGallery = async (req, res) => {
    try {
        const reqBody = req.body;
        const sportsGallery = await sportsGalleryService.createSportsGallery(reqBody);
        if (!sportsGallery) {
            throw new Error("sportsGallery not found !");
        }

        res.status(200).json({
            success: true,
            message: "sportsGallery created !",
            data: sportsGallery
        });
    } catch (error) {
        res.status(error?.message).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/** get list */
const getSportsGalleryList = async (req, res) => {
    try {
        const getList = await sportsGalleryService.getSportsGalleryList();
        if (!getList) {
            throw new Error("sportsGallery not found !");
        }

        res.status(200).json({
            success: true,
            message: "sportsGallery list !",
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
const getSportsGalleryDetails = async (req, res) => {
    try {
        const sportsGalleryExist = await sportsGalleryService.getSportsGalleryById(req.params.sportsGalleryId);
        if (!sportsGalleryExist) {
            throw new Error("sportsGallery not found !");
        }

        res.status(200).json({
            success: true,
            message: "sportsGallery is finded by id !",
            data: sportsGalleryExist
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**update record */
const updateRecord = async (req, res) => {
    try {
        const sportsGalleryId = req.params.sportsGalleryId;
        const sportsGalleryEx = await sportsGalleryService.getSportsGalleryById(sportsGalleryId);
        if (!sportsGalleryEx) {
            throw new Error("Something wents wrong , please try again or later !");
        }

        const updated = await sportsGalleryService.updateRecord(sportsGalleryId, req.body);

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
        const sportsGalleryId = req.params.sportsGalleryId;
        const sportsGalleryExist = await sportsGalleryService.getSportsGalleryList(sportsGalleryId);
        if (!sportsGalleryExist) {
            throw new Error("sportsGallery is not found !");
        }

        await sportsGalleryService.deleteRecord(sportsGalleryId);

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
    createSportsGallery,
    getSportsGalleryList,
    getSportsGalleryDetails,
    updateRecord,
    deleteRecord
}