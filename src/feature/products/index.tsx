import React from "react";
import Future from "./components/Future";
import Transform from "./components/Transform";
import IntelligentDesign from "./components/IntelligentDesign";

const ProductPage = () => {
  return (
    <div className="flex w-[100%]">
      <div className="w-full flex flex-col gap-[48px] md:w-[75%] h-full">
        <Future />
        <Transform />
        <IntelligentDesign />
      </div>
      <div className="hidden  md:block p-2 w-[25%] h-[500px]">
        <div className="w-[100%] h-[100%] ">
         
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
