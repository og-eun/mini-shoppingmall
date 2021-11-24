require("dotenv").config();

const { connectDB } = require("./src/database/mongo");
const server = require("./src/server");
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";
const MONGO_URL =
  process.env.MONGO_URL;

const start = async () => {
  try {
    await connectDB(MONGO_URL);
    server.listen(PORT, () => console.log(`http://${HOST}:${PORT}`));
  } catch (error) {
    console.log("Server start failed", error);
  }
};

start();
