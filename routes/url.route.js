const express = require("express");
const {
  handleGetAllUrl,
  handlePostUrl,
  handleGetUrl,
  handleUrlAnalytics,
  handleDeleteUrl,
} = require("../controllers/url.controler");

const urlRouter = express.Router();

urlRouter.route("/").get(handleGetAllUrl).post(handlePostUrl);

urlRouter.route("/:url").get(handleGetUrl).post(handleDeleteUrl);

urlRouter.route("/analytics/:url").get(handleUrlAnalytics);

module.exports = urlRouter;
