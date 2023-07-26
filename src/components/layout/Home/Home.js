import React from "react";
import styles from "./Home.module.scss";
import Service from "../../views/Service/Service";
import QuestionForm from "../../features/QuestionForm/QuestionForm";
import Widget from "../../views/Widget/Widget";
import Accomplishments from "../../views/Accomplishments/Accomplishments";
const Home = () => {
  return (
    <div>
      <Service />
      <QuestionForm />
      <Widget />
      <Accomplishments />
    </div>
  );
};

export default Home;
