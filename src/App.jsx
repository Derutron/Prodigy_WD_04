
import Contact from './Components/Contact'
import DownloadResumeButton from './Components/DownloadResumeButton'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/projects'

const App = () => {
  return (
    <div className='home mt-[50px] w-screen h-[4800px] bg-[#F5FCFF] '>
      <Navbar/>
      <div id="Header"><Header/></div>
      <div id="Skills"><Skills/></div>
      <div id="Projects"><Projects/></div>

      <div className='absolute top-[3600px]'>
        <div id="About"><About/></div>
      </div>

      <div className='absolute top-[1780px] left-[750px]'>
      <DownloadResumeButton/>
      </div>

      <div className='absolute top-[5900px]'>
        <div id="Contact"><Contact/></div>
      </div>

<div className='absolute top-[6400px] '>
      <Footer/>
      </div>
    </div>
  )
}

export default App