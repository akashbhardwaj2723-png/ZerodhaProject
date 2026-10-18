
const { model } = require("mongoose");
const { UserSchema } = require("../schema/UserSchema");

const UserModels = model("User", UserSchema);

module.exports = { UserModels };
