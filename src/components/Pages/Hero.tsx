import ChatBotIcon from '@/components/ChatBotIcon';
import DarkToggle from '@/components/DarkToggle';
import LightToggle from '@/components/LightToggle';
import RightArrow from '@/components/RightArrow';
import RightArrow_Light from '@/components/RightArrow_Light';
import Star from '@/components/Start';
import WhatsappIcon from '@/components/WhatsappIcon';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCallUsModalState } from '../CallUsContext';
import CallUsModal from '../CallUsModal';
import HomeIcon from '../HomeIcon';
import { TypeAnimation } from 'react-type-animation';
import ChatScreen from '../ChatSupport';
import HomeIcon_Light from '../HomeIcon_Light';
import WhatsappIcon_Light from '../WhatsappIcon_Light';

const TypingText = () => {
  return (
    <TypeAnimation
      sequence={[
        'Cost-effective IT Staffing Agency Saudi Arabia',
        3000,
        'IT Staff Augmentation Services',
        3000,
        'IT contract staffing',
        3000,
        'IT Managed Services',
        3000
      ]}
      wrapper="span"
      cursor={false}
      speed={70}
      className='
          text-xl
          sm:text-xl 
          md:text-3xl 
          lg:text-4xl 
          xl:text-5xl 
          2xl:text-[40px] 
          font-bold 
          mb-7'
      repeat={Infinity}
    />
  );
};


function whatsappUrl() {
  const phoneNumber = `+966560858596`
  const message = `
    Hi there, 
    Explore IT Staff Augmentation Services Riyadh

    Check out our company - (https://www.datasack.in)

    Need Tech Talent Quickly? Kindly Fill up the details to touch with you.

    Industry     :
    Name         :
    Email        :
    Phone        :
    Requirements :

    Thank you, we will reach out you shortly!
    `;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}


const HomePage = () => {
  const { isCallUsModalOpen, setIsCallUsModalOpen, darkMode, setDarkMode } = useCallUsModalState()
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatScreen, setIsChatScreen] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      if (currentPosition > scrollPosition && currentPosition > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', (isMenuOpen || isChatScreen));
  }, [isMenuOpen, isChatScreen]);


  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setDarkMode(!darkMode);
  };

  const banks = [
    {
      url: "alinma_bank.webp",
      alt_dark: "Partner with Top IT Managed Service Providers Saudi Arabia to enhance efficiency and results for Alinma Bank.",
      alt_color: "Unlock efficiency with Top IT Managed Service Providers Saudi Arabia, tailored to optimize Alinma Bank's operations."
    },
    {
      url: "alrajhi_bank.webp",
      alt_dark: "Streamline your hiring with the Best IT Contract Staffing Saudi Arabia, delivering top-tier solutions to Alrajhi Bank.",
      alt_color: "Simplify workforce expansion with the Best IT Contract Staffing Saudi Arabia, ensuring success for Alrajhi Bank."
    },
    {
      url: "bank_albilad.webp",
      alt_dark: "Employ full time contract employees to maintain seamless IT support for Bank Albilad's evolving needs.",
      alt_color: "Full time contract employees ensures consistent IT performance, empowering Bank Albilad to achieve seamless delivery."
    },
    {
      url: "future_generali.webp",
      alt_dark: "IT Staffing Riyadh offers innovative recruitment services tailored to meet Future Generali's business goals.",
      alt_color: "Transform hiring processes with IT Staffing Riyadh, offering customized solutions for Future Generali's unique goals."
    },
    {
      url: "elm.webp",
      alt_dark: "Choose the Best IT Contract Staffing Saudi Arabia for scalable solutions designed to suit Elm's objectives.",
      alt_color: "Opt for the Best IT Contract Staffing Saudi Arabia for flexible and efficient workforce solutions tailored for Elm."
    },
    {
      url: "gallagher.webp",
      alt_dark: "Adapt to market demands with Top IT Staff Augmentation Services Saudi Arabia, driving success for Gallagher.",
      alt_color: "Rely on Top IT Staff Augmentation Services Saudi Arabia to meet dynamic workforce needs, enhancing Gallagher's success."
    },
    {
      url: "nibav.webp",
      alt_dark: "Expand your workforce with IT Resource Augmentation Saudi Arabia, offering strategic staffing options for Nibav.",
      alt_color: "IT Resource Augmentation Saudi Arabia provides scalable solutions to meet Nibav's project needs."
    },
    {
      url: "d360.webp",
      alt_dark: "Scale business growth with IT Staffing Agency Saudi Arabia, ensuring reliable IT talent for D360.",
      alt_color: "Innovate digital solutions with IT Staffing Riyadh, securing top IT professionals for D360."
    },
    {
      url: "sami.webp",
      alt_dark: "Strengthen technology solutions with IT Staffing Riyadh, providing expert IT professionals for SAMI Advanced Electronics.",
      alt_color: "Strengthen technology solutions with IT Staffing Riyadh, providing expert IT professionals for SAMI Advanced Electronics."
    },
    {
      url: "arab-national-bank-logo.webp",
      alt_dark: "Enhance financial operations with IT Staff Augmentation by providing expert IT professionals for Arab National Bank.",
      alt_color: "Enhance financial operations with IT Staff Augmentation by providing expert IT professionals for Arab National Bank."
    },
    {
      url: "elite-elevators-logo.webp",
      alt_dark: "Elevate smart living with IT Staffing Agency Saudi Arabia, delivering top-tier IT talent for Elite Elevators.",
      alt_color: "Elevate smart living with IT Staffing Agency Saudi Arabia, delivering top-tier IT talent for Elite Elevators."
    },
    {
      url: "k2-partnering-solutions-logo.webp",
      alt_dark: "Optimize business growth with IT Staff Augmentation, ensuring reliable IT expertise for K2 Partnering Solutions.",
      alt_color: "Accelerate IT projects with IT Staffing Riyadh, providing skilled professionals for K2 Partnering Solutions."
    },
    {
      url: "nupco-logo.webp",
      alt_dark: "Enhance healthcare technology with IT Staffing Agency Saudi Arabia, delivering expert IT solutions for NUPCO.",
      alt_color: "Enhance healthcare technology with IT Staffing Agency Saudi Arabia, delivering expert IT solutions for NUPCO."
    },
    {
      url: "riyadh_airports.webp",
      alt_dark: "Improve operational efficiency with IT Staff Augmentation Services Saudi Arabia, delivering top-tier IT solutions for Riyadh Airports.",
      alt_color: "Optimize airport IT infrastructure with IT Staffing Agency Saudi Arabia, providing expert IT support for Riyadh Airports."
    },
    {
      url: "olam.webp",
      alt_dark: "Rely on the Best IT Staffing Agency Saudi Arabia to connect with exceptional talent for Olam's projects.",
      alt_color: "Trust the Best IT Staffing Agency Saudi Arabia for unmatched recruitment, securing top talent for Olam."
    },
    {
      url: "reliance_capital.webp",
      alt_dark: "Bolster your team with IT Team Augmentation Saudi Arabia, ensuring expert professionals for Reliance Capital.",
      alt_color: "Boost capabilities with IT Team Augmentation Saudi Arabia, providing reliable professionals for Reliance Capital."
    },
    {
      url: "enjaz.webp",
      alt_dark: "Achieve operational excellence with Top IT Managed Service Providers Saudi Arabia, supporting Enjaz's growth.",
      alt_color: "Gain a competitive edge with Top IT Managed Service Providers Saudi Arabia, delivering results for Enjaz."
    },
    {
      url: "pif.webp",
      alt_dark: "Accelerate business growth with IT Staff Augmentation, ensuring seamless execution of IT initiatives for PIF.",
      alt_color: "Strengthen digital transformation with IT Staffing Riyadh, offering specialized IT professionals for PIF."
    },
    {
      url: "esports.webp",
      alt_dark: "Scale esports development with IT Staff Augmentation Services Saudi Arabia, ensuring top talent for Saudi Esports.",
      alt_color: "Drive gaming innovation with IT Staffing Agency Saudi Arabia, delivering skilled professionals for Saudi Esports."
    },
    {
      url: "king_salman_IAir.webp",
      alt_dark: "Enhance workforce efficiency with IT Staff Augmentation, providing expert talent for King Salman International Airport.",
      alt_color: "Transform airport operations with IT Staffing Riyadh, ensuring seamless technology management for King Salman International Airport."
    },
  ];

  return (
    <div id='hero_section' className='2xl:h-[1000px] xl:h-[900px] lg:h-[900px] md:h-[750px] sm:h-[750px] h-[750px] max-w-screen mb-10 overflow-hidden hide-scrollbar'>

      {/* background image */}
      <div
        className="absolute 
        inset-0 
        2xl:h-[1000px] 
        xl:h-[900px] 
        lg:h-[900px] 
        md:h-[750px] 
        sm:h-[750px] 
        h-[750px] 
        bg-cover 
        opacity-60 
        blur-[1px] 
        sm:opacity-80 
        md:opacity-70 
        lg:opacity-70 
        xl:opacity-70 
        2xl:opacity-90
        dark:opacity-40
        overflow-hidden
        "
        style={{
          backgroundImage: "url('taggedImages/bg1.webp')", backgroundPosition:'center'}}
      />

      {/* chatbot float */}
      <ChatBotIcon onClick={() => {
        setIsChatScreen(e => !e)
      }} className='fixed 
      right-5 
      z-50
      size-12
      sm:size-12
      md:size-12
      lg:size-14
      xl:size-14
      2xl:size-16
      rounded-full bg-gray-700 p-2 bottom-10 cursor-pointer hover:animate-jiggle-infinity animate-tada' />

      {isChatScreen && <ChatScreen onClose={() => setIsChatScreen(false)} />}

      {/* whatsapp float */}
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"
      ><WhatsappIcon className='
       right-5 z-50
      animate-pulse
      cursor-pointer
    fixed
      block sm:hidden md:hidden lg:hidden xlg:hidden 2xl:hidden
      size-12
      sm:size-12
      md:size-12
      lg:size-14
      xl:size-14
      2xl:size-16
      rounded-full bg-orange-100
       p-2 bottom-28'
        /></a>

      {/* call us modal */}
      {isCallUsModalOpen.isOpen && <CallUsModal onConfirm={() => setIsCallUsModalOpen({
        hasTechs: false,
        isOpen: false,
        techLabels: null,
        techQuantities: null
      })} />}


      {/* side icons bar */}
      <div aria-label='SideBar' className="
      fixed
      hidden sm:block md:block lg:block xlg:block 2xl:block
      right-5 
      top-2/4 
      -mt-24 
      w-14
      z-20
      px-[1.5px] 
      py-[1px]
      bg-gradient-to-b 
      from-[rgba(238,123,34,0.7)] via-[rgba(238,123,34,0)] to-[rgba(238,123,34,0.3)]
      dark:from-[rgba(238,123,34,0.5)] dark:via-[rgba(238,123,34,0)] dark:to-[rgba(238,123,34,0.1)]
      rounded-3xl">
        <div aria-label='SideBar Elements' className="
        bg-white
        dark:bg-black
        dark:bg-opacity-30
        py-4
        z-100
        space-y-4
        bg-opacity-80     
        backdrop-blur-3xl 
        backdrop-brightness-75
        rounded-3xl 
        flex
        flex-col
        justify-around
        m-auto
        h-full">

          {!darkMode && <HomeIcon onClick={() => document.getElementById('hero_section')?.scrollIntoView({
            behavior: 'smooth'
          })} className='2xl:size-6 xl:size-5 lg:size-5 md:size-5 sm:size-5 m-auto cursor-pointer' />}
          {darkMode && <HomeIcon_Light onClick={() => document.getElementById('hero_section')?.scrollIntoView({
            behavior: 'smooth'
          })} className='2xl:size-6 xl:size-5 lg:size-5 md:size-5 sm:size-5 m-auto cursor-pointer' />}
          {/* <MessageIcon className='m-auto cursor-pointer 2xl:size-10 xl:size-8 lg:size-7 md:size-7 sm:size-7' /> */}
          {!darkMode && <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"
          ><WhatsappIcon className='2xl:size-7 xl:size-7 lg:size-7 md:size-7 sm:size-7 m-auto cursor-pointer' /></a>}
          {darkMode && <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"
          ><WhatsappIcon_Light className='2xl:size-7 xl:size-7 lg:size-7 md:size-7 sm:size-7 m-auto cursor-pointer' /></a>}

          <div >
            {!darkMode &&
              <div>
                <LightToggle className='m-auto cursor-pointer 2xl:size-10 xl:size-8 lg:size-7 md:size-7 sm:size-7 -mt-2' onClick={toggleDarkMode} />
                <p className='text-center text-xs text-black'>Light</p>
              </div>}
            {darkMode &&
              <div>
                <DarkToggle className='m-auto cursor-pointer 2xl:size-10 xl:size-8 lg:size-7 md:size-7 sm:size-7 -mt-2' onClick={toggleDarkMode} />
                <p className='text-center text-xs text-white'>Dark</p>
              </div>
            }
          </div>
        </div>
      </div>

      {/* header */}
      <div className={`fixed w-full bg-white bg-opacity-50 dark:bg-black  dark:bg-opacity-30 backdrop-blur-lg z-40 top-0 transition-transform duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className='flex justify-between align-middle w-full max-h-16 md:max-h-20 bg-transparent'>
          <Link aria-label='Datasack-Logo' href="https://www.datasack.in" target="_blank" className='my-auto pl-2' >
            <Image
              src="taggedImages/logo.webp"
              alt="Transform your workforce with the Best IT Staffing Agency Saudi Arabia, providing innovative hiring solutions"
              width={140}
              height={110}
              className="cursor-pointer w-auto max-h-14 md:max-h-[68px] p-1"
            />
          </Link>

          <div  className='hidden text-sm sm:text-xs md:text-sm lg:text-lg xl:text-lg 2xl:text-lg w-fit sm:flex gap-14 text-purple-100 sm:text-blue-100 mr-2 justify-around align-middle p-5 m-auto'>
            <div aria-label='Get Pricing' onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })
            } className="text-gray-800 dark:text-white  py-1 cursor-pointer text-nowrap  hover:text-orange-500  p-2 uppercase font-semibold">
              Get Pricing
            </div>
            <div aria-label='Managed Services' onClick={() => document.getElementById('managed-services-section')?.scrollIntoView({ behavior: 'smooth' })
            } className="text-gray-800 dark:text-white  py-1 cursor-pointer text-nowrap hover:text-orange-500  p-2 uppercase font-semibold">
              Managed Services
            </div>
            <div
            aria-label='Contact Us'
              onClick={() => setIsCallUsModalOpen({
                isOpen: true,
                hasTechs: false,
                techLabels: null,
                techQuantities: null
              })}
              className="flex items-center bg-orange-500 text-white text-nowrap font-semibold px-4 py-1 rounded-full hover:bg-orange-600 cursor-pointer "
            >
              <svg aria-label='Contact Us' className='animate-jiggle-infinity' width="16" height="16" style={{ marginRight: '0.5rem' }} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path aria-label='Contact Us' d="M4.18 7.27L10.684 13.73C11.381 12.923 15.794 8.192 18 14.654C18 14.654 17.768 18 13.006 18C9.639 18 6.155 13.962 3.716 11.654C1.626 9.692 0 7.154 0 4.846C0 0.116 3.252 0 3.252 0C10.684 2.538 4.181 7.27 4.181 7.27" fill="white" />
              </svg>

              Contact us
            </div>
          </div>

          <div aria-label='Menu Button' onClick={() => setIsMenuOpen(true)} className='flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden text-purple-100 sm:text-blue-100 mr-5 justify-around align-middle m-auto  h-full'>
            <svg aria-label='Menu Button' width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 17.5C20.3852 17.5002 20.7556 17.6486 21.0344 17.9144C21.3132 18.1802 21.479 18.5431 21.4975 18.9279C21.516 19.3127 21.3858 19.6898 21.1338 19.9812C20.8818 20.2726 20.5274 20.4558 20.144 20.493L20 20.5H4C3.61478 20.4998 3.24441 20.3514 2.96561 20.0856C2.68682 19.8198 2.52099 19.4569 2.50248 19.0721C2.48396 18.6873 2.61419 18.3102 2.86618 18.0188C3.11816 17.7274 3.47258 17.5442 3.856 17.507L4 17.5H20ZM20 10.5C20.3978 10.5 20.7794 10.658 21.0607 10.9393C21.342 11.2206 21.5 11.6022 21.5 12C21.5 12.3978 21.342 12.7794 21.0607 13.0607C20.7794 13.342 20.3978 13.5 20 13.5H4C3.60218 13.5 3.22064 13.342 2.93934 13.0607C2.65804 12.7794 2.5 12.3978 2.5 12C2.5 11.6022 2.65804 11.2206 2.93934 10.9393C3.22064 10.658 3.60218 10.5 4 10.5H20ZM20 3.5C20.3978 3.5 20.7794 3.65804 21.0607 3.93934C21.342 4.22064 21.5 4.60218 21.5 5C21.5 5.39782 21.342 5.77936 21.0607 6.06066C20.7794 6.34196 20.3978 6.5 20 6.5H4C3.60218 6.5 3.22064 6.34196 2.93934 6.06066C2.65804 5.77936 2.5 5.39782 2.5 5C2.5 4.60218 2.65804 4.22064 2.93934 3.93934C3.22064 3.65804 3.60218 3.5 4 3.5H20Z"
                fill={darkMode ? 'white' : 'black'} />
            </svg>
          </div>
        </div>

        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-75 h-screen flex justify-end transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={`bg-black w-1/2 h-screen p-5 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
            aria-label='Close Menu'
              className="text-white flex align-middle font-semibold text-lg mb-5"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className='flex align-middle m-auto text-yellow-500'>
                <p>Close</p>
                <div className='inline-block text-center m-auto'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

            </button>
            <nav className="flex flex-col gap-5 space-y-4 text-white">
              <div aria-label='Get Pricing' onClick={() => {
                setIsMenuOpen(false);
                document.getElementById('pricing-section')?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}>
                <span className="hover:text-orange-500 cursor-pointer">
                  Get Pricing
                </span>
              </div>
              <div aria-label='Managed Services' onClick={() => {
                setIsMenuOpen(false);
                document.getElementById('managed-services-section')?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}>
                <span className="hover:text-orange-500 cursor-pointer">
                  Managed Services
                </span>
              </div>
              <div aria-label='Contact Us' onClick={() => {
                setIsMenuOpen(false);
                setIsCallUsModalOpen({
                  isOpen: true,
                  hasTechs: false,
                  techLabels: null,
                  techQuantities: null
                })
              }}>
                <span className="hover:text-orange-500 cursor-pointer">
                  Contact Us
                </span>
              </div>

              <div>
                {!darkMode &&
                  <div className='flex align-middle gap-2'>
                    <LightToggle className='rounded-full' onClick={toggleDarkMode} />
                    <p className='text-center text-xs pt-1'>Light</p>
                  </div>}
                {darkMode &&
                  <div className='flex align-middle gap-2'>
                    <DarkToggle className='rounded-full' onClick={toggleDarkMode} />
                    <p className='text-center text-xs pt-1'>Dark</p>
                  </div>
                }
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* page body */}
      <div className="relative h-screen w-screen overflow-y bg-opacity-50 mt-28 px-5">
        <div className="
        relative 
        z-10 
        flex-auto
        flex-col 
        items-center 
        justify-center 
        h-full 
        text-center 
        text-black 
        dark:text-white
        ">


          <Link href={'https://www.datasack.in'} target="_blank" className="bg-[rgba(238,123,34,0.3)] rounded-full w-auto max-w-80 p-1 m-auto flex my-10 ">
            <div className="rounded-full  animate-pulse w-full bg-[rgba(238,123,34,0.3)] drop-shadow-lg shadow-orange-900 flex p-1">

              <div className="rounded-full bg-[#EE7B22] w-3/12 h-full"></div>
              <button aria-label='Check out more about us' className='m-auto text-gray-900 dark:text-white 
          text-sm text-nowrap font-medium'
              >Check out more about us</button>
              {!darkMode && <RightArrow className='m-auto animate-slide-right' />}
              {darkMode && <RightArrow_Light className='m-auto' />}
            </div>

          </Link>

          <h1 aria-label='Need Tech Talent Quickly' className="
            text-4xl
            sm:text-5xl 
            md:text-5xl 
            lg:text-5xl 
            xl:text-6xl 
            2xl:text-6xl
            font-bold 
            mb-5
            sm:mb-5
            md:mb-5
            lg:mb-5
            xl:mb-10
            bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.5)] 
            dark:bg-gradient-to-t dark:from-[rgba(255,255,255,1)] dark:to-[rgba(255,255,255,0.5)] 
            bg-clip-text text-transparent
            tracking-tight">
            Need Tech Talent Quickly?
          </h1>

          <div className='h-12 '>
            <TypingText />
          </div>

          <div className="
          max-w-fit 
          px-1
          mt-5
          align-middle
          justify-center
          space-y-5
          mb-6
          text-sm
          sm:text-base
          md:text-lg 
          lg:text-xl 
          flex
          m-auto
          flex-col
          font-bold">
            <p className=' 
            bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.6)] 
            dark:bg-gradient-to-t dark:from-[rgba(255,255,255,1)] dark:to-[rgba(255,255,255,0.5)] 

            bg-clip-text text-transparent'>
              From banking to finance and healthcare, we cater to every industry—your success is our mission!
            </p>

            <p className='
            bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.6)]
            dark:bg-gradient-to-t dark:from-[rgba(255,255,255,1)] dark:to-[rgba(255,255,255,0.5)] 
            bg-clip-text text-transparent'>
              It all starts by choosing your path below…
            </p>
          </div>

          <button onClick={() => setIsCallUsModalOpen({
            isOpen: true,
            hasTechs: false,
            techLabels: null,
            techQuantities: null
          })} className="px-6 py-3 animate-bounce-right bg-orange-500 dark:bg-opacity-70 rounded-full text-white font-semibold transition hover:bg-orange-600 flex m-auto gap-1 mt-10">
            <Star className='' />
            <p className='text-sm  sm:text-sm md:text-lg lg:text-sm xl:text-lg'>Talk to an Expert</p>
          </button>

          <div className="my-2 md:my-10 lg:my-10 xl:my-10 2xl:my-10 align-middle m-auto bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-50 rounded-3xl shadow-lg w-4/5 ">
            <p className="pt-3 text-sm sm:text-sm md:text-sm lg:text-lg xl:text-lg 2xl:text-lg text-black dark:text-white font-semibold text-center">Trusted by 100+ Companies</p>

            <div
              x-data="{}"
              x-init="$nextTick(() => {
      let ul = $refs.logos;
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
              className="w-full inline-flex flex-nowrap overflow-hidden  max-h-14 sm:max-h-16 md:max-h-24
               [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_calc(100%-10%),transparent_100%)]">

              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {banks.map((bank, i) => (
                  <li key={i} className="flex justify-center items-center sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="logo-container">
                      <Image
                        src={
                          darkMode &&
                            bank.url !== "sami.webp" &&
                            bank.url !== "arab-national-bank-logo.webp" &&
                            bank.url !== "elite-elevators-logo.webp" &&
                            bank.url !== "nupco-logo.webp"
                            ? `taggedImages/Client-Logos-Dark/${bank.url}`
                            : `taggedImages/Client-Logos-Color/${bank.url}`
                        }
                        alt={darkMode ? bank.alt_dark : bank.alt_color}
                        width={150}
                        height={100}
                        className={`logo-image ${bank.url === "king_salman_IAir.webp" ? "king-salman-logo h-8 md:h-10 w-auto" :
                            (bank.url === "elm.webp" ||
                              bank.url === "k2-partnering-solutions-logo.webp") ? "small-logo-mobile" :
                              (darkMode && (
                                bank.url === "arab-national-bank-logo.webp" ||
                                bank.url === "elite-elevators-logo.webp" ||
                                bank.url === "nupco-logo.webp" ||
                                bank.url === "sami.webp"
                              )) ? "invert-in-dark" : ""
                          }`}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {banks.map((bank, i) => (
                  <li key={i} className="flex justify-center items-center sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="logo-container">
                      <Image
                        src={
                          darkMode &&
                            bank.url !== "sami.webp" &&
                            bank.url !== "k2-partnering-solutions-logo.webp" &&
                            bank.url !== "arab-national-bank-logo.webp" &&
                            bank.url !== "elite-elevators-logo.webp" &&
                            bank.url !== "nupco-logo.webp"
                            ? `taggedImages/Client-Logos-Dark/${bank.url}`
                            : `taggedImages/Client-Logos-Color/${bank.url}`
                        }
                        alt={darkMode ? bank.alt_dark : bank.alt_color}
                        width={150}
                        height={100}
                        className={`logo-image ${bank.url === "king_salman_IAir.webp" ? "king-salman-logo h-8 md:h-10 w-auto" :
                            (bank.url === "elm.webp" ||
                              bank.url === "k2-partnering-solutions-logo.webp") ? "small-logo-mobile " :
                              (darkMode && (
                                bank.url === "arab-national-bank-logo.webp" ||
                                bank.url === "elite-elevators-logo.webp" ||
                                bank.url === "nupco-logo.webp" ||
                                bank.url === "sami.webp"
                              )) ? "invert-in-dark" : ""
                          }`}
                      />
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HomePage;




