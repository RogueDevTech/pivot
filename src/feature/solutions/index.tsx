import React from "react";
import BuildSmarter from "./components/BuildSmarter";
import Simplication from "./components/Simplication";
import SimpleIntegration from "./components/SimpleIntegration";

const SolutionPage = () => {
  return (
    <div
      className="flex flex-col gap-[48px] w-full"
      style={{ margin: "0 auto" }}
    >
      <BuildSmarter />
      <Simplication />
      <SimpleIntegration />
    </div>
  );
};

export default SolutionPage;
