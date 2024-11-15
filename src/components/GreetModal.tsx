import { FunctionComponent } from "react"

const GreetModal:FunctionComponent<{onConfirm:()=>void}> = ({
    onConfirm
}) => {

    return <div className="fixed  inset-0 flex items-center justify-center bg-gray-900 text-black dark:text-white bg-opacity-50 z-[62]">
        <div className="bg-white dark:bg-[#252525] py-10  animate-flyinup xs:w-full sm:w-full md:w-1/2 max-h-[800px] md:max-h-screen lg:max-h-screen xl:max-h-screen 2xl:max-h-screen  max-w-3xl mx-4 md:mx-0 p-6 rounded-lg shadow-lg relative overflow-auto">
        <div >
                <svg className="size-1/5 xs:size-1/3 m-auto" width="264" height="264" viewBox="0 0 264 264" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="132" cy="132" r="120" fill="#EE7B22" fill-opacity="0.2" />
                    <circle cx="132" cy="132" r="132" fill="#EE7B22" fill-opacity="0.1" />
                    <circle cx="132" cy="132" r="108" fill="#EE7B22" fill-opacity="0.4" />
                    <circle cx="132" cy="132" r="96" fill="#EE7B22" fill-opacity="0.6" />
                    <circle cx="132" cy="132" r="84" fill="white" />
                    <path opacity="0.8" d="M119.5 167.083L93.625 141.208L105.417 129.417L119.5 143.542L160.667 102.333L172.458 114.125L119.5 167.083Z" fill="#EE7B22" />
                </svg>
            </div>
            <button onClick={onConfirm} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600" aria-label="Close Modal">&times;</button>

           

            <h2 className="text-3xl xs:text-2xl font-bold text-center mb-5">Thank you <span className="text-orange-500">for contacting us</span></h2>

            <div className="flex flex-col gap-1 xs:text-sm">
            <p className="text-center  text-gray-500 m-auto">Your Email has been sent successfully,</p>
            <p className="text-center  text-gray-500 mb-6 m-auto">our team will contact you shortly,</p>
            </div>


            <div className="w-full text-center">
                    <button onClick={onConfirm} className="w-fit p-5 bg-orange-500 text-white font-semibold py-3 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Continue</button>
                </div>


        </div>
    </div>
}

export default GreetModal