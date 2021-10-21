const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "이메일을 입력하세요."],
      unique: true,
      match: [/\S+@\S+\.\S+/, "이메일 형식에 맞춰 입력해주세요."],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "비밀번호를 입력해주세요."],
      minlength: [6, "비밀번호는 6자리 이상 입력 가능합니다."],
    },
  },
  { timestamps: true }
);

userSchema.index({ email: 1 });

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("User", userSchema);
