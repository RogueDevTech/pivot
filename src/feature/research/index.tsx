import React from "react";
import Boundaries from "./components/Boundaries";
// import DynamicInfrastructure from "./components/DynamicInfrastructure";

const ResearchPage = () => {
  return (
    <div className=" flex w-[100%]">
      <div className="w-full flex flex-col gap-[48px] md:w-[75%] h-full">
        <Boundaries />
      </div>
      <div className="hidden  md:block p-2 w-[25%] h-[500px]">
        <div className="w-[100%] h-[100%] ">
         
        </div>
      </div>
    </div>
     
  );
};

export default ResearchPage;
