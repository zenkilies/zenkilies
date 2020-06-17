const path = require("path");

require("dotenv").config();

module.exports = {
  env: {
    //
  },
  webpack(config, {}) {
    config.resolve.alias["src"] = path.join(__dirname, "/src");
    return config
  },
};
