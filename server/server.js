const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Feedback = require("./feedbackschema");
require("dotenv/config");

// setting json for requests/responses
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connecting to MongoDB
mongoose.connect(
  process.env.CONNECT_MONGODB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

// Setting Routes
app.get("/", (req, res) => {
  res.json({
    message: "This is / page",
  });
});

// Sending existing feedbacks in DB
app.get("/api/feedback", async (req, res) => {
  try {
    const dbFeedbacks = await Feedback.find();
    res.json(dbFeedbacks);
    console.log(dbFeedbacks);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

app.post("/api/feedback", async (req, res) => {
  const newFeedback = new Feedback({
    user: req.body.user,
    feedback: req.body.feedback,
  });
  await newFeedback
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Setting up the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
