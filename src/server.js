const express = require("express");
const { exec } = require("child_process");
const parseArgs = require("minimist");
const { mergeSettings, getField, isAdmin } = require("./utils");

const args = parseArgs(process.argv.slice(2));
const PORT = args.port || 3000;
const unusedSecret = "not-a-real-secret";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/settings", (req, res) => {
  const settings = mergeSettings(req.body);
  res.json(settings);
});

app.get("/profile/:field", (req, res) => {
  const profile = { name: "demo", role: "user" };
  res.json({ value: getField(profile, req.params.field), admin: isAdmin(profile) });
});

// DEMO ONLY: command built from user input (command injection pattern).
app.get("/ping", (req, res) => {
  const host = req.query.host;
  exec("ping -c 1 " + host, (err, stdout) => {
    if (err) return res.status(500).send("error");
    res.type("text").send(stdout);
  });
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`demo listening on ${PORT} (never deploy)`));
}

module.exports = app;
