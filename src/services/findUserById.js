const User = require("../Models/userModel");
const createError = require("http-errors");
const mongoose = require("mongoose");

const findUserById = async (id) => {
    try {
        const options = { password: 0 };

        const user = await User.findById(id, options);
        if (!user) {
          throw createError(404, "user does not exist with this Id");
        }
        return user
    } catch (error) {
        if (error instanceof mongoose.Error) {
          throw createError(404, "Invalid user Id");
        }
        throw error
    }
}
module.exports = findUserById