import Image from 'next/image';
import { useState } from 'react';
import { useCallUsModalState } from '../CallUsContext';

const banks = [
    {
        url: "alinma_bank.webp",
        alt_dark: "Partner with Top IT Managed Service Providers Saudi Arabia to enhance efficiency and results for Alinma Bank.",
        alt_color: "Unlock efficiency with Top IT Managed Service Providers Saudi Arabia, tailored to optimize Alinma Bank's operations."
    },
    {
        url: "alrajhi_bank.webp",
        alt_dark: "Streamline your hiring with the Best IT Contract Staffing Saudi Arabia, delivering top-tier solutions to Alrajhi Bank.",
        alt_color: "Simplify workforce expansion with the Best IT Contract Staffing Saudi Arabia, ensuring success for Alrajhi Bank."
    },
    {
        url: "bank_albilad.webp",
        alt_dark: "Employ full time contract employees to maintain seamless IT support for Bank Albilad's evolving needs.",
        alt_color: "Full time contract employees ensures consistent IT performance, empowering Bank Albilad to achieve seamless delivery."
    },
    {
        url: "future_generali.webp",
        alt_dark: "IT Staffing Riyadh offers innovative recruitment services tailored to meet Future Generali's business goals.",
        alt_color: "Transform hiring processes with IT Staffing Riyadh, offering customized solutions for Future Generali's unique goals."
    },
    {
        url: "elm.webp",
        alt_dark: "Choose the Best IT Contract Staffing Saudi Arabia for scalable solutions designed to suit Elm's objectives.",
        alt_color: "Opt for the Best IT Contract Staffing Saudi Arabia for flexible and efficient workforce solutions tailored for Elm."
    },
    {
        url: "gallagher.webp",
        alt_dark: "Adapt to market demands with Top IT Staff Augmentation Services Saudi Arabia, driving success for Gallagher.",
        alt_color: "Rely on Top IT Staff Augmentation Services Saudi Arabia to meet dynamic workforce needs, enhancing Gallagher's success."
    },
    {
        url: "nibav.webp",
        alt_dark: "Expand your workforce with IT Resource Augmentation Saudi Arabia, offering strategic staffing options for Nibav.",
        alt_color: "IT Resource Augmentation Saudi Arabia provides scalable solutions to meet Nibav's project needs."
    },
    {
        url: "olam.webp",
        alt_dark: "Rely on the Best IT Staffing Agency Saudi Arabia to connect with exceptional talent for Olam's projects.",
        alt_color: "Trust the Best IT Staffing Agency Saudi Arabia for unmatched recruitment, securing top talent for Olam."
    },
    {
        url: "reliance_capital.webp",
        alt_dark: "Bolster your team with IT Team Augmentation Saudi Arabia, ensuring expert professionals for Reliance Capital.",
        alt_color: "Boost capabilities with IT Team Augmentation Saudi Arabia, providing reliable professionals for Reliance Capital."
    },
    {
        url: "enjaz.webp",
        alt_dark: "Achieve operational excellence with Top IT Managed Service Providers Saudi Arabia, supporting Enjaz's growth.",
        alt_color: "Gain a competitive edge with Top IT Managed Service Providers Saudi Arabia, delivering results for Enjaz."
    },
    {
        url: "novasat.webp",
        alt_dark: "Enhance productivity with IT Resource Augmentation Saudi Arabia, delivering tailored expertise for Novasat.",
        alt_color: "Achieve excellence with IT Resource Augmentation Saudi Arabia, ensuring expert project delivery for Novasat."
    },
    {
        url: "pif.webp",
        alt_dark: "The Best IT Staffing Agency Saudi Arabia helps PIF access skilled IT experts, ensuring project success with the right talent.",
        alt_color: "Partner with Top IT Staff Augmentation Services Saudi Arabia to hire exceptional IT professionals and drive PIF's projects forward."
      },
      {
        url: "esports.webp",
        alt_dark: "Trust the Best IT Contract Staffing Saudi Arabia to provide Saudi Esports with experienced professionals for smooth and successful project delivery.",
        alt_color: "Choose the Top IT Managed Service Providers Saudi Arabia for Saudi Esports' IT hiring needs and build a strong, skilled workforce."
      },
      {
        url: "king_salman_IAir.webp",
        alt_dark: "Count on the Best IT Staffing Agency Saudi Arabia to help King Salman International Airport recruit top IT talent and achieve operational excellence.",
        alt_color: "With Top IT Staff Augmentation Services Saudi Arabia, King Salman International Airport can access industry-leading IT professionals to ensure business growth and success."
      },
];



export default function FAQPage() {
    const faqs = [
        {
            title: "When You Choose IT Contract Staffing?",
            description: <p>Choosing the Best IT contract staffing Saudi Arabia enables businesses to quickly hire skilled professionals for specific projects. This flexible method allows companies to adjust their teams based on project needs without making long-term commitments. It helps reduce hiring costs and save valuable time in the hiring process. As a result, your internal teams can concentrate on their core functions. With the Best IT contract staffing Saudi Arabia, you can efficiently manage your workforce. Embrace this smart hiring solution for your business today.</p>
        },
        {
            title: "What is an IT Staffing?",
            description: <p>IT Staffing is a solution that connects businesses with skilled tech professionals, tailored to meet specific project needs. This service provides on-demand access to IT talent, allowing companies to quickly scale their teams up or down based on workload. With flexible hiring options, businesses in IT Staffing Riyadh can choose short-term, long-term, or project-based roles without long-term commitments. IT Staffing saves valuable time, as agencies handle recruiting, vetting, and onboarding, ensuring new hires are ready to contribute right away. This cost-effective approach also reduces overhead since companies only hire as needed. By offering access to specialized skills, IT Staffing supports complex IT needs such as cybersecurity and cloud computing. With streamlined onboarding and ongoing support, companies can focus more on their core operations.</p>
        },
        {
            title: "Difference Between IT Resource Augmentation Services and IT Team Augmentation",
            description: <p>IT Resource Augmentation Saudi Arabia enhances your current team by adding skilled professionals temporarily to address specific project needs. This flexible approach allows you to maintain control over your projects while benefiting from specialized expertise. By supplementing your workforce, you can adapt to changing demands without long-term commitments. It also helps to streamline operations and improve efficiency. Choose IT Resource Augmentation Saudi Arabia to empower your team&apos;s success.<br/> <br/> IT Team Augmentation Saudi Arabia involves integrating a full team of skilled professionals into your project. This team typically operates under your management, ensuring alignment with your goals. It&apos;s an ideal solution for larger projects that need a cohesive group with diverse skills. By leveraging IT Team Augmentation, you can enhance project efficiency and meet specific objectives more effectively. Choose IT Team Augmentation Saudi Arabia for a seamless extension of your workforce.</p>
        },
        {
            title: "What is IT Staff Augmentation?",
            description: <p>IT Staff Augmentation is a service that helps businesses quickly hire skilled IT professionals for specific projects or tasks. It allows companies to bring in experts temporarily, filling gaps in their teams without long-term commitments. This service ensures flexibility by scaling the workforce based on project needs, saving time on recruitment. It&apos;s ideal for temporary workloads or specialized skills like software development or cybersecurity. Top IT Staff Augmentation Services Saudi Arabia ensures companies only pay for the talent they need, helping to lower operational expenses. IT staff augmentation helps companies stay focused on core tasks while enhancing productivity. It&apos;s an affordable solution to hit project milestones with highly skilled professionals.</p>
        },
        {
            title: "What are IT Managed Services?",
            description: <p>IT Managed Services refers to outsourcing your company&apos;s IT operations to a third-party provider. Instead of handling IT tasks in-house, businesses rely on experts to manage everything from network security to software updates. As one of the Top IT Managed Service Providers Saudi Arabia, we ensure that your IT infrastructure is always running smoothly without the need for constant attention. This service helps businesses avoid downtime, enhance productivity, and reduce operational costs. Managed services include monitoring systems, troubleshooting issues, and offering support when needed. This allows companies to focus on core business functions while leaving the technical side in trusted hands. It&apos;s a smart and efficient solution for maintaining a reliable IT environment.</p>
        },
        {
            title: "What does it mean by full time contract employee?",
            description: <p>A full time contract employee is someone who works for a company on a contract basis, typically for a set period, but with the same hours and responsibilities as a permanent employee. Unlike regular employees, they are hired for specific projects or tasks and are not permanent staff members. These employees often enjoy benefits like health insurance, paid time off, and other perks, similar to full-time staff. However, their employment is bound by a contract with a defined end date. Full-time contract employees can help businesses scale their teams quickly without long-term commitments. They bring specialized skills and expertise for the duration of the contract. It&apos;s a flexible arrangement for both companies and employees.</p>
        },
    ]

    return (
        <div className="bg-white dark:bg-[#252525] text-black dark:text-white relative overflow-hidden">

            <div className="absolute inset-0  w-full h-screen ">
                <div className="absolute w-11/12 h-full opacity-[0.06] -right-[85%] bg-orange-200 dark:bg-opacity-40 rounded-full"></div>
                <div className="absolute w-10/12 h-full opacity-[0.06] -right-[60%] bg-orange-200 dark:bg-opacity-40 rounded-full"></div>
                <div className="absolute w-9/12 h-full opacity-[0.06] -right-[60%] bg-orange-200 dark:bg-opacity-40 rounded-full"></div>
                <div className="absolute w-8/12 h-full opacity-[0.06] -right-[35%] bg-orange-200 dark:bg-opacity-40 rounded-full"></div>
                <div className="absolute w-7/12 h-full opacity-[0.06] -right-[20%] bg-orange-200 dark:bg-opacity-40 rounded-full"></div>
            </div>

            <div className="container relative p-7 mx-auto">
                <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-5">
                    When and <span className="text-orange-500">what?</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((question, index) => (
                        <FAQItem key={index} question={question.title} answer={question.description} index={index} />
                    ))}
                </div>

                <div className='container m-auto mt-10'>

                    <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-5 text-center">
                        Partners
                    </h2>

                    <p className='text-center pb-5'>Trusted by 100+ companies</p>
                </div>
            </div>
            <Partners />
        </div>
    );
}

function FAQItem({ question, index, answer }: { question: string, answer: React.ReactNode, index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`border-b py-4 cursor-pointer transition-all duration-300 ${isOpen ? 'bg-gray-100 dark:bg-transparent' : ''
                }`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between items-center">
                <h3 className="font-medium 2xl:text-lg xl:text-lg md:text-base text-base sm:text-base text-left p-2">{index + 1}. {question}</h3>
                <span className="text-xl  animate-bounce p-2">
                    {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                    </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    }
                </span>
            </div>
            {isOpen && (
                <div className="mt-2 text-gray-600 dark:text-white text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base overflow-hidden animate-slideDown p-2">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}


const Partners = () => {
    const { darkMode } = useCallUsModalState()
    return <div
        x-data="{}"
        x-init="$nextTick(() => {
let ul = $refs.logos;
ul.insertAdjacentHTML('afterend', ul.outerHTML);
ul.nextSibling.setAttribute('aria-hidden', 'true');
})"
        className="w-full  dark:bg-opacity-70  -mt-10 mb-20 xs:p-2 sm:p-5 md:p-6 lg:p-7 xl:p-7 2xl:p-7 inline-flex flex-nowrap overflow-hidden 
   [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-100px),transparent_100%)]">

        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
            {banks.map((bank, i) => (
                <li key={i} className="flex justify-center items-center  sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <Image
                        src={darkMode ? `taggedImages/Client-Logos-Dark/${bank.url}` : `taggedImages/Client-Logos-Color/${bank.url}`}
                        alt={darkMode ? bank.alt_dark : bank.alt_color}
                        width={100}
                        height={80}
                        // className="cursor-pointer w-24 sm:w-20 md:w-28 lg:w-36 xl:w-40 h-auto"
                        className={`cursor-pointer  mr-0 ml-0 ${bank.url==='king_salman_IAir.webp'? "h-5 md:h-7 w-auto":"h-auto w-24 sm:w-20 md:w-28 lg:w-36 xl:w-40"}`}
                    />
                </li>
            ))}
        </ul>

        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {banks.map((bank, i) => (
                <li key={i} className="flex justify-center items-center  sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <Image
                        src={darkMode ? `taggedImages/Client-Logos-Dark/${bank.url}` : `taggedImages/Client-Logos-Color/${bank.url}`}
                        alt={darkMode ? bank.alt_dark : bank.alt_color}
                        width={100}
                        height={80}
                        // className="cursor-pointer w-24 sm:w-20 md:w-28 lg:w-36 xl:w-40 h-auto"
                        className={`cursor-pointer  mr-0 ml-0 ${bank.url==='king_salman_IAir.webp'? "h-5 md:h-7 w-auto":"h-auto w-24 sm:w-20 md:w-28 lg:w-36 xl:w-40"}`}
                    />
                </li>
            ))}
        </ul>
    </div>
}