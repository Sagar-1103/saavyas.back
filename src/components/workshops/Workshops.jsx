import React, { useEffect, useState } from "react";
import Wrapper from "../utils/Wrapper";
import ClearCard from "../utils/cards/ClearCard";
import EventCard from "../utils/cards/EventCard";
import { GetDetailsOfEndPoint } from "../firebase/realtimeDb";

const Workshops = () => {
    let [workshops, setWorkshops] = useState(null);

    async function LoadData() {
        let x = await GetDetailsOfEndPoint("workshops/");
        setWorkshops(x);
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
                    Workshops
                </div>
                <div className="flex w-full md:w-[73%] md:flex-row md:overflow-y-hidden md:overflow-x-auto md:max-h-max items-center flex-col gap-2 max-h-[500px] overflow-y-scroll">
                    {workshops &&
                        Object.keys(workshops).map((key) => <EventCard event={workshops[key]} />)}
                </div>
            </div>
        </Wrapper>
    );
};

export default Workshops;
