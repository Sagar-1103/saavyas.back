import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";
import { isUserAlreadyInDb } from "../firebase/realtimeDb";

const Navbar = () => {
    const { googleSignIn, logOut, user } = UserAuth();
    const [justSignedIn, setJustSignedIn] = React.useState(false);
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            await googleSignIn();
            setJustSignedIn(true);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        (async () => {
            if (justSignedIn && user) {
                // Check if user is already registered
                let registered = true;
                if (!(await isUserAlreadyInDb(user.uid))) {
                    registered = false;
                }
                if (!registered) {
                    console.log("reached here", registered);
                    return navigate("/register");
                }
            }
        })();
    }, [justSignedIn, user]);

    return (
        <div className="w-screen h-auto flex justify-center items-center">
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
                <Link to="/">Home</Link>

                <Link to="/about">About</Link>

                <Link to="/events">Events</Link>
                <img
                    style={{
                        width: "50px",
                    }}
                    src="saavyas-logo.png"
                />

                <Link to="/competitions">Competitions</Link>

                <Link to="/contact">Contact</Link>

                <div className="hidden lg:flex  ">
                    <button onClick={handleSignIn} className="mr-10">
                        Register
                    </button>
                    <button onClick={logOut} className="">
                        {" "}
                        Sign Out{" "}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
