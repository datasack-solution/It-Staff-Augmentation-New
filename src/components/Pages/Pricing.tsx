import { useEffect, useState } from 'react';
import AddTechModal from '../AddTechModal';
import { useCallUsModalState } from '../CallUsContext';
import CategoryHorizontal from '../CategoryHorizontal';
import DurationRangeSelector from '../DurationSlider';
import EditTechModal from '../EditTechModal';
import PlusIcon from '../PlusIcon';


export type Technologies = {
    "Core Banking": string[];
    SAP: string[];
    "Integration / Middleware": string[];
    "Architecture": string[];
    "Business/Project Management": string[];
    "Data Governance": string[];
    "Database / Infrastructure": string[];
    "Payment Systems": string[];
    "Software Development": string[];
    "Testing/QA": string[];
    "Specialized Tools/Applications": string[]
};

export const technologies: Technologies = {
    "Core Banking": [
        "T24 Temenos Consultant",
        "T24 Techno Functional",
        "T24 Testing Consultant",
        "Finstra Techno Functional",
        "Portfolio Murex Consultant",
        "Murex Techno Functional Specialist",
        "Oracle Financial Services Analytical Applications",
    ],
    "SAP": [
        "SAP Consultant (if applicable, specify module like SAP FI, SAP MM, etc.)",
        "SAP ABAP Developer",
        "SAP Basis Administrator",
        "SAP Solution Architect",
        "SAP HANA Consultant",
    ],
    "Integration / Middleware": [
        "Middleware Administrator",
        "ETL Consultant",
        "DevOps Engineer",
        "Exchange Admin",
        "Active Directory Admin",
        "Network Engineer",
        "Unified Communication Consultant",
    ],
    "Architecture": [
        "Solution Architect",
        "Enterprise Architect",
        "Infra Solution Architect",
        "SAP Solution Architect",
        "Data Architect",
    ],
    "Business/Project Management": [
        "Business Analyst IT",
        "Project Manager IT",
        "Head of Solution Development",
        "Head of Delivery and Quality Assurance",
    ],
    "Data Governance": [
        "Data Governance",
        "Data Quality",
        "Data Privacy",
    ],
    "Database / Infrastructure": [
        "SQL Database Administrator",
        "Database Developer",
    ],
    "Payment Systems": ["Payment System Engineer"],
    "Software Development": [
        "Senior Java Developer",
        "Senior IVR Developer",
        "Kony Developer",
        "SAP ABAP Developer",
    ],
    "Testing/QA": [
        "Manual Tester"
    ],
    "Specialized Tools/Applications": [
        "Adobe Campaign Expert",
        "Adobe Analytics Developer",
        "Experian Power Curve",
        "Newgen Consultant",
    ]
};

const Pricing = () => {
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof technologies | null>('SAP');
    const [quantities, setQuantities] = useState<{ [category: string]: { [tech: string]: number } }>({});
    const [isEditModalOpen, setEditModalOpen] = useState(false)
    const [isModalOpen, setModalOpen] = useState<boolean>(false)
    const { setIsCallUsModalOpen } = useCallUsModalState()

    const techs = Object.values(quantities).flatMap(r => { return Object.keys(r) })
    const techQuantities = Object.values(quantities).flatMap(r => Object.values(r))


    useEffect(() => {
        if (techs.length == 0) {
            setEditModalOpen(false)
        }

        if (isEditModalOpen || isModalOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isEditModalOpen, isModalOpen, quantities, techs.length]);


    const handleIncreaseQuantity = (category: keyof Technologies, tech: string) => {
        setQuantities(prev => ({
            ...prev,
            [category]: {
                ...prev[category],
                [tech]: (prev[category]?.[tech] || 0) + 1,
            },
        }));
    };

    const handleDecreaseQuantity = (category: keyof Technologies, tech: string) => {
        setQuantities(prev => {
            const currentCategory = prev[category] || {};
            const currentQuantity = currentCategory[tech] || 0;

            if (currentQuantity <= 1) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { [tech]: _, ...updatedCategory } = currentCategory;
                return {
                    ...prev,
                    [category]: updatedCategory,
                };
            }

            return {
                ...prev,
                [category]: {
                    ...currentCategory,
                    [tech]: currentQuantity - 1,
                },
            };
        });
    };


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


    const increasingTechQuantity = (tech: string) => {
        // setQuantities(prev => {
        //     const updatedQuantities = { ...prev };

        //     for (const category in updatedQuantities) {
        //         // if (updatedQuantities[category][tech] !== undefined) {                    
        //         //     const updatedCategory ={...prev[category], [tech]:(prev[category]?.[tech]||0)+1}
        //         //     updatedQuantities[category]=updatedCategory
        //         // }
        //     }
        //     return updatedQuantities;
        // });
        for (const category in quantities) {
            if (quantities[category][tech] !== undefined) {
                handleIncreaseQuantity(category as keyof Technologies, tech)
            }
        }
    }

    const decreasingTechQuantity = (tech: string) => {
        // setQuantities(prev => {
        //     const updatedQuantities = { ...prev };


        //     return updatedQuantities;
        // });

        for (const category in quantities) {
            if (quantities[category][tech] !== undefined) {
                handleDecreaseQuantity(category as keyof Technologies, tech)
            }
        }
    }

    const removeAllTech = () => {
        setQuantities({})
    }


    const handleCategoryClick = (category: keyof typeof technologies) => {
        setSelectedCategory(category);
    };



    return (
        <div id='pricing-section' className={`container mx-auto lg:p-10 ${isEditModalOpen && 'overflow-y-hidden'}`}>
            {techs.length > 0 && <div
                className="skill-footer text-black animate-flyinup sm:fixed md:fixed lg:fixed xl:fixed 2xl:fixed w-screen z-50 bg-gray-50 bottom-0 left-0 p-4 font-sans text-sm font-normal break-words whitespace-normal  border shadow-lg border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 focus:outline-none">
                <div className='flex justify-between'>
                    <div className='flex gap-5'>
                        <h2 className='text-orange-500 font-semibold text-lg'>Selected Technologies</h2>
                        <p className='text-sm mt-1'>Duration</p>
                    </div>

                    <svg onClick={removeAllTech} className="cursor-pointer mr-5" width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 0.5C8.25 0.5 0.5 8.25 0.5 18C0.5 27.75 8.25 35.5 18 35.5C27.75 35.5 35.5 27.75 35.5 18C35.5 8.25 27.75 0.5 18 0.5ZM24.75 26.75L18 20L11.25 26.75L9.25 24.75L16 18L9.25 11.25L11.25 9.25L18 16L24.75 9.25L26.75 11.25L20 18L26.75 24.75L24.75 26.75Z" fill="black" fillOpacity="0.4" />
                    </svg>
                </div>

                <div className='flex gap-5 mt-2 overflow-x-hidden w-full flex-wrap max-h-28 text-black'>
                    {techs.map((item, index) => {
                        return (
                            <div key={index} className="animate-bounce-right relative flex items-center justify-center p-0.5 rounded-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-transparent to-orange-50 rounded-full"></div>

                                <div className="relative items-center justify-center rounded-full">

                                    <div className="flex items-center bg-white rounded-full p-2 gap-2">

                                        <span>{item}</span>

                                        <span className="text-black rounded-full w-5 h-5 text-center justify-center bg-[rgba(238,123,34,0.14)]">{techQuantities[index]}</span>


                                        <svg onClick={() => removeTech(item)} className="cursor-pointer mr-5" width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 0.5C8.25 0.5 0.5 8.25 0.5 18C0.5 27.75 8.25 35.5 18 35.5C27.75 35.5 35.5 27.75 35.5 18C35.5 8.25 27.75 0.5 18 0.5ZM24.75 26.75L18 20L11.25 26.75L9.25 24.75L16 18L9.25 11.25L11.25 9.25L18 16L24.75 9.25L26.75 11.25L20 18L26.75 24.75L24.75 26.75Z" fill="black" fillOpacity="0.3" />
                                        </svg>

                                    </div>

                                </div>
                            </div>)
                    })}
                </div>

                <div onClick={() => setIsCallUsModalOpen(true)} className='animate-jiggle cursor-pointer float-right mr-5 border w-fit p-3 flex justify-end text-white bg-orange-500 rounded-full text-xs font-semibold'>Get Pricing</div>
            </div>}

            <h2 className="text-2xl sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-black font-bold text-center">
                Craft your own <span className="text-orange-500">pricing</span>
            </h2>
            <p className="text-center my-10 px-3 text-gray-600">
                Customize your plan with chosen technologies, with pricing calculated monthly to fit your needs.
            </p>

            <EditTechModal isModalOpen={isEditModalOpen} onConfirm={() => { setEditModalOpen(false) }}
                selectedCategory={selectedCategory}
                setQuantities={setQuantities}
                techs={techs}
                quantities={techQuantities}
                removeTech={removeTech}
                increaseTechQuantity={increasingTechQuantity}
                decreaseTechQuantity={decreasingTechQuantity}
            />

            {techs.length > 0 && <div onClick={() => { setEditModalOpen(true) }} className='fixed animate-flyinup z-50 bottom-10 w-full sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'>
                <div className='p-3 m-auto rounded-full bg-orange-500 text-white w-fit flex gap-3 text-sm'>
                    Selected Technologies: <span className='font-semibold'>{techs.length}</span>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>

                </div>
            </div>}


            <div className="flex flex-col lg:flex-row p-3 gap-8">

                {/* category vertical for larger screens */}
                {/*  md:grid
                md:grid-cols-2 */}

                <div className="
                h-fit
                align-middle 
                justify-center 

                hidden
                 
                lg:grid 
                lg:grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] 

                xl:grid
                xl:grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] 

                2xl:grid
                2xl:grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] 
                
                lg:w-1/3
                gap-4">
                    {Object.keys(technologies).map((category, index) => (
                        <div className='relative' key={index}>
                            <button
                                key={category}
                                onClick={() => handleCategoryClick(category as keyof typeof technologies)}
                                className={`border max-h-fit w-full text-black border-orange-500 py-2 px-4 rounded-full transition-colors ${selectedCategory === category ? "bg-orange-500 text-white" : "text-black"
                                    } ${quantities[category] &&
                                        (Object.values(quantities[category]).some(quantity => quantity > 0) && selectedCategory == category) ? 'bg-orange-500 text-black' : 'text-black'} hover:bg-orange-500`}
                            >
                                {category}
                            </button>

                            {quantities[category] &&
                                Object.values(quantities[category]).some(quantity => quantity > 0) && (
                                    <div className={`w-5 h-5 border border-orange-500 bg-orange-500 rounded-full absolute -top-1 right-0 ${selectedCategory === category ? 'bg-white text-black' : 'text-white'}`}>
                                        <p className='text-center rounded-full text-sm'>
                                            {Object.values(quantities[category]).filter(quantity => quantity > 0).length}
                                        </p>
                                    </div>
                                )}
                        </div>
                    ))}
                </div>

                <CategoryHorizontal handleCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} quantities={quantities} />

                <div className="lg:w-2/3 p-3 bg-gray-50 rounded-lg shadow">
                    <div className='flex justify-between mb-2 cursor-pointer gap-5'>
                        <h3 className="text-xl font-semibold mb-4 text-black">
                            {selectedCategory ? `${selectedCategory} Technologies` : "Select a Category"}
                            <div className="w-full h-0.5 mt-1 bg-gradient-to-r from-[rgba(238,123,34,1)] to-[rgba(218,218,218,1)] rounded-lg"></div>
                        </h3>


                        <div onClick={() => setModalOpen(true)} className='group h-fit text-nowrap border-2 text-black inline-block border-red-100 max-h-14 rounded-full bg-orange-500 md:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent hover:bg-orange-500 hover:rounded-full justify-center align-middle'>
                            <PlusIcon className='size-10 invisible hidden md:inline-block lg:inline-block xl:inline-block 2xl:inline-block md:visible lg:visible xl:visible 2xl:visible group-hover:invisible group-hover:hidden' />
                            <p className='visible md:invisible lg:invisible xl:invisible 2xl:invisible md:hidden lg:hidden xl:hidden 2xl:hidden group-hover:visible group-hover:inline-block text-white p-3 sm:p-1 md:p-2 lg:p-3 xl:p-3 2xl:p-3 text-center uppercase text-xs'>Add Tech +</p>
                        </div>
                    </div>

                    {/* going to be modal */}
                    <AddTechModal
                        isModalOpen={isModalOpen}
                        onConfirm={() => { setModalOpen(false) }}
                        selectedCategory={selectedCategory}
                        setQuantities={setQuantities}
                    />

                    {selectedCategory ? (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 text-black">
                            {technologies[selectedCategory].map((tech, index) => (
                                <div key={index} className="flex items-center justify-between p-4 shadow rounded-lg ">
                                    <span>{tech}</span>
                                    {/* <div className="flex items-center space-x-2 bg-white rounded-full ">
                                        <button
                                            onClick={() => { handleDecreaseQuantity(selectedCategory, tech) }}
                                            className="  hover:bg-orange-400 hover:text-white rounded-full w-8 h-8 text-center"
                                        >
                                            -
                                        </button>
                                        <span>{quantities[selectedCategory]?.[tech] || 0}</span>
                                        <button
                                            onClick={() => { handleIncreaseQuantity(selectedCategory, tech) }}
                                            className="  hover:bg-orange-400 hover:text-white rounded-full w-8 h-8 text-center"
                                        >
                                            +
                                        </button>
                                    </div> */}

                                    <div className="relative flex items-center justify-center p-0.5 rounded-full">
                                        <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-transparent to-orange-50 rounded-full"></div>

                                        <div className="relative flex items-center bg-white rounded-full px-1">
                                            <button
                                                onClick={() => { handleDecreaseQuantity(selectedCategory, tech) }}
                                                className="hover:bg-orange-400 hover:text-white rounded-full w-8 h-8 text-center p-0"
                                            >
                                                -
                                            </button>

                                            <span className="text-black rounded-full w-5 h-5 text-center justify-center bg-[rgba(238,123,34,0.14)]">{quantities[selectedCategory]?.[tech] || 0}</span>

                                            <button
                                                onClick={() => { handleIncreaseQuantity(selectedCategory, tech) }}
                                                className="hover:bg-orange-400 hover:text-white rounded-full w-8 h-8 text-center"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">Please select a category to view its technologies.</p>
                    )}

                    <div className='mb-28 mt-8 text-black'>
                        <DurationRangeSelector />

                        {techs.length > 0 && <div className="pt-5 m-auto">
                            <div onClick={()=>setIsCallUsModalOpen(true)} className='animate-bounce-right m-auto cursor-pointer border w-fit p-3 text-white bg-orange-500 rounded-full text-xs font-semibold'>Get Pricing</div>
                        </div>}
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Pricing;
