import './App.css'

// Sections
import Hero from './sections/Hero/Hero'
import AgencyFeaturesGrid from './sections/AgencyFeaturesGrid/AgencyFeaturesGrid'
import Testimonials from './sections/Testimonials/Testimonials'

export default function App() {
  return (
    <div className="master-container">
      <div className="hero"><Hero /></div>
      <div className="agencyFeaturesGrid"><AgencyFeaturesGrid /></div>
      <div className="testimonials"><Testimonials /></div>
    </div>
  )
}