const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "Short_Url",
    })
    .then(() => {
      console.log("MonogoDB connected");
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
};

module.exports = { dbConnect };
