import React from "react";
import Feed from "./Feed";
import Header from "./Header";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

function Home() {
  return (
    <div>
      <Header />
      <div className="flex bg-gray-100 ">
        <LeftPart />
        <Feed />
        
      </div>
    </div>
  );
}

export default Home;
