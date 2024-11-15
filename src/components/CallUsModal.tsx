import { FunctionComponent, useRef, useState } from "react"
import Slider, { Settings } from 'react-slick';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import GreetModal from "./GreetModal"
import { useCallUsModalState } from "./CallUsContext"


export interface AddTechModalProps {
    onConfirm: () => void
}

const CallUsModal: FunctionComponent<AddTechModalProps> = ({
    onConfirm,
}) => {
    const [submitted, setSubmitted] = useState(false)
    const { darkMode, isCallUsModalOpen, setQuantities, quantities } = useCallUsModalState()

    const removeTech = (tech: string) => {

        setQuantities(prev => {
            const updatedQuantities = { ...prev };

            for (const category in updatedQuantities) {
                if (updatedQuantities[category][tech] !== undefined) {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { [tech]: _, ...updatedCategory } = updatedQuantities[category];
                    updatedQuantities[category] = updatedCategory;
                }
            }
            return updatedQuantities;
        });
    };


    const removeAllTech = () => {
        setQuantities({})
    }

    const techs = Object.values(quantities).flatMap(r => { return Object.keys(r) })
    const techQuantities = Object.values(quantities).flatMap(r => Object.values(r))


    if (submitted) {
        return <GreetModal onConfirm={onConfirm} />
    }

    if (!isCallUsModalOpen.isOpen) {
        return <></>
    }

    return <div className="fixed overflow-auto inset-0 flex items-center justify-center bg-gray-900 text-black dark:text-white bg-opacity-50 z-[62]">
        <div className="bg-white dark:bg-[#252525] animate-flyinup w-full max-h-[600px] md:max-h-screen lg:max-h-screen xl:max-h-screen 2xl:max-h-screen  max-w-3xl mx-4 md:mx-0 p-6 rounded-lg shadow-lg relative overflow-auto">
            <button onClick={onConfirm} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600" aria-label="Close Modal">&times;</button>


            {techs.length > 0 && <div>
                <h2 className="text-3xl font-bold text-center text-orange-500 mb-5">Request <span className="text-black dark:text-white">Quotation For</span></h2>
                <p className="text-center text-gray-500 dark:text-white mb-6">Here, Your selected technologies</p>

                <HorizontalTechs darkMode={darkMode} techQuantities={techQuantities} techs={techs} removeTech={removeTech} />

            </div>}

            {techs.length == 0 && <div>
                <h2 className="text-3xl font-bold text-center mb-5">Book a Call for <span className="text-orange-500">Free Consultation</span></h2>
                <p className="text-center text-gray-500 dark:text-white mb-6">Level Up Your IT with DataSack Experts !!</p>
            </div>}


            <form className="space-y-4" onSubmit={() => setSubmitted(true)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative">
                        <label className="text-gray-600 dark:text-gray-300 text-sm">Select Your Industry</label>
                        <select className="w-full border border-gray-300 dark:border-gray-600  bg-transparent  rounded-full py-2 px-4 outline-none focus:ring-2 focus:ring-orange-500">
                            <option >Technology</option>
                            <option >Finance</option>
                            <option >Health Care</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-gray-600 dark:text-gray-300 text-sm">Enter Your Name</label>
                        <input type="text" placeholder="Enter Your Name" className="w-full border border-gray-300 dark:border-gray-600  bg-transparent rounded-full py-2 px-4 outline-none focus:ring-2 focus:ring-orange-500" />
                    </div>
                    <div>
                        <label className="text-gray-600 dark:text-gray-300 text-sm">Corporate Email</label>
                        <input type="email" placeholder="Corporate Email" className="w-full border border-gray-300 dark:border-gray-600  bg-transparent rounded-full py-2 px-4 outline-none focus:ring-2 focus:ring-orange-500" />
                    </div>
                    <div>
                        <label className="text-gray-600 dark:text-gray-300 text-sm">Phone No</label>
                        <div className="flex items-center border border-gray-300 dark:border-gray-600  bg-transparent rounded-full py-2 px-4">
                            {/* <span className="mr-2">🇮🇳 </span>
                            <span className="mr-2">+91 </span> */}
                            <PhoneInput
                                country={'sa'}
                                value={'966'}
                                onChange={() => {
                                    // const countryCodeLength = data.dialCode.length
                                    // if (phone == '' || phone.length == countryCodeLength) {
                                    //     setError('phone', {
                                    //         message: 'Phone Number required'
                                    //     })
                                    // } else {
                                    //     clearErrors('phone')
                                    // }
                                    // setValue('phone', phone)
                                }}
                                containerStyle={{
                                    backgroundColor: 'transparent',
                                }}
                                searchStyle={{
                                    backgroundColor: 'transparent',
                                }}
                                dropdownStyle={{
                                    backgroundColor: darkMode ? 'black' : 'white',
                                    color: 'gray'

                                }}
                                inputStyle={{
                                    width: '100%',
                                    border: 'none',
                                    backgroundColor: 'transparent'
                                }}
                                buttonStyle={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                }}
                            />
                            {/* <input type="tel" placeholder="Phone No" className="flex-1 outline-none" /> */}
                        </div>
                    </div>
                    <div>
                        <label className="text-gray-600 dark:text-gray-300 text-sm">Select Date</label>
                        <input type="date" className="w-full border text-black border-gray-300 dark:border-gray-600  bg-transparent rounded-full py-2 px-4 outline-none focus:ring-2 focus:ring-orange-500 dark:invert" />
                    </div>
                    <div>
                        <label className="text-gray-600 dark:text-gray-300 text-sm">Select Time</label>
                        <input type="time" className="w-full border text-black border-gray-300 dark:border-gray-600  bg-transparent rounded-full py-2 px-4 outline-none focus:ring-2 focus:ring-orange-500 dark:invert" />
                        {/* <select className="w-full border border-gray-300 dark:border-gray-600  bg-transparent rounded-full py-2 px-4 outline-none focus:ring-2 focus:ring-orange-500">
                            <option>Select Time</option>
                        </select> */}
                    </div>
                </div>

                <div>
                    <label className="text-gray-600 dark:text-gray-300 text-sm">Reason</label>
                    <textarea placeholder="Reason" className="w-full border border-gray-300 dark:border-gray-600  bg-transparent rounded-lg py-2 px-4 outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                </div>

                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="nda" className="h-5 w-5 text-orange-500 focus:ring-orange-500" />
                    <label className="text-gray-600 dark:text-gray-300 text-sm">I Want to Protect My Data by Signing an NDA</label>
                </div>

                <div className="w-full text-center">
                    <button type="submit" className="w-fit p-5 bg-orange-500 text-white font-semibold py-3 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Book Now</button>
                </div>
            </form>
        </div>
    </div>

}

export default CallUsModal



const HorizontalTechs: FunctionComponent<{
    techs: string[],
    techQuantities: number[],
    darkMode: boolean,
    removeTech: (tech: string) => void
}> = ({
    techs,
    techQuantities,
    darkMode,
    removeTech
}) => {
        const sliderSettings: Settings = {
            dots: false,
            infinite: false,
            speed: 500,
            variableWidth: true,
            slidesToScroll: 1,
            nextArrow: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F37318" className="size-6">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
            </svg>
            ,
            prevArrow: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F37318" className="size-6">
                <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
            </svg>,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        };


        return <div className="mt-2 mb-2 w-full text-black dark:text-white px-2">
            <Slider {...sliderSettings}>
                {techs.map((item, index) => (
                    <div key={index} className="mb-1 px-1">
                        <div className="animate-slideinleft relative flex items-center justify-center p-0.5 rounded-full hide-scrollbar">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-orange-200 via-transparent to-orange-50 
            dark:from-[rgba(253,253,253,0.69)] dark:via-[rgba(128,128,128,1)] dark:to-[rgba(128,128,128,1)]
            rounded-full"
                            ></div>

                            <div className="relative items-center justify-center rounded-full dark:text-white">
                                <div className="flex items-center bg-white
                dark:bg-[rgba(128,128,128,1)]
                rounded-full p-1 gap-1">
                                    <span className="text-xs">{item}</span>

                                    <span className="text-black dark:text-white text-xs rounded-full w-4 h-4 text-center justify-center bg-[rgba(238,123,34,0.14)] dark:bg-[rgba(255,255,255,0.17)]">
                                        {techQuantities[index]}
                                    </span>

                                    <svg
                                        onClick={() => removeTech(item)}
                                        className="cursor-pointer size-4"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18 0.5C8.25 0.5 0.5 8.25 0.5 18C0.5 27.75 8.25 35.5 18 35.5C27.75 35.5 35.5 27.75 35.5 18C35.5 8.25 27.75 0.5 18 0.5ZM24.75 26.75L18 20L11.25 26.75L9.25 24.75L16 18L9.25 11.25L11.25 9.25L18 16L24.75 9.25L26.75 11.25L20 18L26.75 24.75L24.75 26.75Z"
                                            fill={darkMode ? 'white' : 'black'}
                                            fillOpacity="0.3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>

    }