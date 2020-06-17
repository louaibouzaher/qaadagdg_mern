import React from "react";
import { UserFeedback } from "./UserFeedback";
import { Form } from "./Form";
import axios from "axios";
//add axios GET and POST

export const Feedback = (props) => {
  return (
    <div>
      <Form props={props} />

      {/* Here we add feedbacks that already exist in db */}

      {/* {feedbacks.map((feedback) => 
        <UserFeedback feedbackinfo={feedback} key={feedback._id} />
      )} */}
    </div>
  );
};
