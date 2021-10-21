const express = require("express");
const setRoutes = require("./routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

setRoutes(app);

app.use((err, req, res, next) => {
  res.json({ error: err });
});

module.exports = app;
