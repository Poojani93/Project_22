const express = require("express");
const router = express.Router();
const { Practicals } = require("../models");

router.get("/", async (req, res) => {
  const listOfPracticals = await Practicals.findAll();
  res.json(listOfPracticals);
});

router.get("/sub/:subjectId", async (req, res) => {
    const subjectId = req.params.subjectId;
    const practical = await Practicals.findAll({ where: { SubjectId: subjectId } });
    res.json(practical);
  });

router.post("/", async (req, res) => {
  const practical = req.body;
  await Practicals.create(practical);
  res.json(practical);
});

module.exports = router;