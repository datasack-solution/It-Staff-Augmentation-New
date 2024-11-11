import { FunctionComponent } from "react"

const DarkToggle:FunctionComponent<{className:string, onClick:()=>void}> = ({className,onClick}) => {
    return <svg onClick={onClick} className={className} width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_ddii_160_475)">
    <g clipPath="url(#clip0_160_475)">
    <rect x="1" y="2" width="50" height="20" rx="10" fill="#252D37"/>
    <circle cx="41.1354" cy="11.931" r="14.069" fill="white" fillOpacity="0.1"/>
    <circle cx="41.1355" cy="11.931" r="19.8621" fill="white" fillOpacity="0.1"/>
    <circle cx="41.1366" cy="11.931" r="26.2069" fill="white" fillOpacity="0.1"/>
    <path d="M6.86777 10.3344C6.67057 10.5443 6.43079 10.6561 6.14844 10.6697C6.43079 10.6834 6.67057 10.7952 6.86777 11.0073C7.06498 11.2172 7.16358 11.4681 7.16358 11.7578C7.16358 11.5662 7.2084 11.3906 7.29803 11.2263C7.38991 11.0621 7.51316 10.9298 7.66779 10.8317C7.82465 10.7313 7.99496 10.6789 8.18096 10.6697C7.89636 10.6538 7.65658 10.5443 7.45938 10.3344C7.26218 10.1246 7.16358 9.87591 7.16358 9.58621C7.16358 9.87591 7.06498 10.1246 6.86777 10.3344Z" fill="white"/>
    <path d="M12.4555 5.14067C12.064 5.55733 11.5879 5.77925 11.0273 5.80643C11.5879 5.8336 12.064 6.05552 12.4555 6.47671C12.8471 6.89337 13.0428 7.39156 13.0428 7.96674C13.0428 7.5863 13.1318 7.23757 13.3098 6.91149C13.4922 6.58541 13.7369 6.32273 14.0439 6.12798C14.3553 5.92871 14.6935 5.82454 15.0627 5.80643C14.4977 5.77472 14.0216 5.55733 13.6301 5.14067C13.2386 4.72401 13.0428 4.23035 13.0428 3.65517C13.0428 4.23035 12.8471 4.72401 12.4555 5.14067Z" fill="white"/>
    <path d="M24.7208 9.2045C24.4579 9.48431 24.1382 9.63335 23.7617 9.6516C24.1382 9.66984 24.4579 9.81888 24.7208 10.1017C24.9838 10.3816 25.1152 10.7161 25.1152 11.1024C25.1152 10.8469 25.175 10.6127 25.2945 10.3937C25.417 10.1747 25.5814 9.99832 25.7875 9.86754C25.9967 9.73372 26.2237 9.66376 26.4717 9.6516C26.0923 9.63031 25.7726 9.48431 25.5096 9.2045C25.2467 8.92468 25.1152 8.59316 25.1152 8.20689C25.1152 8.59316 24.9838 8.92468 24.7208 9.2045Z" fill="white"/>
    <path d="M18.5835 7.49078C18.5178 7.56073 18.4379 7.59799 18.3438 7.60255C18.4379 7.60712 18.5178 7.64437 18.5835 7.71509C18.6493 7.78504 18.6821 7.86868 18.6821 7.96525C18.6821 7.90138 18.6971 7.84283 18.7269 7.78808C18.7576 7.73334 18.7987 7.68924 18.8502 7.65654C18.9025 7.62308 18.9593 7.6056 19.0213 7.60255C18.9264 7.59723 18.8465 7.56073 18.7807 7.49078C18.715 7.42083 18.6821 7.33795 18.6821 7.24138C18.6821 7.33795 18.6493 7.42083 18.5835 7.49078Z" fill="white"/>
    <path d="M17.5566 13.2075C17.4383 13.3335 17.2944 13.4005 17.125 13.4087C17.2944 13.4169 17.4383 13.484 17.5566 13.6113C17.6749 13.7372 17.7341 13.8878 17.7341 14.0616C17.7341 13.9466 17.761 13.8412 17.8148 13.7427C17.8699 13.6441 17.9438 13.5648 18.0366 13.5059C18.1307 13.4457 18.2329 13.4142 18.3445 13.4087C18.1738 13.3992 18.0299 13.3335 17.9116 13.2075C17.7932 13.0816 17.7341 12.9324 17.7341 12.7586C17.7341 12.9324 17.6749 13.0816 17.5566 13.2075Z" fill="white"/>
    <path d="M26.9043 15.6903C26.7859 15.8162 26.6421 15.8833 26.4727 15.8915C26.6421 15.8997 26.7859 15.9668 26.9043 16.0941C27.0226 16.22 27.0817 16.3705 27.0817 16.5443C27.0817 16.4294 27.1086 16.324 27.1624 16.2254C27.2175 16.1269 27.2915 16.0475 27.3843 15.9887C27.4784 15.9284 27.5806 15.897 27.6922 15.8915C27.5214 15.8819 27.3775 15.8162 27.2592 15.6903C27.1409 15.5644 27.0817 15.4152 27.0817 15.2414C27.0817 15.4152 27.0226 15.5644 26.9043 15.6903Z" fill="white"/>
    <path d="M10.3615 14.8255C10.0985 15.1053 9.77882 15.2543 9.40234 15.2726C9.77882 15.2908 10.0985 15.4398 10.3615 15.7227C10.6244 16.0025 10.7559 16.3371 10.7559 16.7233C10.7559 16.4679 10.8156 16.2337 10.9351 16.0147C11.0576 15.7957 11.222 15.6193 11.4281 15.4885C11.6373 15.3547 11.8644 15.2847 12.1124 15.2726C11.7329 15.2513 11.4132 15.1053 11.1503 14.8255C10.8873 14.5456 10.7559 14.2141 10.7559 13.8279C10.7559 14.2141 10.6244 14.5456 10.3615 14.8255Z" fill="white"/>
    <path d="M21.5485 18.3843C21.3382 18.6081 21.0824 18.7274 20.7812 18.742C21.0824 18.7566 21.3382 18.8758 21.5485 19.1021C21.7589 19.3259 21.8641 19.5936 21.8641 19.9026C21.8641 19.6982 21.9119 19.5109 22.0075 19.3357C22.1055 19.1605 22.237 19.0194 22.4019 18.9147C22.5692 18.8077 22.7509 18.7517 22.9493 18.742C22.6457 18.7249 22.3899 18.6081 22.1796 18.3843C21.9692 18.1604 21.8641 17.8952 21.8641 17.5862C21.8641 17.8952 21.7589 18.1604 21.5485 18.3843Z" fill="white"/>
    <path d="M21.7308 12.4874C21.6932 12.5274 21.6476 12.5487 21.5938 12.5513C21.6476 12.5539 21.6932 12.5752 21.7308 12.6156C21.7684 12.6556 21.7872 12.7034 21.7872 12.7586C21.7872 12.7221 21.7957 12.6886 21.8128 12.6574C21.8303 12.6261 21.8538 12.6008 21.8833 12.5822C21.9131 12.563 21.9456 12.553 21.981 12.5513C21.9268 12.5483 21.8811 12.5274 21.8435 12.4874C21.806 12.4474 21.7872 12.4 21.7872 12.3448C21.7872 12.4 21.7684 12.4474 21.7308 12.4874Z" fill="white"/>
    <g filter="url(#filter1_dd_160_475)">
    <g clipPath="url(#clip1_160_475)">
    <g filter="url(#filter2_ii_160_475)">
    <circle cx="41.2078" cy="12" r="8.75862" fill="#ECCD2D"/>
    </g>
    <g filter="url(#filter3_ii_160_475)">
    <circle cx="41.2078" cy="12" r="8.75862" fill="#C9C9C9"/>
    </g>
    <g filter="url(#filter4_i_160_475)">
    <circle cx="40.7935" cy="7.86202" r="1.17241" fill="#889399"/>
    </g>
    <g filter="url(#filter5_i_160_475)">
    <circle cx="39.0684" cy="13.862" r="2.89655" fill="#889399"/>
    </g>
    <g filter="url(#filter6_i_160_475)">
    <circle cx="45.8283" cy="13.7241" r="1.7931" fill="#889399"/>
    </g>
    </g>
    </g>
    </g>
    </g>
    <defs>
    <filter id="filter0_ddii_160_475" x="0.448276" y="0.896552" width="51.1034" height="22.2069" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="0.551724"/>
    <feGaussianBlur stdDeviation="0.275862"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.94 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_160_475"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="-0.551724"/>
    <feGaussianBlur stdDeviation="0.275862"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="effect1_dropShadow_160_475" result="effect2_dropShadow_160_475"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_160_475" result="shape"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="0.965517"/>
    <feGaussianBlur stdDeviation="0.62069"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_160_475"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="-0.689655"/>
    <feGaussianBlur stdDeviation="0.965517"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="effect3_innerShadow_160_475" result="effect4_innerShadow_160_475"/>
    </filter>
    <filter id="filter1_dd_160_475" x="31.8975" y="3.10345" width="19.7225" height="19.7241" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="0.551724" dy="0.965517"/>
    <feGaussianBlur stdDeviation="0.551724"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_160_475"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="0.551724"/>
    <feGaussianBlur stdDeviation="0.275862"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="effect1_dropShadow_160_475" result="effect2_dropShadow_160_475"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_160_475" result="shape"/>
    </filter>
    <filter id="filter2_ii_160_475" x="32.4492" y="2.68965" width="17.9294" height="18.6207" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="0.413793" dy="0.551724"/>
    <feGaussianBlur stdDeviation="0.275862"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"/>
    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_160_475"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="-0.689655"/>
    <feGaussianBlur stdDeviation="0.275862"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.51172 0 0 0 0 0.520028 0 0 0 0 0.123306 0 0 0 1 0"/>
    <feBlend mode="normal" in2="effect1_innerShadow_160_475" result="effect2_innerShadow_160_475"/>
    </filter>
    <filter id="filter3_ii_160_475" x="32.4492" y="2.68965" width="17.9294" height="18.6207" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="0.413793" dy="0.551724"/>
    <feGaussianBlur stdDeviation="0.275862"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"/>
    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_160_475"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="-0.689655"/>
    <feGaussianBlur stdDeviation="0.275862"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.421667 0 0 0 0 0.421667 0 0 0 0 0.421667 0 0 0 1 0"/>
    <feBlend mode="normal" in2="effect1_innerShadow_160_475" result="effect2_innerShadow_160_475"/>
    </filter>
    <filter id="filter4_i_160_475" x="39.6211" y="6.68961" width="2.34375" height="2.48276" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="0.137931"/>
    <feGaussianBlur stdDeviation="0.275862"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_160_475"/>
    </filter>
    <filter id="filter5_i_160_475" x="36.1719" y="10.9655" width="5.79297" height="5.93104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="0.137931"/>
    <feGaussianBlur stdDeviation="0.275862"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_160_475"/>
    </filter>
    <filter id="filter6_i_160_475" x="44.0352" y="11.931" width="3.58594" height="3.72414" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="0.137931"/>
    <feGaussianBlur stdDeviation="0.275862"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_160_475"/>
    </filter>
    <clipPath id="clip0_160_475">
    <rect x="1" y="2" width="50" height="20" rx="10" fill="white"/>
    </clipPath>
    <clipPath id="clip1_160_475">
    <rect x="32.4492" y="3.24138" width="17.5172" height="17.5172" rx="8.75862" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
    
}

export default DarkToggle