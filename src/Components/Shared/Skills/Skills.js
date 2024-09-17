import SingleSkill from "@/Components/Ui/SingleSkill/SingleSkill";
import Image from "next/image";
import { SiRedux, SiMysql, SiSequelize, SiJquery, SiNextdotjs } from "react-icons/si";
import { FaGithub, FaNodeJs, FaAws, FaLinux } from "react-icons/fa";
import { SiExpress, SiTypescript, SiTailwindcss, SiJavascript, SiFirebase, SiMongodb, SiGit, SiVisualstudiocode, SiReact } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { Tooltip } from "antd";
import { DiDocker } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";

const Skills = () => {
    return (
        <div className="bg-gradient-to-bl from-[#082231] to-[#051620] -mt-28 z-30 pb-28 skills" id="skills">
            <div className="2xl:max-w-7xl max-w-6xl mx-auto px-4">
                <div className="text-center pt-36 pb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-popins text-white">Skills</h2>
                    <p className="mt-3 md:mt-3 lg:mt-5 text-base md:text-lg lg:text-xl font-medium font-popins text-gray-400">Here are some of my skills in web development.</p>

                    <section data-aos="zoom-in-up">
                        <div className="py-8">
                            <div className="mx-auto px-6 max-w-6xl text-gray-500">
                                <div className="mt-12 relative w-fit h-fit sm:mx-auto sm:px-0 -mx-6 px-6 overflow-x-auto">

                                    {/* Frontend Skills */}
                                    <div className="mb-3 mt-3 text-center text-white">
                                        <h3 className="text-xl font-bold">Frontend</h3>
                                    </div>
                                    <div className="mt-3 flex w-fit mx-auto gap-3">
                                        <Tooltip color="#0EA5E9" title="Html">
                                            <SingleSkill>
                                                <div className="h-4 md:h-8 w-4 md:w-8 relative">
                                                    <Image className="mx-auto text-center" fill={true} placeholder='blur' blurDataURL="data:..." src='https://i.ibb.co/fMyFC46/html.png' alt="html logo" />
                                                </div>
                                            </SingleSkill>
                                        </Tooltip>
                                        <Tooltip color="#0EA5E9" title="Css">
                                            <SingleSkill>
                                                <div className="h-4 md:h-8 w-4 md:w-8 relative">
                                                    <Image fill={true} placeholder='blur' blurDataURL="data:..." src='https://i.ibb.co/MhT6tdM/CSS3-logo-svg.png' alt="css logo" />
                                                </div>
                                            </SingleSkill>
                                        </Tooltip>
                                        <Tooltip color="#0EA5E9" title="Bootstrap">
                                            <SingleSkill>
                                                <BsBootstrap className="text-blue-400 text-[16px] md:text-[32px]" />
                                            </SingleSkill>
                                        </Tooltip>
                                        <Tooltip color="#0EA5E9" title="Tailwind">
                                            <SingleSkill>
                                                <SiTailwindcss className="text-[16px] md:text-[32px] text-[#14C1B7]" />
                                            </SingleSkill>
                                        </Tooltip>
                                    </div>
                                    <div className="mt-3 flex w-fit mx-auto gap-3">
                                        <Tooltip color="#0EA5E9" title="jQuery">
                                            <SingleSkill>
                                                <SiJquery className="text-blue-400 text-[16px] md:text-[32px]" />
                                            </SingleSkill>
                                        </Tooltip>
                                        <Tooltip color="#0EA5E9" title="Javascript">
                                            <SingleSkill>
                                                <SiJavascript className="text-[16px] md:text-[32px] text-yellow-300" />
                                            </SingleSkill>
                                        </Tooltip>
                                        <Tooltip color="#0EA5E9" title="React Js">
                                            <SingleSkill>
                                                <SiReact className="text-[16px] md:text-[32px] text-sky-400" />
                                            </SingleSkill>
                                        </Tooltip>
                                        <Tooltip color="#0EA5E9" title="TypeScript">
                                            <SingleSkill>
                                                <SiTypescript className="text-[16px] md:text-[32px] text-blue-500" />
                                            </SingleSkill>
                                        </Tooltip>
                                        <Tooltip color="#0EA5E9" title="Redux">
                                            <SingleSkill>
                                                <SiRedux className="text-[16px] md:text-[32px] text-indigo-400"></SiRedux>
                                            </SingleSkill>
                                        </Tooltip>

                                        <Tooltip color="#0EA5E9" title="Next Js">
                                            <SingleSkill>
                                                <SiNextdotjs className="text-[16px] md:text-[32px] text-gray-400"></SiNextdotjs>
                                            </SingleSkill>
                                        </Tooltip>

                                    </div>

                                    {/* Backend Skills */}
                                    <div className="mb-3 mt-3 text-center text-white">
                                        <h3 className="text-xl font-bold">Backend</h3>
                                    </div>
                                    <div className="mt-3 flex w-fit mx-auto gap-3">
                                        <Tooltip color="#0EA5E9" title="MySQL">
                                            <SingleSkill>
                                                <SiMysql className="text-[20px] md:text-[40px] text-white"></SiMysql>
                                            </SingleSkill>
                                        </Tooltip>
                                        <Tooltip color="#0EA5E9" title="MongoDB">
                                            <SingleSkill>
                                                <SiMongodb className="text-green-500 text-[16px] md:text-[32px]" />
                                            </SingleSkill>
                                        </Tooltip>
                                        <Tooltip color="#0EA5E9" title="Firebase">
                                            <SingleSkill>
                                                <SiFirebase className="text-[16px] md:text-[32px] text-yellow-400" />
                                            </SingleSkill>
                                        </Tooltip>
                                    </div>
                                    <div className="mt-3 flex w-fit mx-auto gap-3">
                                        <Tooltip color="#0EA5E9" title="Node.js">
                                            <SingleSkill>
                                                <FaNodeJs className="text-green-400 text-[16px] md:text-[32px]" />
                                            </SingleSkill>
                                        </Tooltip>
                                        <Tooltip color="#0EA5E9" title="Express.js">
                                            <SingleSkill>
                                                <SiExpress className="text-white text-[16px] md:text-[32px]" />
                                            </SingleSkill>
                                        </Tooltip>
                                        <Tooltip color="#0EA5E9" title="Sequelize">
                                            <SingleSkill>
                                                <SiSequelize className="text-green-400 text-[16px] md:text-[32px]" />
                                            </SingleSkill>
                                        </Tooltip>
                                    </div>

                                    {/* Tools & Others */}
                                    <div className="mb-3 mt-3 text-center text-white">
                                        <h3 className="text-xl font-bold">Tools & Others</h3>
                                    </div>
                                    <div className="flex w-fit mx-auto gap-3">
                                        <Tooltip color="#0EA5E9" title="GitHub">
                                            <SingleSkill>
                                                <FaGithub className="text-white text-[16px] md:text-[32px]"></FaGithub>
                                            </SingleSkill>
                                        </Tooltip>
                                        <Tooltip color="#0EA5E9" title="Git">
                                            <SingleSkill>
                                                <SiGit className="text-red-500 text-[16px] md:text-[32px]" />
                                            </SingleSkill>
                                        </Tooltip>
                                    </div>
                                    <div className="mt-3 flex w-fit mx-auto gap-3">
                                        <Tooltip color="#0EA5E9" title="AWS">
                                            <SingleSkill>
                                                <FaAws className="text-yellow-300 text-[16px] md:text-[32px]" />
                                            </SingleSkill>
                                        </Tooltip>
                                        <Tooltip color="#0EA5E9" title="Vercel">
                                            <SingleSkill>
                                                <div className="h-4 md:h-8 w-4 md:w-8">
                                                    <Image fill={true} src='https://i.ibb.co/WBs41jh/vercel-copy.png' alt="Vercel logo" />
                                                </div>
                                            </SingleSkill>
                                        </Tooltip>
                                        <Tooltip color="#0EA5E9" title="Netlify">
                                            <SingleSkill>
                                                <BiLogoNetlify className="text-[#3DB7B6] text-[16px] md:text-[32px]" />
                                            </SingleSkill>
                                        </Tooltip>
                                        <Tooltip color="#0EA5E9" title="Docker">
                                            <SingleSkill>
                                                <DiDocker className="text-[#29A3F1] text-[16px] md:text-[32px]" />
                                            </SingleSkill>
                                        </Tooltip>
                                    </div>
                                    <div className="mt-3 flex w-fit mx-auto gap-3">
                                        <Tooltip color="#0EA5E9" title="Visual Studio Code">
                                            <SingleSkill>
                                                <SiVisualstudiocode className="text-[#29A3F1] text-[16px] md:text-[32px]" />
                                            </SingleSkill>
                                        </Tooltip>
                                        <Tooltip color="#0EA5E9" title="Linux">
                                            <SingleSkill>
                                                <FaLinux className="text-gray-400 text-[16px] md:text-[32px]" />
                                            </SingleSkill>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Skills;
