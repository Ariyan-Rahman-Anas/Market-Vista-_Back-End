const express = require("express")
const port = 5000
const app = express()

app.get("/test", (req, res) => {
    res.status(200).send({
        message: "Welcome to the MarketVista"
    })
})

app.listen(port, () => {
    console.log(`The MarketVista Server is running on:  ${port}`)
})