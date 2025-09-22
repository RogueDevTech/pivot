import React from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import Hero from "./component/Hero";
import Industry from "./component/Industry";
import Infrastructure from "./component/Infrastructure";
import Company from "./component/Company";


const Homepage = () => {
  return (
    <div className=" flex w-[100%]">
      <div className="w-full flex flex-col gap-[48px] md:w-[75%] h-full">
        <Header />
        <Content />
        <Hero />
        <Industry />
        <Company />
        <Infrastructure />
      </div>
      <div className="hidden  md:block p-2 w-[25%] h-[500px]">
        <div className="w-[100%] h-[100%] ">
         
        </div>
      </div>
    </div>
  );
};

export default Homepage;
