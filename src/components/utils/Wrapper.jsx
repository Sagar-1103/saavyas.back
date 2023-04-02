import React from "react";

function Wrapper({ children }) {
    return (
        <section className="bg-contain bg-top bg-no-repeat w-full mx-auto bg-[#0F1B33] z-[0] text-white gap-[6rem] md:gap-[10rem] flex flex-col justify-center items-center">
            <img
                src="./images/bg.png"
                className="absolute top-0 left-0 w-full min-h-1/2 object-cover z-[-1]"
                alt=""
            />
            {children}
        </section>
    );
}

export default Wrapper;
