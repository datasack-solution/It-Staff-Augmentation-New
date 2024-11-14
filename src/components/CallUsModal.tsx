import { FunctionComponent, useState } from "react"

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import GreetModal from "./GreetModal"
import { useCallUsModalState } from "./CallUsContext"


export interface AddTechModalProps {
    isModalOpen: boolean
    onConfirm: () => void
}

const CallUsModal: FunctionComponent<AddTechModalProps> = ({
    onConfirm,
}) => {
    const [submitted,setSubmitted]=useState(false)
    const {  darkMode } = useCallUsModalState()

    if (submitted){
        return <GreetModal  onConfirm={onConfirm}/>
    }

    return <div className="fixed  inset-0 flex items-center justify-center bg-gray-900 text-black dark:text-white bg-opacity-50 z-[62]">
        <div className="bg-white dark:bg-[#252525] animate-flyinup w-full max-h-[600px] md:max-h-screen lg:max-h-screen xl:max-h-screen 2xl:max-h-screen  max-w-3xl mx-4 md:mx-0 p-6 rounded-lg shadow-lg relative overflow-auto">
            <button onClick={onConfirm} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600" aria-label="Close Modal">&times;</button>

            <h2 className="text-3xl font-bold text-center mb-5">Book a Call for <span className="text-orange-500">Free Consultation</span></h2>
            <p className="text-center text-gray-500 dark:text-white mb-6">Level Up Your IT with DataSack Experts !!</p>

            <form className="space-y-4" onSubmit={()=>setSubmitted(true)}>
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
                                    backgroundColor:'transparent',
                                }}
                                searchStyle={{
                                    backgroundColor:'transparent',
                                }}
                                dropdownStyle={{
                                    backgroundColor:darkMode ? 'black':'white',
                                }}
                                inputStyle={{
                                    width: '100%',
                                    border:'none',
                                    backgroundColor:'transparent'
                                }}
                                buttonStyle={{
                                    backgroundColor:'transparent',
                                    border:'none',
                                }}
                            />
                            {/* <input type="tel" placeholder="Phone No" className="flex-1 outline-none" /> */}
                        </div>
                    </div>
                    <div>
                        <label className="text-gray-600 dark:text-gray-300 text-sm">Select Date</label>
                        <input type="date" className="w-full border border-gray-300 dark:border-gray-600  bg-transparent rounded-full py-2 px-4 outline-none focus:ring-2 focus:ring-orange-500" />
                    </div>
                    <div>
                        <label className="text-gray-600 dark:text-gray-300 text-sm">Select Time</label>
                        <input type="time" className="w-full border border-gray-300 dark:border-gray-600  bg-transparent rounded-full py-2 px-4 outline-none focus:ring-2 focus:ring-orange-500" />
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