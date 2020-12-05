// const express = require("express");
// require("dotenv").config();
// const port = process.env.port || 5001;
// const host = "localhost";
// const app = express();
// //middleware
// app.use((req, res, next) => {
//   console.log("middleware: 1");
//   // some jobs
//   next();
// });
// app.use((req, res, next) => {
//   console.log("middleware: 2");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("middleware: 3");
//   if (true) {
//     res.send("OK");
//   }
// });
// app.get("/user", (req, res) => {});
// app.listen(port, host, () => {
//   console.log("I'm listening on http://%s:%s", host, port);
// });


///Logger morgan


// const express = require("express");
// require("dotenv").config();
// const logger = require("morgan");
// const port = process.env.port || 5001;
// const host = "localhost";
// const app = express();
// //middleware
// app.use(logger("dev"));
// app.get("/user", (req, res) => {
//   res.send("User details");
// });
// app.listen(port, host, () => {
//   console.log("I'm listening on http://%s:%s", host, port);
// });



// Middlewarelere arasi data gonderme

// app.use((req, res, next) => { //Authentication
//     console.log("Auth");
//     // some jobs
//     res.isAuth = false;
//     next();
//   });
//   app.use((req, res, next) => {
//     console.log("Controller // db");
//    if (res.isAuth) {
//        console.log("Private data")
//    } else {
//        console.log("not auth")
//    }
//     next();
//   });
//   app.use((req, res, next) => {
//     console.log("middleware: 3");
//     if (true) {
//       res.send("send");
//     }
//   });


// COOKIES-PARSER

// const express = require("express");
// require("dotenv").config();
// var cookieParser = require("cookie-parser");
// const port = process.env.port || 5001;
// const host = "localhost";
// const app = express();
// //middleware
// app.use(cookieParser());
// app.use((req, res, next) => {
//   console.log("Cookies: ", req.signedCookies);
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Controller // db");
//   if (res.isAuth) {
//     console.log("Private data");
//   } else {
//     console.log("not auth");
//   }
//   next();
// });
// app.use((req, res, next) => {
//   console.log("middleware: 3");
//   if (true) {
//     res.send("send");
//   }
// });
// app.get("/user", (req, res) => {});
// app.listen(port, host, () => {
//   console.log("I'm listening on http://%s:%s", host, port);
// });

const express = require("express");
const path = require("path");
require("dotenv").config();
const port = process.env.port || 8080;
const host = "localhost";
const app = express();
//middleware
app.use(express.static(__dirname + "/public/stylesheets"))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.get("/", (req, res) => {
    res.render("index");
})
app.listen(port, host, () => {
    console.log("I'm listening on http://%s:%s", host, port);
})