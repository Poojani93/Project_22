const express = require("express");
const router = express.Router();
const { ResourceNotes } = require("../models");

router.get("/", async (req, res) => {
  const listOfResourceNotes = await ResourceNotes.findAll();
  res.json(listOfResourceNotes);
});

router.get("/les/:lessonId", async (req, res) => {
    const lessonId = req.params.lessonId;
    const resourceNote = await ResourceNotes.findAll({ where: { LessonId: lessonId } });
    res.json(resourceNote);
  });

router.post("/", async (req, res) => {
  const resourceNote = req.body;
  await ResourceNotes.create(resourceNote);
  res.json(resourceNote);
});

module.exports = router;