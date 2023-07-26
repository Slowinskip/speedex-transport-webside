import React from "react";
import styles from "./Home.module.scss";
import Service from "../../views/Service/Service";
import QuestionForm from "../../features/QuestionForm/QuestionForm";
import Widget from "../../views/Widget/Widget";
const Home = () => {
  return (
    <div>
      <Service />
      <QuestionForm />
      <Widget />
    </div>
  );
};

export default Home;
