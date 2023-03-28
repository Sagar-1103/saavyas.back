import React from "react";
import Wrapper from "../utils/Wrapper";
import ClearCard from "../utils/cards/ClearCard";
import EventCard from "../utils/cards/EventCard";
import events from "./events.json"
const Events = () => {
    console.log(events)
    return (
        <Wrapper>
            <div className='w-full flex justify-center text-center gap-[1.75rem] pt-40 h-80 pb-40 font-lostfish'>
                <ClearCard>
                    Technical
                </ClearCard>
                <ClearCard>
                    Cultural
                </ClearCard>                
            </div>
            <div className='p-3 w-full flex justify-center items-center flex-col gap-8'>
                <div className='font-semibold justify-center items-center md:text-4xl text-2xl font-lostfish'>
                    Technical Events
                </div>
                <div className='flex w-full md:w-[73%] md:flex-row md:overflow-y-hidden md:overflow-x-auto md:max-h-max items-center flex-col gap-2 max-h-[500px] overflow-y-scroll'>
                    {Object.keys(events).map((key)=>(
                        <EventCard event={events[key]}/>
                    ))}
                </div>
            </div>

            
            <div className='p-3 w-full flex justify-center items-center flex-col gap-8'>
                <div className='font-semibold justify-center items-center md:text-4xl text-2xl font-lostfish'>
                    Cultural Events
                </div>
                <div className='flex w-full md:w-[73%] md:flex-row md:overflow-y-hidden md:overflow-x-auto md:max-h-max items-center flex-col gap-2 max-h-[500px] overflow-y-scroll'>
                    {Object.keys(events).map((key)=>(
                        <EventCard event={events[key]}/>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
};

export default Events;
