module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve.fallback = {
    fs: false,
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
  };

  return config;
};
