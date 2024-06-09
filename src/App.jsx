import { Toaster } from 'react-hot-toast'
import { Header } from './components/design/Header'
import { Hero } from './components/design/Hero'
import { Projects } from './components/design/Projects'
import { Footer } from './components/design/Footer'
import { Subtitle } from './components/Subtitle'
import { IconCode } from './components/icons/IconCode'
import { Studies } from './components/design/Studies'
import { IconSchool } from './components/icons/IconSchool'
import { IconAbout } from './components/icons/IconAbout'
import { About } from './components/design/About'

function App () {
  return (
    <>
      <Header />
      <Hero />
      <Subtitle icon={<IconCode />} subtitle='Projects' />
      <Projects />
      <Subtitle icon={<IconSchool />} subtitle='Studies' />
      <Studies />
      <Subtitle icon={<IconAbout />} subtitle='About Me' />
      <About />
      <Footer />

      <Toaster position='top-center' reverseOrder={false} />
    </>
  )
}

export default App
