import TypeAnim from '@/Components/Ui/TypeAnim/TypeAnim';
import React from 'react';
import aboutMe from "@/config/aboutme.json";

const HomeAbout = () => {
    return (
        <div className="2xl:max-w-7xl max-w-6xl mx-auto px-4">
            <div className="min-h-[calc(100vh-64px)] flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-5 md:gap-5 mt-6 md:mt-0 text-white items-center min-h-[calc(100vh-64px)]">

                    <div data-aos="zoom-in-right" className="order-2 md:order-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-popins mb-4 md:mb-5">{`Hi, I'm`}</h1>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-popins mb-4 md:mb-5">{aboutMe.Name}</h1>
                        <h1 className="inline font-popins text-white text-2xl lg:text-3xl font-bold">{`I'm a `}</h1>

                        {/* Typer animation is here  */}
                        <TypeAnim />

                        <h5 className="mt-5 mb-7 md:mb-8 lg:mb-10 text-lg lg:text-xl font-popins text-gray-400">{aboutMe.Introduction}</h5>

                        <a href={aboutMe.Resume.drive} target="blank" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#00A4E6] rounded-xl group">
                            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#0082B6] rounded group-hover:-mr-4 group-hover:-mt-4">
                                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                            </span>
                            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#0082B6] rounded-2xl group-hover:mb-12 group-hover:translate-x-0">
                            </span>
                            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Download Resume</span>

                        </a>
                        <a href={aboutMe.socialLinks.linkedin} target="blank" className="relative mx-5 px-5 py-2 font-medium text-white group">
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#008dd3] group-hover:bg-[#0076B3] group-hover:skew-x-12"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#0076B3] group-hover:bg-[#008dd3] group-hover:-skew-x-12"></span>
                            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#008dd3] -rotate-12"></span>
                            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#00a3ef] -rotate-12"></span>
                            <span className="relative">in</span>
                        </a>
                    </div>

                    <div data-aos="zoom-in-left" className="mx-auto order-1 md:order-2">

                        <div className="mockup-code w-80 md:w-40 lg:w-full bg-white/5 text-gray-300">
                            <pre data-prefix="1"><code>{`const AboutMe = {`}</code></pre>
                            <pre data-prefix="2"><code>{`  Name: "${aboutMe.Name}",`}</code></pre>
                            <pre data-prefix="3"><code>{`  Role: "${aboutMe.Role}",`}</code></pre>
                            <pre data-prefix="4"><code>{`  Age: ${aboutMe.Age},`}</code></pre>
                            <pre data-prefix="5"><code>{`  Gender: "${aboutMe.Gender}",`}</code></pre>
                            <pre data-prefix="6"><code>{`  Address: "${aboutMe.Address}"`}</code></pre>
                            <pre data-prefix="7"><code>{`  Phone: "${aboutMe.Phone}"`}</code></pre>
                            <pre data-prefix="8"><code>{`  Email: "${aboutMe.Email}",`}</code></pre>
                            <pre data-prefix="9"><code>{`  Language: [`}</code></pre>
                            <pre data-prefix="10">
                                <code>
                                    {`    ${aboutMe.Language.map(lang => `"${lang}"`).join(",")}`}
                                </code>
                            </pre>
                            <pre data-prefix="11"><code>{`  ]`}</code></pre>
                            <pre data-prefix="12"><code>{`};`}</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;