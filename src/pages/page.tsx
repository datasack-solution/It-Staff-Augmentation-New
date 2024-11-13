import AnalyticsPage from "@/components/Pages/Analytics"
import BenefitsPage from "@/components/Pages/Benefits"
import FAQPage from "@/components/Pages/FAQ"
import Footer from "@/components/Pages/Footer"
import HomePage from "@/components/Pages/Hero"
import ManageServicePage from "@/components/Pages/ManageService"
import PricingPage from "@/components/Pages/Pricing"
import PricingToast from "@/components/PricingToast"

const IndexPage = () => {
  return <div className="bg-white">
  <PricingToast/>
  <HomePage/>
  <PricingPage/>
  <BenefitsPage/>
  <AnalyticsPage />
  <ManageServicePage/>
  <FAQPage/>
  <Footer/>
  </div>
}

export default IndexPage