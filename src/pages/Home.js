import React, { useEffect } from "react";

import Navbar from "../compnents/Navbar";
import Profile from "../compnents/Profile";
import Uploadpost from "../compnents/Uploadpost";
import Feed from "../compnents/Feed";
import Suggestion from "../compnents/Suggestion";

const Home = () => {
  return (
    <>
   
      <div className="row   bg-light">
        <Navbar />
        <div className=" mt-4 offset-sm-1 col-sm-3">
          <Profile />
        </div>
        <div className=" mt-4  col-sm-6">
          <div className=" mb-3 border sm-4 border-1 ">
        
            <Uploadpost />
          </div>
          <div className="pt-3">
            <Feed />
          </div>
          <div className="pt-3">
            <Feed />
          </div>
        </div>
        <div className="col-sm-2 mt-4 px-4">
          <Suggestion />
        </div>
      </div>
    </>
  );
};

export default Home;
