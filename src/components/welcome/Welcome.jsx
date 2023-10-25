import React from "react";

const Welcome = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-3/6 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
      <div className="w-1/2 h-4/6 absolute top- left-1/4 bg-black">
        <div></div>
        <div></div>
      </div>
      <div className="w-full h-3/6 bg-gradient-to-r from-purple-500 to-pink-500"></div>
    </div>
  );
};

export default Welcome;
