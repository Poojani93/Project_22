const express = require("express");
const router = express.Router();
const { Certificate } = require("../models");

router.get("/", async (req, res) => {
  const listOfCertificate = await Certificate.findAll();
  res.json(listOfCertificate);
});

router.get("/stu/:studentId", async (req, res) => {
  const studentId = req.params.studentId;
  const certificate = await Certificate.findAll({ where: { StudentId: studentId } });
  res.json(certificate);
});

router.post("/", async (req, res) => {
  const certificate = req.body;
  await Certificate.create(certificate);
  res.json(certificate);
});

module.exports = router;