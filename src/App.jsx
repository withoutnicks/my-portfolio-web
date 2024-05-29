import { Toaster } from 'react-hot-toast'
import { Header } from './components/design/Header'
import { Hero } from './components/design/Hero'
import { Projects } from './components/design/Projects'
import { Footer } from './components/design/Footer'
import { Subtitle } from './components/Subtitle'
import { IconCode } from './components/icons/IconCode'

function App () {
  return (
    <>
      <Header />
      <Hero />
      <Subtitle icon={<IconCode />} subtitle='Projects' />
      <Projects />
      <Footer />

      <Toaster position='top-center' reverseOrder={false} />
    </>
  )
}

export default App
