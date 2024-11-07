import { useState } from 'react';
import AddTechModal from '../AddTechModal';
import CategoryHorizontal from '../CategoryHorizontal';
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
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof technologies | null>('Core Banking');
    const [quantities, setQuantities] = useState<{ [category: string]: { [tech: string]: number } }>({});

    const [isModalOpen, setModalOpen] = useState<boolean>(false)


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
        setQuantities(prev => ({
            ...prev,
            [category]: {
                ...prev[category],
                [tech]: Math.max((prev[category]?.[tech] || 0) - 1, 0),
            },
        }));
    };


    const handleCategoryClick = (category: keyof typeof technologies) => {
        setSelectedCategory(category);
    };

    //   const [selectedTechnologies, setSelectedTechnologies] = useState(
    //     technologies.map(() => 0)
    //   );

    //   const handleIncrease = (index: number) => {
    //     const updated = [...selectedTechnologies];
    //     updated[index] += 1;
    //     setSelectedTechnologies(updated);
    //   };

    //   const handleDecrease = (index: number) => {
    //     const updated = [...selectedTechnologies];
    //     if (updated[index] > 0) updated[index] -= 1;
    //     setSelectedTechnologies(updated);
    //   };


    return (
        <div className="container mx-auto lg:p-10 -mt-20">


            <h2 className="text-2xl sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl  font-bold text-center">
                Craft your own <span className="text-orange-500">pricing</span>
            </h2>
            <p className="text-center mt-10 px-3 text-gray-600">
                Customize your plan with chosen technologies, with pricing calculated monthly to fit your needs.
            </p>

            <div className="flex flex-col lg:flex-row p-6 gap-8">

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
                    {Object.keys(technologies).map((category) => (
                        <div className='relative'>
                            <button
                                key={category}
                                onClick={() => handleCategoryClick(category as keyof typeof technologies)}
                                className={`border max-h-fit w-full border-orange-500 py-2 px-4 rounded-full transition-colors ${selectedCategory === category ? "bg-orange-500 text-white" : "bg-white text-black"
                                    } hover:bg-orange-500`}
                            >
                                {category}
                            </button>

                            {quantities[category] &&
                                Object.values(quantities[category]).some(quantity => quantity > 0) && (
                                    <div className='w-5 h-5 border border-orange-500 bg-white rounded-full absolute -top-1 right-0 z-[60]'>
                                        <p className='text-center rounded-full text-xxs text-black'>
                                            {Object.values(quantities[category]).filter(quantity => quantity > 0).length}
                                        </p>
                                    </div>
                                )}
                        </div>
                    ))}
                </div>

                <CategoryHorizontal handleCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} quantities={quantities} />

                <div className="lg:w-2/3 p-4 bg-gray-50 rounded-lg shadow">
                    <div className='flex justify-between mb-2 cursor-pointer'>
                        <h3 className="text-xl font-semibold mb-4">
                            {selectedCategory ? `${selectedCategory} Technologies` : "Select a Category"}
                        </h3>

                        <div onClick={() => setModalOpen(true)} className='group border-2 inline-block border-red-100 max-h-14 rounded-lg hover:bg-orange-500 hover:rounded-full justify-center align-middle'>
                            <PlusIcon className='size-10 visible group-hover:invisible group-hover:hidden' />
                            <p className='invisible hidden group-hover:visible group-hover:inline-block text-white p-1 sm:p-1 md:p-2 lg:p-3 xl:p-3 2xl:p-3 text-center uppercase text-xs'>Add Tech +</p>
                        </div>
                    </div>

                    {/* going to be modal */}
                    <AddTechModal isModalOpen={isModalOpen} onConfirm={() => { setModalOpen(false) }} />

                    {selectedCategory ? (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                            {technologies[selectedCategory].map((tech, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
                                    <span>{tech}</span>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => { handleDecreaseQuantity(selectedCategory, tech) }}
                                            className="border border-orange-500 hover:bg-orange-400 hover:text-white rounded-full w-8 h-8 text-center"
                                        >
                                            -
                                        </button>
                                        <span>{quantities[selectedCategory]?.[tech] || 0}</span>
                                        <button
                                            onClick={() => { handleIncreaseQuantity(selectedCategory, tech) }}
                                            className="border border-orange-500 hover:bg-orange-400 hover:text-white rounded-full w-8 h-8 text-center"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">Please select a category to view its technologies.</p>
                    )}

                    {/* duration dummy */}
                    <div className="mt-10">
                        <h3 className="text-xl font-semibold">Duration</h3>
                        <div className="mt-4 h-1 bg-orange-500 rounded-full w-full relative">
                            <div className="absolute left-1/3 w-6 h-6 bg-orange-600 rounded-full top-1/2 -translate-y-1/2"></div>
                        </div>
                        <div className="flex justify-between text-sm mt-2">
                            <span>1 Month</span>
                            <span>1.5 years</span>
                            <span>2+ yrs</span>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Pricing;
