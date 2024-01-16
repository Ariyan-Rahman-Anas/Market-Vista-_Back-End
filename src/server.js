const app = require("./app")
const port = 5001;

app.listen(port, () => {
    console.log(`The MarketVista Server is running http://localhost:${port}`)
})




//no need this //middleware
// const isLoggedIn = (req, res, next) => {
//   console.log("This is the isLoggedIn middleware");
//   const logIn = true;
//   if (logIn == true) {
//     req.body.id = 101
//     next();
//   } else {
//     res.status(401).json({ massage: "Please Log in first to access your profile." });
//   }
// }