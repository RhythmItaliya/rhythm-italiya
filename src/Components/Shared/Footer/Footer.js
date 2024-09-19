'use client'
import { Link } from "react-scroll";
import { BiLogoFacebook, BiLogoLinkedin, } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { DiGithubBadge } from 'react-icons/di';
import aboutMe from "@/config/aboutme.json";

const Footer = () => {

    return (
        <div className="bg-gradient-to-bl from-[#082231] to-[#051620] -mt-16 z-30 pb-5">
            <div className="2xl:max-w-7xl max-w-6xl mx-auto px-4">
                <div className="text-center pt-24 pb-10 mx-auto">
                    <h2 className="text-center text-3xl font-popins font-bold text-[#008AC2]">{aboutMe.name}</h2>
                    <div className="mt-5 lg:mt-8">
                        <ul className="flex flex-row gap-x-7 items-center justify-center">
                            {aboutMe.links.slice(0, 4).map((link, index) => (
                                <li key={index} className="text-lg lg:text-xl font-popins font-medium text-white">
                                    <Link
                                        className="cursor-pointer hover:text-[#008AC2] duration-200"
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
                    <div className="flex flex-row justify-center gap-x-5 mt-5 mx-auto lg:mt-8">
                        <a href={aboutMe.socialLinks.facebook} target="blank" className="inline-flex items-center justify-center h-8 md:h-10 w-8 md:w-10 border border-[#008AC2] rounded-full mr-1 hover:bg-[#008AC2] hover:text-gray-300 group">
                            <BiLogoFacebook className="text-xl md:text-2xl text-[#008AC2] group-hover:text-gray-300"></BiLogoFacebook>
                        </a>
                        <a href={aboutMe.socialLinks.twitter} target="blank" className="inline-flex items-center justify-center h-8 md:h-10 w-8 md:w-10 border border-[#008AC2] rounded-full mr-1 hover:bg-[#008AC2] hover:text-gray-300 group">
                            <BsTwitter className="text-xl md:text-2xl text-[#008AC2] group-hover:text-gray-300"></BsTwitter>
                        </a>
                        <a href={aboutMe.socialLinks.github} target="blank" className="inline-flex items-center justify-center h-8 md:h-10 w-8 md:w-10 border border-[#008AC2] rounded-full mr-1 hover:bg-[#008AC2] hover:text-gray-300 group">
                            <DiGithubBadge className="text-xl md:text-2xl text-[#008AC2] group-hover:text-gray-300"></DiGithubBadge>
                        </a>
                        <a href={aboutMe.socialLinks.linkedin} target="blank" className="inline-flex items-center justify-center h-8 md:h-10 w-8 md:w-10 border border-[#008AC2] rounded-full mr-1 hover:bg-[#008AC2] hover:text-gray-300 group">
                            <BiLogoLinkedin className="text-xl md:text-2xl text-[#008AC2] group-hover:text-gray-300"></BiLogoLinkedin>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;