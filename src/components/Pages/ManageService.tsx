import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';


const manageServices = [
  {
    title: "Talent Sourcing",
    description: "Our IT recruitment agency in Saudi specializes in recruiting skilled individuals, conducting interviews, and assessing qualifications."
  },
  {
    title: "Onboarding & Integration",
    description: "Ensuring contracted resources understand your culture, goals, and expectations."
  },
  {
    title: "Performance Monitoring",
    description: "Tracking resource performance throughout the contract to meet your expectations."
  },
  {
    title: "Administrative Support",
    description: "Managing payroll, benefits, work permits, logistics, and other HR-related tasks is part of our comprehensive IT Outsourcing Company Riyadh."
  },
  {
    title: "Problem Resolution",
    description: "Addressing issues and resolving conflicts through IT staff augmentation services Riyadh to ensure smooth communication."
  },
  {
    title: "Continuous Communication",
    description: "Our IT recruitment agency in Saudi maintains open communication with clients and contracted resources to promptly address issues and keep everyone aligned."
  }
]


const ManageServicePage = () => {
  const settings: Settings = {
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 1,
    infinite: true,
    arrows:true,
    nextArrow: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F37318" className="size-6">
    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
  </svg>
  ,
  prevArrow:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F37318" className="size-6">
  <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
</svg>,
    speed: 150,
    beforeChange: (_, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '150px',

        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '50px',
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '30px',
        }
      },
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '1px',
        }
      }
    ],
  };


  const [activeIndex, setActiveIndex] = React.useState(0);

  return <div className="bg-[#F2F2F2] w-screen text-black">
    <div className="container p-7 pb-10 2xl:pb-40 xl:pb-40 lg:pb-35 md:pd-10 sm:pd-10 m-auto text-black bg-[#F2F2F2]">
      <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-black font-bold text-center">
        Managed <span className="text-orange-500">Service</span>
      </h2>
      <p className="text-center mt-10 px-3 mb-10 text-gray-600">
        DataSack assembles your dream team on demand, providing expertise without the hassle of full-time hiring. Whether you&apos;re looking for an IT Recruitment Agency in Riyadh or need to contract resources for specific projects or skills, we ensure you get the right talent exactly when you need it.
      </p>

      <div className="relative hidden lg:flex flex-col mt-16 lg:flex-row items-center lg:items-start px-4 py-8 bg-gray-100">
        <div className="w-full p-6 md:mr-24 bg-white border-2 border-orange-300 rounded-3xl shadow-md mb-12 lg:mb-0 relative z-10">
          <div className="w-1/3 pl-16 py-16  text-justify">
            <h2 className="text-lg font-semibold mb-4 md:text-sm lg:text-lg xl:text-xl 2xl:text-xl">1. Talent Sourcing</h2>
            <p className="text-gray-600 leading-relaxed text-justify md:text-sm lg:text-base xl:text-base 2xl:text-base">
              Our IT recruitment agency in Saudi specializes in recruiting skilled individuals, conducting interviews, and assessing qualifications.
            </p>
            <h2 className="text-lg font-semibold mt-6 mb-4 md:text-sm lg:text-lg xl:text-xl 2xl:text-xl">2. Onboarding & Integration</h2>
            <p className="text-gray-600 leading-relaxed text-justify md:text-sm lg:text-base xl:text-base 2xl:text-base">
              Ensuring contracted resources understand your culture, goals, and expectations.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex  xl:flex lg:w-full xl:w-1/2 2xl:w-1/2 absolute z-[10] right-0 top-0 lg:-ml-20">
          <div className="flex lg:absolute lg:right-0 xl:right-1/4 2xl:right-1/3 gap-5">
            <div className="flex flex-col gap-5 -mt-10">
              <div className="relative  p-6 py-16 h-72  bg-white border-2 border-orange-300 rounded-3xl shadow-md lg:w-80">
                <h2 className="text-lg font-semibold mb-2 text-center md:text-sm lg:text-lg xl:text-xl 2xl:text-xl">3. Performance Monitoring</h2>
                <p className="text-gray-600 leading-relaxed text-justify md:text-sm lg:text-base xl:text-base 2xl:text-base">
                  Tracking resource performance throughout the contract to meet your expectations.
                </p>
              </div>

              <div className="relative p-6 py-20 h-72 bg-white border-2 border-orange-300 rounded-3xl shadow-md lg:w-80">
                <h2 className="text-lg font-semibold mb-2 text-center md:text-sm lg:text-lg xl:text-xl 2xl:text-xl">4. Administrative Support</h2>
                <p className="text-gray-600 leading-relaxed text-justify md:text-sm lg:text-base xl:text-base 2xl:text-base">
                  Managing payroll, benefits, work permits, logistics, and other HR-related tasks.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="relative p-6 py-16 h-72 bg-white border-2 border-orange-300 rounded-3xl shadow-md lg:w-80">
                <h2 className="text-lg font-semibold mb-2 text-center md:text-sm lg:text-lg xl:text-xl 2xl:text-xl">5. Problem Resolution</h2>
                <p className="text-gray-600 text-justify leading-relaxed md:text-sm lg:text-base xl:text-base 2xl:text-base">
                  Addressing issues and resolving conflicts through IT staff augmentation services Riyadh to ensure smooth communication.
                </p>
              </div>

              <div className="relative p-6 py-10 h-72 bg-white border-2 border-orange-300 rounded-3xl shadow-md lg:w-80">
                <h2 className="text-lg font-semibold mb-2 text-center md:text-sm lg:text-lg xl:text-xl 2xl:text-xl">6. Continuous Communication</h2>
                <p className="text-gray-600 text-justify leading-relaxed md:text-sm lg:text-base xl:text-base 2xl:text-base">
                  Our IT recruitment agency in Saudi maintains open communication with clients and contracted resources to promptly address issues and keep everyone aligned.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className="bg-[#F2F2F2] w-full py-10 relative lg:hidden xl:hidden 2xl:hidden ">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="#F87315">
            <circle cx="10" cy="10" r="10" />
            <circle cx="30" cy="30" r="10" />
            <circle cx="50" cy="50" r="10" />
            <circle cx="70" cy="70" r="10" />
            <circle cx="90" cy="90" r="10" />
          </svg>
        </div>
        <Slider {...settings} className="manage-service-slider relative z-10">
          {manageServices.map((service, index) => (
            <div
              key={index}
              className={`rounded-3xl  transition-transform duration-500 ${activeIndex === index
                  ? 'scale-100 rotate-0 shadow-lg'
                  : 'scale-90 opacity-80 rotate-3 backdrop-blur-sm blur-[1px]'
                }`}
              style={{
                width: '70%',
                margin: '0 auto',
                perspective: '1000px',
              }}
            >
              <div
                className="bg-orange-500 border-2 border-orange-300 rounded-3xl p-4 shadow-md h-64 flex flex-col justify-center text-center transform transition-transform duration-500 hover:rotate-2 hover:scale-105"
                style={{
                  backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500' opacity='0.5'><rect fill='#ee5522'  width='2000' height='1500'/><defs><radialGradient id='a' gradientUnits='objectBoundingBox'><stop  offset='0' stop-color='#FB3'/><stop  offset='1' stop-color='#ee5522'/></radialGradient><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'><stop  offset='0' stop-color='#f7882b'/><stop  offset='1' stop-color='#ee5522'/></linearGradient><path id='s' fill='url(#b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/><g id='g'><use href='#s' transform='scale(0.12) rotate(60)'/><use href='#s' transform='scale(0.2) rotate(10)'/><use href='#s' transform='scale(0.25) rotate(40)'/><use href='#s' transform='scale(0.3) rotate(-20)'/><use href='#s' transform='scale(0.4) rotate(-30)'/><use href='#s' transform='scale(0.5) rotate(20)'/><use href='#s' transform='scale(0.6) rotate(60)'/><use href='#s' transform='scale(0.7) rotate(10)'/><use href='#s' transform='scale(0.835) rotate(-40)'/><use href='#s' transform='scale(0.9) rotate(40)'/><use href='#s' transform='scale(1.05) rotate(25)'/><use href='#s' transform='scale(1.2) rotate(8)'/><use href='#s' transform='scale(1.333) rotate(-60)'/><use href='#s' transform='scale(1.45) rotate(-30)'/><use href='#s' transform='scale(1.6) rotate(10)'/></g></defs><g  transform='rotate(0 0 0)'><g  transform='rotate(0 0 0)'><circle fill='url(#a)' r='3000'/><g opacity='0.5'><circle fill='url(#a)' r='2000'/><circle fill='url(#a)' r='1800'/><circle fill='url(#a)' r='1700'/><circle fill='url(#a)' r='1651'/><circle fill='url(#a)' r='1450'/><circle fill='url(#a)' r='1250'/><circle fill='url(#a)' r='1175'/><circle fill='url(#a)' r='900'/><circle fill='url(#a)' r='750'/><circle fill='url(#a)' r='500'/><circle fill='url(#a)' r='380'/><circle fill='url(#a)' r='250'/></g><g  transform='rotate(0 0 0)'><use href='#g' transform='rotate(10)'/><use href='#g' transform='rotate(120)'/><use href='#g' transform='rotate(240)'/></g><circle fill-opacity='0.1' fill='url(#a)' r='3000'/></g></g></svg>`
                  )}")`,

                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: '0.8',
                  boxShadow: activeIndex === index
                    ? '10px 10px 30px rgba(255, 165, 0, 0.5)'
                    : '5px 5px 15px rgba(0, 0, 0, 0.2)',
                  transform: activeIndex === index
                    ? 'rotateY(0deg)'
                    : 'rotateY(-5deg)',
                }}
              >
                <h3 className="text-xl font-bold mb-2 text-white">
                    {index+1}. {service.title}
                </h3>
                <p className="text-base text-white">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>


    </div>
  </div>



}


export default ManageServicePage