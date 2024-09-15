import Image from "next/image";
import { SiGithub } from "react-icons/si";

const Project = ({ item }) => {
    return (
        <div className="bg-[#082231]">
            <div key={item.id} data-aos={item.id % 2 == 0 ? "zoom-in-right" : "zoom-in-left"} className="w-80 lg:w-[365px] p-4 bg-[#142834] shadow-xl shadow-[#082231] mx-auto md:mx-0  rounded-md ">
                <div className='relative h-44 w-auto'>
                    <Image fill={true} placeholder='blur' blurDataURL="data:..." className="mb-5 rounded-md" src={item.photo} alt="project image" />
                </div>
                <div className="my-3 flex flex-row flex-wrap gap-2">
                    {
                        item.skills.map((skill, indx) => {
                            return <span key={skill + indx} className="bg-white/10 py-1 px-2 rounded-full text-xs font-popins text-gray-300" >
                                {skill}
                            </span>
                        })
                    }
                </div>

                <div >
                    <h3 className="text-2xl font-bold font-popins text-gray-200">{item.name}</h3>
                    <p className="mt-1 text-base font-medium font-popins text-gray-300">{item.desc}</p>
                </div>
                <div >
                    <div className="flex flex-row gap-x-3 items-center mt-3">
                        <a href={item.code} target="_blank" className="inline-flex overflow-hidden text-white bg-gray-900 rounded group cursor-pointer">
                            <span className="px-3 py-2 text-white bg-sky-500 group-hover:bg-sky-600 flex items-center justify-center">
                                <SiGithub className="text-white text-md md:text-base" />
                            </span>
                            <span className="px-2 py-2 text-xs">Source code</span>
                        </a>

                        <a href={item.live} target="_blank" className="inline-flex overflow-hidden text-white bg-gray-900 rounded group cursor-pointer">
                            <span className="px-3 py-2 text-white bg-sky-500 group-hover:bg-sky-600 flex items-center justify-center">
                                {/* <SiLinktree className="text-white text-md md:text-base" /> */}
                                <div className="relative h-3 w-3">
                                    <Image fill={true} src='https://icon-library.com/images/link-icon-free/link-icon-free-5.jpg' alt="link-logo" />
                                </div>
                            </span>
                            <span className="px-2 py-2 text-xs">Live demo</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Project;