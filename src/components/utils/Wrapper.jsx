import React from "react";

function Wrapper({ children }) {
  return (
    <div
      style={{ backgroundImage: "url(images/bg.png)" }}
      className="bg-contain bg-center-top bg-no-repeat w-full mx-auto bg-[#0F1B33] text-white gap-[6rem] md:gap-[10rem] flex flex-col justify-center items-center"
    >
      {children}
    </div>
  );
}

export default Wrapper;
