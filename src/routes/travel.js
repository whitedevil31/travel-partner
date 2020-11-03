const express = require("express");
const Travel = require("../model/travelSchema");
const router = express.Router();
const auth = require("../auth");
const User = require("../model/userSchema");

router.post("/travel", auth, async (req, res) => {
  const travelPost = new Travel({ ...req.body, owner: req.user._id });
  const userPost = req.user._id;

  try {
    await travelPost.save();
    const userData = await User.findById(userPost);

    res.status(201).send({ travelPost, userData });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/travel/filter", auth, async (req, res) => {
  try {
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
router.get("/travel/getProfile", auth, async (req, res) => {
  try {
    const reqId = req.body.id;
    const user = await User.findById(reqId);
    res.status(200).send(user);
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
