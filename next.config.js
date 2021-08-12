const path = require("path");
const nextTranslate = require("next-translate");

module.exports = {
  reactStrictMode: true,
  ...nextTranslate(),
};
