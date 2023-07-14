const express = require("express");
const router = express.Router();
const { Grades } = require("../models");

router.get("/", async (req, res) => {
  const listOfGrades = await Grades.findAll();
  res.json(listOfGrades);
});

router.post("/", async (req, res) => {
  const grade = req.body;
  await Grades.create(grade);
  res.json(grade);
});

module.exports = router;