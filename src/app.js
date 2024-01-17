const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors")
const xssClean = require("xss-clean")
const rateLimit = require("express-rate-limit");
const userRouter = require("./Routers/userRouter");
const seedRouter = require("./Routers/seedRouter");
const app = express();

//creating limit
const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 mnt
    max: 5,
    message: "Too many request from this IP. Please try again later.",
})

//middleware
app.use(rateLimiter)
app.use(xssClean());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", userRouter)
app.use("/api/seed", seedRouter)


app.get("/test", (req, res) => {
  res.status(200).send({
    message: "Welcome to the MarketVista",
  });
});


//client error handling
app.use((req, res, next) => {
  next(createError(404, "Route not found"));
});

//server error handling
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        success: false,
        message: err.message
    })
});

module.exports = app