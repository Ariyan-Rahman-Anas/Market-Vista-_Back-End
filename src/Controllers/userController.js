const createError = require("http-errors");
const { users } = require("../Models/userModel");



const getUsers = (req, res, next) => {
  try {
    console.log(req.body.id);
    res.status(200).send({
      message: "Users were returned!",
      users: users
    });
  } catch (error) {
      next(error)
  }
};

module.exports = { getUsers };