import React from "react";
import BankInfo from "./BankInfo.jsx";
import Donation from "./Donation.jsx";
import Hero from "./Hero.jsx";
import Impact from "./Impact.jsx";
import NewsEvents from "./NewsEvents.jsx";
import Programs from "./Programs.jsx";
import Success from "./Success.jsx";

import Work from "./Work.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <Work />
      <Donation />
      <Impact />
      <Programs />
      <NewsEvents />
      <Success />
      <BankInfo />
    </>
  );
};

export default Home;
