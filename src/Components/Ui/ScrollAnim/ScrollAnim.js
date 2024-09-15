'use client'
import AOS from 'aos';
// import aos styles
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ScrollAnim = () => {
    useEffect(()=>{
        AOS.init({});
    }, []);
    return <></>
};

export default ScrollAnim;