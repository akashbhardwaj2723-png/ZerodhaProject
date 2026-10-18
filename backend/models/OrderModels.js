const { model } = require("mongoose");

const { OrderSchema } = require("../schema/OrderSchema");

const OrderModels = model("order", OrderSchema);

module.exports = { OrderModels };