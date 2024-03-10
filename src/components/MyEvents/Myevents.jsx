import React, { useEffect, useState } from "react";
import EventCard from "../utils/cards/EventCard";
import { GetDetailsOfEndPoint } from "../firebase/realtimeDb";
import Techinical from "../Techinal/Techinical.jsx";
import { UserAuth } from "../context/AuthContext.jsx";

const Myevents = ({ settext }) => {
    let [events, setEvents] = useState(null);
    const {user} = UserAuth();

    async function LoadData() {
        try {
            let x = await GetDetailsOfEndPoint("events/");
            let y = Object.keys(x).filter(key => {
                const parts = key.split('-');
                return parts[1] === user.uid;
            });
            console.log(x);
            setEvents(x);
        } catch (error) {
            console.error('Error loading data:', error);
            // Handle error, e.g., show a message to the user
        }
    }

useEffect( ()=> {
    settext("My Events");
    LoadData();
} ,[user.uid]);

    return ( 
    
    // BACKGROUND
        <section className="mt-[max(90vh,600px)] w-full bg-[#111e22] z-[10]">
            <div className=" w-full flex justify-center items-center flex-col gap-8 z-[10]">
                <div className="font-semibold justify-center items-center md:text-4xl text-2xl font-lostfish text-white pt-8">
                    My Events
                </div>
                <div>
                    {events && Object.keys(events.technical).length > 0 ? (
                        <Techinical event={Object.values(events.technical)} eventType="technical" />
                    ) : (
                        <p>No technical events available</p>
                    )}
                </div>
                </div>
        </section>
    );
};

export default Myevents;
