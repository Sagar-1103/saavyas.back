import React, { useEffect } from "react";
import "./Wrapper.css";
import Parallax from "parallax-js";

function Wrapper({ children, text = "Sea Shore Soiree" }) {
    useEffect(() => {
        var scene = document.getElementById("scene");
        var parallaxInstance = new Parallax(scene);
    }, []);
    return (
        <section className="bg-contain bg-top bg-no-repeat w-full mx-auto z-[0] text-white gap-[6rem] md:gap-[10rem] flex flex-col justify-center items-center">
            <div className="parallax">
                <div data-relative-input="true" id="scene">
                    {/* <div
                        style={{
                            backgroundImage: 'url("./layers/6.png")',
                        }}
                        className="sub-layers"
                        data-depth="0.2"
                    ></div> */}
                    <div
                        style={{
                            backgroundImage: 'url("./layers/3.png")',
                        }}
                        className="sub-layers z-[1]"
                        data-depth="0.3"
                    ></div>
                    <div
                        className="sub-layers z-[2]"
                        style={{
                            backgroundImage: 'url("./layers/5.png")',
                        }}
                        data-depth="0.45"
                    ></div>
                    <div data-depth="0.7" className="sub-layers z-[3]">
                        <h1>{text}</h1>
                    </div>
                    <div
                        className="sub-layers z-[4]"
                        style={{
                            backgroundImage: 'url("./layers/2.png")',
                        }}
                        data-depth="0.2"
                    ></div>
                    <div
                        style={{
                            opacity: 0.7,
                            backgroundImage: 'url("./layers/4.png")',
                        }}
                        className="sub-layers z-[5]"
                        data-depth="0.4"
                    ></div>
                    <div data-depth="0.7" className="sub-layers z-[6]">
                        <h1>{text}</h1>
                    </div>
                    <div
                        className="sub-layers z-[7]"
                        style={{ backgroundImage: 'url("./layers/1.png")' }}
                        data-depth="0.1"
                    ></div>
                </div>
            </div>
            {children}
        </section>
    );
    return (
        <section className="bg-contain bg-top bg-no-repeat w-full mx-auto z-[0] text-white gap-[6rem] md:gap-[10rem] flex flex-col justify-center items-center">
            <img
                src="./images/bg.png"
                style={{ zIndex: "-100000" }}
                className="absolute top-0 left-0 w-full min-h-1/2 object-cover z-[-10]"
                alt=""
            />
            {children}
        </section>
    );
}

export default Wrapper;
