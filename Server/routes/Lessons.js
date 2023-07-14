const express = require("express");
const router = express.Router();
const { Lessons } = require("../models");

router.get("/", async (req, res) => {
  const listOfLessons = await Lessons.findAll();
  res.json(listOfLessons);
});

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const lesson = await Lessons.findByPk(id);
    res.json(lesson);
  });

router.get("/sub/:subjectId", async (req, res) => {
    const subjectId = req.params.subjectId;
    const lesson = await Lessons.findAll({ where: { SubjectId: subjectId } });
    res.json(lesson);
  });

router.post("/", async (req, res) => {
  const lesson = req.body;
  await Lessons.create(lesson);
  res.json(lesson);
});

module.exports = router;