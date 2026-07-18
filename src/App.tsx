
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experiences from './components/Experiences'
import Projets from './components/projets/Projets'
import Footer from './components/Footer'
import MyYoutube from './components/MyYoutube'

function App() {

  return (
    <div>
      <div className='p-5 md:px-[15%]'>
        <Navbar />
        <Home />
      </div>
      <About />
      <MyYoutube />
      <div className='p-5 md:px-[15%]'>
        <Experiences />
        <Projets />
      </div>
      <Footer />
    </div>
  )
}

export default App
