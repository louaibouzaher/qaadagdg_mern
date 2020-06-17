const mongoose = require("mongoose");

const FeedbackSchema = mongoose.Schema({
  user: String,
  feedback: String,
});

const Feedback = mongoose.model("feedbacks", FeedbackSchema);
module.exports = Feedback;
