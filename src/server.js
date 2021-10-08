const express = require('express');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api route 등록
app.use("/auth", authRoute);
app.use("/users", userRoute);

module.exports = app;