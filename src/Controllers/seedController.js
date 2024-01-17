const data = require("../data")
const User = require("../Models/userModel")

const seedUser = async (req, res, next) => {
  try {
    //deleting the all existing users
    await User.deleteMany({});

    //inserting new users
    const users = await User.insertMany(data.users);

    //success msg
    return res.status(201).json(users);
  } catch (error) {
    next(error);
  }
}

module.exports= {seedUser}