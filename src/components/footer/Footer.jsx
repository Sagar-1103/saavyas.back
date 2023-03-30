import React from "react";
import { Link } from "react-router-dom";

const footerSocialLinks = [
    {
        id: "saavyas-facebook",
        name: "Facebook",
        link: "https://www.facebook.com/saavyas.nitg/",
    },
    {
        id: "saavyas-twitter",
        name: "Twitter",
        link: "https://twitter.com/saavyas_nitg",
    },
    {
        id: "saavyas-linkedin",
        name: "Linkedin",
        link: "https://www.linkedin.com/company/saavyas-nitgoa/about/",
    },
    {
        id: "saavyas-instagram",
        name: "Instagram",
        link: "https://www.instagram.com/saavyas.nitg/",
    },
];

const navlinks = [
    {
        id: "saavyas-about",
        name: "About",
        link: "/about",
    },
    {
        id: "saavyas-sponsors",
        name: "Sponsors",
        link: "/sponsors",
    },
    {
        id: "saavyas-merchandise",
        name: "Merchandise",
        link: "/merchandise",
    },
    {
        id: "saavyas-partners",
        name: "Partners",
        link: "/partners",
    },
    {
        id: "saavyas-contact",
        name: "Contact",
        link: "/contact",
    },
];

const Footer = () => {
    return (
        <div className="bg-[#0F1B33] text-white flex flex-col gap-5 p-5 lg:p-10">
            <div className="w-full xl:w-cap mx-auto">
                <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-10  justify-between items-center">
                    <div className="flex justify-between lg:justify-start gap-5 w-full items-center lg:items-start ">
                        {/* image section  */}
                        <img
                            className="w-20 h-20 lg:w-40 lg:h-40 object-contain select-none"
                            src="/saavyas-logo.png"
                            alt="saavyas-logo"
                        />
                        {/* college name  */}
                        <h1 className=" md:text-xl lg:px-10 lg:w-3/5  text-base font-bold">
                            National Institute of Technology Goa Farmagudi, Ponda , Goa - 403401
                        </h1>
                    </div>
                    <div className="flex justify-center gap-10  w-full ">
                        {/* page links  */}
                        <ul className="w-1/2 flex flex-col  justify-start items-center md:items-start">
                            {navlinks.map((link) => (
                                <li
                                    key={link.id}
                                    className="text-center md:text-left hover:cursor-pointer hover:text-[#F9A826]"
                                >
                                    <Link to={link.link}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                        {/* social links  */}
                        <ul className="w-1/2 flex flex-col justify-start items-center md:items-start">
                            {footerSocialLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className="text-center md:text-left hover:cursor-pointer hover:text-[#F9A826]"
                                >
                                    <a target="_blank" href={link.link}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col mt-3 lg:flex-row lg:justify-between lg:mt-10 justify-center align-middle">
                    <p className="text-center lg:w-1/3 lg:text-left">(434) 546-4356</p>
                    <p className="text-center lg:w-1/3 ">contact@saavyas.org</p>
                    <p className="text-center lg:w-1/3 lg:text-right">
                        {" "}
                        &#169; 2023 Saavyas. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
