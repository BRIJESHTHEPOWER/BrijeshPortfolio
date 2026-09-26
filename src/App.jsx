import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function Loader() {
  return (
    <motion.div className="loader" exit={{ y: '-100%' }} transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.15, ease: 'easeInOut' }}
        className="loader-bar"
      />
      <span>BRIJESH.PORTFOLIO</span>
      <style>{`
        .loader {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: grid;
          place-items: center;
          background: var(--ink);
          color: var(--paper);
          font-family: var(--mono);
          letter-spacing: 0.16em;
        }
        .loader-bar {
          position: absolute;
          left: 0;
          top: 0;
          height: 8px;
          background: linear-gradient(90deg, var(--magenta), var(--hero-yellow), var(--blue));
        }
      `}</style>
    </motion.div>
  )
}

export default function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true)
      // Confetti burst on first visit load
      confetti({
        particleCount: 90,
        spread: 110,
        startVelocity: 42,
        origin: { y: 0.22 },
        colors: ['#c41e75', '#f0ce25', '#0c7cff', '#168a5b', '#7b4dff'],
        disableForReducedMotion: true,
      })
    }, 1350)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{!ready && <Loader />}</AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: ready ? 1 : 0 }} transition={{ duration: 0.35 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </motion.div>
    </>
  )
}
