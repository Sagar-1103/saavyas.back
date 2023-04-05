import React from "react";
import "./Wrapper.css";

function Wrapper({ children, text = "Sea Shore Soiree" }) {
    return (
        <section className="bg-contain bg-top bg-no-repeat w-full mx-auto z-[0] text-white gap-[6rem] md:gap-[10rem] flex flex-col justify-center items-center">
            {/* <img
                src="./images/bg.png"
                style={{ zIndex: "-100000" }}
                className="absolute top-0 left-0 w-full min-h-1/2 object-cover z-[-10]"
                alt=""
            /> */}
            <div
                style={{ minWidth: "100%", minHeight: "100%" }}
                className="absolute top-0 left-0 w-full min-h-1/2 object-cover z-[-10] overflow-hidden"
            >
                <lottie-player
                    src="/animation.json"
                    background="transparent"
                    speed="0.5"
                    loop
                    style={{ minWidth: "110%", minHeight: "100%" }}
                    autoplay
                ></lottie-player>
            </div>
            {children}
        </section>
    );
}

export default Wrapper;
