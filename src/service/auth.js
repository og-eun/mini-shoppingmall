const bcrypt = require("bcrypt");
const userService = require("./user");
const auth = require("../middleware/auth");

/**
 * 로그인
 */
exports.login = async function (req) {
  const { email, password } = req.body;
  const user = await userService.getUser(email);
  const isCorrectPw = await bcrypt.compare(password, user.password);
  if (!isCorrectPw) throw new Error("비밀번호가 일치하지 않습니다.");
  else return "login success";
};

/**
 * 토큰 체크
 */
exports.checkToken = async function (req, next) {
  const token = req.get("accessToken");
  req.decoded = await auth.verifyAccessToken(token);
  return next();
};
