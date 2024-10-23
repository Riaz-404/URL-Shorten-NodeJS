const Data = require("../models/data.model");
const shorterUrlGenerator = require("../utils/shorterUrlGenerator");

const handleGetAllUrl = async (req, res) => {
  await Data.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error("Error: " + err);
    });
};

const handlePostUrl = async (req, res) => {
  const url = req.body;

  url.shorten_url = shorterUrlGenerator();

  await Data.create(url)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send("Error: " + err);
    });
};

const handleGetUrl = async (req, res) => {
  const url = req.params.url;

  await Data.findOne({ shorten_url: url })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleUrlAnalytics = async (req, res) => {
  const url = req.params.url;

  await Data.findOne({ shorten_url: url })
    .then((result) => {
      res.json({
        "total visited": result.visitHistory.length,
        "visited history": result.visitHistory,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  handleGetAllUrl,
  handlePostUrl,
  handleGetUrl,
  handleUrlAnalytics,
};
