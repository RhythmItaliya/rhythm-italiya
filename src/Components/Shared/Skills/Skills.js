import SingleSkill from "@/Components/Ui/SingleSkill/SingleSkill";
import Image from "next/image";
import {
    SiRedux, SiMysql, SiSequelize, SiJquery, SiNextdotjs,
    SiExpress, SiTypescript, SiTailwindcss, SiJavascript,
    SiFirebase, SiMongodb, SiGit, SiVisualstudiocode, SiReact
} from "react-icons/si";
import { FaGithub, FaNodeJs, FaAws, FaLinux } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { Tooltip } from "antd";
import { DiDocker } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";

const skillsData = [
    {
        title: "Frontend",
        icons: [
            { component: <Image className="mx-auto" fill={true} src='https://i.ibb.co/fMyFC46/html.png' alt="html logo" />, tooltip: "Html" },
            { component: <Image className="mx-auto" fill={true} src='https://i.ibb.co/MhT6tdM/CSS3-logo-svg.png' alt="css logo" />, tooltip: "Css" },
            { component: <BsBootstrap className="text-blue-400 text-[32px]" />, tooltip: "Bootstrap" },
            { component: <SiTailwindcss className="text-[32px] text-[#14C1B7]" />, tooltip: "Tailwind" },
            { component: <SiJquery className="text-blue-400 text-[32px]" />, tooltip: "jQuery" },
            { component: <SiJavascript className="text-[32px] text-yellow-300" />, tooltip: "Javascript" },
            { component: <SiReact className="text-[32px] text-sky-400" />, tooltip: "React Js" },
            { component: <SiTypescript className="text-[32px] text-blue-500" />, tooltip: "TypeScript" },
            { component: <SiNextdotjs className="text-[32px] text-gray-400" />, tooltip: "Next Js" },
            { component: <SiRedux className="text-[32px] text-indigo-400" />, tooltip: "Redux" },
        ],
    },
    {
        title: "Backend",
        icons: [
            { component: <SiMysql className="text-[32px] md:text-[40px] text-white" />, tooltip: "MySQL" },
            { component: <SiMongodb className="text-green-500 text-[32px] md:text-[32px]" />, tooltip: "MongoDB" },
            { component: <SiFirebase className="text-[32px] md:text-[32px] text-yellow-400" />, tooltip: "Firebase" },
            { component: <FaNodeJs className="text-green-400 text-[32px] md:text-[32px]" />, tooltip: "Node.js" },
            { component: <SiExpress className="text-white text-[32px] md:text-[32px]" />, tooltip: "Express.js" },
            { component: <SiSequelize className="text-green-400 text-[32px] md:text-[32px]" />, tooltip: "Sequelize" },
        ],
    },
    {
        title: "Tools & Others",
        icons: [
            { component: <FaGithub className="text-white text-[32px] md:text-[32px]" />, tooltip: "GitHub" },
            { component: <SiGit className="text-red-500 text-[32px] md:text-[32px]" />, tooltip: "Git" },
            { component: <FaAws className="text-yellow-300 text-[32px] md:text-[32px]" />, tooltip: "AWS" },
            { component: <Image fill={true} src='https://i.ibb.co/WBs41jh/vercel-copy.png' alt="Vercel logo" />, tooltip: "Vercel" },
            { component: <BiLogoNetlify className="text-[#3DB7B6] text-[32px] md:text-[32px]" />, tooltip: "Netlify" },
            { component: <DiDocker className="text-[#29A3F1] text-[32px] md:text-[32px]" />, tooltip: "Docker" },
            { component: <SiVisualstudiocode className="text-[#29A3F1] text-[32px] md:text-[32px]" />, tooltip: "Visual Studio Code" },
            { component: <FaLinux className="text-gray-400 text-[32px] md:text-[32px]" />, tooltip: "Linux" },
        ],
    },
];

const Skills = () => {
    return (
        <div className="bg-gradient-to-bl from-[#082231] to-[#051620] -mt-28 z-30 pb-28 skills" id="skills">
            <div className="2xl:max-w-7xl max-w-6xl mx-auto px-4">
                <div className="text-center pt-36 pb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-popins text-white">Skills</h2>
                    <p className="mt-3 md:mt-3 lg:mt-5 text-base md:text-lg lg:text-xl font-medium font-popins text-gray-400">Here are some of my skills in web development.</p>
                    <section data-aos="zoom-in-up">
                        <div className="mx-auto px-6 max-w-6xl text-gray-500">
                            <div className="mt-5 relative w-fit h-fit sm:mx-auto sm:px-0 -mx-6 px-6 overflow-x-auto">
                                {skillsData.map((skillSet, index) => (
                                    <div key={index}>
                                        <div className="mb-5 mt-5 text-center text-white">
                                            <h3 className="text-xl font-bold">{skillSet.title}</h3>
                                        </div>
                                        <div className="mt-3 grid grid-cols-4 gap-4 mx-auto">
                                            {skillSet.icons.map((icon, iconIndex) => (
                                                <Tooltip key={iconIndex} color="#0EA5E9" title={icon.tooltip}>
                                                    <SingleSkill>
                                                        <div className="h-8 w-8 relative">
                                                            {icon.component}
                                                        </div>
                                                    </SingleSkill>
                                                </Tooltip>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Skills;
