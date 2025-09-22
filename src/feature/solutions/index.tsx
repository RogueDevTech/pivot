import React from "react";
import BuildSmarter from "./components/BuildSmarter";
import Simplication from "./components/Simplication";
import SimpleIntegration from "./components/SimpleIntegration";

const SolutionPage = () => {
  return (
    <div className="flex w-[100%]">
      <div
      className="flex flex-col gap-[48px] w-[75%] h-full"
      style={{ margin: "0 auto" }}
    >
      <BuildSmarter />
      <Simplication />
      <SimpleIntegration />
    </div>
    <div className=" w-[25%] h-[500px]">
        <div className="w-[100%] h-[100%] ">
         
        </div>
      </div>
    </div>
    
  );
};

export default SolutionPage;
