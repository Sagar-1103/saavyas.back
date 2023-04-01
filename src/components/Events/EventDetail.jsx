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

const EventDetail = () => {
    const { category, eventId } = useParams();
    const navigate = useNavigate();
    const width = useWindowWidth();
    const [event, setEvent] = React.useState(null);
    const [sponsors, setSponsors] = React.useState(null);

    useEffect(() => {
        if (!validCategories.includes(category)) {
            navigate("/events");
        }

        (async () => {
            const events = await getAllEvents();

            if (!events[category][eventId]) {
                navigate("/events");
            }

            setEvent(events[category][eventId]);
            setSponsors([
                {
                    name: "Google",
                    image: "/images/sponsors/google.png",
                },
                {
                    name: "Microsoft",
                    image: "/images/sponsors/microsoft.png",
                },
                {
                    name: "Amazon",
                    image: "/images/sponsors/amazon.png",
                },
            ]);

            console.log(event);
        })();
    }, []);

    const bgImage = useMemo(() => {
        if (width > 768) {
            return "/images/bg.png";
        } else {
            return "/images/bg-mobile.png";
        }
    }, [width]);

    return (
        <div className={`w-full h-full flex-1 bg-[url('${bgImage}')] bg-contain bg-no-repeat`}>
            <div className="w-[90%] mx-auto xl:w-cap mt-[5rem] md:mt-[8rem] text-white">
                {/* hero  */}
                <div className="h-[32rem] w-full bg-[#D9D9D9] bg-opacity-[0.2] rounded-md flex flex-col items-center justify-end">
                    <div className=" w-full flex flex-col md:flex-row md:justify-center md:items-end">
                        <div className="font-poppins w-full md:flex-1  min-h-[12rem] md:flex md:flex-col md:justify-center md:gap-3 md:px-10">
                            <h1 className="font-lostfish text-4xl text-center md:text-left w-full">
                                {event && event.title}
                            </h1>
                            <p className="text-center md:text-left text-xl ">
                                PRIZE WORTH: &#8377; {event && " " + event.prize_money}
                            </p>
                            <p className="text-center md:text-left text-xl ">
                                ENTRY FEE: &#8377; {event && " " + event.entry_fee}
                            </p>
                        </div>
                        <Link
                            to={`/events/${category}/${eventId}/register`}
                            // linear gradient bg 241.26deg, rgba(169, 204, 236, 0.2) 29.13%, rgba(90, 125, 154, 0.13) 61.59%),
                            className="w-[80%]  md:w-[15rem] md:min-[8rem] mx-auto py-1 flex font-lostfish text-xl justify-center items-center bg-[#A9CCEC] bg-opacity-[0.2] backdrop-blur-sm shadow-md rounded-md mt-5 md:m-5"
                        >
                            Register
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
                        <p>{event && event.desc}</p>
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
                            Event Location: NIT GOA
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
                </div>

                {/* image carousel section  */}
                <div className="w-full h-[32rem] md:mt-[5rem]">
                    <Carousel slideInterval={5000}>
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                            alt="..."
                        />
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                            alt="..."
                        />
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                            alt="..."
                        />
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                            alt="..."
                        />
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                            alt="..."
                        />
                    </Carousel>
                </div>

                {/* sponsors section  */}
                <div className="w-full mt-[3rem] md:mt-[5rem]">
                    <h3 className="font-lostfish text-3xl underline underline-offset-[5px] text-center ">
                        Event Sponsors
                    </h3>
                    <div className="flex flex-row flex-wrap justify-center gap-10 md:gap-20 mt-10 w-[80%] mx-auto">
                        {sponsors &&
                            sponsors.map((sponsor, index) => (
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

                {/* event rules section */}
                <div className="w-full mt-[3rem] md:mt-[5rem] ">
                    <h3 className="font-lostfish text-3xl underline underline-offset-[5px] text-center ">
                        Rules
                    </h3>
                    <ul className="flex flex-col gap-2 mt-6 list-disc  w-[90%] mx-auto">
                        {event &&
                            event.rules.map((rule, index) => (
                                <li key={index} className="font-poppins text-xl font-normal mt-1">
                                    {rule.length > 100 ? rule.slice(0, 100) + "..." : rule}
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
                        <div className="flex flex-col min-h-[7rem] w-full bg-gradient-to-t from-[#1D3056] to-transparent rounded-md py-5">
                            <div className="flex flex-col flex-1">
                                <h3 className="capitalize font-poppins text-xl font-bold tracking-wide text-center">
                                    ABHINAV UPADHYAY
                                </h3>
                                <p className="text-center">(Coordinator)</p>
                            </div>

                            <div>
                                <p className="text-center text-lg">Mob. No.: xxxxxxxxxx</p>
                                <p className="text-center text-lg">Email Id.: abc@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex flex-col min-h-[7rem] w-full bg-gradient-to-t from-[#1D3056] to-transparent rounded-md py-5">
                            <div className="flex flex-col flex-1">
                                <h3 className="capitalize font-poppins text-xl font-bold tracking-wide text-center">
                                    ABHINAV UPADHYAY
                                </h3>
                                <p className="text-center">(Coordinator)</p>
                            </div>

                            <div>
                                <p className="text-center text-lg">Mob. No.: xxxxxxxxxx</p>
                                <p className="text-center text-lg">Email Id.: abc@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
