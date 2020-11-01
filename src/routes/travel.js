const express = require("express");
const Travel = require("../model/travelSchema");
const router = express.Router();

router.post("/travel", async (req, res) => {
  const travelPost = new Travel(req.body);
  try {
    await travelPost.save();
    res.status(201).send({ travelPost });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/travelfind", async (req, res) => {
  const reqData = req.body;
  console.log(reqData);
  const location = await Travel.find(reqData);
  res.send(location);
});

module.exports = router;
