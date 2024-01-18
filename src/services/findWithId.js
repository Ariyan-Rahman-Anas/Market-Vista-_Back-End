const User = require("../Models/userModel");
const createError = require("http-errors");
const mongoose = require("mongoose");

const findWithId = async (id, options={}) => {
    try {
        const item = await User.findById(id, options);
        if (!item) {
          throw createError(404, "item does not exist with this Id");
        }
        return item
    } catch (error) {
        if (error instanceof mongoose.Error) {
          throw createError(404, "Invalid item Id");
        }
        throw error
    }
}
module.exports = findWithId