const express = require("express");
const router = express.Router();
const { Assignments } = require("../models");

router.get("/", async (req, res) => {
  const listOfAssignments = await Assignments.findAll();
  res.json(listOfAssignments);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const assignment = await Assignments.findByPk(id);
  res.json(assignment);
});

router.get("/sub/:subjectId", async (req, res) => {
  const subjectId = req.params.subjectId;
  const assignment = await Assignments.findAll({ where: { SubjectId: subjectId } });
  res.json(assignment);
});

router.post("/", async (req, res) => {
  const assignment = req.body;
  await Assignments.create(assignment);
  res.json(assignment);
});

module.exports = router;