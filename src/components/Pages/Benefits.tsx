const benefits = [
    {
        title: 'Core Focus',
        description: 'Our IT Recruitment Agency in Riyadh optimizes productivity by outsourcing non-core tasks to contingent workers, freeing up resources for core business activities and enhancing operational efficiency for our clients.'
    },
    {
        title: 'Strategic Hiring Efficiency',
        description: 'Reduce overhead costs with IT Staffing Agency Riyadh by hiring workers only when needed. This approach ensures financial efficiency and flexibility, paying only for the essential workforce during peak demands.'
    }, {
        title: 'Flexible Workforce',
        description: 'Outsourcing Company Riyadh increases financial flexibility by converting fixed costs into variable costs, hiring workers for specific durations. This ensures optimal budget management by paying only for necessary expertise..'
    },
    {
        title: 'Onsite Efficiency',
        description: 'Optimize travel logistics with expert IT staff augmentation services Riyadh, ensuring rapid consultant availability and prompt support for enhanced client satisfaction and project efficiency.'
    },
    {
        title: 'Precision Staffing',
        description: 'Reduce staffing costs with an IT Recruitment Agency in Saudi through just-in-time recruitment, ensuring resources are deployed precisely when needed. This approach minimizes overheads tied to idle workforce capacity, enhancing financial flexibility and efficiency.'
    },
    {
        title: 'Smooth Visa Logistics',
        description: 'Utilizing our expert team in logistics and visa processing at our IT Outsourcing Company Riyadh, we collaborate closely to ensure an efficient and seamless experience for our clients. This approach streamlines operations and enhances client satisfaction.'
    },
    {
        title: 'Resource Deployment',
        description: 'Our IT Staffing Agency Riyadh deploys resources in India to meet business needs. This strategic advantage ensures swift adaptation to market demands, enhancing operational agility and client satisfaction.'
    },
    {
        title: 'Rapid Expansion',
        description: 'Accelerate growth by scaling up IT Staffing Agency Riyadh to efficiently meet demand. This proactive approach ensures timely service delivery, enhancing customer satisfaction and seizing market opportunities.'
    }
]

const Benefits = () => {
    return <div className="container p-5 m-auto text-black">
        <h2 className="text-lg sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-black font-bold text-center">
            Benefits of Choosing Us - <span className="text-orange-500">Advanced IT Recruitment Agency in Riyadh</span>
        </h2>
        <p className="text-center mt-10 px-3 mb-10 text-gray-600">
            IT Staff Augmentation Services Riyadh provided by Datasack Solutions are advantageous as they offer the following benefits.
        </p>

        <div className="hide-scrollbar relative flex items-center justify-center p-[3px] rounded-full">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-300 via-transparent to-orange-300 rounded-3xl"></div>

            {/* <div className="relative bg-white grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 gap-10 p-10 rounded-3xl">
                {benefits.map((benefit, index) => {
                    return    <div className="relative flex items-center justify-center p-[1] rounded-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-300 via-transparent to-orange-300 rounded-3xl"></div>
            
                    <div key={index} className="relative p-5 min-h-80 bg-white overflow-auto rounded-3xl">
                        <h2 className="text-center font-bold py-3 text-lg ">{benefit.title}</h2>
                        <p className="justify-center text-base text-pretty text-justif ">{benefit.description}</p>
                    </div>
                    </div>
                })}
            </div> */}


            <div className="hidden md:relative lg:relative xl:relative 2xl:relative  md:grid lg:grid xl:grid 2xl:grid bg-white  2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 p-6 md:p-10 rounded-3xl">
                {benefits.map((benefit, index) => (
                    <div key={benefit.title} className="relative flex items-center justify-center p-[1px] rounded-full">
                        <div className="absolute inset-0 bg-gradient-to-b from-orange-300 via-transparent to-orange-300 rounded-3xl"></div>

                        <div className="relative p-5 bg-white max-h-80 h-full flex flex-col items-center overflow-auto hide-scrollbar rounded-3xl shadow-md">
                            <div className="rounded-full p-1 bg-gray-200 w-10 h-10 text-center align-middle">
                                <p className="mt-auto text-lg text-black">{index + 1}</p>
                            </div>
                            
                            <div className="w-fit inline-block py-3">
                            <h2 className="text-center font-bold text-lg">{benefit.title}</h2>
                            {/* <div className="w-full h-[1px] mt-1 bg-gradient-to-r from-[rgba(238,123,34,1)] to-[rgba(218,218,218,1)] rounded-lg"></div> */}
                            </div>

                            <p className="text-center text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-gray-700">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative flex flex-col  gap-8 md:hidden lg:hidden xl:hidden 2xl:hidden p-2 rounded-3xl  bg-white">
                {benefits.map((benefit, index) => {
                    return <div key={index}>
                        <div className="rounded-full inline-block  text-center align-middle">
                            <p className=" rounded-full text-center text-5xl font-light text-gray-400">0{index + 1}</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="inline-block w-fit">
                                <h2 className="uppercase font-semibold">{benefit.title}</h2>
                                {/* <div className="w-full h-0.5 mt-1 bg-gradient-to-r from-[rgba(238,123,34,1)] to-[rgba(218,218,218,1)] rounded-lg"></div> */}
                            </div>

                            <div className="rounded-lg text-sm text-justify text-pretty">
                                {benefit.description}
                            </div>
                        </div>


                    </div>
                })}
            </div>

        </div>

    </div>
}

export default Benefits