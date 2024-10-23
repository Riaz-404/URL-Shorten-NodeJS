const express = require("express");
const {
  handleGetAllUrl,
  handlePostUrl,
  handleGetUrl,
  handleUrlAnalytics,
} = require("../controllers/url.controler");

const urlRouter = express.Router();

urlRouter.route("/").get(handleGetAllUrl).post(handlePostUrl);

urlRouter.route("/:url").get(handleGetUrl);

urlRouter.route("/analytics/:url").get(handleUrlAnalytics);

module.exports = urlRouter;
