import CampaignSection from './components/CampaignSection'
import Hero from './components/Hero'
import StatisticsSection from './components/StatisticsSection'
import AboutSection from './components/AboutSection'
import TeamSection from './components/TeamSection'
import ReviewSection from './components/ReviewSection'
import DonationSection from './components/DonationSection'
import Footer from './components/Footer'

function App() {
  return (
    <div class="min-h-screen">
      <Hero/>
      <StatisticsSection/>
      <CampaignSection/>
      <AboutSection/>
      <TeamSection/>
      <ReviewSection/>
      <DonationSection/>
      <Footer/>
    </div>
  )
}

export default App
