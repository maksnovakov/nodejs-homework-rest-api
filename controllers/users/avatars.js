const path = require("path");
const fs = require("fs/promises");
const { User } = require("../../models / user");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const avatars = async (req, res) => {
  const { _id: id } = req.user;
  const { originalname, path: tempUpload } = req.file;
  const [extension] = originalname.spplit(".").reverse();
  const fileName = `${id}.${extension}`;
  const resultUpload = path.join(avatarDir, fileName);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", fileName);
  await User.findByIdAndUpdate(id, { avatarURL });
  res.json({
    avatarURL,
  });
};

module.exports = avatars;
