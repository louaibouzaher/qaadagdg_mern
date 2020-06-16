import React from "react";
import "./home.css";
export const Home = (props) => {
  const handleClick = () => {
    props.history.push("/feedback");
  };
  return (
    <div id="home">
      <h1 className="welcome">Welcome to our MERN Qa'ada</h1>
      <p className="intro">
        In this Qa'ada we will be learning a little bit about Front End, Back
        End and how to link your website to a remote database, pretty interesting
        right? <br /> <br/>
        Well, follow along with us because we will be working with React Js,
        Express, Node js and MongoDB! <br/> We hope you find this qa'ada interesting,
        leave a feedback here!
      </p>
      <button onClick={handleClick}> Feedback </button>
    </div>
  );
};
