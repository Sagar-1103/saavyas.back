import React from "react";

const Navbar = () => {
    return <div className="w-screen h-auto flex justify-center items-center">
        <div style={{
            background: "linear-gradient(271.1deg, rgba(169, 204, 236, 0.2) 37.05%, rgba(90, 125, 154, 0.13) 66.11%)",
            boxShadow: "2px 2px 12px 2px rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(3.5px)",
            borderRadius: "18px"
        }} className="flex justify-center items-center gap-8 text-white mt-4 fixed p-3 top-[1rem]">
            <span className="NavItem">
                Home
            </span>

            <span className="NavItem">
                About
            </span>

            <span className="NavItem">
                Events
            </span>
            <img style={{
                width:"50px"
            }} src="saavyas-logo.png"/>
                
            <span className="NavItem">
                Competitions
            </span>

            <span className="NavItem">
                Contact
            </span>
        </div>
    </div>;
};

export default Navbar;
