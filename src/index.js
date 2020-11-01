const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./config/.env" });
const connectDB = require("./db");

connectDB();
const userRoute = require("./routes/user");
const travelRoute = require("./routes/travel");

app.use(express.json());
app.use(userRoute);
app.use(travelRoute);
Port = process.env.port;
app.listen(Port, () => {
  console.log(`server is up on port `);
});
