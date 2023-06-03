import './App.css'
import Banner from './components/banner/Banner'
import Hero from './components/hero/Hero'
import Testimonial from './components/testimonial/Testimonial'
function App() {


  return (
    <div className='app'>
        <Hero/>
        <Testimonial/>
        <Banner/>
    </div>
  )
}

export default App
