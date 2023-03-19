import React from "react";
import pg from "./stuff.json"
import sponsors from "./sponsors.json"
const Home = () => {
     let analytics = pg.analytics;
     return( 
     <div style={{backgroundImage:"url(images/bg.png)"}} className="bg-contain bg-center-top bg-no-repeat w-full mx-auto bg-[#0F1B33] text-white gap-[10rem] flex flex-col justify-center items-center">
        
        <div className="flex justify-center text-6xl gap-[1.75rem] pt-40 h-80 pb-40 font-[lostfish]">
            Sea Shore Soiree
        </div>

        <div className="p-3 flex justify-center items-center flex-col gap-8 w-[100%]">
            <div className="font-semibold justify-center items-center text-4xl font-[lostfish]">About Us</div>
            <div className="w-[75%] justify-center items-center text-center text-md xl:w-[1280px] mx-auto">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-[3000px]:grid-cols-2 gap-6">
            {
                analytics.map(point=>(
                    <div className="md:w-[25vw] lg:h-[30vh] w-[60vw] h-[40vh] bg-[#5A7D9A40] flex flex-col justify-center items-center gap-[2rem]">
                        <span className="font-semibold text-3xl min-[3000px]:text-7xl">
                            {point.value}
                        </span>
                        <span className="font-semibold text-3xl min-[3000px]:text-7xl">
                            {point.title}
                        </span>
                    </div>
                ))
            }
        </div>
        {
            Object.keys(sponsors).map(sponsorType =>(

            <div className="p-3 flex justify-center items-center flex-col gap-8 w-[100%]">
                <div className="font-semibold justify-center items-center text-4xl font-[lostfish]">{sponsorType.split("_").join(" ")}</div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-[3000px]:grid-cols-2 gap-6">
        
                {
                    sponsors[sponsorType].map(sponsor => (
                        <div className="md:w-[25vw] lg:h-[30vh] w-[60vw] h-[40vh] flex flex-col justify-center items-center gap-[2rem]">
                            <img src={sponsor.logo}/>
                            <span className="font-semibold text-xl min-[3000px]:text-7xl">
                                {sponsor.name}
                            </span>
                        </div>
                    ))
                }
                </div>
            </div>
            ))
        }
    </div>)
};

export default Home;
