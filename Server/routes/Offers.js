const express = require("express");
const router = express.Router();
const { Offers } = require("../models");

router.get("/", async (req, res) => {
  const listOfOffers = await Offers.findAll();
  res.json(listOfOffers);
});

router.get("/cou/:courseId", async (req, res) => {
    const courseId = req.params.courseId;
    const offer = await Offers.findAll({ where: { CourseId: courseId } });
    res.json(offer);
  });

router.post("/", async (req, res) => {
  const offer = req.body;
  await Offers.create(offer);
  res.json(offer);
});

module.exports = router;