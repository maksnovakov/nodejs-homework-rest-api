const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Maks:Markiz123@cluster0.xz3r3az.mongodb.net/contacts-reader?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(console.log("Database connection successfull"))
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
