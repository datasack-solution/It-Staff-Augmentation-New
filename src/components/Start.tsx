import { FunctionComponent } from "react"

const Star:FunctionComponent<{className:string}> = ({
    className
}) => {
    return <svg className={className} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 21.3745V16.3745M4 6.37451V1.37451M1.5 3.87451H6.5M1.5 18.8745H6.5M12.5 2.37451L10.7658 6.88337C10.4838 7.6166 10.3428 7.98322 10.1235 8.2916C9.92919 8.56491 9.6904 8.8037 9.41709 8.99804C9.10871 9.21732 8.74209 9.35832 8.00886 9.64033L3.5 11.3745L8.00886 13.1087C8.74209 13.3907 9.10871 13.5317 9.41709 13.751C9.6904 13.9453 9.92919 14.1841 10.1235 14.4574C10.3428 14.7658 10.4838 15.1324 10.7658 15.8657L12.5 20.3745L14.2342 15.8656C14.5162 15.1324 14.6572 14.7658 14.8765 14.4574C15.0708 14.1841 15.3096 13.9453 15.5829 13.751C15.8913 13.5317 16.2579 13.3907 16.9911 13.1087L21.5 11.3745L16.9911 9.64033C16.2579 9.35832 15.8913 9.21732 15.5829 8.99804C15.3096 8.8037 15.0708 8.56491 14.8765 8.2916C14.6572 7.98322 14.5162 7.6166 14.2342 6.88337L12.5 2.37451Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
}

export default Star