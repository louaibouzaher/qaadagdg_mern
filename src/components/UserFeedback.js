import React from "react";
import "./userfeedback.css";

export const UserFeedback = (props) => {
  return (
    <div className="feedback">
      <h1>{props.feedbackinfo.user}</h1>
      <p>{props.feedbackinfo.feedback}</p>
    </div>
  );
};
