import React from "react";
import Service from "../../views/Service/Service";
import QuestionForm from "../../features/QuestionForm/QuestionForm";
import Widget from "../../views/Widget/Widget";
import Accomplishments from "../../views/Accomplishments/Accomplishments";
import Pack from "../../features/Pack/Pack";
import SubscribeComponent from "../../features/SubscribeComponent/SubscribeComponent";
import Banner from "../../common/Banner/Banner";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <div>
      <Banner
        btn1={
          <a href="#widget" className={styles.btn1}>
            What Sets us Appart?
          </a>
        }
        btn2={
          <a href="/services" className={styles.btn2}>
            List of Out Services
          </a>
        }
        title="Taking Logistics to Another Level"
        description=" A new player in the transport industry. Trust Speedex and entrust us
        with your shipment"
      />
      <Service title="We provide full assistance in forwarding and storage" />
      <QuestionForm />
      <Widget />
      <Accomplishments />
      <Pack />
      <SubscribeComponent />
    </div>
  );
};

export default Home;
