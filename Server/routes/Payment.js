const express = require("express");
const router = express.Router();
const { Payment } = require("../models");

router.get("/", async (req, res) => {
  const listOfPayment = await Payment.findAll();
  res.json(listOfPayment);
});

router.get("/stu/:studentId", async (req, res) => {
  const studentId = req.params.studentId;
  const payment = await Payment.findAll({ where: { StudentId: studentId } });
  res.json(payment);
});

router.post("/", async (req, res) => {
  const payment = req.body;
  await Payment.create(payment);
  res.json(payment);
});

module.exports = router;