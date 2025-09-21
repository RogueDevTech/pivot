import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Main from "./components/Main";

const CustomerPage = () => {
  return (
    <div className="flex flex-col gap-[48px] w-full h-full">
      <Header />
      <Content />
      <Main />
    </div>
  );
};

export default CustomerPage;
