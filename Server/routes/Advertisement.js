const express = require("express");
const router = express.Router();
const { Advertisement } = require("../models");

router.get("/", async (req, res) => {
  const listOfAdvertisement = await Advertisement.findAll();
  res.json(listOfAdvertisement);
});

router.get("/cou/:courseId", async (req, res) => {
  const courseId = req.params.courseId;
  const advertisement = await Advertisement.findAll({ where: { CourseId: courseId } });
  res.json(advertisement);
});

router.post("/", async (req, res) => {
  const advertisement = req.body;
  await Advertisement.create(advertisement);
  res.json(advertisement);
});

module.exports = router;