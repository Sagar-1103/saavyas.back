import { Carousel } from "flowbite-react";
import React, { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllEvents } from "../firebase/realtimeDb";

let validCategories = ["technical", "cultural"];

const useWindowWidth = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    React.useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
};

function useHover() {
    const [value, setValue] = React.useState(false);

    const ref = React.useRef(null);

    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);

    useEffect(
        () => {
            const node = ref.current;
            if (node) {
                node.addEventListener("mouseover", handleMouseOver);
                node.addEventListener("mouseout", handleMouseOut);

                return () => {
                    node.removeEventListener("mouseover", handleMouseOver);
                    node.removeEventListener("mouseout", handleMouseOut);
                };
            }
        },
        [ref.current] // Recall only if ref changes
    );

    return [ref, value];
}

const EventDetail = () => {
    const { category, eventId } = useParams();
    const navigate = useNavigate();
    const width = useWindowWidth();
    const [event, setEvent] = React.useState(null);

    const [registerBtnRef, registerBtnIsHovered] = useHover();

    useEffect(() => {
        if (!validCategories.includes(category)) {
            navigate("/404");
        }

        (async () => {
            const events = await getAllEvents();

            if (!events[category][eventId]) {
                navigate("/404");
            }

            setEvent(events[category][eventId]);

            console.log(event);
        })();
    }, []);

    return (
        <div className={`w-full h-full flex-1`}>
            <img
                // srcset=" '/images/bg-mobile.png' 480w, '/images/bg.png' 800w"
                // sizes="(max-width: 600px) 480px, 800px"
                src="/images/bg.png"
                alt="Elva dressed as a fairy"
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            />

            <div className="w-[90%] mx-auto xl:w-cap mt-[5rem] md:mt-[8rem] text-white">
                {/* hero  */}
                <div className="h-[32rem] w-full bg-[#D9D9D9] bg-opacity-[0.2] rounded-md flex flex-col items-center justify-end">
                    <div className=" w-full flex flex-col md:flex-row md:justify-center md:items-end">
                        <div className="font-poppins w-full md:flex-1  min-h-[12rem] md:flex md:flex-col md:justify-center md:gap-3 md:min-h-fit md:m-10 ">
                            <h1 className="font-stuart-little strong text-4xl text-center md:text-left w-full">
                                {event && event.title}
                            </h1>
                            <p className="text-center md:text-left text-xl ">
                                PRIZE WORTH: {event && "₹ " + String(event.prize_money)}
                            </p>
                            <p className="text-center md:text-left text-xl ">
                                ENTRY FEE: {event && "₹ " + String(event.entry_fee)}
                            </p>
                        </div>

                        <Link
                            to={`/events/${category}/${eventId}`}
                            ref={registerBtnRef}
                            // linear gradient bg 241.26deg, rgba(169, 204, 236, 0.2) 29.13%, rgba(90, 125, 154, 0.13) 61.59%),
                            className=" cursor-default w-[80%] my-6  md:w-[17rem]  mx-auto py-1 flex font-lostfish text-xl justify-center items-center bg-[#A9CCEC] bg-opacity-[0.2] backdrop-blur-sm shadow-md rounded-md mt-5 md:m-10"
                        >
                            Register
                            {/* // tooltip */}
                            <div
                                className={`${
                                    registerBtnIsHovered ? "block" : "hidden"
                                } absolute top-[-3.5rem] z-10 bg-[#000] bg-opacity-[0.6] backdrop-blur-sm shadow-md rounded-md p-2 text-sm font-poppins`}
                            >
                                <p className="text-center">Registrations have not started yet</p>
                                <div className="absolute  w-0 h-0 top-full left-[calc(50%-0.5rem)] border-t-black border-t-[10px] border-opacity-[0.6] border-l-transparent border-l-[5px]  border-r-transparent border-r-[5px] "></div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* content section  */}
                <div className="w-full mt-[3rem] md:mt-[5rem]">
                    <h3 className="font-lostfish text-3xl underline underline-offset-[5px] text-center ">
                        About Event
                    </h3>
                    <div className="py-6 flex flex-col gap-3">
                        <h1 className="font-poppins capitalize text-3xl font-bold text-left w-full">
                            {event && event.title}
                        </h1>
                        <p innerText="123">{event && event.desc}</p>
                        <p className="font-poppins font-bold text-left w-full text-lg">
                            Event Date:{" "}
                            <span className="font-normal">
                                {event &&
                                    new Date(event.start_time).toLocaleDateString("en-IN", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                            </span>
                        </p>
                        <p className="font-poppins font-bold text-left w-full text-lg">
                            Event Location: {event && event.vid}
                        </p>
                        <p className="font-poppins font-bold text-left w-full text-lg">
                            Registration Deadline:{" "}
                            <span className="font-normal">
                                {event &&
                                    new Date(event.end_time).toLocaleDateString("en-IN", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                            </span>
                        </p>
                    </div>
                    {event && event.doc && (
                        <a
                            target="_blank"
                            href={event.doc}
                            className="cursor-pointer w-[80%] my-6  md:w-[17rem]  mx-auto py-1 flex font-lostfish text-xl justify-center items-center bg-[#A9CCEC] bg-opacity-[0.2] backdrop-blur-sm shadow-md rounded-md mt-5 md:m-10"
                        >
                            More Details &nbsp;
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </a>
                    )}
                </div>

                {/* image carousel section  */}
                {event && event.event_images && (
                    <div className="w-full md:w-[760px] mx-auto h-[32rem] md:mt-[5rem]">
                        <Carousel slideInterval={5000}>
                            {event.event_images.map((each) => (
                                <img src={each} alt="..." />
                            ))}
                        </Carousel>
                    </div>
                )}

                {/* sponsors section  */}
                {event && event.sponsors && (
                    <div className="w-full mt-[3rem] md:mt-[5rem]">
                        <h3 className="font-lostfish text-3xl underline underline-offset-[5px] text-center ">
                            Event Sponsors
                        </h3>
                        <div className="flex flex-row flex-wrap justify-center gap-10 md:gap-20 mt-10 w-[80%] mx-auto">
                            {event.sponsors &&
                                event.sponsors.map((sponsor, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-center"
                                    >
                                        <img
                                            src={sponsor.image}
                                            alt={sponsor.name}
                                            className="w-[7rem] md:w-[10rem] h-[7rem] md:h-[10rem] rounded-full"
                                        />
                                        <p className="font-poppins text-xl font-normal mt-1">
                                            {sponsor.name}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}

                {/* event rules section */}
                <div className="w-full mt-[3rem] md:mt-[5rem] ">
                    <h3 className="font-lostfish text-3xl underline underline-offset-[5px] text-center ">
                        Rules
                    </h3>
                    <ul className="flex flex-col gap-2 mt-6 list-disc  w-[90%] mx-auto">
                        {event &&
                            event.rules.map((rule, index) => (
                                <li key={index} className="font-poppins text-xl font-normal mt-1">
                                    {rule}
                                </li>
                            ))}
                    </ul>
                </div>

                {/* event organizers section  */}
                <div className="w-full mt-[3rem] md:mt-[5rem] pb-[3rem] md:pb-[5rem]">
                    <h3 className="font-lostfish text-3xl underline underline-offset-[5px] text-center ">
                        Event Organizers
                    </h3>
                    <div className="w-[80%] mx-auto flex flex-col md:flex-row md:mt-[4rem] gap-4 mt-8">
                        {event &&
                            event.contact &&
                            event.contact.map((each) => (
                                <div className="flex flex-col min-h-[7rem] w-full bg-gradient-to-t from-[#1D3056] to-transparent rounded-md py-5">
                                    <div className="flex flex-col flex-1">
                                        <h3 className="capitalize font-poppins text-xl font-bold tracking-wide text-center">
                                            {each.name}
                                        </h3>
                                        <p className="text-center">({each.designation})</p>
                                    </div>

                                    <div>
                                        <p className="text-center text-lg">
                                            Mob. No: <a href={"tel:" + each.phone}>{each.phone}</a>
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
