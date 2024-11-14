import { Slider, SliderSingleProps } from 'antd';
import { FunctionComponent, useState } from 'react';


const customScale = [
    '', '1 month', '2 months', '3 months', '4 months', '5 months', '6 months',
    '7 months', '8 months', '9 months', '10 months', '11 months',
    '1 year', '1.2 years', '1.5 years', '1.7 years', '2+ years'
];

const marks: SliderSingleProps['marks'] = {
    6: {
        label: '6 Months',
        style: {
            fontSize: '14px',
            textWrap: 'nowrap',
            backgroundColor:'#F2F2F2',
            color:'black',
            borderRadius:'10%',
            padding:'5px',
            marginTop:'5px',
        },
    },
    12: {
        label: '1 Yr',
        style: {
            fontSize: '14px',
            textWrap: 'nowrap',
            backgroundColor:'#F2F2F2',
            marginTop:'5px',
            borderRadius:'10%',
            color:'black',
            padding:'5px',
        },
    },
    14: {
        label: '1.5 Yr',
        style: {
            fontSize: '14px',
            textWrap: 'nowrap',
            backgroundColor:'#F2F2F2',
            marginTop:'5px',
            borderRadius:'10%',
            padding:'5px',
            color:'black',
        }
    },
};

const DurationSlider:FunctionComponent<{
    onChange:(index:number)=>void
}> = ({
    onChange
}) => {
    const [durationIndex, setDurationIndex] = useState(6);

    return (
        <div className="w-full mx-auto">
            <h2 className="text-lg font-semibold mb-2 dark:text-white">Duration
            <div className="w-20 h-0.5 mt-1 bg-gradient-to-r from-[rgba(238,123,34,1)] to-[rgba(218,218,218,1)] rounded-lg"></div>
            </h2>

            <div className="relative w-full flex justify-between items-center text-gray-600 dark:text-white text-sm mb-4">
                <span>1 Month</span>
                <span>2+ yrs</span>
            </div>    <Slider
                dots
                min={1}
                marks={marks}
                max={customScale.length - 1}
                defaultValue={durationIndex}
                onChangeComplete={w=>{
                    onChange(w)
                    setDurationIndex(w)
                }}
                step={1}
                tooltip={{
                    overlayInnerStyle:{
                        backgroundColor:'#F2F2F2'
                    },
                    formatter:(mark)=>{
                        if (mark && mark==1){
                            return (
                                <span className="text-gray-400">1 Month</span>
                            )
                        }
                        if (mark && mark>1 && mark<12){
                            return (
                                <span className="text-gray-400">{`${mark} Months`}</span>
                            )
                        }
                        if (mark==6){
                            return (
                                <span className="text-gray-400">{`${mark} Months`}</span>
                            )
                        }
                        if (mark==12){
                            return (
                                <span className="text-gray-400">1 Yrs</span>
                            )
                        }
                        if (mark==13){
                            return (
                                <span className="text-gray-400">1.2 Yrs</span>
                            )
                        }
                        if (mark==14){
                            return (
                                <span className="text-gray-400">1.5 Yrs</span>
                            )
                        }
                        if (mark==15){
                            return (
                                <span className="text-gray-400">1.7 Yrs</span>
                            )
                        }
                        if (mark==16){
                            return (
                                <span className="text-gray-400">2+ Yrs</span>
                            )
                        }
                    }
                }}
                onChange={(w) => { console.log("onchage: ", w) }}
                styles={{
                    track: {
                        background: 'transparent',
                    },
                    tracks: {
                        background: 'orange',
                    },
                    handle: {
                        backgroundColor: 'orange'
                    },
                }}
            />
        </div>
    );
};

export default DurationSlider;
