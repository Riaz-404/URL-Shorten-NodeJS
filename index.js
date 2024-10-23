const express = require("express");
const dotenv = require("dotenv");
const { dbConnect } = require("./utils/dbConnect");
const urlRouter = require("./routes/url.route");
const urlRedirectRouter = require("./routes/urlRedirect.route");

const app = express();
dotenv.config();

dbConnect();

app.use(express.urlencoded({ extended: false }));

app.use("/api", urlRouter);
app.use("/", urlRedirectRouter);

app.listen(process.env.PORT || 5500, () => {
  console.log(`Listening at port ${process.env.PORT}`);
});
