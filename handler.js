const serverless = require("serverless-http");
const express = require("express");
const app = express();
let nunjucks = require("nunjucks");

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.get("/", (req, res, next) => {
  let data = {
    message: "Hello world!",
    layout: "layout.njk",
    title: "Nunjucks example",
  };

  res.render("index.njk", data);
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
