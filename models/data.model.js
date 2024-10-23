const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    shorten_url: {
      type: String,
      required: true,
      unique: true,
    },
    visitHistory: [{ timestamps: { type: Date } }],
  },
  { timestamps: true }
);

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
