const express = require("express");
const router = express.Router();
const { Province } = require("../models");

router.get("/", async (req, res) => {
  const listOfProvince = await Province.findAll();
  res.json(listOfProvince);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const province = await Province.findByPk(id);
  res.json(province);
});

router.post("/", async (req, res) => {
  const province = req.body;
  await Province.create(province);
  res.json(province);
});

module.exports = router;