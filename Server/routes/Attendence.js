const express = require("express");
const router = express.Router();
const { Attendence } = require("../models");

router.get("/", async (req, res) => {
  const listOfAttendence = await Attendence.findAll();
  res.json(listOfAttendence);
});

router.get("/stu/:studentId", async (req, res) => {
  const studentId = req.params.studentId;
  const attendence = await Attendence.findAll({ where: { StudentId: studentId } });
  res.json(attendence);
});

router.post("/", async (req, res) => {
  const attendence = req.body;
  await Attendence.create(attendence);
  res.json(attendence);
});

module.exports = router;