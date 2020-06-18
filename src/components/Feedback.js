import React, { useState, useEffect } from "react";
import { UserFeedback } from "./UserFeedback";
import { Form } from "./Form";
import axios from "axios";

export const Feedback = (props) => {
  const [Feedbacksdb, setFeedbacksdb] = useState([]);
  useEffect(() => {
    axios
      .get("/api/feedback")
      .then((res) => {
        setFeedbacksdb(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(Feedbacksdb);
  return (
    <div>
      <Form props={props} feedbacksdb={Feedbacksdb} upadteFeedabcks={setFeedbacksdb} />
      {/* Here we add feedbacks that already exist in db */}
      {Feedbacksdb.map((feedback) => {
        return <UserFeedback feedbackinfo={feedback} key={feedback._id} />;
      })}
    </div>
  );
};
