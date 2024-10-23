const express = require("express");
const dotenv = require("dotenv");
const { dbConnect } = require("./utils/dbConnect");
const path = require("path");
const urlRouter = require("./routes/url.route");
const urlRedirectRouter = require("./routes/urlRedirect.route");
const staticPageRouter = require("./routes/static.router");

const app = express();
dotenv.config();

dbConnect();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views/"));
app.use(express.urlencoded({ extended: false }));

app.use("/api", urlRouter);
app.use("/url", urlRedirectRouter);
app.use("/", staticPageRouter);

app.listen(process.env.PORT || 5500, () => {
  console.log(`Listening at port ${process.env.PORT}`);
});
