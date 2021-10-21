const mongoose = require("mongoose");

exports.connectDB = async function (url) {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection successful");
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};

exports.disconnectDB = async function () {
  try {
    await mongoose.disconnect();
    console.log("MongoDB disconnection successful");
  } catch (error) {
    console.log("MongoDB disconnection failed", error);
  }
  await mongoose.disconnect();
};
