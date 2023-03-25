import React from "react";

const Contain = ({ children }) => {
    return (
        <div className='pt-40 w-full flex-1 bg-[#0F1B33] p-5 lg:p-10 '>
            <div className='flex justify-center items-center w-full xl:w-cap mx-auto'>
                {children}
            </div>
        </div>
    );
};

const Input = ({ label, type, placeholder }) => {
    return (
        <div className='flex flex-col gap-2'>
            <label className='text-white text-sm'>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className='bg-[#1F2B47] text-white rounded-md p-2'
            />
        </div>
    );
};

const Register = () => {
    const [isTeam, setIsTeam] = React.useState(true);
    return (
        <Contain>
            <div className='bg-[rgba(217, 217, 217, 1)] text-white w-full grid grid-cols-1 '>
                <div className='flex flex-col gap-5'>
                    <img
                        className='w-full object-contain select-none rounded-sm'
                        src='/images/event-poster.png'
                        alt=''
                    />
                    <h1 className='font-lostfish text-3xl text-center'>event name</h1>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='w-full flex justify-center items-center '>
                        <div className='w-1/2 flex flex-col justify-center items-center'>
                            <p>Prize Worth</p>
                            <p>&#8377; 200000</p>
                        </div>
                        <div className='w-1/2 flex flex-col justify-center items-center'>
                            <p>Entry Fee</p>
                            <p>&#8377; 1000</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div>
                        <h2 className='text-center'>Register as</h2>
                        <div className='w-full flex justify-center items-center'>
                            <div className='w-1/2 flex gap-2 items-center justify-center  '>
                                {/* radio button input  */}
                                <input
                                    type='radio'
                                    name='team'
                                    id='team'
                                    value='team'
                                    checked={isTeam}
                                    onChange={() => setIsTeam(true)}
                                />
                                <label htmlFor='individual'>Team</label>
                            </div>
                            <div className='w-1/2 flex gap-2 items-center justify-center  '>
                                {/* radio button input  */}
                                <input
                                    type='radio'
                                    name='team'
                                    id='individual'
                                    value='individual'
                                    checked={!isTeam}
                                    onChange={() => setIsTeam(false)}
                                />
                                <label htmlFor='individual'>Individual</label>
                            </div>
                        </div>
                    </div>
                    <form id='eventRegistrationForm'></form>
                </div>
                <div className='flex flex-col'>
                    <button htmlFor='eventRegistrationForm' className='text-center font-lostfish'>
                        Pay And Register
                    </button>
                </div>
            </div>
        </Contain>
    );
};

export default Register;
