import React from "react";
import { Link } from "react-router-dom";

const useWindowWidth = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    React.useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
};

const footerSocialLinks = [
    {
        id: "saavyas-facebook",
        name: "Facebook",
        link: "https://www.facebook.com/saavyas.nitg/",
        svg: "/images/svg/facebook.svg",
    },
    {
        id: "saavyas-youtube",
        name: "Youtube",
        link: "https://www.youtube.com/channel/UC4Ahxhye0-Nb20dooZ7Q_3A",
        svg: "/images/svg/youtube.svg",
    },
    {
        id: "saavyas-linkedin",
        name: "Linkedin",
        link: "https://www.linkedin.com/company/saavyas-nitgoa/about/",
        svg: "/images/svg/linkedin.svg",
    },
    {
        id: "saavyas-instagram",
        name: "Instagram",
        link: "https://www.instagram.com/saavyas.nitg/",
        svg: "/images/svg/instagram.svg",
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
        link: "https://merchandise.saavyas.org",
    },
    {
        id: "saavyas-events",
        name: "Events",
        link: "/events",
    },
    {
        id: "saavyas-contact",
        name: "Contact",
        link: "/contact",
    },
];

const Footer = () => {
    const width = useWindowWidth();
    return (
        <div className="bg-[#0F1B33] text-white flex flex-col gap-5 p-5 lg:p-10">
            <div className="w-full xl:w-cap mx-auto">
                <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-10  justify-between items-center">
                    {width >= 768 && (
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
                    )}
                    <div className="flex justify-center gap-10 w-full   sm:w-[80%] md:w-full mx-auto ">
                        {/* page links  */}
                        <ul className="w-1/2 flex flex-col  justify-start items-center md:items-start">
                            {width < 768 && (
                                <h3 className="font-lostfish font-bold w-full text-base text-left">
                                    Information
                                </h3>
                            )}
                            {navlinks.map((link) => (
                                <li
                                    key={link.id}
                                    className="text-left w-full hover:cursor-pointer hover:text-[#F9A826]"
                                >
                                    <Link to={link.link}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                        {/* social links  */}
                        {width < 768 ? (
                            <div className="w-1/2 flex flex-col justify-start items-center ">
                                <h3 className="font-lostfish font-bold w-full text-base text-right ">
                                    Contact Us
                                </h3>
                                <p className="text-right w-full">(434) 546-4356</p>
                                <p className="text-right  w-full ">contact@saavyas.org</p>
                            </div>
                        ) : (
                            <ul className="w-1/2 flex flex-col justify-start items-center md:items-start">
                                {footerSocialLinks.map((link) => (
                                    <li
                                        key={link.id}
                                        className="text-right w-full md:text-left hover:cursor-pointer hover:text-[#F9A826]"
                                    >
                                        <a target="_blank" href={link.link}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {width < 768 && (
                    <div className="w-full my-5 flex justify-between sm:justify-evenly items-center">
                        {footerSocialLinks.map((link) => (
                            <a key={link.id} target="_blank" href={link.link} rel="noreferrer">
                                <img
                                    key={link.id}
                                    className="w-14 sm:w-20 h-14 sm:h-20 object-contain "
                                    src={link.svg}
                                    alt={link.name}
                                />
                            </a>
                        ))}
                    </div>
                )}

                <div className="flex flex-col mt-3 lg:flex-row lg:justify-between lg:mt-10 justify-center align-middle">
                    {width >= 768 ? (
                        <>
                            <p className="text-center lg:w-1/3 lg:text-left">(434) 546-4356</p>
                            <p className="text-center lg:w-1/3 ">contact@saavyas.org</p>
                        </>
                    ) : (
                        <div className="w-full my-3 gap-3 flex flex-col justify-center items-center">
                            {/* image section  */}
                            <img
                                className="w-40 h-40  object-contain select-none"
                                src="/saavyas-logo2.png"
                                alt="saavyas-logo2"
                            />
                            {/* college name  */}
                            <h1 className=" md:text-xl lg:px-10 lg:w-3/5  text-center text-base font-bold">
                                National Institute of Technology Goa Farmagudi, Ponda , Goa - 403401
                            </h1>
                        </div>
                    )}

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
