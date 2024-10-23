const express = require("express");
const Data = require("../models/data.model");

const staticPageRouter = express.Router();

staticPageRouter.get("/", async (req, res) => {
  const result = await Data.find({});

  res.render("home", {
    result
  });
});

module.exports = staticPageRouter;
