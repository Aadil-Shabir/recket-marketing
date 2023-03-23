const mongoose = require("mongoose");

const ymmsSchema = new mongoose.Schema({
    year: { type: Number },
    make: { type: String },
    model: { type: String },
    body_styles: { type: String },
});

module.exports = mongoose.model("ymms", ymmsSchema);
