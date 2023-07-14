const express = require("express");
const router = express.Router();
const { Students } = require("../models");

router.get("/", async (req, res) => {
  const listOfStudents = await Students.findAll();
  res.json(listOfStudents);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const attendence = await Students.findByPk(id);
  res.json(attendence);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const certificate = await Students.findByPk(id);
  res.json(certificate);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const payment = await Students.findByPk(id);
  res.json(payment);
});

router.get("/gen/:genderId", async (req, res) => {
  const genderId = req.params.genderId;
  const student = await Students.findAll({ where: { GenderId: genderId } });
  res.json(student);
});

router.get("/uni/:universityId", async (req, res) => {
  const universityId = req.params.universityId;
  const student = await Students.findAll({ where: { UniversityId: universityId } });
  res.json(student);
});

router.get("/dis/:districtId", async (req, res) => {
  const districtId = req.params.districtId;
  const student = await Students.findAll({ where: { DistrictId: districtId } });
  res.json(student);
});

router.post("/", async (req, res) => {
  const student = req.body;
  await Students.create(student);
  res.json(student);
});

module.exports = router;