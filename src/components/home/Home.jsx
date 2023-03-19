import React from "react";
import pg from "./stuff.json"
const Home = () => {
     let analytics = pg.analytics;
     return( 
     <div style={{backgroundImage:"url(images/bg.png)"}} className="bg-contain bg-no-repeat w-[100%] bg-[#0F1B33] text-white gap-[10rem] flex flex-col justify-center items-center">
        
        <div className="flex justify-center text-6xl gap-[1.75rem] pt-40 h-80 pb-40 font-[lostfish]">
            Sea Shore Soiree
        </div>

        <div className="p-3 flex justify-center items-center flex-col gap-8 w-[100%]">
            <div className="font-semibold justify-center items-center text-4xl font-[lostfish]">About Us</div>
            <div className="w-[75%] justify-center items-center text-center text-md">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </div>
        </div>


        <div className="grid max-w-5xl gap-4 p-4 md:grid-cols-3 lg:grid-cols-2 flex-wrap">
            {
                analytics.map(point=>(
                    <div className="w-[25vw] h-[20vh] bg-[#5A7D9A40] flex flex-col justify-center items-center gap-[2rem]">
                        <span className="font-semibold text-4xl">
                            {point.value}
                        </span>
                        <span className="font-semibold text-xl">
                            {point.title}
                        </span>
                    </div>
                ))
            }
        </div>

        <div className="p-3 flex justify-center items-center flex-col gap-8 w-[100%]">
            <div className="font-semibold justify-center items-center text-4xl font-[lostfish]">Title Sponsors</div>
            <div className="w-[75%] justify-center items-center text-center text-md">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </div>
        </div>

        <div className="p-3 flex justify-center items-center flex-col gap-8 w-[100%]">
            <div className="font-semibold justify-center items-center text-4xl font-[lostfish]">Asssociate Sponsors</div>
            <div className="w-[75%] justify-center items-center text-center text-md">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </div>
        </div>
    </div>)
};

export default Home;
