const userService = require("../service/user");

/**
 * 회원 조회 (1명)
 */
exports.getUser = async function (req, res) {
  const email = req.params.email;
  const user = await userService.getUser(email);
  return res.status(200).json({ success: true, data: user });
};

/**
 * 회원 가입
 */
exports.insertUser = async function (req, res) {
  const { email, password } = req.body;
  const { newUser, newUserToken } = await userService.insertUser({
    email,
    password,
  });
  return res
    .status(200)
    .json({ success: true, data: newUser, token: newUserToken });
};
