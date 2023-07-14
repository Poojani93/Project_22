const express = require("express");
const router = express.Router();
const { Lecturers } = require("../models");

router.get("/", async (req, res) => {
  const listOfLecturers = await Lecturers.findAll();
  res.json(listOfLecturers);
});

router.get("/gen/:genderId", async (req, res) => {
  const genderId = req.params.genderId;
  const lecturer = await Lecturers.findAll({ where: { GenderId: genderId } });
  res.json(lecturer);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const lecturer = await Lecturers.findByPk(id);
  res.json(lecturer);
});

router.post("/", async (req, res) => {
  const lecturer = req.body;
  await Lecturers.create(lecturer);
  res.json(lecturer);
});

module.exports = router;