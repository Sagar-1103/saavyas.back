import React from "react";

function Wrapper({ children }) {
    return (
        <div className="w-full overflow-x-hidden text-white gap-[6rem] md:gap-[10rem] flex flex-col justify-center items-center">
            <div
                style={{
                    backgroundImage: "url(images/bg.png)",
                    backgroundPosition: "top center",
                }}
                className="h-[90vh] top-0 absolute w-screen w-d bg-no-repeat bg-[length:auto_100%] lg:bg-[length:100%_auto]"
            />
            {children}
        </div>
    );
}

export default Wrapper;
