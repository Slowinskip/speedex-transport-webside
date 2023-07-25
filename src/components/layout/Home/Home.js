import React from "react";
import styles from "./Home.module.scss";
import Service from "../../views/Service/Service";
import QuestionForm from "../../features/QuestionForm/QuestionForm";
const Home = () => {
  return (
    <div>
      <Service />
      <QuestionForm />
    </div>
  );
};

export default Home;
