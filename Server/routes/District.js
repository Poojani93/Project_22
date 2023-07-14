const express = require("express");
const router = express.Router();
const { District } = require("../models");

router.get("/", async (req, res) => {
  const listOfDistrict = await District.findAll();
  res.json(listOfDistrict);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const district = await District.findByPk(id);
  res.json(district);
});

router.get("/pro/:provinceId", async (req, res) => {
  const provinceId = req.params.provinceId;
  const district = await District.findAll({ where: { ProvinceId: provinceId } });
  res.json(district);
});

router.post("/", async (req, res) => {
  const district = req.body;
  await District.create(district);
  res.json(district);
});

module.exports = router;