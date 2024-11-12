import Image from "next/image"
import { useState } from "react"
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnalyticsDeskCardSvg from "../AnalyticsDescCardSvg";
import AnalyticsMobilePointSvg from "../AnalyticsMobilePointSvg";

interface Step {
    id: number;
    title: string;
    description: string;
}

const steps: Step[] = [
    { id: 1, title: "Contract Staffing", description: "Access Skilled IT contractors to meet your project-based needs." },
    { id: 2, title: "Key Statistics", description: "Experts ready in 2 weeks, 8% available to join instantly—rated 4.9/5 on Clutch." },
    { id: 3, title: "Remote Hiring", description: "Source and onboard talented IT professionals from anywhere in the world." },
    { id: 4, title: "Global Mobility", description: "Facilitate seamless employee relocation and cross-based assignments." },
    { id: 5, title: "Payroll Outsourcing", description: "Simplify payroll administration and ensure compliance." }
];

const analytics = [
    {
        title: "Contract Staffing",
        description: "Access Skilled IT contractors to meet your project-based needs"
    }, {
        title: "Key Statistics",
        description: "Experts ready in 2 weeks, 8% available to join instantly—rated 4.9/5 on Clutch"
    }, {
        title: "Remote Hiring",
        description: "Source and onboard talented IT professionals from anywhere in the world"
    }, {
        title: "Global Mobility",
        description: "Facilitate seamless employee relocation and cross-based assignments"
    },
    {
        title: "Payroll Outsourcing",
        description: "Simplify payroll administration and ensure compliance"
    }
]

const AnalyticsPage = () => {
    const [content, setContent] = useState(0)
    const sliderRef = useRef<Slider | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const settings: Settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_, next) => setActiveIndex(next),
    };

    const handleClickStep = (index: number) => {
        setActiveIndex(index);
        sliderRef.current?.slickGoTo(index);
    };



    return <div className=" text-black">
        <div className="container
        hidden
        lg:flex
        xl:flex
        2xl:flex bg-white  mb-10 m-auto">
            <div className="w-[60%] mt-16 lg:mt-10">
                <div className="w-1/2 m-auto">
                    <h2 className="mt text-xl sm:text-xl md:text-2xl lg:text-3xl text-nowrap xl:text-3xl 2xl:text-4xl pt text-black font-bold text-center mt-10">
                        IT Staff <span className="text-orange-500">Augmentation</span>
                    </h2>
                    <p className="text-center mt-10 px-3 mb-10 text-gray-600">
                        Augment your software team with IT professionals from the IT outsourcing company Riyadh.
                    </p>
                </div>

                <div className="
                align-middle  
                hidden
                lg:flex
                xl:flex
                2xl:flex 
                m-auto 
                justify-between 
                p-5 
                bg-white">
                    <div className="
                    grid 
                    xl:grid-cols-2 
                    gap-5">
                        {analytics.map((analytic, index) => {
                            return <div key={index} className="relative flex items-center justify-center p-[1.5px] rounded-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#EE7B22]  to-[#732A09] rounded-full"></div>

                                <button key={index} onClick={() => { setContent(index) }}
                                    className={`p-2 
                                    relative
                                    w-full
                                xl:h-16
                                2xl:h-14
                                text-center
                                 rounded-full 

                                 ${content == index ? 'bg-orange-500 text-white' : 'bg-white text-black'}
                                 `}>{analytic.title}</button>
                            </div>
                        })}
                    </div>

                    <div className="flex relative lg:mt-20 xl:mt-10 2xl:mt-0">
                        <div className=" w-full">
                            <AnalyticsDeskCardSvg />
                        </div>
                        <div className="absolute left-14 text-base w-3/4 text-wrap mt-5 p-2
                         bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.5)] bg-clip-text text-transparent
                         ">
                            {analytics[content].description}
                        </div>

                    </div>

                </div>

            </div>
            <div className=" w-[40%] lg:mt-20 xl:mt-10">
                <Image alt="illustration" src={'/steps.png'} width={550} height={400} className="mt-10" />
            </div>
        </div>


        {/* mobile support */}
        <div className="container relative
        lg:hidden
        xl:hidden
        2xl:hidden p-5 m-auto text-white">
            {/* <h2 className="text-2xl text-black font-semibold mb-6">Our IT Staff Augmentation Process</h2> */}

            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-black font-bold text-center mt-5 mb-10">
                IT Staff <span className="text-orange-500">Augmentation</span>
            </h2>
            <p className="text-center mt-5 px-3 mb-5 text-gray-600">
                Augment your software team with IT professionals from the IT outsourcing company Riyadh.
            </p>

            {/* #ffdbbb */}

            <div className="relative flex flex-col gap-4 mb-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        className={`flex items-center cursor-pointer ${index === activeIndex ? 'opacity-100' : 'opacity-50'}`}
                        onClick={() => handleClickStep(index)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === activeIndex ? 1 : 0.5 }}
                        transition={{ duration: 0.3 }}
                    >

                        <AnalyticsMobilePointSvg activeIndex={activeIndex} currentIndex={index} />

                        <div className={`flex-grow h-px ${index === activeIndex ? 'border-orange-600' : 'border-gray-500'} border-dotted border-b-2`}></div>
                        <span className={`px-4 py-1 rounded-full text-sm ${index === activeIndex ? 'bg-orange-600 text-white' : 'bg-gray-700'}`}>
                            {`0${index + 1}. ${step.title}`}
                        </span>
                    </motion.div>
                ))}
            </div>

            <Slider {...settings} ref={sliderRef} className="mb-6 -mt-10">
                {steps.map((step) => (
                    <div key={step.id} className="p-4">
                        <h3 className="text-lg font-semibold">{`0${step.id}. ${step.title}`}</h3>
                        <p className="text-gray-400 mt-2">{step.description}</p>
                    </div>
                ))}
            </Slider>

            <div className="flex justify-between items-center">
                <button
                    onClick={() => sliderRef.current?.slickPrev()}
                    className="p-2 bg-orange-500 rounded-full"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="flex space-x-2">
                    {steps.map((_, index) => (
                        <span
                            key={index}
                            onClick={() => handleClickStep(index)}
                            className={`w-2.5 h-2.5 ${index === activeIndex ? 'bg-orange-600' : 'bg-gray-500'} rounded-full cursor-pointer`}
                        ></span>
                    ))}
                </div>

                <button
                    onClick={() => sliderRef.current?.slickNext()}
                    className="p-2 bg-orange-500 rounded-full"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>

    </div>
}

export default AnalyticsPage