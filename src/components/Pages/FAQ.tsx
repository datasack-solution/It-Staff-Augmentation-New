import Image from 'next/image';
import { useState } from 'react';
const banks = ['alinma_bank.png', 'alrajhi_bank.png', 'bank_albilad.png', 'future_generali.png', 'nibav.png', 'olam.png', 'reliance_capital.png', 'enjaz.png']


export default function FAQPage() {
    const faqs = [
        "When You Choose IT Contract Staffing?",
        "What is an IT Outsource Contract?",
        "Difference Between IT Resource Augmentation Services and IT Team Augmentation?",
        "What You Can Expect as a Client from an International Recruitment Agency?",
        "What role do banking recruitment agencies play in your hiring strategy?",
        "What is IT Contract recruitment?",
        "How to choose the right outsourced IT service providers?"
    ];

    return (
        <div className="bg-white text-black relative overflow-hidden">

            <div className="absolute inset-0  w-full h-screen ">
                <div className="absolute w-11/12 h-full opacity-[0.06] -right-[85%] bg-orange-200 rounded-full"></div>
                <div className="absolute w-10/12 h-full opacity-[0.06] -right-[60%] bg-orange-200 rounded-full"></div>
                <div className="absolute w-9/12 h-full opacity-[0.06] -right-[60%] bg-orange-200 rounded-full"></div>
                <div className="absolute w-8/12 h-full opacity-[0.06] -right-[35%] bg-orange-200 rounded-full"></div>
                <div className="absolute w-7/12 h-full opacity-[0.06] -right-[20%] bg-orange-200 rounded-full"></div>
            </div>

            <div className="container relative p-7 mx-auto">
                <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-5">
                    When and <span className="text-orange-500">what?</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((question, index) => (
                        <FAQItem key={index} question={question} index={index} />
                    ))}
                </div>

                <div className='container m-auto mt-20'>

                    <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-5 text-center">
                        Partners
                    </h2>

                    <p className='text-center my-10'>Trusted by 100+ companies</p>
                </div>
            </div>
            <Partners />
        </div>
    );
}

function FAQItem({ question, index }: { question: string, index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`border-b py-4 cursor-pointer transition-all duration-300 ${isOpen ? 'bg-gray-100' : ''
                }`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between items-center">
                <h3 className="font-medium 2xl:text-lg xl:text-lg md:text-base text-base sm:text-base text-left p-2">{index + 1}. {question}</h3>
                <span className="text-xl  animate-bounce p-2">
                    {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
                    </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
                        </svg>
                    }
                </span>
            </div>
            {isOpen && (
                <div className="mt-2 text-gray-600 text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base overflow-hidden animate-slideDown p-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptas enim explicabo corrupti quas dolores placeat necessitatibus voluptatem, repellat sed maxime reprehenderit qui repudiandae magni quibusdam fuga ducimus molestias. Dicta.</p>
                </div>
            )}
        </div>
    );
}


const Partners = () => {
    return <div
        x-data="{}"
        x-init="$nextTick(() => {
let ul = $refs.logos;
ul.insertAdjacentHTML('afterend', ul.outerHTML);
ul.nextSibling.setAttribute('aria-hidden', 'true');
})"
        className="w-full -mt-10 mb-20 sm:p-5 md:p-6 lg:p-7 xl:p-7 2xl:p-7 inline-flex flex-nowrap overflow-hidden 
   [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-100px),transparent_100%)]">

        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
            {banks.map((bank, i) => (
                <li key={i} className="flex justify-center items-center  sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <Image
                        src={`/brands_color/${bank}`}
                        alt="DataSack Solutions Logo"
                        width={100}
                        height={80}
                        className="cursor-pointer w-24 sm:w-20 md:w-28 lg:w-36 xl:w-40 h-auto"
                    />
                </li>
            ))}
        </ul>

        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {banks.map((bank, i) => (
                <li key={i} className="flex justify-center items-center  sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <Image
                        src={`/brands_color/${bank}`}
                        alt="DataSack Solutions Logo"
                        width={100}
                        height={80}
                        className="cursor-pointer w-24 sm:w-20 md:w-28 lg:w-36 xl:w-40 h-auto"
                    />
                </li>
            ))}
        </ul>
    </div>
}