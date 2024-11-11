import Image from "next/image"
import { useState } from "react"


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

    return <div className=" text-black">
        <div className="container
        hidden
        lg:flex
        xl:flex
        2xl:flex bg-white h-screen m-auto">
            <div className="w-[60%] mt-16 lg:mt-10">
                <div className="w-1/2 m-auto">
                    <h2 className="mt text-lg sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl pt text-black font-bold text-center mt-10">
                        IT Staff <span className="text-orange-500">Augmentation</span>
                    </h2>
                    <p className="text-center mt-10 px-3 mb-10 text-gray-600">
                        Augment your software team with IT professionals from the IT outsourcing company Riyadh.
                    </p>
                </div>

                <div className=" align-middle  hidden
        lg:flex
        xl:flex
        2xl:flex m-auto justify-between p-5 bg-white">
                    <div className="grid xl:grid-cols-2 gap-5">
                        {analytics.map((analytic, index) => {
                            return <button key={index} onClick={() => { setContent(index) }}
                                className={`p-2 
                                xl:h-16
                                2xl:h-14
                                text-center
                                 rounded-full 
                                 border-2 
                                 ${content == index ? 'bg-orange-400 text-white' : 'bg-transparent text-black'}
                                 border-orange-500`}>{analytic.title}</button>
                        })}
                    </div>

                    <div className="flex relative ">
                        <div className=" w-full">
                            <svg width="398" height="182" viewBox="0 0 398 182" fill="none" xmlns="http://www.w3.org/2000/svg" className=" h-36">
                                <mask id="path-1-inside-1_162_660" fill="white">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22 0C9.84974 0 0 9.84973 0 22V160C0 172.15 9.84975 182 22 182H360.164C371.435 182 380.883 173.481 382.046 162.269L382.09 161.843C383.135 151.771 374.578 143.326 364.521 144.503C348.68 146.357 340.366 126.256 352.887 116.378L381.197 94.0447C386.714 89.692 390.236 83.2923 390.961 76.3021L394 47L397.241 25.2408C399.221 11.9466 388.922 0 375.481 0H22Z" />
                                </mask>
                                <path d="M382.046 162.269L384.035 162.476L382.046 162.269ZM394 47L392.022 46.7054L392.015 46.7494L392.011 46.7937L394 47ZM397.241 25.2408L399.219 25.5355V25.5355L397.241 25.2408ZM390.961 76.3021L388.972 76.0958L390.961 76.3021ZM352.887 116.378L354.126 117.948L352.887 116.378ZM382.09 161.843L384.08 162.049L382.09 161.843ZM2 22C2 10.9543 10.9543 2 22 2V-2C8.74517 -2 -2 8.74516 -2 22H2ZM2 160V22H-2V160H2ZM22 180C10.9543 180 2 171.046 2 160H-2C-2 173.255 8.74518 184 22 184V180ZM360.164 180H22V184H360.164V180ZM380.057 162.063C379 172.255 370.41 180 360.164 180V184C372.46 184 382.767 174.706 384.035 162.476L380.057 162.063ZM380.101 161.636L380.057 162.063L384.035 162.476L384.08 162.049L380.101 161.636ZM354.126 117.948L382.436 95.6149L379.958 92.4745L351.649 114.808L354.126 117.948ZM392.011 46.7937L388.972 76.0958L392.951 76.5084L395.989 47.2063L392.011 46.7937ZM395.263 24.9462L392.022 46.7054L395.978 47.2946L399.219 25.5355L395.263 24.9462ZM375.481 2C387.7 2 397.063 12.8606 395.263 24.9462L399.219 25.5355C401.379 11.0327 390.143 -2 375.481 -2V2ZM22 2H375.481V-2H22V2ZM382.436 95.6149C388.377 90.9276 392.17 84.036 392.951 76.5084L388.972 76.0958C388.303 82.5487 385.052 88.4564 379.958 92.4745L382.436 95.6149ZM364.289 142.516C350.451 144.136 343.188 126.577 354.126 117.948L351.649 114.808C337.544 125.935 346.91 148.577 364.754 146.489L364.289 142.516ZM384.08 162.049C385.256 150.704 375.617 141.191 364.289 142.516L364.754 146.489C373.539 145.461 381.013 152.838 380.101 161.636L384.08 162.049Z" fill="url(#paint0_linear_162_660)" mask="url(#path-1-inside-1_162_660)" />
                                <defs>
                                    <linearGradient id="paint0_linear_162_660" x1="0" y1="91" x2="397" y2="91" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EE7B22" />
                                        <stop offset="1" stop-color="#732A09" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="absolute left-14 text-lg w-3/4 text-wrap mt-5 p-2 
                         bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.5)] bg-clip-text text-transparent
                        font-semibold ">
                            {analytics[content].description}
                        </div>

                    </div>

                </div>





            </div>
            <div className=" w-[40%] lg:mt-16">
                <Image alt="illustration" src={'/steps.png'} width={550} height={400} className="mt-10" />
            </div>
        </div>
    </div>
}

export default AnalyticsPage