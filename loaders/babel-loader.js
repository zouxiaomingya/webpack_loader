const babel = require("@babel/core");
const loaderUtils = require("loader-utils");

function loader(soure) {
  const options = loaderUtils.getOptions(this);
  const cb = this.async();
  babel.transform(
    soure,
    {
      ...options,
      sourceMap: true,
      filename: this.resourcePath.split('/').pop() // 文件名
    },
    function(err, result) {
      cb(err, result.code, result.map);
    }
  );
}

module.exports = loader;
