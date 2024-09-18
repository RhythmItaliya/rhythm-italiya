import Image from "next/image";
import educationData from "@/config/education.json";

const Education = () => {
    return (
        <div className="bg-gradient-to-bl from-[#082231] to-[#051620] -mt-16 z-30 pb-28" id='education'>
            <div className="2xl:max-w-7xl max-w-6xl mx-auto px-4">
                <div className="text-center pt-24 pb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-popins text-white">Education</h2>
                    <p className="mt-3 md:mt-3 lg:mt-5 text-base md:text-lg lg:text-xl font-medium font-popins text-gray-400">My all education information is here.</p>
                </div>
                <div className="mx-auto space-y-8">
                    {educationData.institutions.map((institution, index) => (
                        <div key={index} data-aos="fade-up" className="bg-white/5 border border-[#174d63] w-[350px] md:w-[440px] lg:w-[480px] mx-auto p-5 rounded-lg shadow-xl shadow-[#0d161a]">
                            <div className="flex flex-row gap-x-2 md:gap-x-3 lg:gap-x-4 justify-between items-center">
                                <div>
                                    <h3 className="text-base md:text-lg lg:text-xl font-popins font-bold text-gray-300">{institution.name}</h3>
                                    <p className="text-sm md:text-base lg:text-lg font-bold font-popins text-gray-400">{institution.course}</p>
                                    <p className="text-xs font-bold font-popins text-gray-400">{institution.duration}</p>
                                </div>

                                <a href={institution.link} target="_blank" rel="noopener noreferrer" className="relative h-5 w-5 cursor-pointer">
                                    <Image fill={true} src='https://icon-library.com/images/link-icon-free/link-icon-free-5.jpg' alt="link-logo" />
                                </a>
                            </div>
                            <div className="text-sm text-gray-300 font-mono mt-5">
                                {institution.description} {institution.grade}
                            </div>
                            {institution.grade && <h4 className="text-sm font-popins font-bold text-gray-400 mt-2">Grade : {institution.grade}</h4>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;