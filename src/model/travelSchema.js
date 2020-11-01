const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
      trim: true,
    },
    date: { type: String },
  },
  { timestamps: true }
);

const Travel = mongoose.model("Travel", travelSchema);
module.exports = Travel;
