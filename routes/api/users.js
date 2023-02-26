const express = require("express");

const { validation, authorization, upload } = require("../../middlewares");

const { controllerWrapper } = require("../../helpers");

const { schemas } = require("../../models/user");

const {
  users: { signup, login, getActual, logout, updateSigning, avatars },
} = require("../../controllers");

const router = express.Router();

router.post("/signup", validation(schemas.register), controllerWrapper(signup));

router.post("./login", validation(schemas.login), controllerWrapper(login));

router.get("/current", authorization, controllerWrapper(getActual));

router.get("/logout", authorization, controllerWrapper(logout));

router.patch(
  "/",
  authorization,
  validation(schemas.subscription),
  controllerWrapper(updateSigning)
);

router.patch(
  "/avatars",
  authorization,
  upload.singlee("avatar"),
  controllerWrapper(avatars)
);

module.exports = router;
