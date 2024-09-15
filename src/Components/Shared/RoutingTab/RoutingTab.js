'use client'

import Link from "next/link";
import { IoIosHome } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { PiStudentDuotone } from "react-icons/pi";
import { GiPhone } from "react-icons/gi";
import { usePathname } from "next/navigation";

const RoutingTab = () => {
    const rout = usePathname();
    
    return (
        <div className="flex justify-center items-center">
            <ul className="flex justify-between md:justify-center items-center gap-x-5 fixed bottom-0 md:bottom-5 bg-[#00ADF5] md:rounded-full py-2 px-4 text-center w-full md:w-auto z-40">
                <Link href='/' className={`p-2 rounded-full text-white cursor-pointer ${rout == '/' ? 'bg-[#0082B6]' : ''}`}>
                    <IoIosHome className="text-xl text-white"></IoIosHome>
                </Link>
                <Link href='/projects' className={`p-2 rounded-full text-white cursor-pointer ${rout == '/projects' ? 'bg-[#0082B6]' : ''}`}>
                    <GrProjects className="text-xl text-white"></GrProjects>
                </Link>
                <Link href='/skills' className={`p-2 rounded-full text-white cursor-pointer ${rout == '/skills' ? 'bg-[#0082B6]' : ''}`}>
                    <GiSkills className="text-xl text-white"></GiSkills>
                </Link>
                <Link href='/education' className={`p-2 rounded-full text-white cursor-pointer ${rout == '/education' ? 'bg-[#0082B6]' : ''}`}>
                    <PiStudentDuotone className="text-xl text-white"></PiStudentDuotone>
                </Link>
                <Link href='/contact' className={`p-2 rounded-full text-white cursor-pointer ${rout == '/contact' ? 'bg-[#0082B6]' : ''}`}>
                    <GiPhone className="text-xl text-white"></GiPhone>
                </Link>
            </ul>
        </div>
    );
};

export default RoutingTab;