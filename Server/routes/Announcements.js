const express = require("express");
const router = express.Router();
const { Announcements } = require("../models");

router.get("/", async (req, res) => {
  const listOfAnnouncements = await Announcements.findAll();
  res.json(listOfAnnouncements);
});

router.get("/cou/:courseId", async (req, res) => {
  const courseId = req.params.courseId;
  const announcement = await Announcements.findAll({ where: { CourseId: courseId } });
  res.json(announcement);
});

router.post("/", async (req, res) => {
  const announcement = req.body;
  await Announcements.create(announcement);
  res.json(announcement);
});

module.exports = router;