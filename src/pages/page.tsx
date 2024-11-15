import { useCallUsModalState } from "@/components/CallUsContext"
import AnalyticsPage from "@/components/Pages/Analytics"
import BenefitsPage from "@/components/Pages/Benefits"
import FAQPage from "@/components/Pages/FAQ"
import Footer from "@/components/Pages/Footer"
import HomePage from "@/components/Pages/Hero"
import ManageServicePage from "@/components/Pages/ManageService"
import PricingPage from "@/components/Pages/Pricing"
import PricingToast from "@/components/PricingToast"
import { useEffect } from "react"

const IndexPage = () => {
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


  return <div className="bg-white dark:bg-[#252525] overflow-hidden">
    <PricingToast />
    <HomePage />
    <PricingPage />
    <BenefitsPage />
    <AnalyticsPage />
    <ManageServicePage />
    <FAQPage />
    <Footer />
  </div>
}

export default IndexPage