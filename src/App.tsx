
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Testimonials from './Pages/Testimonials'
import VatSection from './Pages/VatSection'
function App() {

  return (
   <>
  <Navbar/>
  <Home/>
  <About/>
  <VatSection/>
  <Services/>
  <Testimonials/>
  <Contact/>
  <Footer/>
   </>
  )
}

export default App
