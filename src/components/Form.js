import React, { useState } from "react";
import "./form.css";
import axios from "axios";

export const Form = (props) => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const newFeedback = {
      user: name,
      feedback,
    };
    axios
      .post("/api/feedback", newFeedback)
      .then(console.log("data sent to server"));
    props.upadteFeedabcks([...props.feedbacksdb, newFeedback]);
  };
  return (
    <div id="form">
      <h1> Feedback Form </h1>
      <p> We want to gather your feedback in order to perform requests </p>
      <form method="POST">
        <div className="question">
          <label htmlFor="name"> Leave your name here: </label>
          <input
            id="input1"
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="question">
          <label htmlFor="feedback">
            {" "}
            Give us your feedback about this session{" "}
          </label>
          <textarea
            id="input2"
            type="text"
            name="feedback"
            value={feedback}
            onChange={(e) => {
              setFeedback(e.target.value);
            }}
          />
        </div>
        <input
          id="input3"
          type="submit"
          value="Submit now"
          onClick={handleClick}
        />
      </form>
    </div>
  );
};
