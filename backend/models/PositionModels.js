const { model } = require("mongoose");

const { PositionSchema } = require("../schema/PositionSchema");

const PositionModels = new model("position", PositionSchema);

module.exports = { PositionModels };