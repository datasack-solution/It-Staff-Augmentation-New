import { FunctionComponent } from "react"

const LightToggle:FunctionComponent<{className:string, onClick:()=>void}> = ({className,onClick
}) => {
    return <svg onClick={onClick} className={className} width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_ddii_160_331)">
    <g clip-path="url(#clip0_160_331)">
    <rect x="1" y="2" width="50" height="20" rx="10" fill="#117AF5"/>
    <circle cx="11.069" cy="11.931" r="14.069" fill="white" fill-opacity="0.1"/>
    <circle cx="11.0691" cy="11.931" r="19.8621" fill="white" fill-opacity="0.1"/>
    <circle cx="11.0682" cy="11.931" r="26.2069" fill="white" fill-opacity="0.1"/>
    <path fillRule="evenodd" clip-rule="evenodd" d="M55.0659 6.27954C55.2179 9.61226 53.1137 12.5254 50.1026 13.5407C50.5285 14.4122 50.7868 15.3833 50.8338 16.414C51.0178 20.4472 47.8975 23.866 43.8643 24.05C42.0402 24.1333 40.3417 23.5406 39.0114 22.4932C38.6661 25.0901 36.5028 27.1475 33.7937 27.2711C31.9785 27.3539 30.3283 26.5499 29.2622 25.2418C28.5387 25.6455 27.7128 25.8917 26.8289 25.932C26.144 25.9633 25.4827 25.8683 24.8673 25.6676C24.3931 28.1107 22.2982 30.0048 19.7022 30.1233C17.8406 30.2083 16.1524 29.3604 15.0901 27.9926C14.3214 28.4638 13.4262 28.7528 12.4618 28.7968C10.1684 28.9015 8.13827 27.5904 7.21716 25.6357C6.37218 26.2526 5.34262 26.6363 4.21922 26.6876C1.1753 26.8265 -1.40489 24.4715 -1.54379 21.4276C-1.68269 18.3837 0.672286 15.8035 3.71621 15.6646C6.00961 15.5599 8.03977 16.871 8.96088 18.8257C9.80587 18.2088 10.8354 17.8251 11.9588 17.7738C13.8205 17.6888 15.5087 18.5367 16.571 19.9045C17.3397 19.4333 18.2349 19.1443 19.1992 19.1003C19.8841 19.069 20.5454 19.164 21.1608 19.3647C21.6349 16.9216 23.7298 15.0275 26.3259 14.909C28.141 14.8262 29.7913 15.6302 30.8573 16.9383C31.5809 16.5346 32.4067 16.2884 33.2907 16.2481C34.3526 16.1996 35.3581 16.4547 36.2231 16.9366C36.1371 13.6642 38.2238 10.82 41.1915 9.81941C40.7657 8.94785 40.5074 7.97675 40.4604 6.94603C40.2763 2.91284 43.3967 -0.505914 47.4299 -0.689962C51.4631 -0.87401 54.8818 2.24634 55.0659 6.27954Z" fill="#F3FDFF" fill-opacity="0.6"/>
    <path fillRule="evenodd" clip-rule="evenodd" d="M59.2062 10.4137C59.2062 13.7499 56.9714 16.5642 53.9172 17.4411C54.3028 18.3311 54.5166 19.313 54.5166 20.3448C54.5166 24.3822 51.2436 27.6551 47.2062 27.6551C45.3802 27.6551 43.7106 26.9856 42.4294 25.8787C41.9661 28.4572 39.7112 30.4137 36.9993 30.4137C35.1823 30.4137 33.5703 29.5353 32.5651 28.18C31.8239 28.5503 30.9877 28.7586 30.1028 28.7586C29.4172 28.7586 28.7608 28.6335 28.1552 28.405C27.5702 30.824 25.3911 32.6206 22.7924 32.6206C20.9288 32.6206 19.2811 31.6967 18.2822 30.2819C17.4928 30.7175 16.5854 30.9655 15.62 30.9655C13.3242 30.9655 11.3559 29.5632 10.5249 27.5685C9.65266 28.1462 8.60666 28.4827 7.48209 28.4827C4.435 28.4827 1.96484 26.0126 1.96484 22.9655C1.96484 19.9184 4.435 17.4482 7.48209 17.4482C9.77788 17.4482 11.7462 18.8505 12.5772 20.8452C13.4494 20.2674 14.4954 19.931 15.62 19.931C17.4836 19.931 19.1314 20.8549 20.1303 22.2698C20.9196 21.8341 21.8271 21.5862 22.7924 21.5862C23.478 21.5862 24.1344 21.7112 24.74 21.9397C25.325 19.5208 27.5041 17.7241 30.1028 17.7241C31.9198 17.7241 33.5318 18.6025 34.537 19.9578C35.2782 19.5876 36.1144 19.3793 36.9993 19.3793C38.0623 19.3793 39.0551 19.6799 39.8973 20.2007C39.9605 16.9278 42.1747 14.1817 45.1849 13.3175C44.7993 12.4274 44.5855 11.4455 44.5855 10.4137C44.5855 6.37635 47.8585 3.10339 51.8959 3.10339C55.9333 3.10339 59.2062 6.37635 59.2062 10.4137Z" fill="#F3FDFF"/>
    <g filter="url(#filter1_dd_160_331)">
    <g clip-path="url(#clip1_160_331)">
    <g filter="url(#filter2_ii_160_331)">
    <circle cx="11.1375" cy="11.9998" r="8.75862" fill="#ECCD2D"/>
    </g>
    </g>
    </g>
    </g>
    </g>
    <defs>
    <filter id="filter0_ddii_160_331" x="0.448276" y="0.896552" width="51.1034" height="22.2069" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="0.551724"/>
    <feGaussianBlur stdDeviation="0.275862"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.94 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_160_331"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="-0.551724"/>
    <feGaussianBlur stdDeviation="0.275862"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="effect1_dropShadow_160_331" result="effect2_dropShadow_160_331"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_160_331" result="shape"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="0.965517"/>
    <feGaussianBlur stdDeviation="0.62069"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_160_331"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="-0.689655"/>
    <feGaussianBlur stdDeviation="0.965517"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="effect3_innerShadow_160_331" result="effect4_innerShadow_160_331"/>
    </filter>
    <filter id="filter1_dd_160_331" x="1.82718" y="3.1034" width="19.7245" height="19.7241" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="0.551724" dy="0.965517"/>
    <feGaussianBlur stdDeviation="0.551724"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_160_331"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="0.551724"/>
    <feGaussianBlur stdDeviation="0.275862"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="effect1_dropShadow_160_331" result="effect2_dropShadow_160_331"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_160_331" result="shape"/>
    </filter>
    <filter id="filter2_ii_160_331" x="2.37891" y="2.68949" width="17.9314" height="18.6207" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="0.413793" dy="0.551724"/>
    <feGaussianBlur stdDeviation="0.275862"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"/>
    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_160_331"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="-0.689655"/>
    <feGaussianBlur stdDeviation="0.275862"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.51172 0 0 0 0 0.520028 0 0 0 0 0.123306 0 0 0 1 0"/>
    <feBlend mode="normal" in2="effect1_innerShadow_160_331" result="effect2_innerShadow_160_331"/>
    </filter>
    <clipPath id="clip0_160_331">
    <rect x="1" y="2" width="50" height="20" rx="10" fill="white"/>
    </clipPath>
    <clipPath id="clip1_160_331">
    <rect x="2.37891" y="3.24133" width="17.5172" height="17.5172" rx="8.75862" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
}

export default LightToggle