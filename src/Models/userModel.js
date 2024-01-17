const { Schema, model } = require("mongoose")
const bcrypt = require("bcrypt");
const { defaultImgPath } = require("../secret");


const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
    trim: true,
    minlength: [3, "The length of user name can be minimum of 3 character"],
    maxlength: [31, "The length of user name can be maximum of 31 character"],
  },
  email: {
    type: String,
    required: [true, "User email is required"],
    trim: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
      },
      message: "Please enter a valid email",
    },
  },
  password: {
    type: String,
    required: [true, " User password is required"],
    minlength: [6, "The length of user password can be minimum of 6 character"],
    set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
  },
  image: {
    type: String,
    default: defaultImgPath
  },
  address: {
    type: String,
    required: [true, "User address is required"],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "User phone number is required"],
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isBanned: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const User = model("Users", userSchema)

module.exports = User