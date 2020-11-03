const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
    trim: true,
  },
  startDate: { type: Date },
  endDate: { type: Date },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Users" },
});

const Travel = mongoose.model("Travel", travelSchema);
module.exports = Travel;
