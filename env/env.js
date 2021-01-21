module.exports = {};

const dev_mt_url = "https://www.sky.com";
const stg_mt_url = "https://www.sky.com";
const preprd_mt_url = "https://www.sky.com";
const prd_mt_url = "https://www.sky.com";

//============================================================================

var url;
var URL = function (mt_url) {
  this.mt_url = mt_url;
};

// Returns key for mashery
function getCurrentUrl() {
  let env = process.env.ENV || "preprd";

  switch (env) {
    case "dev": {
      return new URL(dev_mt_url);
    }
    case "stg": {
      return new URL(stg_mt_url);
    }
    case "preprd": {
      return new URL(preprd_mt_url);
    }
    case "prd": {
      return new URL(prd_mt_url);
    }
    default: {
      return "";
    }
  }
}

// Returns current mashery key
exports.url = getCurrentUrl();

module.exports = exports;
