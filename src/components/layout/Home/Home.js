import React from "react";
import Service from "../../views/Service/Service";
import QuestionForm from "../../features/QuestionForm/QuestionForm";
import Widget from "../../views/Widget/Widget";
import Accomplishments from "../../views/Accomplishments/Accomplishments";
import Pack from "../../features/Pack/Pack";
import SubscribeComponent from "../../features/SubscribeComponent/SubscribeComponent";
const Home = () => {
  return (
    <div>
      <Service />
      <QuestionForm />
      <Widget />
      <Accomplishments />
      <Pack />
      <SubscribeComponent />
    </div>
  );
};

export default Home;
