import React from "react";
import pg from "./stuff.json";
import Wrapper from "../utils/Wrapper";

const Home = () => {
    let analytics = pg.analytics;
    return (
        <Wrapper>
            <div className="flex h-[80vh] justify-center items-center text-left text-5xl md:text-6xl p-[20px] h-80 pb-40 font-lostfish pt-[300px] md:pt-[400px] text-left md:w-full">
                Sea Shore Soiree
            </div>

            <div className="z-10 flex justify-center items-center flex-col gap-8 w-[100%] text-white">
                <div className="font-semibold justify-center items-center text-4xl font-lostfish ">
                    About Us
                </div>
                <div className="w-full md:w-[75%] flex lg:flex-row  flex-col justify-center items-center text-center md:text-left text-md xl:w-[1280px] mx-auto">
                    <div className="h-full flex justify-center items-center  lg:mx-[4rem] my-[3rem] lg:ml-[8rem] max-w-[200px]">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/e/e6/NIT_Goa_logo.png"
                            alt=""
                            className="rounded-full"
                        />
                    </div>
                    <div className="w-3/4">
                        NIT Goa is one of the Premier Institutes of National Importance in India,
                        currently operating at a transit campus at Ponda, while waiting for our
                        Permanent Campus at Cuncolim to be ready. It is no small feat that we have
                        secured a NIRF rank of 88 in a transit campus, this shows the true potential
                        of NIT Goa for growth and expansion. NIT Goa has organised various events
                        and activities for its students and is now bringing SAAVYAS 2023 after a
                        break of 3 years. <br /> <br /> SAAVYAS is NIT Goa's very own
                        Techno-Cultural Fest, it comprises of a beautiful balance of various events
                        catering to the very diverse audience of Goa. Students from all over Goa and
                        beyond come together to participate in the event. This year we wish to host
                        the event on a much higher scale and make the fest a grand spectacle and a
                        memorable event.
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-[3000px]:grid-cols-2 gap-6 pb-48">
                {analytics.map((point) => (
                    <div className="md:w-[25vw] lg:h-[30vh] w-[60vw] h-[40vh] bg-[#5A7D9A40] flex flex-col justify-center items-center gap-[2rem]">
                        <span className="font-semibold text-3xl min-[1200px]:text-7xl text-white">
                            {point.value}
                        </span>
                        <span className="font-semibold text-3xl min-[3000px]:text-7xl text-white">
                            {point.title}
                        </span>
                    </div>
                ))}
            </div>

            {false && (
                <div className="p-3 flex justify-center items-center flex-col gap-8 w-[100%]">
                    <div className="font-semibold justify-center items-center text-center text-4xl font-lostfish">
                        Title Sponsors
                    </div>
                    <div className="w-[75%] justify-center items-center text-center text-md">
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of using
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                        opposed to using 'Content here, content here', making it look like readable
                        English. Many desktop publishing packages and web page editors now use Lorem
                        Ipsum as their default model text, and a search for 'lorem ipsum' will
                        uncover many web sites still in their infancy. Various versions have evolved
                        over the years, sometimes by accident, sometimes on purpose (injected humour
                        and the like).
                    </div>
                </div>
            )}
            {false && (
                <div className="p-3 flex justify-center items-center flex-col gap-8 w-[100%] mb-5">
                    <div className="font-semibold text-center justify-center items-center text-4xl font-lostfish">
                        Asssociate Sponsors
                    </div>
                    <div className="w-[75%] justify-center items-center text-center text-md">
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of using
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                        opposed to using 'Content here, content here', making it look like readable
                        English. Many desktop publishing packages and web page editors now use Lorem
                        Ipsum as their default model text, and a search for 'lorem ipsum' will
                        uncover many web sites still in their infancy. Various versions have evolved
                        over the years, sometimes by accident, sometimes on purpose (injected humour
                        and the like).
                    </div>
                </div>
            )}
        </Wrapper>
    );
};

export default Home;
