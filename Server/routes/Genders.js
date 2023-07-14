const express = require("express");
const router = express.Router();
const { Genders } = require("../models");

router.get("/", async (req, res) => {
  const listOfGenders = await Genders.findAll();
  res.json(listOfGenders);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const gender = await Genders.findByPk(id);
  res.json(gender);
});

router.post("/", async (req, res) => {
  const gender = req.body;
  await Genders.create(gender);
  res.json(gender);
});

module.exports = router;