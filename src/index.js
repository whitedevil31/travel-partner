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
Port = process.env.port;
app.listen(Port, () => {
  console.log(`server is up on port ${Port}`);
});
