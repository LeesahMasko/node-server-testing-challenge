const express = require("express");
const The30Rockers = require("./a30Rock-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const the30Rockers = await The30Rockers.get30Rockers();
    res.status(200).json(the30Rockers);
  } catch (err) {
    console.log("get30Rockers error", err);
    res.status(500).json({ message: "there was an error getting those 30Rockers", error: err })
  }
});

router.post("/", async (req, res) => {
  try {
    const new30Rocker = {
      name: req.body.name
    };
    await The30Rockers.add30Rocker(new30Rocker).then(a30Rocker => {
      res.status(201).json(a30Rocker);
    });
  } catch (err) {
    console.log("add 30Rockers error", err);
    res.status(500).json({ message: "there was an error adding that 30Rocker", error: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const bye30Rocker = await The30Rockers.delete30Rocker(req.params.id);
    res.status(200).json(bye30Rocker);
  } catch (err) {
    console.log("delete 30Rocker error", err);
    res.status(500).json({ message: "there was an error deleting that 30Rocker", error: err })
  }
});

module.exports = router;
