import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='w-screen h-auto flex justify-center items-center'>
            <div
                style={{
                    background:
                        "linear-gradient(271.1deg, rgba(169, 204, 236, 0.2) 37.05%, rgba(90, 125, 154, 0.13) 66.11%)",
                    boxShadow: "2px 2px 12px 2px rgba(0, 0, 0, 0.25)",
                    backdropFilter: "blur(3.5px)",
                    borderRadius: "18px",
                }}
                className='font-lostfish flex justify-center items-center gap-8 text-white mt-4 fixed p-3 top-[1rem] text-xl'
            >
                <Link to='/'>Home</Link>

                <Link to='/about'>About</Link>

                <Link to='/events'>Events</Link>
                <img
                    style={{
                        width: "50px",
                    }}
                    src='saavyas-logo.png'
                />

                <Link to='/competitions'>Competitions</Link>

                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;
