const bcrypt = require("bcryptjs");
const { ServiceError } = require("../../helpers");
const gravatar = require("gravatar");
const { User } = require("../../helpers");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new ServiceError(409, "Emai; already exist");
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);
  await User.create({ email, password: hashPassword, avatarURL });
  res.status(201).json({
    user: {
      email,
      subscription: "starter",
    },
  });
};

module.exports = signup;
