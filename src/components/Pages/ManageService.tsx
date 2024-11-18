import Image from 'next/image';
import React from 'react';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const manageServices = [
  {
    title: "Talent Sourcing",
    description: "Our IT recruitment agency in Saudi specializes in recruiting skilled individuals, conducting interviews, and assessing qualifications.",
    imageUrl: '/managed_services/Talent Sourcing.webp'
  },
  {
    title: "Onboarding & Integration",
    description: "Ensuring contracted resources understand your culture, goals, and expectations.",
    imageUrl: '/managed_services/Onboarding & Integration.webp'
  },
  {
    title: "Performance Monitoring",
    description: "Tracking resource performance throughout the contract to meet your expectations.",
    imageUrl: '/managed_services/Performance Monitoring.webp'
  },
  {
    title: "Administrative Support",
    description: "Managing payroll, benefits, work permits, logistics, and other HR-related tasks is part of our comprehensive IT Outsourcing Company Riyadh.",
    imageUrl: '/managed_services/Administrative Support.webp'
  },
  {
    title: "Problem Resolution",
    description: "Addressing issues and resolving conflicts through IT staff augmentation services Riyadh to ensure smooth communication.",
    imageUrl: '/managed_services/Problem Resolution.webp'
  },
  {
    title: "Continuous Communication",
    description: "Our IT recruitment agency in Saudi maintains open communication with clients and contracted resources to promptly address issues and keep everyone aligned.",
    imageUrl: '/managed_services/Continuous Communication.webp'
  }
]


const ManageServicePage = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const settings: Settings = {
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 1,
    swipe: true,
    infinite: true,
    arrows: true,
    nextArrow: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F37318" className="size-6">
      <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
    </svg>
    ,
    prevArrow: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F37318" className="size-6">
      <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
    </svg>,
    speed: 450,
    beforeChange: (currentSlide, next) => setActiveIndex(next),
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
    className: 'curvy',
  };



  return <div id='managed-services-section' className="bg-[#F2F2F2] dark:bg-[#252525]  text-black dark:text-white">
    <div className="container p-7  pb-10 2xl:pb-40 xl:pb-40 lg:pb-35 md:pd-10 sm:pd-10 m-auto text-black dark:text-white bg-[#F2F2F2] dark:bg-[#252525]">
      <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-black dark:text-white font-bold text-center">
        Managed <span className="text-orange-500">Services</span>
      </h2>
      <p className="text-center mt-10 px-3 mb-10 text-gray-600 dark:text-white">
        DataSack assembles your dream team on demand, providing expertise without the hassle of full-time hiring. Whether you&apos;re looking for an IT Recruitment Agency in Riyadh or need to contract resources for specific projects or skills, we ensure you get the right talent exactly when you need it.
      </p>

      <div className="relative hidden lg:flex flex-col mt-16 p-[2px] bg-gray-100 dark:bg-[#252525]">
        <div className="absolute top-10 inset-0 bg-gradient-to-r from-orange-400 via-transparent to-orange-400 rounded-3xl min-w-full"></div>
        <div className="w-full mt-10 p-6 md:mr-24 bg-white  dark:bg-[#252525] rounded-3xl shadow-md mb-12 lg:mb-0 relative z-10">
          <div className="w-[30%] pl-16   text-justify">
            <Image alt={manageServices[0].title} src={manageServices[0].imageUrl} width={100} height={100} />
            <h2 className="text-lg font-semibold mb-4 md:text-sm lg:text-lg xl:text-xl 2xl:text-xl">1. Talent Sourcing</h2>
            <p className="text-gray-600 dark:text-gray-200 leading-relaxed text-justify md:text-sm lg:text-base xl:text-base 2xl:text-base">
              Our IT recruitment agency in Saudi specializes in recruiting skilled individuals, conducting interviews, and assessing qualifications.
            </p>
            <Image alt={manageServices[1].title} src={manageServices[1].imageUrl} width={100} height={100} />
            <h2 className="text-lg font-semibold  mb-4 md:text-sm lg:text-lg xl:text-xl 2xl:text-xl">2. Onboarding & Integration</h2>
            <p className="text-gray-600 dark:text-gray-200 leading-relaxed text-justify md:text-sm lg:text-base xl:text-base 2xl:text-base">
              Ensuring contracted resources understand your culture, goals, and expectations.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex  xl:flex lg:w-full xl:w-1/2 2xl:w-1/2 absolute z-[10] -right-5 top-0 lg:-ml-20">
          <div className="flex lg:absolute lg:right-0 xl:right-1/4 2xl:right-1/3 gap-5">

            <div className="flex flex-col gap-5 -mt-10">

              <div className='relative p-[2px]'>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-transparent to-orange-400 rounded-3xl min-w-full"></div>
                <div className="relative p-6 h-72  bg-white dark:bg-[#252525] dark:bg-opa  rounded-3xl shadow-md lg:w-80">
                  <Image alt={manageServices[2].title} src={manageServices[2].imageUrl} width={100} height={100} className='m-auto' />
                  <h2 className="text-lg font-semibold mb-2 text-center md:text-sm lg:text-lg xl:text-xl 2xl:text-xl">3. Performance Monitoring</h2>
                  <p className="text-gray-600 dark:text-gray-200 leading-relaxed text-justify md:text-sm lg:text-base xl:text-base 2xl:text-base">
                    Tracking resource performance throughout the contract to meet your expectations.
                  </p>
                </div>
              </div>


              <div className='relative p-[2px]'>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-transparent to-orange-400 rounded-3xl min-w-full"></div>
                <div className="relative p-6 h-72 bg-white dark:bg-[#252525] dark:bg-opa  rounded-3xl shadow-md lg:w-80">
                  <Image alt={manageServices[3].title} src={manageServices[3].imageUrl} width={100} height={100} className='m-auto' />
                  <h2 className="text-lg font-semibold mb-2 text-center md:text-sm lg:text-lg xl:text-xl 2xl:text-xl">4. Administrative Support</h2>
                  <p className="text-gray-600 dark:text-gray-200 leading-relaxed text-justify md:text-sm lg:text-base xl:text-base 2xl:text-base">
                    Managing payroll, benefits, work permits, logistics, and other HR-related tasks.
                  </p>
                </div>
              </div>
            </div>


            <div className="flex flex-col gap-5 ">
              <div className='relative p-[2px]'>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-transparent to-orange-400 rounded-3xl min-w-full"></div>
                <div className="relative p-6  h-72 bg-white dark:bg-[#252525] dark:bg-opa  rounded-3xl shadow-md lg:w-80">
                  <Image alt={manageServices[4].title} src={manageServices[4].imageUrl} width={100} height={100} className='m-auto' />
                  <h2 className="text-lg font-semibold mb-2 text-center md:text-sm lg:text-lg xl:text-xl 2xl:text-xl">5. Problem Resolution</h2>
                  <p className="text-gray-600 dark:text-gray-200 text-justify leading-relaxed md:text-sm lg:text-base xl:text-base 2xl:text-base">
                    Addressing issues and resolving conflicts through IT staff augmentation services Riyadh to ensure smooth communication.
                  </p>
                </div>
              </div>

              <div className='relative p-[2px]'>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-transparent to-orange-400 rounded-3xl min-w-full"></div>
                <div className="relative py-2 px-5  h-80 bg-white dark:bg-[#252525] dark:bg-opa  rounded-3xl shadow-md lg:w-80">
                  <Image alt={manageServices[5].title} src={manageServices[5].imageUrl} width={100} height={100} className='m-auto' />
                  <h2 className="text-lg font-semibold mb-2 text-center md:text-sm lg:text-lg xl:text-xl 2xl:text-xl">6. Continuous Communication</h2>
                  <p className="text-gray-600 dark:text-gray-200 text-justify leading-relaxed md:text-sm lg:text-base xl:text-base 2xl:text-base">
                    Our IT recruitment agency in Saudi maintains open communication with clients and contracted resources to promptly address issues and keep everyone aligned.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className="bg-[#F2F2F2]  dark:bg-[#252525]  w-full py-10 relative lg:hidden xl:hidden 2xl:hidden ">
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
                : 'scale-50 opacity-80  backdrop-blur-sm blur-[3px]'
                }`}
              style={{
                width: '70%',
                margin: '0 auto',
                perspective: '1500px',
              }}
            >
              <div
                className=" border-2 backdrop-blur-xl dark:bg-black bg-white bg-opacity-30 dark:bg-opacity-10 border-orange-300 rounded-3xl px-4 shadow-md h-72  justify-center text-center transform transition-transform duration-500 "
                style={{
                  boxShadow: activeIndex === index
                    ? '10px 10px 30px rgba(255, 165, 0, 0.5)'
                    : '5px 5px 15px rgba(0, 0, 0, 0.2)',
                  transform: activeIndex === index
                    ? 'rotateY(0deg)'
                    : 'rotateY(-5deg)',
                }}
              >
                <Image alt={service.title} src={service.imageUrl} width={100} height={100} className='m-auto animate-tada' />
                <h3 className="text-xl m-auto  font-bold mb-2 text-orange-500 ">
                  {index + 1}. {service.title}
                </h3>
                <p className="text-base xs:text-sm m-auto text-gray-600 dark:text-white">
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




//               backgroundImage: `
//   url('/pattern_mangedservices.svg')
// `,

// backgroundSize: 'cover',
// backgroundPosition: 'center',
// opacity: '0.8',