import { Dispatch, FunctionComponent, SetStateAction, useState } from "react"
import { useCallUsModalState } from "./CallUsContext"
import { Technologies } from "./Pages/Pricing"

export interface AddTechModalProps {
    isModalOpen: boolean
    onConfirm: () => void
    selectedCategory: keyof Technologies | null
    setQuantities: Dispatch<SetStateAction<{
        [category: string]: {
            [tech: string]: number;
        };
    }>>
    techs: string[]
    quantities: number[]
    removeTech: (tech: string) => void
    increaseTechQuantity: (tech: string) => void
    decreaseTechQuantity: (tech: string) => void
    duration: string
}

const EditTechModal: FunctionComponent<AddTechModalProps> = ({
    isModalOpen,
    onConfirm,
    quantities,
    techs,
    removeTech,
    increaseTechQuantity,
    decreaseTechQuantity,
    duration
}) => {

    // const [customTech, setCustomTech] = useState('')
    // const [quantity, setQuantity] = useState<number>(0)
    const [err, setErr] = useState<string | null>(null)
    const { setIsCallUsModalOpen, darkMode } = useCallUsModalState()

    // const onSave = () => {
    //     if (selectedCategory) {
    //         technologies[selectedCategory].push(customTech)
    //         setQuantities(prev => ({
    //             ...prev,
    //             [selectedCategory]: {
    //                 ...prev[selectedCategory],
    //                 [customTech]: quantity,
    //             },
    //         }));
    //     }
    // }


    if (isModalOpen && techs.length > 0) {
        return <div className="relative sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden z-[51] text-black" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
                    <div className="relative m-auto transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white dark:bg-[#252525] dark:text-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">

                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                    <div className="flex justify-between">
                                        <h3 className="text-base font-semibold  text-gray-900 dark:text-white mb-5" id="modal-title">Selected Technologies
                                            <div className="w-full h-0.5 mt-1 bg-gradient-to-r from-[rgba(238,123,34,1)] to-[rgba(218,218,218,1)] rounded-lg" />
                                        </h3>

                                        <svg className="cursor-pointer" onClick={() => {
                                            setErr(null)
                                            onConfirm()
                                        }} width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 0.5C8.25 0.5 0.5 8.25 0.5 18C0.5 27.75 8.25 35.5 18 35.5C27.75 35.5 35.5 27.75 35.5 18C35.5 8.25 27.75 0.5 18 0.5ZM24.75 26.75L18 20L11.25 26.75L9.25 24.75L16 18L9.25 11.25L11.25 9.25L18 16L24.75 9.25L26.75 11.25L20 18L26.75 24.75L24.75 26.75Z" fill={darkMode ? 'white' : 'black'} fillOpacity="0.4" />
                                        </svg>
                                    </div>

                                    {err && <p className="text-red-500 text-sm">{err}</p>}



                                    <div className='flex gap-5 mt-2 overflow-x-hidden w-full flex-wrap max-h-96 justify-start'>
                                        {techs.map((item, index) => {
                                            return (
                                                <div key={index} className="relative flex items-center justify-center p-0.5 rounded-full w-full">
                                                    <div className="absolute inset-0 
                                                    
                                                    bg-gradient-to-r from-orange-200 via-transparent to-orange-50
                                                    dark:from-[rgba(128,128,128,0.3)] dark:via-transparent dark:to-[rgba(128,128,128,0.3)]

                                                    rounded-full"></div>

                                                    <div className="relative items-center justify-center rounded-full w-full">

                                                        <div className="flex items-center bg-white dark:bg-[#252525] dark:text-white rounded-full p-2 gap-2 ">

                                                            <span className="text-start p-1">{item}</span>

                                                            <div className="flex align-middle m-auto gap-2 max-w-fit mr-5">
                                                                <button
                                                                    onClick={() => { decreaseTechQuantity(item) }}
                                                                    className="justify-center m-auto bg-orange-300 px-2 hover:text-white rounded-full text-center "
                                                                >
                                                                    -
                                                                </button>

                                                                <span className="text-black dark:text-white dark:bg-[#ffffff63] rounded-full w-6 h-6 font-light m-auto bg-[rgba(238,123,34,0.14)]">{quantities[index]}</span>


                                                                <button
                                                                    onClick={() => { increaseTechQuantity(item) }}
                                                                    className="justify-center m-auto bg-orange-300  px-2 hover:text-white 
                                                                    
                                                                    rounded-full text-center "
                                                                >
                                                                    +
                                                                </button>

                                                                <svg onClick={() => removeTech(item)} className="cursor-pointer" width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M18 0.5C8.25 0.5 0.5 8.25 0.5 18C0.5 27.75 8.25 35.5 18 35.5C27.75 35.5 35.5 27.75 35.5 18C35.5 8.25 27.75 0.5 18 0.5ZM24.75 26.75L18 20L11.25 26.75L9.25 24.75L16 18L9.25 11.25L11.25 9.25L18 16L24.75 9.25L26.75 11.25L20 18L26.75 24.75L24.75 26.75Z" fill={darkMode ? 'white' : 'black'} fillOpacity="0.3" />
                                                                </svg>
                                                            </div>


                                                        </div>

                                                    </div>
                                                </div>)
                                        })}
                                    </div>


                                    <div onClick={() => setIsCallUsModalOpen({
                                        isOpen: true,
                                        hasTechs: true,
                                        techLabels: techs,
                                        techQuantities: quantities
                                    })} className="pt-5 inline-block m-auto w-fit">
                                        <div className='animate-bounce-right cursor-pointer mr-5 w-fit p-3 text-white bg-orange-500 rounded-full text-xs font-semibold'>Get Pricing</div>
                                    </div>

                                </div>
                                <p className="text-sm mt-3">Duration: <span className="font-semibold text-orange-500">{duration}</span></p>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    } else {
        return <></>
    }
}

export default EditTechModal