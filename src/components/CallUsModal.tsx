import {  ClientRequestData, TransformedSkillsets } from "@/pages/api/userApi";
import emailJs from '@emailjs/browser';
import { FunctionComponent, useState } from "react";
import { Controller, FieldErrors, useForm } from "react-hook-form";
import PhoneInput, { CountryData } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Slider, { Settings } from 'react-slick';
import { TechQuantitiesType, useCallUsModalState } from "./CallUsContext";
import GreetModal from "./GreetModal";

export interface AddTechModalProps {
    onConfirm: () => void
}

interface FormData {
    industry: string;
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    reason?: string;
    nda: boolean;
}

const CallUsModal: FunctionComponent<AddTechModalProps> = ({
    onConfirm,
}) => {
    const {
        register,
        handleSubmit,
        control,
        setValue,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues:{
            industry:'Technology',
            time:new Date(new Date().setHours(10,0,0)).toLocaleTimeString(), //instead of showing ------, just show default time 10:00 am
            nda:true, //we don't need this on form
        }
    });

    const [submitted, setSubmitted] = useState(false)
    const { darkMode, isCallUsModalOpen, setQuantities, quantities, duration } = useCallUsModalState()
    const [isLoading, setIsLoading] = useState(false)

    const removeTech = (tech: string) => {
        setQuantities(prev => {
            const updatedQuantities = { ...prev };

            for (const category in updatedQuantities) {
                if (updatedQuantities[category][tech] !== undefined) {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { [tech]: _, ...updatedCategory } = updatedQuantities[category];
                    if (Object.keys(updatedCategory).length === 0) {
                        // remove the category if it's empty
                        delete updatedQuantities[category];
                    } else {
                        // otherwise, update the category with remaining technologies
                        updatedQuantities[category] = updatedCategory;
                    }
                }
            }
            return updatedQuantities;
        });
    };

    const techs = Object.values(quantities).flatMap(r => { return Object.keys(r) })
    const techQuantities = Object.values(quantities).flatMap(r => Object.values(r))
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const transformSkillsets = (skillsets: TechQuantitiesType): TransformedSkillsets[] => {
        return Object.entries(skillsets).map(([category, technologies]) => ({
            category,
            technologies: Object.entries(technologies).map(([tech, quantity]) => ({
                tech,
                quantity,
            })),
        }));
    };

    const onSubmit = async (data: FormData) => {
        const publicKey = "28Jy3xAgZVdVfJM4A";
        const serviceId = "service_w3n2h6s";
        const templateIdWithGreet = "template_l6jxhcz";
        const templateIdWithTechnologies = "template_fzbseij";
        // let emailSent = false;

        if (techs.length > 0) { //selected techs
            //prepare date for pushing into db.
            const transformedSkillsets = transformSkillsets(quantities);

            const apiData: ClientRequestData = {
                ...data,
                skillsets: transformedSkillsets,
                duration,
            }

            setIsLoading(true);

            try {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                await emailJs.send(serviceId, templateIdWithTechnologies, { ...apiData, nda: data.nda ? 'Yes' : 'No' } as Record<string, any>, publicKey);
                // emailSent = true;
            } catch (emailError) {
                console.error("Error sending email:", emailError);
                setIsLoading(false);
                return;
            }

            // // if (emailSent) {
                // try {
                //     await clientApiService.createClient(apiData);
                //     // setSuccess(true);
                // } catch (apiError) {
                //     console.error("Error creating client:", apiError);
                // }
            // }
        } else {
            console.log("without skills:", data)
            setIsLoading(true);

            try {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                await emailJs.send(serviceId, templateIdWithGreet, { ...data, nda: data.nda ? 'Yes' : 'No' } as Record<string, any>, publicKey);
                // emailSent = true;
            } catch (emailError) {
                console.error("Error sending email:", emailError);
                setIsLoading(false);
                return;
            }

            // if (emailSent) {
                // try {
                //     await clientApiService.createClient(data);
                //     // setSuccess(true);
                // } catch (apiError) {
                //     console.error("Error creating client:", apiError);
                // }
            // }
        }

        setIsLoading(false);
        setSubmitted(true);
    };

    if (submitted) {
        return <GreetModal onConfirm={onConfirm} />
    }

    if (!isCallUsModalOpen.isOpen) {
        return <></>
    }

    return <div className="fixed  overflow-auto inset-0 flex items-center justify-center bg-gray-900 text-black dark:text-white bg-opacity-50 z-[62]">
        <div className={`bg-white dark:bg-[#252525] ${isLoading && 'blur-[3px]'} animate-flyinup w-full max-h-[600px] md:max-h-screen lg:max-h-screen xl:max-h-screen 2xl:max-h-screen  max-w-3xl mx-4 md:mx-0 p-6 rounded-lg shadow-lg relative overflow-auto`}>
            <button onClick={onConfirm} className="absolute top-4 right-4  hover:text-gray-600 " aria-label="Close Modal">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" className="size-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
</svg>

            </button>

            {techs.length > 0 && <div>
                <h2 className="text-3xl font-bold text-center text-orange-500 mb-5">Request <span className="text-black dark:text-white">Quotation For</span></h2>
                <p className="text-center text-gray-500 dark:text-white mb-6">Here, Your selected technologies</p>

                <HorizontalTechs darkMode={darkMode} techQuantities={techQuantities} techs={techs} removeTech={removeTech} />

            </div>}

            {techs.length == 0 && <div>
                <h2 className="text-3xl font-bold text-center mb-5">Book a Call for <span className="text-orange-500">Free Consultation</span></h2>
                <p className="text-center text-gray-500 dark:text-white mb-6">Level Up Your IT with DataSack Experts !!</p>
            </div>}

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative">
                        <CustomIndustryDropDown errors={errors} onChange={(r) => {
                            if (r != '') {
                                setValue('industry', r)
                            }
                        }} />
                    </div>

                    <div>
                        <label className="text-gray-600 dark:text-gray-300 text-sm">Enter Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            {...register("name", { required: "Name is required" })}
                            className="w-full border border-gray-300 dark:border-gray-600 bg-transparent rounded-full py-2 px-4 outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="text-gray-600 dark:text-gray-300 text-sm">Corporate Email</label>
                        <input
                            type="email"
                            placeholder="Corporate Email"
                            {...register("email", {
                                required: "Corporate email is required",
                                pattern: { value: emailRegex, message: "Enter a valid email address" },
                            })}
                            className="w-full border border-gray-300 dark:border-gray-600 bg-transparent rounded-full py-2 px-4 outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="text-gray-600 dark:text-gray-300 text-sm">Phone No</label>
                        <Controller
                            name="phone"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: "Phone number is required",
                                validate: (value) => value.length > 2 || "Enter a valid phone number",
                            }}
                            render={({ field }) => (
                                <PhoneInput
                                    country="sa"
                                    value={field.value}
                                    // onChange={(phone) => setValue("phone", phone as string)}
                                    onChange={(phone, data: CountryData) => {
                                        const countryCodeLength = data.dialCode.length
                                        if (phone == '' || phone.length == countryCodeLength) {
                                            setError('phone', {
                                                message: 'Phone Number required'
                                            })
                                        } else {
                                            clearErrors('phone')
                                        }
                                        setValue('phone', phone)
                                    }}
                                    containerStyle={{ backgroundColor: 'transparent' }}
                                    inputStyle={{ width: '100%', border: 'none', backgroundColor: 'transparent' }}
                                    dropdownStyle={{ backgroundColor: 'white', color: 'gray' }}
                                    buttonStyle={{ backgroundColor: 'transparent', border: 'none' }}
                                    containerClass="w-full border border-gray-300 dark:border-gray-600 bg-transparent rounded-full py-1 px-4 outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            )}
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                    </div>

                    <div>
                        <label className="text-gray-600 dark:text-gray-300 text-sm">Preferred Date</label>
                        <input
                            type="date"
                            {...register("date", { required: "Please select a date" })}
                            className="w-full border min-h-11 text-black border-gray-300 dark:border-gray-600 bg-transparent rounded-full py-2 px-4 outline-none focus:ring-2 focus:ring-orange-500 dark:invert"
                        />
                        {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
                    </div>

                    <div>
                        <label className="text-gray-600 dark:text-gray-300 text-sm">Preferred Time</label>
                        <input
                            type="time"
                            {...register("time", { required: "Please select a time" })}
                            className="w-full border min-h-11 text-black border-gray-300 dark:border-gray-600 bg-transparent rounded-full py-2 px-4 outline-none focus:ring-2 focus:ring-orange-500 dark:invert"
                        />
                        {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
                    </div>
                </div>

                <div>
                    <label className="text-gray-600 dark:text-gray-300 text-sm">Requirement Summary</label>
                    <textarea
                        placeholder="Requirement Summary"
                        {...register("reason")}
                        className="w-full border border-gray-300 dark:border-gray-600 bg-transparent rounded-lg py-2 px-4 outline-none focus:ring-2 focus:ring-orange-500"
                    ></textarea>
                </div>

                {/* <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="nda"
                        {...register("nda")}
                        className="h-5 w-5 text-orange-500 focus:ring-orange-500"
                    />
                    <label htmlFor="nda" className="text-gray-600 dark:text-gray-300 text-sm">
                        I Want to Protect My Data by Signing an NDA
                    </label>
                </div> */}

                <div className="w-full text-center">
                    <button
                        type="submit"
                        className="w-fit p-5 bg-orange-500 text-white font-semibold py-3 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        disabled={isLoading}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
        {isLoading && <div className="absolute animate-spin m-auto p-2 bg-orange-400 rounded-full">
            <div className=" bg-yellow-400 w-2 h-2 -ml-5 rounded-full "></div>
            <div className=" bg-yellow-500 w-2 h-2 -ml-5 -mt-7  rounded-full "></div>
            <div className=" bg-yellow-600 w-2 h-2 -mr-5 -mt-4  rounded-full "></div>
        </div>}
    </div>

}

export default CallUsModal



const CustomIndustryDropDown: FunctionComponent<{
    errors: FieldErrors<FormData>,
    onChange: (v: string) => void

}> = ({ errors, onChange }) => {
    const industries = ["Technology", "Finance", "Health Care"];
    const [selectedIndustry, setSelectedIndustry] = useState("Technology");
    const [isOpen, setIsOpen] = useState(false);


    const handleSelect = (industry: string) => {
        setSelectedIndustry(industry);
        setIsOpen(false);
        onChange(industry);
    };

    return (
        <div className="relative">
            <label className="text-gray-600 dark:text-gray-300 text-sm">
                Select Your Industry
            </label>

            <div
                className="w-full border border-gray-300 dark:border-gray-600 bg-transparent rounded-full py-2 px-4 cursor-pointer outline-none focus:ring-2 focus:ring-orange-500"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex justify-between">
                    <div>{selectedIndustry || "Select an industry"}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

            {isOpen && (
                <ul className="absolute z-10 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg mt-1 shadow-lg">
                    {industries.map((industry) => (
                        <li
                            key={industry}
                            onClick={() => handleSelect(industry)}
                            className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer"
                        >
                            {industry}
                        </li>
                    ))}
                </ul>
            )}

            {errors.industry && (
                <p className="text-red-500 text-sm">{errors.industry.message}</p>
            )}
        </div>
    );
}





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