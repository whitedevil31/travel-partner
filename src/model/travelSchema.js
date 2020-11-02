const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
    trim: true,
  },
  startDate: { type: Date },
  endDate: { type: Date },
});

const Travel = mongoose.model("Travel", travelSchema);
module.exports = Travel;
