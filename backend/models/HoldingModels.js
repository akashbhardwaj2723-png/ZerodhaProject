const { model } = require("mongoose");

const { HoldingSchema } = require("../schema/HoldingSchema");

const HoldingModels = new model("holding", HoldingSchema);

module.exports = { HoldingModels };