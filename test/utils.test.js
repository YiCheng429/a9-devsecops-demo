const test = require("node:test");
const assert = require("node:assert");
const { mergeSettings, isAdmin } = require("../src/utils");

test("mergeSettings keeps defaults and applies overrides", () => {
  const s = mergeSettings({ theme: "dark" });
  assert.strictEqual(s.theme, "dark");
  assert.strictEqual(s.lang, "zh-TW");
});

test("isAdmin", () => {
  assert.strictEqual(isAdmin({ role: "admin" }), true);
  assert.strictEqual(isAdmin({ role: "user" }), false);
});
