const express = require("express");
const router = express.Router();
const { Banks } = require("../models");

router.get("/", async (req, res) => {
  const listOfBanks = await Banks.findAll();
  res.json(listOfBanks);
});

router.post("/", async (req, res) => {
  const bank = req.body;
  await Banks.create(bank);
  res.json(bank);
});

module.exports = router;