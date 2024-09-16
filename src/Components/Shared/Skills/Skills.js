import SingleSkill from "@/Components/Ui/SingleSkill/SingleSkill";
import Image from "next/image";
import { SiRedux, SiMysql, SiSequelize, SiJquery } from "react-icons/si";
import { FaGithub, FaFigma, FaNodeJs, FaAws } from "react-icons/fa";
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
                                    <div className="mb-3 flex w-fit mx-auto gap-3 text-gray-950 dark:text-white">
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

                                        <Tooltip color="#0EA5E9" title="Tailwind">
                                            <SingleSkill>
                                                <SiTailwindcss className="text-[16px] md:text-[32px] text-[#14C1B7]" />
                                            </SingleSkill>
                                        </Tooltip>

                                    </div>
                                    <div className="flex w-fit mx-auto gap-3">
                                        <Tooltip color="#0EA5E9" title="Javascript">
                                            <SingleSkill>
                                                <SiJavascript className="text-[16px] md:text-[32px] text-yellow-300" />
                                            </SingleSkill>
                                        </Tooltip>

                                        <Tooltip color="#0EA5E9" title="React">
                                            <SingleSkill>
                                                <SiReact className="text-[16px] md:text-[32px] text-sky-400" />
                                            </SingleSkill>
                                        </Tooltip>

                                        <Tooltip color="#0EA5E9" title="Type script">
                                            <SingleSkill>
                                                <SiTypescript className="text-[16px] md:text-[32px] text-blue-500" />
                                            </SingleSkill>
                                        </Tooltip>

                                        <Tooltip color="#0EA5E9" title="Redux">
                                            <SingleSkill>
                                                <SiRedux className="text-[16px] md:text-[32px] text-indigo-400"></SiRedux>
                                            </SingleSkill>
                                        </Tooltip>


                                    </div>
                                    <div className="my-3 flex w-fit mx-auto gap-3">
                                        <Tooltip color="#0EA5E9" title="Firebase">
                                            <SingleSkill>
                                                <SiFirebase className="text-[16px] md:text-[32px] text-yellow-400" />
                                            </SingleSkill>
                                        </Tooltip>

                                        <Tooltip color="#0EA5E9" title="Node js">
                                            <SingleSkill>
                                                <FaNodeJs className="text-green-400 text-[16px] md:text-[32px]" />
                                            </SingleSkill>
                                        </Tooltip>

                                        <Tooltip color="#0EA5E9" title="Express js">
                                            <SingleSkill>
                                                <SiExpress className="text-white text-[16px] md:text-[32px]" />
                                            </SingleSkill>
                                        </Tooltip>

                                        <Tooltip color="#0EA5E9" title="Mongodb">
                                            <SingleSkill>
                                                <SiMongodb className="text-green-500 text-[16px] md:text-[32px]" />
                                            </SingleSkill>
                                        </Tooltip>

                                        <Tooltip color="#0EA5E9" title="Next Js">
                                            <SingleSkill>
                                                <div className="h-4 md:h-8 w-4 md:w-8">
                                                    <Image fill={true} src='https://res.cloudinary.com/devlj6p7h/image/upload/v1714762396/docs/lbuwdez6ukgbqzggopzc.png' alt="next js logo" />
                                                </div>
                                            </SingleSkill>
                                        </Tooltip>

                                    </div>
                                    <div className="flex w-fit mx-auto gap-3">

                                        <Tooltip color="#0EA5E9" title="Github">
                                            <SingleSkill>
                                                <FaGithub className="text-white text-[16px] md:text-[32px]"></FaGithub>
                                            </SingleSkill>
                                        </Tooltip>

                                        <Tooltip color="#0EA5E9" title="Mysql">
                                            <SingleSkill>
                                                <SiMysql className="text-[20px] md:text-[40px] text-white"></SiMysql>
                                            </SingleSkill>
                                        </Tooltip>

                                        <Tooltip color="#0EA5E9" title="Git">
                                            <SingleSkill>
                                                <SiGit className="text-red-500 text-[16px] md:text-[32px]" />
                                            </SingleSkill>
                                        </Tooltip>

                                        <Tooltip color="#0EA5E9" title="Vercel">
                                            <SingleSkill>
                                                <div className="h-4 md:h-8 w-4 md:w-8">
                                                    <Image fill={true} src='https://i.ibb.co/WBs41jh/vercel-copy.png' alt="Vercel logo" />
                                                </div>
                                            </SingleSkill>
                                        </Tooltip>

                                    </div>
                                    <div className="mt-3 flex w-fit mx-auto gap-3">
                                        <Tooltip color="#0EA5E9" title="Figma">
                                            <SingleSkill>
                                                <FaFigma className="text-white text-[16px] md:text-[32px]"></FaFigma>
                                            </SingleSkill>
                                        </Tooltip>

                                        <Tooltip color="#0EA5E9" title="Vs code">
                                            <SingleSkill>
                                                <SiVisualstudiocode className="text-[#29A3F1] text-[16px] md:text-[32px]" />
                                            </SingleSkill>
                                        </Tooltip>

                                        <Tooltip color="#0EA5E9" title="Netlify">
                                            <SingleSkill>
                                                <BiLogoNetlify className="text-[#3DB7B6] text-[16px] md:text-[32px]" />
                                            </SingleSkill>
                                        </Tooltip>
                                    </div>

                                    <div className="mt-3 flex w-fit mx-auto gap-3">
                                        <Tooltip color="#0EA5E9" title="AWS">
                                            <SingleSkill>
                                                <div className="h-4 md:h-8 w-4 md:w-8">
                                                    <FaAws className="text-yellow-300 text-[16px] md:text-[32px]" />
                                                </div>
                                            </SingleSkill>
                                        </Tooltip>

                                        <Tooltip color="#0EA5E9" title="Docker">
                                            <SingleSkill>
                                                <div className="h-4 md:h-8 w-4 md:w-8">
                                                    <DiDocker className="text-[#29A3F1] text-[16px] md:text-[32px]" />
                                                </div>
                                            </SingleSkill>
                                        </Tooltip>

                                        <Tooltip color="#0EA5E9" title="Sequelize">
                                            <SingleSkill>
                                                <div className="h-4 md:h-8 w-4 md:w-8">
                                                    <SiSequelize className="text-green-400 text-[16px] md:text-[32px]" />
                                                </div>
                                            </SingleSkill>
                                        </Tooltip>


                                        <Tooltip color="#0EA5E9" title="Bootstrap">
                                            <SingleSkill>
                                                <div className="h-4 md:h-8 w-4 md:w-8">
                                                    <BsBootstrap className="text-blue-400 text-[16px] md:text-[32px]" />
                                                </div>
                                            </SingleSkill>
                                        </Tooltip>

                                        <Tooltip color="#0EA5E9" title="Jquery">
                                            <SingleSkill>
                                                <div className="h-4 md:h-8 w-4 md:w-8">
                                                    <SiJquery className="text-blue-400 text-[16px] md:text-[32px]" />
                                                </div>
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