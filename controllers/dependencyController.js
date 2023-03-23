const ymms = require("../models/ymms");

const getYears = async (req, res) => {
    try {
        const years = await ymms.distinct("year").lean();
        res.status(200).send({ success: true, data: years });
    } catch (err) {
        res.status(400).send({ success: false, message: err.message });
    }
};

const getMakes = async (req, res) => {
    try {
        const makes = await ymms.find({ year: req.body.year }).distinct("make");
        res.status(200).send({ success: true, data: makes });
    } catch (err) {
        res.status(400).send({ success: false, message: err.message });
    }
};

const getModels = async (req, res) => {
    try {
        const models = await ymms.find({ year: req.body.year, make: req.body.make }).distinct("model");
        res.status(200).send({ success: true, data: models });
    } catch (err) {
        res.status(400).send({ success: false, message: err.message });
    }
};

module.exports = {
    getYears,
    getMakes,
    getModels,
};
