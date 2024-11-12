import AnalyticsPage from "@/components/Pages/Analytics"
import Benefits from "@/components/Pages/Benefits"
import HomePage from "@/components/Pages/Hero"
import PricingPage from "@/components/Pages/Pricing"

const IndexPage = () => {
  return <div className="bg-white">
  <HomePage/>
  <PricingPage/>
  <Benefits/>
  <AnalyticsPage />
  </div>
}

export default IndexPage