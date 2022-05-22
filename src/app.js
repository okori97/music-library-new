const express = require("express");
const res = require("express/lib/response");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200);
  res.body("Hello World");
});
module.exports = app;
