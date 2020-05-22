const express = require("express");

const a30RockRouter = require("../30Rock/a30RockRouter");

const server = express();

server.use(express.json());

server.use("/api/30Rock", a30RockRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
