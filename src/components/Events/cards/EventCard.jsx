import React from 'react'
import {BsFillCalendar2WeekFill} from "react-icons/bs"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {HiCircleStack} from "react-icons/hi2"
import {AiOutlineStar} from "react-icons/ai"
function EventCard({event}) {
    console.log(event)
  return (
        <div className="flex md:flex-col rounded-lg md:justify-start md:items-start md:px-2 justify-center items-center gap-3 bg-[#17294d] w-[97%] min-h-[150px] relative p-1 min-h-3">
            <div className="text-sm absolute top-0 right-[0.2rem] bg-[#17294d] rounded-md p-1">
                10:12:34:55
            </div>
            <div className="bg-[#111e38] p-2 md:w-[250px] md:h-[250px] w-[40%] h-[150px] rounded-md flex justify-center items-center">
                <img src={event.event_images[Math.floor(Math.random()*event.event_images.length)]} alt="img" className='max-h-[150px] md:max-h-[250px]'/>
            </div>

            <div className="text-left w-[60%] h-[100%]  rounded-md flex gap-1 flex-col justify-center md:items-left md:justify-start">
                <span className='text-left font-semibold md:text-lg text-lg font-lostfish'>{event.title.length < 10 ? event.title : 
                <>
                    {event.title.slice(0,8)}
                <span className='font-poppins'>
                    {" ..."}
                </span>
                </>
                    }
                    </span>
                <span className='text-left text-xs flex gap-2 items-center'><BsFillCalendar2WeekFill/> 14th April, 2023</span>
                <span className='text-left text-xs flex gap-2 items-center'><HiOutlineLocationMarker/>Seminar Hall NIT Goa</span>
                <div className='flex gap-5 items-center'>
                    <span className='text-left text-xs flex gap-2 items-center'>
                        <AiOutlineStar/>
                        ${event.prize_money}
                    </span>
                    <span className='text-left text-xs flex gap-2 items-center'>
                        <HiCircleStack/>
                        200+
                    </span>
                </div>
            </div>
        </div>
  )
}

export default EventCard