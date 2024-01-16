require("dotenv").config();
const serverPort = process.env.PORT || 5002;
const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/MarketVista";

module.exports = {serverPort, DB_URI}