import React, { useEffect, useState } from "react";
import Wrapper from "../utils/Wrapper";
import ClearCard from "../utils/cards/ClearCard";
import EventCard from "../utils/cards/EventCard";
import { GetDetailsOfEndPoint } from "../firebase/realtimeDb";

const Events = () => {
    let [events, setEvents] = useState(null);

    async function LoadData() {
        let x = await GetDetailsOfEndPoint("events/");
        setEvents(x);
    }

    useEffect(() => {
        LoadData();
    }, []);

    return (
        <Wrapper>
            <div className="w-full flex justify-center text-center gap-[1.75rem] pt-40 h-80 pb-40 font-lostfish">
                <ClearCard className="cursor-pointer">Technical</ClearCard>
                <ClearCard className="cursor-pointer">Cultural</ClearCard>
            </div>
            <div className="p-3 w-full flex justify-center items-center flex-col gap-8">
                <div className="font-semibold justify-center items-center md:text-4xl text-2xl font-lostfish">
                    Technical Events
                </div>
                <div className="flex max-w-[1280px] w-full md:w-[73%] md:flex-row md:overflow-y-hidden md:overflow-x-auto md:max-h-max items-center flex-col gap-2 max-h-[500px] overflow-y-scroll">
                    {events &&
                        Object.keys(events.technical).map((key) => (
                            <EventCard eventType="technical" event={events.technical[key]} />
                        ))}
                </div>
            </div>

            <div className="p-3 w-full  flex justify-center items-center flex-col gap-8">
                <div className="font-semibold justify-center items-center md:text-4xl text-2xl font-lostfish">
                    Cultural Events
                </div>
                <div className="flex w-full max-w-[1280px] md:w-[73%] md:flex-row md:overflow-y-hidden md:overflow-x-auto md:max-h-max items-center flex-col gap-2 max-h-[500px] overflow-y-scroll">
                    {events &&
                        Object.keys(events.cultural).map((key) => (
                            <EventCard eventType="cultural" event={events.cultural[key]} />
                        ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default Events;
