const authRoute = require("./auth");
const userRoute = require("./user");

const setRoutes = (app) => {
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
};

module.exports = setRoutes;
