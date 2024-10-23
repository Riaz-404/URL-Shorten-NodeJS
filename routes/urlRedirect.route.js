const express = require("express");
const Data = require("../models/data.model");

const urlRedirectRouter = express.Router();

urlRedirectRouter.route("/:url").get(async (req, res) => {
  const url = req.params.url;

  await Data.findOne({ shorten_url: url }).then(async (result) => {
    const redirectedUrl = result.url;
    const id = result._id;

    await Data.findByIdAndUpdate(id, {
      $push: {
        visitHistory: {
          timestamps: Date.now(),
        },
      },
    }).then(() => {
      res.redirect(redirectedUrl);
    });
  });
});

module.exports = urlRedirectRouter;
