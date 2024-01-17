const mongoose = require("mongoose")
const { DB_URI } = require("../secret")

const connectDataBase = async (options={}) => {
    try {
        await mongoose.connect(DB_URI, options);
        console.log("Successfully connected with MongoDB!")

        mongoose.connection.on("error", (error) => {
            console.error("DB connection error: ", error)
        })
    } catch (error) {
      console.error("Could not connect to DB: ", error.toString());
    }
}
module.exports = connectDataBase