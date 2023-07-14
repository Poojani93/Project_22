const express = require("express");
const router = express.Router();
const { Subjects } = require("../models");

router.get("/", async (req, res) => {
  const listOfSubjects = await Subjects.findAll();
  res.json(listOfSubjects);
});

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const subject = await Subjects.findByPk(id);
    res.json(subject);
  });

router.get("/cou/:courseId", async (req, res) => {
    const courseId = req.params.courseId;
    const subject = await Subjects.findAll({ where: { CourseId: courseId } });
    res.json(subject);
  });

  router.get("/lec/:lecturerId", async (req, res) => {
    const lecturerId = req.params.lecturerId;
    const subject = await Subjects.findAll({ where: { CourseId: lecturerId } });
    res.json(subject);
  });

router.post("/", async (req, res) => {
  const subject = req.body;
  await Subjects.create(subject);
  res.json(subject);
});

module.exports = router;