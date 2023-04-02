import React from "react";
import { GiIronHulledWarship } from "react-icons/gi";
import "./Loading.css";

const Loading = ({ showText = false }) => {
    return (
        <div>
            <GiIronHulledWarship className="loading-animation text-9xl mb-[1rem]" />
            {showText ? "Loading..." : ""}
        </div>
    );
};

export default Loading;
