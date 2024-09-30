'use client'
import { Link } from "react-scroll";
import Image from "next/image";
import Sticky from "react-stickynode";
import Logo from '@/images/logo.png';
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { Drawer } from 'antd';
import aboutMe from "@/config/aboutme.json";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Sticky top="#header" bottomBoundary="#content" innerZ={50}>
            <div className="py-2 bg-[#082231] z-50">
                <div className="2xl:max-w-7xl max-w-6xl mx-auto">
                    <div className="flex justify-between items-center ">
                        <Link
                            className="cursor-pointer hover:text-purple-600 duration-200"
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            <div className="flex items-center">
                                <Image priority={false} className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 px-4" src={Logo} alt="logo" />
                            </div>
                        </Link>
                        <div className="hidden md:block">
                            <ul className="flex flex-row gap-x-7 items-center">
                                {aboutMe.links.map((link, index) => (
                                    <li key={index} className="text-base lg:text-lg font-popins font-medium text-white">
                                        <Link
                                            className="cursor-pointer hover:text-[#00A6E8] duration-200"
                                            activeClass="active"
                                            to={link.to}
                                            spy={true}
                                            smooth={true}
                                            offset={50}
                                            duration={500}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <a
                                href={aboutMe.socialLinks.github}
                                target="blank"
                                className="relative inline-block px-4 py-2 sm:px-5 sm:py-3 font-bold text-sm sm:text-base md:text-lg rounded-full group"
                            >
                                <span className="relative text-[#00A6E8] transition-colors duration-200 ease-in-out group-hover:text-white">
                                    Github Profile
                                </span>
                                <span className="absolute inset-0 border-2 border-[#00A6E8] rounded-full"></span>
                            </a>
                            <HiOutlineMenu onClick={() => setOpen(true)} className="text-3xl text-gray-200 mr-3 md:hidden" />
                        </div>
                    </div>
                </div>

                <Drawer title={
                    <Link
                        onClick={() => setOpen(false)}
                        className="cursor-pointer hover:text-purple-600 duration-200"
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        <div className="flex items-center">
                            <Image priority={false} className="h-10 w-auto md:h-12 lg:h-14 ml-3" src={Logo} alt="logo" />
                        </div>
                    </Link>} onClose={() => setOpen(false)
                    }
                    open={isOpen} width={300}>

                    <ul className="flex flex-col gap-y-5 pl-5">
                        {aboutMe.links.map((link, index) => (
                            <li key={index} className="text-lg font-popins font-medium text-white">
                                <Link
                                    className="cursor-pointer hover:text-[#00A6E8] duration-200 active"
                                    onClick={() => setOpen(false)}
                                    activeClass="active"
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Drawer>
            </div>
        </Sticky>
    );
};

export default Navbar;