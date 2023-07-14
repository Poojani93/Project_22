const express = require("express");
const app = express();

app.use(express.json());

const db = require("./models");

// Routers
const studentRouter = require("./routes/Students");
const lecturerRouter = require("./routes/Lecturers");
const genderRouter = require("./routes/Genders");
const universityRouter = require("./routes/University");
const attendenceRouter = require("./routes/Attendence");
const paymentRouter = require("./routes/Payment");
const bankRouter = require("./routes/Banks");
const certificateRouter = require("./routes/Certificate");
const courseRouter = require("./routes/Courses");
const subjectRouter = require("./routes/Subjects");
const lessonRouter = require("./routes/Lessons");
const resourcenoteRouter = require("./routes/ResourceNotes");
const resourcevideoRouter = require("./routes/ResourceVideos");
const practicalRouter = require("./routes/Practicals");
const assignmentRouter = require("./routes/Assignments");
const submissionRouter = require("./routes/Submission");
const gradeRouter = require("./routes/Grades");
const districtRouter = require("./routes/District");
const provinceRouter = require("./routes/Province");
const offerRouter = require("./routes/Offers");
const announcementRouter = require("./routes/Announcements");

app.use("/students", studentRouter);
app.use("/lecturers", lecturerRouter);
app.use("/genders", genderRouter);
app.use("/university", universityRouter);
app.use("/attendence", attendenceRouter);
app.use("/payment", paymentRouter);
app.use("/bank", bankRouter);
app.use("/certificate", certificateRouter);
app.use("/courses", courseRouter);
app.use("/subjects", subjectRouter);
app.use("/lessons", lessonRouter);
app.use("/resourcenotes", resourcenoteRouter);
app.use("/resourcevideos", resourcevideoRouter);
app.use("/practicals", practicalRouter);
app.use("/assignments", assignmentRouter);
app.use("/submission", submissionRouter);
app.use("/grades", gradeRouter);
app.use("/district", districtRouter);
app.use("/province", provinceRouter);
app.use("/offers", offerRouter);
app.use("/announcements", announcementRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
