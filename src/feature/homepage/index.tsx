import React from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import Hero from "./component/Hero";
import Industry from "./component/Industry";
import Infrastructure from "./component/Infrastructure";
import Company from "./component/Company";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-[48px] w-full h-full">
      <Header />
      <Content />
      <Hero />
      <Industry />
      <Company />
      <Infrastructure />
    </div>
  );
};

export default Homepage;
