module.exports = function override(config, env) {

  const WARNING_TO_SILENCE = /Failed to parse source map/;

  const WARNING_TO_SILENCE$MANGLED = /for some reason silencing this also silences other errors too/;

  config.ignoreWarnings = [WARNING_TO_SILENCE$MANGLED];
    return config;
}
