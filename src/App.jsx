
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slider from './components/Slider'
import Courses from './components/Courses'
import WeOffers from './components/WeOffers'
import SecondSlider from './components/SecondSlider'
import Teachers from './components/Teachers'
import Footer from './components/Footer'
function App() {
  return (
    <div >
     <div className="align-content">
     <Navbar/>
      <Hero/>
      <Slider/>
      <Courses/>
      <WeOffers/>
      <SecondSlider/>
      <Teachers/>
     </div>
  <div>
  <Footer/>
  </div>
    </div>
  )
}

export default App