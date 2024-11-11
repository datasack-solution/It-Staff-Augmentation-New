import ChatBotIcon from '@/components/ChatBotIcon';
import DarkToggle from '@/components/DarkToggle';
import HomeIcon_Light from '@/components/HomeIcon_Light';
import LightToggle from '@/components/LightToggle';
import MessageIcon from '@/components/MessageIcon';
import RightArrow from '@/components/RightArrow';
import RightArrow_Light from '@/components/RightArrow_Light';
import Star from '@/components/Start';
import WhatsappIcon from '@/components/WhatsappIcon';
import WhatsappIcon_Light from '@/components/WhatsappIcon_Light';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import HomeIcon from '../HomeIcon';

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       document.documentElement.classList.add('dark');
//       setDarkMode(true);
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    //   localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
    //   localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  const banks = ['alinma_bank.png', 'alrajhi_bank.png', 'bank_albilad.png', 'future_generali.png', 'nibav.png', 'olam.png', 'reliance_capital.png']
  return (
    <div className='bg-white'>
      {/*  linear-gradient(rgba(0, 0, 0, ${darkMode ? 0.6 : 0}), rgba(0, 0, 0, ${darkMode ? 0.6 : 0})),
 */}
      <div
        className="absolute inset-0 w-screen h-screen bg-cover opacity-45 sm:opacity-45 md:opacity-90 lg:opacity-90 xl:opacity-90 2xl:opacity-90"
        style={{
          backgroundImage: `
      url('/background_new.png')
    `
        }}
      />
      <ChatBotIcon className='absolute right-5 bottom-10' />

{/*       dark:opacity-70 dark:from-white dark:bg-gray-500
*/}
      <div className="
      absolute
      hidden sm:block md:block lg:block xlg:block 2xl:block
      right-5 
      top-2/4 
      -mt-24 
      w-16
      z-20
      px-1 
      bg-gradient-to-b 
      from-[rgba(238,123,34,1)] via-[rgba(238,123,34,0)] to-[rgba(238,123,34,0.3)] 
      
      rounded-3xl">
        <div className="
        bg-white 
        py-4
        z-100
        gap-7
        bg-opacity-70     
        backdrop-blur-lg 
        rounded-3xl 
        flex
        flex-col
        justify-around
        m-auto
        h-full">

          {!darkMode && <HomeIcon className='size-7 m-auto cursor-pointer' />}
          {darkMode && <HomeIcon_Light className='size-7 m-auto cursor-pointer' />}
          <MessageIcon className='m-auto cursor-pointer' />
          {!darkMode && <WhatsappIcon className='size-7 m-auto cursor-pointer' />}
          {darkMode && <WhatsappIcon_Light className='size-7 m-auto cursor-pointer' />}
          <div className=''>
            {!darkMode &&
              <div>
                <LightToggle className='m-auto cursor-pointer' onClick={toggleDarkMode} />
                <p className='text-center'>Light</p>
              </div>}
            {darkMode &&
              <div>
                <DarkToggle className='m-auto cursor-pointer' onClick={toggleDarkMode} />
                <p className='text-center'>Dark</p>
              </div>
            }
          </div>
        </div>
      </div>


      <div className="relative h-screen w-screen overflow-y bg-opacity-50">
        {/* dark:text-white */}
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
        ">

          {/* dark:bg-gray-900/60 */}
          <div className='relative w-full bg-white  bg-opacity-70 backdrop-blur-lg top-0'>
            <div className='flex justify-between align-middle w-full bg-transparent'>
              <div className='p-3'>
                <Link href="/">
                  <Image
                    src="https://bunny-wp-pullzone-dgpgtislbk.b-cdn.net/wp-content/uploads/2024/01/Datasack_tech_logo-web.png"
                    alt="DataSack Solutions Logo"
                    width={150}
                    height={50}
                    className="cursor-pointer"
                  />
                </Link>
              </div>

{/* dark:text-gray-100 */}
              <div className='hidden sm:flex gap-14 text-purple-100 sm:text-blue-100 mr-2 justify-around align-middle p-7'>
                <Link href="/pricing" className="text-gray-800  py-1  hover:text-orange-500 uppercase font-semibold">
                  Get Pricing
                </Link>
                {/* dark:text-gray-100 */}
                <Link href="/manage-service" className="text-gray-800  py-1  hover:text-orange-500 uppercase font-semibold">
                  Manage Service
                </Link>
                <div
                  className="flex items-center bg-orange-500 text-white font-semibold px-4 py-1 rounded-full hover:bg-orange-600 cursor-pointer"
                >
                  <svg width="16" height="16" style={{ marginRight: '0.5rem' }} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.18 7.27L10.684 13.73C11.381 12.923 15.794 8.192 18 14.654C18 14.654 17.768 18 13.006 18C9.639 18 6.155 13.962 3.716 11.654C1.626 9.692 0 7.154 0 4.846C0 0.116 3.252 0 3.252 0C10.684 2.538 4.181 7.27 4.181 7.27" fill="white" />
                  </svg>

                  Contact us
                </div>
              </div>

              <div className='flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden gap-14 text-purple-100 sm:text-blue-100 mr-2 justify-around align-middle p-7'>
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 17.5C20.3852 17.5002 20.7556 17.6486 21.0344 17.9144C21.3132 18.1802 21.479 18.5431 21.4975 18.9279C21.516 19.3127 21.3858 19.6898 21.1338 19.9812C20.8818 20.2726 20.5274 20.4558 20.144 20.493L20 20.5H4C3.61478 20.4998 3.24441 20.3514 2.96561 20.0856C2.68682 19.8198 2.52099 19.4569 2.50248 19.0721C2.48396 18.6873 2.61419 18.3102 2.86618 18.0188C3.11816 17.7274 3.47258 17.5442 3.856 17.507L4 17.5H20ZM20 10.5C20.3978 10.5 20.7794 10.658 21.0607 10.9393C21.342 11.2206 21.5 11.6022 21.5 12C21.5 12.3978 21.342 12.7794 21.0607 13.0607C20.7794 13.342 20.3978 13.5 20 13.5H4C3.60218 13.5 3.22064 13.342 2.93934 13.0607C2.65804 12.7794 2.5 12.3978 2.5 12C2.5 11.6022 2.65804 11.2206 2.93934 10.9393C3.22064 10.658 3.60218 10.5 4 10.5H20ZM20 3.5C20.3978 3.5 20.7794 3.65804 21.0607 3.93934C21.342 4.22064 21.5 4.60218 21.5 5C21.5 5.39782 21.342 5.77936 21.0607 6.06066C20.7794 6.34196 20.3978 6.5 20 6.5H4C3.60218 6.5 3.22064 6.34196 2.93934 6.06066C2.65804 5.77936 2.5 5.39782 2.5 5C2.5 4.60218 2.65804 4.22064 2.93934 3.93934C3.22064 3.65804 3.60218 3.5 4 3.5H20Z"
                      fill={darkMode ? 'white' : 'black'} />
                  </svg>
              </div>
            </div>
          </div>

          <div className="bg-[rgba(238,123,34,0.3)] rounded-full w-auto max-w-80 p-1 m-auto flex my-10 ">
            <div className="rounded-full w-full bg-[rgba(238,123,34,0.3)] drop-shadow-lg shadow-orange-900 flex p-1">

              <div className="rounded-full bg-[#EE7B22] w-3/12 h-full"></div>
              <p className='m-auto   
          text-sm text-nowrap font-medium'
              >Check out more about us</p>
              {!darkMode && <RightArrow className='m-auto' />}
              {darkMode && <RightArrow_Light className='m-auto' />}
            </div>

          </div>

{/* dark:text-white */}
          <h1 className="
            text-xl
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
            bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.3)] bg-clip-text text-transparent
            
            tracking-tight">
            Need Tech Talent Quickly?
          </h1>

          <p className="
          sm:text-2xl 
          md:text-3xl 
          lg:text-4xl 
          xl:text-5xl 
          2xl:text-[40px] 
          font-bold 
          mb-7
          ">
            Cost-effective IT Staffing Agency In Riyadh
          </p>

          <div className="
          max-w-fit 
          px-1
          align-middle
          justify-center
          space-y-5
          mb-6
          text-xs
          sm:text-base
          md:text-lg 
          lg:text-xl 
          flex
          max-w-
          m-auto
          flex-col
          font-bold">
            <p>
              From banking to finance and healthcare, we cater to every industry—your success is our mission!
            </p>

            <p>
              It all starts by choosing your path below…
            </p>
          </div>

          <button className="px-6 py-3 bg-orange-500 rounded-full text-white font-semibold transition hover:bg-orange-600 flex m-auto gap-1 mt-10">
            <Star className='' />
            <p className='text-sm sm:text-sm md:text-lg lg:text-sm xl:text-xl'>Book For Demo</p>
          </button>




          <div className="my-10 align-middle m-auto bg-white bg-opacity-50 rounded-3xl shadow-lg w-4/5">
            <p className="pt-5 text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg 2xl:text-lg -mb-5 text-black font-semibold text-center">Trusted by 100+ Companies</p>

            <div
              x-data="{}"
              x-init="$nextTick(() => {
      let ul = $refs.logos;
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
              className="w-full p-5 sm:p-5 md:p-6 lg:p-7 xl:p-7 2xl:p-7 inline-flex flex-nowrap overflow-hidden 
               [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-100px),transparent_100%)]">

              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
                {banks.map((bank, i) => (
                  <li key={i} className="flex justify-center items-center  sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <Image
                      src={`/brands_color/${bank}`}
                      alt="DataSack Solutions Logo"
                      width={100}
                      height={80}
                      className="cursor-pointer w-16 sm:w-20 md:w-28 lg:w-36 xl:w-40 h-auto"
                    />
                  </li>
                ))}
              </ul>

              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {banks.map((bank, i) => (
                  <li key={i} className="flex justify-center items-center  sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <Image
                      src={`/brands_color/${bank}`}
                      alt="DataSack Solutions Logo"
                      width={100}
                      height={80}
                      className="cursor-pointer w-16 sm:w-20 md:w-28 lg:w-36 xl:w-40 h-auto"
                    />
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

