'use client'
import { TypeAnimation } from "react-type-animation";

const TypeAnim = () => {
    return (
        <TypeAnimation
            className="font-popins text-[#00A6E8] text-2xl lg:text-3xl font-bold"
            sequence={[
                "Mern Stack Web Developer", // Types 'One'
                1000, // Waits 1s
                "Frontend developer", // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                "Backend developer", // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                "Programmer", // Types 'Three' without deleting 'Two'
                1000
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
        />
    );
};

export default TypeAnim;