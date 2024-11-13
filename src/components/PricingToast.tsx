import React, { useState, useEffect } from 'react';

const PricingToast = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClose = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        isVisible && (
            <div className="fixed bottom-5 left-5  bg-white text-black p-8 xs:p-4 xs:pt-8 xs:w-3/4 flex items-center
            border-[0.5px]
            border-orange-500 
            rounded-3xl shadow-lg z-50 bg-gradient-to-b from-orange-50 via-transparent to-orange-50">
                <div className='absolute top-2 right-2'>
                <svg className="cursor-pointer" onClick={handleClose} width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 0.5C8.25 0.5 0.5 8.25 0.5 18C0.5 27.75 8.25 35.5 18 35.5C27.75 35.5 35.5 27.75 35.5 18C35.5 8.25 27.75 0.5 18 0.5ZM24.75 26.75L18 20L11.25 26.75L9.25 24.75L16 18L9.25 11.25L11.25 9.25L18 16L24.75 9.25L26.75 11.25L20 18L26.75 24.75L24.75 26.75Z" fill="black" fillOpacity="0.4" />
                </svg>
                </div>
             
                <p className="m-0 mr-4 text-lg font-semibold text-center xs:text-sm xs:text-wrap xs:w-full">Do you want to Know the Pricing?</p>
                <button 
                onClick={()=>{
                    document.getElementById('pricing-section')?.scrollIntoView({
                        behavior:'smooth'
                    })
                    setIsVisible(false)
                }}
                className="ml-auto bg-[#FF7A29] text-white border-none rounded-md px-4 py-2 xs:text-nowrap text-base xs:text-sm cursor-pointer">
                    Get Price
                </button>             
            </div>
        )
    );
};

export default PricingToast;
