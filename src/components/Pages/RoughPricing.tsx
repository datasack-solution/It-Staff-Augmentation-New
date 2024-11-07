// // components/Pricing.tsx
// import { useState } from 'react';
// import Image from 'next/image';

// const PricingPage = () => {
//   const categories = [
//     "Core Banking", "Integration", "Architecture", "Project Management",
//     "Data Governance", "Payment System", "Database", "Software Development",
//     "Testing", "Specialized Tools", "SAP"
//   ];

//   const technologies = [
//     "Senior Java Developer", "Kony Developer", "Senior IVR Developer", "SAP ABAP Developer"
//   ];

//   const [selectedTechnologies, setSelectedTechnologies] = useState(
//     technologies.map(() => 0)
//   );

//   const handleIncrease = (index: number) => {
//     const updated = [...selectedTechnologies];
//     updated[index] += 1;
//     setSelectedTechnologies(updated);
//   };

//   const handleDecrease = (index: number) => {
//     const updated = [...selectedTechnologies];
//     if (updated[index] > 0) updated[index] -= 1;
//     setSelectedTechnologies(updated);
//   };

//   return (
//     <div className="container mx-auto p-5 lg:p-10">
//       {/* Header */}
//       <h2 className="text-3xl font-bold text-center">
//         Craft your own <span className="text-orange-500">pricing</span>
//       </h2>
//       <p className="text-center mt-2 text-gray-600">
//         Customize your plan with chosen technologies, with pricing calculated monthly to fit your needs.
//       </p>

//       {/* Categories */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
//         {categories.map((category, index) => (
//           <button
//             key={index}
//             className="border border-orange-500 rounded-full py-2 px-4 text-center
//                        hover:bg-orange-500 hover:text-white transition-colors"
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Technologies */}
//       <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
//         <h3 className="text-xl font-semibold">Technologies</h3>
//         <hr className="my-3 border-orange-500" />

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {technologies.map((tech, index) => (
//             <div key={index} className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
//               <span>{tech}</span>
//               <div className="flex items-center space-x-2">
//                 <button
//                   onClick={() => handleDecrease(index)}
//                   className="border border-orange-500 rounded-full w-8 h-8 text-center"
//                 >
//                   -
//                 </button>
//                 <span className="text-lg">{selectedTechnologies[index]}</span>
//                 <button
//                   onClick={() => handleIncrease(index)}
//                   className="border border-orange-500 rounded-full w-8 h-8 text-center"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Duration Slider */}
//       <div className="mt-10">
//         <h3 className="text-xl font-semibold">Duration</h3>
//         {/* Replace this div with an actual slider component */}
//         <div className="mt-4 h-2 bg-orange-500 rounded-full w-full relative">
//           <div className="absolute left-1/3 w-6 h-6 bg-orange-600 rounded-full top-1/2 -translate-y-1/2"></div>
//         </div>
//         <div className="flex justify-between text-sm mt-2">
//           <span>1 Month</span>
//           <span>1.5 years</span>
//           <span>2+ yrs</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingPage;





import { useState } from 'react';
type Technologies = {
    "Core Banking": string[];
    SAP: string[];
    "Integration/Middleware": string[];
    // Add other categories here
  };



  
  


const Pricing = () => {
  const categories = [
    "Core Banking", "Integration", "Architecture", "Project Management",
    "Data Governance", "Payment System", "Database", "Software Development",
    "Testing", "Specialized Tools", "SAP"
  ];

  const technologies = [
    "Senior Java Developer", "Kony Developer", "Senior IVR Developer", "SAP ABAP Developer"
  ];

// const technologies: Technologies = {
//     "Core Banking": [
//       "T24 Temenos Consultant",
//       "T24 Techno Functional",
//       "T24 Testing Consultant",
//       "Finstra Techno Functional",
//       "Portfolio Murex Consultant",
//       "Murex Techno Functional Specialist",
//       "Oracle Financial Services Analytical Applications",
//     ],
//     SAP: [
//       "SAP Consultant (if applicable, specify module like SAP FI, SAP MM, etc.)",
//       "SAP ABAP Developer",
//       "SAP Basis Administrator",
//       "SAP Solution Architect",
//       "SAP HANA Consultant",
//     ],
//     "Integration/Middleware": [
//       "Middleware Administrator",
//       "ETL Consultant",
//       "DevOps Engineer",
//       "Exchange Admin",
//       "Active Directory Admin",
//       "Network Engineer",
//       "Unified Communication Consultant",
//     ],
//     // Add other categories here
//   };

  const [selectedCategory, setSelectedCategory] = useState<keyof typeof technologies | null>(null);

  const handleCategoryClick = (category: keyof typeof technologies) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const [selectedTechnologies, setSelectedTechnologies] = useState(
    technologies.map(() => 0)
  );

  const handleIncrease = (index: number) => {
    const updated = [...selectedTechnologies];
    updated[index] += 1;
    setSelectedTechnologies(updated);
  };

  const handleDecrease = (index: number) => {
    const updated = [...selectedTechnologies];
    if (updated[index] > 0) updated[index] -= 1;
    setSelectedTechnologies(updated);
  };

  const categoriesupdated = {
    "Core Banking": [
      "T24 Temenos Consultant",
      "T24 Techno Functional",
      "T24 Testing Consultant",
      "Finstra Techno Functional",
      "Portfolio Murex Consultant",
      "Murex Techno Functional Specialist",
      "Oracle Financial Services Analytical Applications",
    ],
    "SAP": [
      "SAP Consultant (Specify module like SAP FI, SAP MM, etc.)",
      "SAP ABAP Developer",
      "SAP Basis Administrator",
      "SAP Solution Architect",
      "SAP HANA Consultant",
    ],
    "Integration/Middleware": [
      "Middleware Administrator",
      "ETL Consultant",
      "DevOps Engineer",
      "Exchange Admin",
      "Active Directory Admin",
      "Network Engineer",
      "Unified Communication Consultant",
    ],
  };


//   const selectedTechnologies = technologies[selectedCategory as keyof Technologies];



  return (
    <div className="container mx-auto p-5 lg:p-10 -mt-20">
      <h2 className="text-2xl sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl  font-bold text-center">
        Craft your own <span className="text-orange-500">pricing</span>
      </h2>
      <p className="text-center mt-10 text-gray-600">
        Customize your plan with chosen technologies, with pricing calculated monthly to fit your needs.
      </p>

      {/* Main Section */}

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="border border-orange-500 rounded-full py-2 px-4 text-center
                         hover:bg-orange-500 hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Technologies</h3>
          <hr className="my-3 border-orange-500" />

          <div className="grid grid-cols-1 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
                <span>{tech}</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrease(index)}
                    className="border border-orange-500 rounded-full w-8 h-8 text-center"
                  >
                    -
                  </button>
                  <span className="text-lg">{selectedTechnologies[index]}</span>
                  <button
                    onClick={() => handleIncrease(index)}
                    className="border border-orange-500 rounded-full w-8 h-8 text-center"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

{/* <div className="flex flex-col lg:flex-row p-6 gap-8">
      <div className="flex flex-wrap lg:flex-col lg:w-1/3 gap-4">
        {Object.keys(categoriesupdated).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category as keyof typeof technologies )}
            className={`py-2 px-4 border-2 rounded-lg transition-colors ${
              selectedCategory === category ? "bg-orange-500 text-white" : "bg-white text-orange-500"
            } hover:bg-orange-200`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="lg:w-2/3 p-4 bg-gray-50 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">
          {selectedCategory ? `${selectedCategory} Technologies` : "Select a Category"}
        </h3>

        {selectedCategory ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {categoriesupdated[selectedCategory].map((tech, index) => (
              <li
                key={index}
                className="p-2 border rounded-md shadow-sm bg-white hover:bg-gray-100"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Please select a category to view its technologies.</p>
        )}
      </div>
    </div> */}




      {/* Duration Slider */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold">Duration</h3>
        {/* Replace this div with an actual slider component */}
        <div className="mt-4 h-2 bg-orange-500 rounded-full w-full relative">
          <div className="absolute left-1/3 w-6 h-6 bg-orange-600 rounded-full top-1/2 -translate-y-1/2"></div>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span>1 Month</span>
          <span>1.5 years</span>
          <span>2+ yrs</span>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
