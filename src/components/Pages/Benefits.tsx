const benefits = [
    {
        title: 'Strategic Hiring Efficiency',
        description: 'Reduce overhead costs with the Best IT Staffing Agency Saudi Arabia by hiring workers only when needed. The staffing model grants flexible financial control through payment for the essential workforce only during times of peak demands.'
    }, 
    {
        title: 'Flexible Workforce',
        description: 'This strategy improves financial flexibility through converting fixed costs into variable costs and hiring IT professionals for special time durations. The approach enables financial optimization through payments based only on required expertise.'
    },
    {
        title: 'Precision Staffing',
        description: 'Reduce staffing costs with the Best IT contract staffing Saudi Arabia through just-in-time recruitment, ensuring resources are deployed exactly when needed. Companies using this method cut their costs from idle workforce capacity while boosting their financial efficiency and flexibility.'
    },
    {
        title: 'Core Focus',
        description: 'Our Top IT Staff Augmentation Services Saudi Arabia optimize productivity by outsourcing non-core tasks to contingent workers, freeing up resources for core business activities and enhancing operational efficiency for our clients.'
    },
    {
        title: 'Rapid Expansion',
        description: 'Boost your growth by partnering with the Best IT Staffing Agency Saudi Arabia, ensuring you meet demand swiftly and efficiently. Timely service delivery, higher customer satisfaction, and successful market opportunities capture becomes possible through this proactive approach.'
    },
    {
        title: 'Onsite Efficiency',
        description: 'Optimize travel logistics with expert Top IT Staff Augmentation Services Saudi Arabia, ensuring rapid consultant availability and prompt support to enhance client satisfaction and project efficiency.'
    },
    {
        title: 'Smooth Visa Logistics',
        description: 'Our logistics specialists work with our visa processing department to deliver an efficient and smooth service experience to all clients. Our operational streamlining method brings increased client satisfaction as well as operational efficiency.'
    },
    {
        title: 'Resource Deployment',
        description: 'Our Best IT Staffing Agency Saudi Arabia deploys resources from India to meet business needs. The tactical advantage ensures our company quickly adapts to market demands, resulting in improved operational agility along with happier clients.'
    },
]

const BenefitsPage = () => {
    return <div className="bg-[#F2F2F2] dark:bg-[#252525]">
        <div className="container p-5 m-auto text-black dark:text-white bg-[#F2F2F2] dark:bg-[#252525]">
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-black dark:text-white font-bold text-center">
            Benefits of Choosing Us - <span className="text-orange-500">Best IT contract staffing Saudi Arabia</span>
            </h2>
            <p className="text-center mt-10 px-3 mb-10 text-gray-600 dark:text-white">
            Top IT Staff Augmentation Services Saudi Arabia provided by DataSack Solutions is
            advantageous as it offers the following benefits.
            </p>

            <div className="hide-scrollbar relative flex items-center justify-center p-[1.5px] rounded-full">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-300 via-transparent to-orange-300 rounded-3xl"></div>

                <div className="hidden md:relative lg:relative xl:relative 2xl:relative  md:grid lg:grid xl:grid 2xl:grid bg-white dark:bg-[#252525] 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 p-6 md:p-10 rounded-3xl">
                    {benefits.map((benefit) => (
                        <div key={benefit.title} className="relative flex items-center justify-center p-[1px] rounded-full">
                            <div className="absolute inset-0 bg-gradient-to-b from-orange-300 via-transparent to-orange-300
                            rounded-3xl"></div>

                            <div className="relative p-5 bg-white dark:bg-[#1b1b1b] max-h-80 h-full flex flex-col items-center overflow-auto hide-scrollbar rounded-3xl shadow-md">

                                <div className="w-fit inline-block py-3">
                                    <h2 className="text-center font-bold text-lg">{benefit.title}</h2>
                                </div>

                                <p className="text-justify py-5 text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base text-gray-700 dark:text-gray-200">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="relative flex flex-col  gap-8 md:hidden lg:hidden xl:hidden 2xl:hidden p-2 rounded-3xl py-10 bg-white dark:bg-[#252525]">
                    {benefits.map((benefit, index) => {
                        return <div key={index} className="px-5">
                            <div className="rounded-full inline-block  text-center align-middle">
                                <p className=" rounded-full text-center text-5xl font-light text-gray-400">0{index + 1}</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="inline-block w-fit">
                                    <h2 className="uppercase font-semibold">{benefit.title}</h2>
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
    </div>
}

export default BenefitsPage