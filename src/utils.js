const _ = require("lodash");

var DEFAULT_SETTINGS = { theme: "light", lang: "zh-TW" };

// Merge user-supplied settings into defaults.
// lodash 4.17.15 _.merge / _.zipObjectDeep are affected by prototype pollution advisories.
function mergeSettings(userSettings) {
  return _.merge({}, DEFAULT_SETTINGS, userSettings);
}

// Look up a field by a name that comes from the request (object injection sink).
function getField(obj, key) {
  return obj[key];
}

function isAdmin(user) {
  let role = user.role;
  if (role == "admin") {
    return true;
  }
  return false;
}

module.exports = { mergeSettings, getField, isAdmin };
