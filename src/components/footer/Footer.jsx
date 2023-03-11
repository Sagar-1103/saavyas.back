import React from "react";

const Footer = () => {
    return (
        <div className='bg-[#0F1B33] text-white flex flex-col gap-5 p-5'>
            <div className='flex flex-col gap-5 justify-between items-center'>
                <div className='flex justify-between gap-5 w-full items-center'>
                    {/* image section  */}
                    <img className='w-20 h-20' src='/saavyas-logo.png' alt='saavyas-logo' />
                    {/* college name  */}
                    <h1>National Institute of Technology Goa Farmagudi, Ponda , Goa - 403401</h1>
                </div>
                <div className='flex justify-center gap-10 w-full '>
                    {/* page links  */}
                    <ul className='w-1/2 flex flex-col justify-start align-middle'>
                        <li className='text-center hover:cursor-pointer hover:text-[#F9A826]'>
                            About
                        </li>
                        <li className='text-center hover:cursor-pointer hover:text-[#F9A826]'>
                            Sponsors
                        </li>
                        <li className='text-center hover:cursor-pointer hover:text-[#F9A826]'>
                            Merchandise
                        </li>
                        <li className='text-center hover:cursor-pointer hover:text-[#F9A826]'>
                            Partners
                        </li>
                        <li className='text-center hover:cursor-pointer hover:text-[#F9A826]'>
                            Contact
                        </li>
                    </ul>
                    {/* social links  */}
                    <ul className='w-1/2 flex flex-col justify-start align-middle'>
                        <li className='text-center hover:cursor-pointer hover:text-[#F9A826]'>
                            Facebook
                        </li>
                        <li className='text-center hover:cursor-pointer hover:text-[#F9A826]'>
                            Twitter
                        </li>
                        <li className='text-center hover:cursor-pointer hover:text-[#F9A826]'>
                            Linkedin
                        </li>
                        <li className='text-center hover:cursor-pointer hover:text-[#F9A826]'>
                            Instagram
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col justify-center align-middle'>
                <p className='text-center'>(434) 546-4356</p>
                <p className='text-center'>contact@saavyas.org</p>
                <p className='text-center'> &#169; 2023 Saavyas. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
