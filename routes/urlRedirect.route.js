const express = require("express");
const Data = require("../models/data.model");

const urlRedirectRouter = express.Router();

urlRedirectRouter.route("/:url").get(async (req, res) => {
  const url = req.params.url;

  await Data.findOne({ shorten_url: url }).then(async (result) => {
    const redirectedUrl = result.url;
    let visitedCount = result.visits + 1;
    const id = result._id;

    await Data.findByIdAndUpdate(id, { visits: visitedCount }).then(() => {
      res.redirect(redirectedUrl);
    });
  });
});

module.exports = urlRedirectRouter;
