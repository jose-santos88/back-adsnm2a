const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Você fez uma requisição GET na URL/");
});

app.post("/", function (req, res) {
  res.status(201).send("Você fez uma requisição POST");
});

app.put("/", function (req, res) {
  res.send("Você fez uma requisição PUT").status(204);
});

app.delete("/", function (req, res) {
  res.status(204).end()
});

app.listen(3000, () => {
  console.log("API iniciada");
});

module.exports = app;
