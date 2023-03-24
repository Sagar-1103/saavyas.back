import React from "react";
import Wrapper from "../utils/Wrapper";

const Events = () => {
    return (
        <Wrapper>
            <div className='w-full flex justify-center text-xl text-center gap-[1.75rem] pt-40 h-80 pb-40 font-lostfish'>
                <div style={{
                background: "linear-gradient(241.26deg,rgba(169, 204, 236, 0.2) 29.13%,rgba(90, 125, 154, 0.13) 61.59%)"
            }} className="backdrop-blur-[3.5px] shadow-[2px_2px_12px_2px_rgba(0,0,0,0.25)] w-[45%] rounded-md">
                    Technical Events
                </div>
                <div style={{
                background: "linear-gradient(241.26deg,rgba(169, 204, 236, 0.2) 29.13%,rgba(90, 125, 154, 0.13) 61.59%)"
            }}className=" backdrop-blur-[3.5px] shadow-[2px_2px_12px_2px_rgba(0,0,0,0.25)] w-[45%] rounded-md">
                    Cultural Events
                </div>
            </div>
            <div className='p-3 flex justify-center items-center flex-col gap-8 w-[100%]'>
                <div className='font-semibold justify-center items-center text-4xl font-lostfish'>
                    Technical Events
                </div>
                <div className='w-[75%] justify-center items-center text-center text-md xl:w-[1280px] mx-auto'>
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum as their default
                    model text, and a search for 'lorem ipsum' will uncover many web sites still in
                    their infancy. Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose (injected humour and the like).
                </div>
            </div>

            
            
            <div className='p-3 flex justify-center items-center flex-col gap-8 w-[100%]'>
                <div className='font-semibold justify-center items-center text-4xl font-lostfish'>
                    Cultural Events
                </div>
                <div className='w-[75%] justify-center items-center text-center text-md xl:w-[1280px] mx-auto'>
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum as their default
                    model text, and a search for 'lorem ipsum' will uncover many web sites still in
                    their infancy. Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose (injected humour and the like).
                </div>
            </div>
        </Wrapper>
    )
};

export default Events;
