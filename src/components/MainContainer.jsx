import React from "react";
import CreateContainer from "./CreateContainer";
import HomeContainer from "./HomeContainer";
const MainContainer = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <HomeContainer/>
      </div>
    </>
  );
};

export default MainContainer;
