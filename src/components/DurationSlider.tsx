// import 'rsuite/dist/rsuite.min.css';
// import 'rsuite/Slider/styles/index.css';
// import { Slider, Tooltip } from 'rsuite';
// import { useState } from 'react';

const customScale = [
    '', '1 month', '2 months', '3 months', '4 months', '5 months', '6 months',
    '7 months', '8 months', '9 months', '10 months', '11 months',
    '1 year', '1.2 years', '1.5 years', '1.7 years', '2+ years'
];

// function DurationSelector() {
//     const [durationIndex, setDurationIndex] = useState(6);

//     const handleDurationChange = (value: number) => {
//         setDurationIndex(value);
//     };

//     return (
//         <div className="w-full mx-auto">
//             <h2 className="text-lg font-semibold mb-2">Duration</h2>

//             <div className="relative w-full flex justify-between items-center text-gray-600 text-sm mb-4">
//                 <span>1 Month</span>
//                 <span>2+ yrs</span>
//             </div>

//             <Slider
//                 min={1}
//                 max={customScale.length - 1}
//                 step={1}
//                 value={durationIndex}
//                 onChange={handleDurationChange}
//                 progress
//                 graduated
//                 renderMark={(mark) => {
//                     if (mark==6){
//                         return (
//                             <span className="text-gray-400">{`${mark} Months`}</span>
//                         )
//                     }
//                     if (mark==12){
//                         return (
//                             <span className="text-gray-400">1 Yrs</span>
//                         )
//                     }
//                     }}
//                 renderTooltip={(value) => (
//                     <Tooltip >
//                         {customScale[value || 0]}
//                     </Tooltip>
//                 )}
//             />
//         </div>
//     );
// }

// export default DurationSelector



// function getGradientColor(percentage: number) {
//     const startColor = [135, 208, 104];
//     const endColor = [255, 204, 199];

//     const midColor = startColor.map((start, i) => {
//       const end = endColor[i];
//       const delta = end - start;
//       return (start + delta * percentage).toFixed(0);
//     });

//     return `rgb(${midColor.join(',')})`;
//   }


import React, { useState } from 'react';
import { Slider, SliderSingleProps } from 'antd';

const marks: SliderSingleProps['marks'] = {
    6: {
        label: '6 Months',
        style: {
            fontSize: '14px',
            textWrap: 'nowrap',
            backgroundColor:'#F2F2F2',
            marginTop:'5px'
        },
    },
    12: {
        label: '1 Yr',
        style: {
            fontSize: '14px',
            textWrap: 'nowrap',
            backgroundColor:'#F2F2F2',
            marginTop:'5px'
        },
    },
    14: {
        label: '1.5 Yr',
        style: {
            fontSize: '14px',
            textWrap: 'nowrap',
            backgroundColor:'#F2F2F2',
            marginTop:'5px'
        }
    },
};

const MySlider = () => {
    const [durationIndex, setDurationIndex] = useState(6);

    const handleDurationChange = (value: number) => {
        setDurationIndex(value);
    };

    return (
        <div className="w-full mx-auto">
            <h2 className="text-lg font-semibold mb-2">Duration</h2>

            <div className="relative w-full flex justify-between items-center text-gray-600 text-sm mb-4">
                <span>1 Month</span>
                <span>2+ yrs</span>
            </div>    <Slider
                dots
                min={1}
                marks={marks}
                max={customScale.length - 1}
                defaultValue={durationIndex}
                onChangeComplete={w=>setDurationIndex(w)}
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

export default MySlider;
