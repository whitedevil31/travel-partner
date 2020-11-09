const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config({ path: "./config/.env" });
const connectDB = require("./db");

connectDB();
const userRoute = require("./routes/user");
const travelRoute = require("./routes/travel");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

app.use(userRoute);
app.use(travelRoute);

const multer = require("multer");
const upload = multer({ dest: "images" });
app.post("/upload", upload.single("avatar"), (req, res) => {
  res.send();
});

port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server is up on port " + port);
});
