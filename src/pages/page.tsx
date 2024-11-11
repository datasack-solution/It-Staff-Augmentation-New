import Benefits from "@/components/Pages/Benefits"
import HomePage from "@/components/Pages/Hero"
import PricingPage from "@/components/Pages/Pricing"

const IndexPage = () => {
  return <div className="bg-white overflow-y-hidden overflow-hidden">
  <HomePage/>
  <PricingPage/>
  <Benefits/>
  </div>
}

export default IndexPage