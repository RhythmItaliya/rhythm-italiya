'use client'
import emailjs from 'emailjs-com';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { MdOutlineEmail, MdPhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import contactInfo from "@/config/contact.json";

const Contact = () => {
    const [isPending, setPending] = useState(false);

    const handleContact = (e) => {
        setPending(true);
        e.preventDefault();
        const form = e.target;

        emailjs.sendForm('service_ocie8rf', 'template_uxpjfxe', form, 'vMsnna1LkCPRnGxAz')
            .then(() => {
                toast.success('Send email successfully');
                form.reset();
                setPending(false);
            }, () => {
                toast.error('Send email failed, try again.');
                setPending(false);
            });
    }

    return (
        <div className="z-40 -mt-16" id="contact">
            <section className="bg-[#082231]">
                <div className="py-20 2xl:max-w-7xl max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-popins text-white text-center mb-5">Contact Me</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-5 md:gap-y-0 mt-10'>
                        <div className='space-y-5' data-aos="zoom-in-up">
                            <h2 className='text-transparent bg-gradient-to-r from-[#2782e9] to-sky-200 bg-clip-text text-4xl lg:text-5xl font-bold'>{"Let's Talk"}</h2>
                            <p className='text-gray-300 text-base'>{contactInfo.Introduction}</p>
                            <div className='flex flex-row gap-x-4 items-center'>
                                <MdOutlineEmail className='text-2xl text-white' />
                                <h3 className='text-base text-gray-200 font-medium font-popins'>{contactInfo.Email}</h3>
                            </div>
                            <div className='flex flex-row gap-x-4 items-center'>
                                <MdPhoneInTalk className='text-2xl text-white' />
                                <h3 className='text-base text-gray-200 font-medium font-popins'>{contactInfo.Phone}</h3>
                            </div>
                            <div className='flex flex-row gap-x-4 items-center'>
                                <FaLocationDot className='text-2xl text-white' />
                                <h3 className='text-base text-gray-200 font-medium font-popins'>{contactInfo.Address}</h3>
                            </div>
                        </div>

                        <form data-aos="zoom-in-up" action="#" className="space-y-5" onSubmit={handleContact}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">{contactInfo.FormLabels.Email}</label>
                                <input type="email" id="email" name='email' className="shadow-sm border-2 outline-none focus:border-gray-400 text-sm rounded-lg block w-full p-2.5 bg-white/20 border-gray-600 placeholder-gray-400 text-white shadow-sm-light" placeholder={contactInfo.FormPlaceholders.Email} required />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">{contactInfo.FormLabels.Subject}</label>
                                <input type="text" id="subject" name="subject" className="shadow-sm border-2 outline-none focus:border-gray-400 text-sm rounded-lg block w-full p-2.5 bg-white/20 border-gray-600 placeholder-gray-400 text-white shadow-sm-light" placeholder={contactInfo.FormPlaceholders.Subject} required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">{contactInfo.FormLabels.Message}</label>
                                <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm rounded-lg shadow-sm border-2 outline-none focus:border-gray-400 bg-white/20 border-gray-600 placeholder-gray-400 text-white" placeholder={contactInfo.FormPlaceholders.Message} required></textarea>
                            </div>

                            <button type="submit" className="btn btn-info w-full bg-gradient-to-r from-[#00A6E8] to-[#0081b5] text-white text-lg border-0 outline-0">
                                Send
                                {isPending && <span className="loading loading-spinner"></span>}
                            </button>
                        </form>
                    </div>
                </div>
                <Toaster></Toaster>
            </section>
        </div>
    );
};

export default Contact;
