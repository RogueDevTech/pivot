import React from "react";
import Future from "./components/Future";
import Transform from "./components/Transform";
import IntelligentDesign from "./components/IntelligentDesign";

const ProductPage = () => {
  return (
    <div
      className="flex flex-col gap-[48px] w-full h-full"
      style={{ margin: "0 auto" }}
    >
      <Future />
      <Transform />
      <IntelligentDesign />
    </div>
  );
};

export default ProductPage;
