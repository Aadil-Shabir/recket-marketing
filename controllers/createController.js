const Make = require("../models/make");
const Model = require("../models/model");
const Year = require("../models/year");
const data = require("../data/data");
const ymms = require("../models/ymms");

const createYmms = async (req, res) => {
    try {
        // const models = await Model.create({ year: req.body.year, make: req.body.make, name: req.body.name });
        const models = await ymms.create(
            data.map((item) => {
                return { year: item.year, model: item.model, make: item.make, body_styles: item.body_styles };
            })
        );
        res.status(200).send({ success: true, message: "Data has been added" });
    } catch (err) {
        res.status(400).send({ success: false, message: err.message });
    }
};

module.exports = {
    createYmms,
};
