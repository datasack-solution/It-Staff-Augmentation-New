// import localFont from "next/font/local";
import { useCallUsModalState } from "@/components/CallUsContext"
import AnalyticsPage from "@/components/Pages/Analytics"
import BenefitsPage from "@/components/Pages/Benefits"
import FAQPage from "@/components/Pages/FAQ"
import Footer from "@/components/Pages/Footer"
import HomePage from "@/components/Pages/Hero"
import ManageServicePage from "@/components/Pages/ManageService"
import PricingPage from "@/components/Pages/Pricing"
import PricingToast from "@/components/PricingToast"
import { Fragment, useEffect } from "react"
import Head from "next/head";


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  const { setDarkMode } = useCallUsModalState()

  //to set the user preferred color, by reading system prefrence for light or dark theme
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: boolean) => {
      if (e) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      setDarkMode(e);
    };

    handleChange(prefersDark.matches)

    prefersDark.addEventListener('change', (e) => handleChange(e.matches));

    return () => prefersDark.removeEventListener('change', (e) => handleChange(e.matches));
  }, [setDarkMode]);

  return <Fragment>
    <Head>
      <title>IT Staffing Agency Saudi Arabia | Free Consultation</title>
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      <meta title="title" content="IT Staffing Agency Saudi Arabia | Free Consultation" />
      <meta name="description" content="Looking for IT Staff Augmentation Services? Our IT staffing enhances your workforce & meets project needs." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="IT Staffing Agency Saudi Arabia | Free Consultation" />
      <meta property="og:description" content="Looking for IT Staff Augmentation Services? Our IT staffing enhances your workforce & meets project needs." />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="IT Staffing Agency Saudi Arabia | Free Consultation" />
      {/* <meta property="og:url" content="https://itstaffaugmentation.datasack.in/" />
      <meta property="og:image" content="https://itstaffaugmentation.datasack.in/taggedImages/card_logo.webp" /> */}
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="1000" />
      <meta property="og:locale" content="en_US" />
      <meta property="twitter:title" content="IT Staffing Agency Saudi Arabia | Free Consultation" />
      <meta property="twitter:description" content="Looking for IT Staff Augmentation Services? Our IT staffing enhances your workforce & meets project needs." />
      <meta property="twitter:card" content="summary_large_image" />
      {/* <meta property="twitter:image" content="https://itstaffaugmentation.datasack.in/taggedImages/card_logo.webp" /> */}
      <meta property="twitter:image:alt" content="Discover the advantages of an IT staffing agency Riyadh to enhance your project delivery." />
      <link rel="icon" href="/favicon.ico" />


      <link rel="preload" as="image" href="taggedImages/Client-Logos-Color/alinma_bank.webp" />
      <link rel="preload" as="image" href="taggedImages/Client-Logos-Color/alrajhi_bank.webp" />
      <link rel="preload" as="image" href="taggedImages/Client-Logos-Color/bank_albilad.webp" />
      <link rel="preload" as="image" href="taggedImages/Client-Logos-Color/future_generali.webp" />
      <link rel="preload" as="image" href="taggedImages/Client-Logos-Color/nibav.webp" />
      <link rel="preload" as="image" href="taggedImages/Client-Logos-Color/olam.webp" />
      <link rel="preload" as="image" href="taggedImages/Client-Logos-Color/reliance_capital.webp" />
      <link rel="preload" as="image" href="taggedImages/Client-Logos-Color/enjaz.webp" />

      <link rel="preload" as="image" href="taggedImages/Client-Logos-Dark/alinma_bank.webp" />
      <link rel="preload" as="image" href="taggedImages/Client-Logos-Dark/alrajhi_bank.webp" />
      <link rel="preload" as="image" href="taggedImages/Client-Logos-Dark/bank_albilad.webp" />
      <link rel="preload" as="image" href="taggedImages/Client-Logos-Dark/future_generali.webp" />
      <link rel="preload" as="image" href="taggedImages/Client-Logos-Dark/nibav.webp" />
      <link rel="preload" as="image" href="taggedImages/Client-Logos-Dark/olam.webp" />
      <link rel="preload" as="image" href="taggedImages/Client-Logos-Dark/reliance_capital.webp" />
      <link rel="preload" as="image" href="taggedImages/Client-Logos-Dark/enjaz.webp" />

      <link rel="preload" as="image" href="taggedImages/Managed Services/Administrative Support.webp" />
      <link rel="preload" as="image" href="taggedImages/Managed Services/Continuous Communication.webp" />
      <link rel="preload" as="image" href="taggedImages/Managed Services/Onboarding & Integration.webp" />
      <link rel="preload" as="image" href="taggedImages/Managed Services/Performance Monitoring.webp" />
      <link rel="preload" as="image" href="taggedImages/Managed Services/Problem Resolution.webp" />
      <link rel="preload" as="image" href="taggedImages/Managed Services/Talent Sourcing.webp" />

      <link rel="preload" as="image" href="taggedImages/bg.webp" />
      <link rel="preload" as="image" href="taggedImages/footer-bg.webp" />
      <link rel="preload" as="image" href="taggedImages/indianFlag.png" />
      <link rel="preload" as="image" href="taggedImages/saudiFlag.webp" />
      <link rel="preload" as="image" href="taggedImages/steps-dark.webp" />
      <link rel="preload" as="image" href="taggedImages/steps-light.webp" />

      <link rel="preload" as="image" href="taggedImages/logo.webp" />

    </Head>


    <div className="bg-white dark:bg-[#252525]">
      <PricingToast />
      <HomePage />
      <PricingPage />
      <BenefitsPage />
      <AnalyticsPage />
      <ManageServicePage />
      <FAQPage />
      <Footer />
    </div>
  </Fragment>
}
