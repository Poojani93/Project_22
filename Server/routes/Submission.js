const express = require("express");
const router = express.Router();
const { Submission } = require("../models");

router.get("/", async (req, res) => {
  const listOfSubmission = await Submission.findAll();
  res.json(listOfSubmission);
});

router.get("/ass/:assignmentId", async (req, res) => {
    const assignmentId = req.params.assignmentId;
    const submission = await Submission.findAll({ where: { AssignmentId: assignmentId } });
    res.json(submission);
  });

router.post("/", async (req, res) => {
  const submission = req.body;
  await Submission.create(submission);
  res.json(submission);
});

module.exports = router;