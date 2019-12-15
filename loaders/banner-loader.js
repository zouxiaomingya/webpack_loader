const loaderUtils = require("loader-utils");
const schemaUtils = require("schema-utils");
const fs = require("fs");

function loader(soure) {
  const options = loaderUtils.getOptions(this);
  const cb = this.async();
  const schema = {
    type: "object",
    properties: {
      text: {
        type: "string"
      },
      filename: {
        type: "string"
      }
    }
  };
  schemaUtils(schema, options, "banner-loader");
  if (options.filename) {
    this.addDependency(options.filename)
    fs.readFile(options.filename, "utf8", function(err, data) {
      cb(err, `/**${data}**/${soure}`);
    });
  } else {
    cb(null, `/**${option.text}**/${soure}`);
  }
}

module.exports = loader;
