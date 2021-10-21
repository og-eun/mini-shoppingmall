const router = require("express").Router();
const authController = require("../controller/auth");
const { wrapHandler } = require("../middleware/handler");

router.get("/", wrapHandler(authController.checkToken)); // 토큰 체크
router.post("/login", wrapHandler(authController.login)); // 로그인
router.get("/logout", wrapHandler(authController.logout)); // 로그아웃

module.exports = router;
