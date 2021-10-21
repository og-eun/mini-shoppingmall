const User = require("../models/User");
const auth = require("../middleware/auth");

/**
 * 회원 조회
 */
exports.getUser = async function (email) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("일치하는 회원이 없습니다.");
  return user;
};

/**
 * 회원 가입
 */
exports.insertUser = async function ({ email, password }) {
  const newUser = new User({
    email: email,
    password: password,
  });
  await newUser.save();
  const newUserToken = await auth.generateAccessToken(email);
  return { newUser, newUserToken };
};
