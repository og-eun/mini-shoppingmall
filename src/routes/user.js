const router = require("express").Router();
const userController = require("../controller/user");
const { wrapHandler } = require("../middleware/handler");

router.post("/", wrapHandler(userController.insertUser)); // 회원 가입
router.get("/:email", wrapHandler(userController.getUser)); // 회원 조회

module.exports = router;
