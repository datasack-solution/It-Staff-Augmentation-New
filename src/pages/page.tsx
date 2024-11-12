import AnalyticsPage from "@/components/Pages/Analytics"
import BenefitsPage from "@/components/Pages/Benefits"
import HomePage from "@/components/Pages/Hero"
import ManageServicePage from "@/components/Pages/ManageService"
import PricingPage from "@/components/Pages/Pricing"

const IndexPage = () => {
  return <div className="bg-white">
  <HomePage/>
  <PricingPage/>
  <BenefitsPage/>
  <AnalyticsPage />
  <ManageServicePage/>
  </div>
}

export default IndexPage