const express = require("express");
const router = express.Router();
const { ResourceVideos } = require("../models");

router.get("/", async (req, res) => {
  const listOfResourceVideos = await ResourceVideos.findAll();
  res.json(listOfResourceVideos);
});

router.get("/les/:lessonId", async (req, res) => {
  const lessonId = req.params.lessonId;
  const resourceVideo = await ResourceVideos.findAll({ where: { LessonId: lessonId } });
  res.json(resourceVideo);
});

router.post("/", async (req, res) => {
  const resourceVideo = req.body;
  await ResourceVideos.create(resourceVideo);
  res.json(resourceVideo);
});

module.exports = router;