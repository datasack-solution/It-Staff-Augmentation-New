import { FunctionComponent } from "react"

export interface AddTechModalProps {
    isModalOpen: boolean
    onConfirm: () => void
}

const AddTechModal: FunctionComponent<AddTechModalProps> = ({
    isModalOpen,
    onConfirm
}) => {

    if (isModalOpen) {
        return <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
                    <div className="relative m-auto transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">


                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                    <div className="flex justify-between">
                                        <h3 className="text-base font-semibold  text-gray-900" id="modal-title">Do you want to add custom tech's ?</h3>
                                        <svg className="cursor-pointer" onClick={onConfirm} width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 0.5C8.25 0.5 0.5 8.25 0.5 18C0.5 27.75 8.25 35.5 18 35.5C27.75 35.5 35.5 27.75 35.5 18C35.5 8.25 27.75 0.5 18 0.5ZM24.75 26.75L18 20L11.25 26.75L9.25 24.75L16 18L9.25 11.25L11.25 9.25L18 16L24.75 9.25L26.75 11.25L20 18L26.75 24.75L24.75 26.75Z" fill="black" fill-opacity="0.4" />
                                        </svg>

                                    </div>

                                    <div className="flex flex-col gap-5 mt-7">
                                        <fieldset className="w-full m-auto h-auto border-2 rounded-full px-5 py-1">
                                            <legend className="px-2">Technology</legend>
                                            <input
                                                placeholder="Enter Tech Name"
                                                className="w-full outline-none rounded-full px-2 py-1"
                                            />
                                        </fieldset>

                                        <fieldset className="w-full m-auto h-auto border-2 rounded-full px-5 py-1">
                                            <legend className="px-2">Quantity</legend>
                                            <input
                                                type="number"
                                                placeholder="Enter Tech Name"
                                                className="w-full outline-none rounded-full px-2 py-1"
                                            />
                                        </fieldset>

                                        <button onClick={onConfirm} className="p-3 text-white bg-orange-500 rounded-full w-fit justify-center align-middle self-center">Add Tech</button>

                                    </div>

                                </div>


                            </div>
                        </div>

                        {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button"
                                onClick={onConfirm}
                                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Add Tech</button>
                            <button type="button"
                                onClick={onConfirm}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    } else {
        return <></>
    }
}

export default AddTechModal