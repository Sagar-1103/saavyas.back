import React from "react";

function AboutCard(props) {
    return (
        <div
            style={{
                background: "linear-gradient(180deg, rgba(29, 48, 86, 0) 23.23%, #1D3056 100%)",
            }}
            className="flex md:flex-col rounded-lg md:justify-start md:items-start md:px-2 justify-center items-center gap-3 bg-[#17294d] w-[97%] min-h-[150px] relative p-1 min-h-3"
        >
            <div
                style={{ backgroundImage: "url(" + props.user.image + ")" }}
                className="bg-contain bg-center bg-no-repeat bg-[rgba(29, 48, 86, 0)] p-2 md:w-[250px] rounded-[50%] md:h-[250px] w-[150px] h-[150px] flex justify-center items-center"
            />

            <div className="text-left w-[60%] h-[100%]  rounded-md flex gap-1 flex-col justify-center md:items-left md:justify-start">
                <span className="text-left font-semibold md:text-lg text-lg font-lostfish">
                    {props.user.name}
                </span>
                <span className="font-poppins text-left text-xs flex gap-2 items-center">
                    {props.user.phone}
                </span>
                <span className="font-poppins text-left text-xs flex gap-2 items-center">
                    abhiraajverma@gmail.com
                </span>
            </div>
        </div>
    );
}

export default AboutCard;
