const authService = require("../service/auth");

/**
 * 로그인
 */
exports.login = async function (req, res, next) {
  const result = await authService.login(req);
  return res.status(200).json({ success: true, message: result });
};

/**
 * 로그아웃
 */
exports.logout = async function (req, res, next) {
  const result = await authService.logout(req);
  return res.status(200).json({ success: true, data: result });
};

/**
 * 토큰 체크
 */
exports.checkToken = async function (req, res, next) {
  await authService.checkToken(req, next);
  return res.status(200).json({ success: true, data: req.decoded });
};
