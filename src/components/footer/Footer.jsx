import React from "react";

const Footer = () => {
    return (
        <div className='bg-[#0F1B33] text-white flex flex-col gap-5 p-5 lg:p-10'>
            <div className='w-full xl:w-cap mx-auto'>
                <div className='flex flex-col md:flex-row md:items-start gap-5 md:gap-10  justify-between items-center'>
                    <div className='flex justify-between lg:justify-start gap-5 w-full items-center lg:items-start '>
                        {/* image section  */}
                        <img
                            className='w-20 h-20 lg:w-40 lg:h-40 object-contain select-none'
                            src='/saavyas-logo.png'
                            alt='saavyas-logo'
                        />
                        {/* college name  */}
                        <h1 className=' md:text-xl lg:px-10 lg:w-3/5  text-base font-bold'>
                            National Institute of Technology Goa Farmagudi, Ponda , Goa - 403401
                        </h1>
                    </div>
                    <div className='flex justify-center gap-10  w-full '>
                        {/* page links  */}
                        <ul className='w-1/2 flex flex-col  justify-start items-center md:items-start'>
                            <li className='text-center md:text-left hover:cursor-pointer hover:text-[#F9A826]'>
                                About
                            </li>
                            <li className='text-center md:text-left hover:cursor-pointer hover:text-[#F9A826]'>
                                Sponsors
                            </li>
                            <li className='text-center md:text-left hover:cursor-pointer hover:text-[#F9A826]'>
                                Merchandise
                            </li>
                            <li className='text-center md:text-left hover:cursor-pointer hover:text-[#F9A826]'>
                                Partners
                            </li>
                            <li className='text-center md:text-left hover:cursor-pointer hover:text-[#F9A826]'>
                                Contact
                            </li>
                        </ul>
                        {/* social links  */}
                        <ul className='w-1/2 flex flex-col justify-start items-center md:items-start'>
                            <li className='text-center md:text-left hover:cursor-pointer hover:text-[#F9A826]'>
                                Facebook
                            </li>
                            <li className='text-center md:text-left hover:cursor-pointer hover:text-[#F9A826]'>
                                Twitter
                            </li>
                            <li className='text-center md:text-left hover:cursor-pointer hover:text-[#F9A826]'>
                                Linkedin
                            </li>
                            <li className='text-center md:text-left hover:cursor-pointer hover:text-[#F9A826]'>
                                Instagram
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row lg:justify-between lg:mt-10 justify-center align-middle'>
                    <p className='text-center lg:w-1/3 lg:text-left'>(434) 546-4356</p>
                    <p className='text-center lg:w-1/3 '>contact@saavyas.org</p>
                    <p className='text-center lg:w-1/3 lg:text-right'>
                        {" "}
                        &#169; 2023 Saavyas. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
