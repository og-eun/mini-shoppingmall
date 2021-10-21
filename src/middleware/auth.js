const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

/**
 * 토큰 발급
 */
exports.generateAccessToken = function (email) {
  return jwt.sign({ email: email }, JWT_SECRET_KEY, { expiresIn: "1d" });
};

/**
 * 토큰 체크
 */
exports.verifyAccessToken = function (token) {
  return jwt.verify(token, JWT_SECRET_KEY);
};
