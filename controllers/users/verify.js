const { User } = require("../../models/user");
const { ServiceError, sendMail } = require("../../helpers");

const verify = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new ServiceError(401);
  }
  if (user.verify) {
    throw new ServiceError(400, "Verification has already been passed");
  }
  const mail = {
    to: email,
    subject: "Підтвердження регістрації на сайті",
    html: `<a target="_blank"
            href="localhost:3000/api/auth/verify/${user.verificationToken}">
                Натисніть для підтвердження email
            </a>`,
  };
  await sendMail(mail);
  res.json({
    message: "Verification email sent",
  });
};

module.exports = verify;
