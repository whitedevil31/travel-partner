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

router.get("/filter", async (req, res) => {
  try {
    // const reqData = req.body;
    // const reqDatagte = req.body.$gte;
    // const reqDatalte = req.body.$lte;
    // const reqDataLoc = req.body.location;

    const response = await Travel.find({
      location: req.body.location,
      startDate: { $gte: req.body.startDate, $lte: req.body.endDate },
    });
    res.send({ response });
  } catch (e) {
    console.log(e);
  }
});

router.get("/filterdate", async (req, res) => {
  try {
    const reqData = req.body;
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
