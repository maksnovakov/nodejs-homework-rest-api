const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { ServiceError } = require("../../helpers");
const { User } = require("../../models/user");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new ServiceError(401, "Email or password is wrong");
  }
  const passCompare = bcrypt.compareSync(password, user.password);
  if (!passCompare) {
    throw new ServiceError(401, "Email or password is wrong");
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.json({
    token,
    user: {
      email,
    },
  });
};

module.exports = login;
