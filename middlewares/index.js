const validation = require("./validation");
const validationId = require("./validayionId");
const authorization = require("./authorization");
const { addSchema, updateFavoriteSchema } = require("./validationJoi");
const {
  reqisterJoiSchema,
  subscriptionJoiSchema,
} = require("./validationJoiUser");
const upload = require("./upload");

module.exports = {
  validation,
  validationId,
  authorization,
  addSchema,
  updateFavoriteSchema,
  reqisterJoiSchema,
  subscriptionJoiSchema,
  upload,
};
