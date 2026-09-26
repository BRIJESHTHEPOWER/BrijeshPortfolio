import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const LINKS = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  const [activeHash, setActiveHash] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 28)
      const sections = ['#home', '#about', '#projects', '#skills', '#experience', '#contact']
      for (const sec of sections) {
        const el = document.querySelector(sec)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveHash(sec)
            break
          }
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        className="site-nav"
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-container">
          {/* LEFT: Yellow Circle Logo (B) */}
          <a className="brand" href="#home" aria-label="Home">
            <span>B</span>
          </a>

          {/* CENTER: Navigation Links */}
          <nav className={stuck ? 'nav-links is-stuck' : 'nav-links'} aria-label="Main navigation">
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={activeHash === href ? 'nav-item is-active' : 'nav-item'}
                onClick={() => setActiveHash(href)}
              >
                <span>{label}</span>
                {activeHash === href && <span className="active-yellow-bar" />}
              </a>
            ))}
          </nav>

          {/* RIGHT: Black Rounded Button: Let's Connect ↗ */}
          <a className="nav-btn-connect" href="#contact">
            <span>Let's Connect</span>
            <span className="btn-arrow">↗</span>
          </a>

          <button
            className="menu-button"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-sheet"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
          >
            {LINKS.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a className="mobile-sheet-cta" href="#contact" onClick={() => setOpen(false)}>
              <span>Let's Connect ↗</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .site-nav {
          position: fixed;
          left: 0;
          right: 0;
          top: 24px;
          z-index: 1000;
          width: 100%;
          pointer-events: none;
        }

        .nav-container {
          max-width: 1440px;
          width: calc(100% - clamp(24px, 5vw, 80px));
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
        }

        .brand,
        .nav-links,
        .nav-btn-connect,
        .menu-button {
          pointer-events: auto;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          color: #11130f;
          text-decoration: none;
        }

        .brand span {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          border: 2px solid #11130f;
          border-radius: 50%;
          background: #FFD600;
          font-family: var(--head);
          font-size: 1.2rem;
          font-weight: 900;
          box-shadow: 2px 2px 0 #11130f;
          transition: transform 180ms ease;
        }

        .brand span:hover {
          transform: scale(1.04);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: clamp(14px, 2vw, 28px);
          padding: 8px clamp(16px, 2vw, 28px);
          border-radius: 999px;
          background: rgba(250, 247, 242, 0.85);
          backdrop-filter: blur(14px);
          transition: background 180ms ease, box-shadow 180ms ease;
        }

        .nav-links.is-stuck {
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 10px 30px rgba(17, 19, 15, 0.08);
          border: 1px solid rgba(17, 19, 15, 0.1);
        }

        .nav-item {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          font-family: var(--body);
          font-size: clamp(0.82rem, 1vw, 0.9rem);
          font-weight: 700;
          color: #444444;
          text-decoration: none;
          padding: 4px 0;
          transition: color 0.15s ease;
        }

        .nav-item:hover,
        .nav-item.is-active {
          color: #11130f;
        }

        .active-yellow-bar {
          position: absolute;
          bottom: -3px;
          left: 0;
          right: 0;
          height: 3px;
          border-radius: 999px;
          background: #FFD600;
        }

        /* Right CTA Button: Let's Connect ↗ */
        .nav-btn-connect {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px clamp(16px, 1.8vw, 24px);
          border-radius: 999px;
          background: #11130f;
          color: #ffffff;
          font-family: var(--mono);
          font-size: 0.84rem;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 4px 4px 0 #FFD600;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .nav-btn-connect:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 var(--magenta);
        }

        .menu-button {
          display: none;
          width: 44px;
          height: 44px;
          border: 2px solid #11130f;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 3px 3px 0 #11130f;
          cursor: pointer;
        }

        .menu-button span {
          display: block;
          width: 18px;
          height: 2px;
          margin: 5px auto;
          background: #11130f;
        }

        .mobile-sheet {
          position: fixed;
          top: 80px;
          left: 16px;
          right: 16px;
          max-height: calc(100dvh - 100px);
          overflow-y: auto;
          z-index: 999;
          display: grid;
          gap: 8px;
          padding: 16px;
          border: 2px solid #11130f;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 6px 6px 0 #11130f;
          pointer-events: auto;
        }

        .mobile-sheet a {
          padding: 12px;
          border: 1px solid var(--line);
          border-radius: 8px;
          font-weight: 800;
          text-decoration: none;
          color: #11130f;
        }

        .mobile-sheet .mobile-sheet-cta {
          margin-top: 6px;
          background: #11130f;
          color: #ffffff;
          text-align: center;
          box-shadow: 3px 3px 0 #FFD600;
          border-color: #11130f;
        }

        @media (max-width: 900px) {
          .nav-container {
            width: calc(100% - 32px);
          }
          .nav-links,
          .nav-btn-connect {
            display: none;
          }
          .menu-button {
            display: block;
          }
        }
      `}</style>
    </>
  )
}
