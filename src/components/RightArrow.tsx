import { FunctionComponent } from "react"

const RightArrow:FunctionComponent<{className:string}> = ({className}) => {
    return <svg aria-label="Check Out" className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path aria-label="Check Out" d="M1.33398 6.00004H10.6673M10.6673 6.00004L6.00065 1.33337M10.6673 6.00004L6.00065 10.6667" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
}

export default RightArrow