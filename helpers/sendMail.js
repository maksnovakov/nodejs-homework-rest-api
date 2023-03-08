const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (data) => {
  const mail = { ...data, from: "maksnovakov78@gmail.com" };
  await sgMail.send(mail);
  return true;
};

module.exports = sendMail;
