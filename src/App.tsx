import './App.css'
import CityPlatformBenefits from './components/CityPlatformBenefits/CityPlatformBenefits'
import EcoSysytem from './components/EcoSystem/EcoSysytem'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HeroSection from './components/hero/HeroSection'
import Products from './components/Products/Products'

function App() {

  return (
    <>
      <div className='container-main'>
        <div className='container'>
          <Header />
          <HeroSection/>
        </div>
      </div>
      <EcoSysytem/>
      <div className='bg-[#bdd4e2]'>
      <Products/>
      </div>
      <CityPlatformBenefits/>
      <div className='container-main-footer'>
      <Footer/>
      </div>
    </>
  )
}

export default App
