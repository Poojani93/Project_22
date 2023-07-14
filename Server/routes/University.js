const express = require("express");
const router = express.Router();
const { University } = require("../models");

router.get("/", async (req, res) => {
  const listOfUniversity = await University.findAll();
  res.json(listOfUniversity);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const university = await University.findByPk(id);
  res.json(university);
});

router.post("/", async (req, res) => {
  const university = req.body;
  await University.create(university);
  res.json(university);
});

module.exports = router;