import React, { useEffect, useState } from "react";
import { GetDetailsOfEndPoint } from "../firebase/realtimeDb";
import { UserAuth } from "../context/AuthContext.jsx";

const Myevents = ({ settext }) => {
    let [myEvents, setMyEvents] = useState(null);
    const {user} = UserAuth();

    async function LoadData() {
        try {
            let x = await GetDetailsOfEndPoint("teams/");
            let y = [];
            Object.entries(x).forEach(([key, value]) => {
                const parts = key.split('-');
                if (user.uid===parts[1]) {
                    const temp = [key,value];
                    y.push(temp);
                }
              });
            // console.log(y);
            setMyEvents(y);
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
                    {
                        myEvents && myEvents.map((event)=>{
                            const teamDetails = event[1];
                            // console.log(teamDetails.teamMembers);
                            return (
                                <div style={{marginBottom:20,marginTop:20,color:"white",borderWidth:1,borderColor:"white"}}>
                                <h1 style={{textAlign:"center",fontSize:25}}>{teamDetails.teamName}</h1>
                                <div style={{borderWidth:1,borderColor:"white",padding:5}}>
                                <p>Team Members : [{teamDetails.teamMembers.map(member=>(` ${member} `))}]</p>
                                <p>College Name : {teamDetails.collegeName}</p>
                                <p>Created on : {teamDetails.createdAt.slice(0,10)}</p>
                                <p>Payment Status : {teamDetails.hasPaid ? "Paid":"Not Paid"}</p>
                                </div>
                            </div>
                            )
                            
})
                    }
                    {/* {events && Object.keys(events.technical).length > 0 ? (
                        <Techinical event={Object.values(events.technical)} eventType="technical" />
                    ) : (
                        <p>No technical events available</p>
                    )} */}
                </div>
                </div>
        </section>
    );
};

export default Myevents;
