import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="hero-exact-section">
      <div className="hero-dotted-grid" />

      <div className="hero-exact-container">
        {/* HERO LEFT CONTENT (44% Width) */}
        <motion.div
          className="hero-left-content"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-header-block">
            {/* Eyebrow / Kicker */}
            <div className="hero-eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">FULL STACK DEVELOPER</span>
            </div>

            {/* Title Headline */}
            <h1 className="hero-headline">
              <span className="hi-im-part">Hi, I'm</span>
              <br />
              <span className="brijesh-name-wrap">
                <span className="brijesh-text">BRIJESH</span>
                <svg className="brush-underline-svg" viewBox="0 0 700 100" preserveAspectRatio="none">
                  <path
                    d="M10 54 C120 42, 240 64, 350 50 C470 38, 590 54, 690 44"
                    fill="none"
                    stroke="#FFD91A"
                    strokeWidth="26"
                    strokeLinecap="round"
                  />
                  <path
                    d="M35 76 C180 65, 300 80, 430 70 C530 62, 620 71, 675 66"
                    fill="none"
                    stroke="#FFD91A"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="hero-description">
              I turn ideas into real-world web applications with clean UI, scalable backend and modern technologies.
            </p>
          </div>

          <div className="hero-actions-block">
            {/* Buttons Row */}
            <div className="hero-actions-row">
              <a href="#projects" className="btn-primary-work">
                <span>View My Work</span>
                <span className="btn-arrow">↗</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-resume"
              >
                <div className="download-circle">
                  <span>↓</span>
                </div>
                <span>Download Resume</span>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll-indicator">
              <div className="mouse-icon">
                <span className="mouse-dot" />
              </div>
              <span className="scroll-line" />
              <span className="scroll-label">SCROLL DOWN</span>
            </div>
          </div>
        </motion.div>

        {/* HERO RIGHT INTEGRATED COMPOSITION (56% Width - Transparent PNG Cutout) */}
        <motion.div
          className="hero-right-portrait"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-composition-stage">
            <img
              src="/brijesh-hero-transparent.png"
              alt="Brijesh - Full Stack Developer"
              className="portrait-exact-img"
            />
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-exact-section {
          position: relative;
          width: 100%;
          min-height: calc(100dvh - 70px);
          background-color: #faf7f2;
          color: #11130f;
          padding: clamp(90px, 12vh, 125px) 0 clamp(40px, 6vh, 50px);
          overflow: hidden;
          display: flex;
          align-items: center;
          box-sizing: border-box;
        }

        .hero-dotted-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.08;
          background-image: radial-gradient(#11130f 1px, transparent 1px);
          background-size: 18px 18px;
        }

        .hero-exact-container {
          position: relative;
          z-index: 2;
          width: calc(100% - clamp(24px, 5vw, 80px));
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 44% 56%;
          align-items: center;
          box-sizing: border-box;
        }

        /* LEFT CONTENT STYLING */
        .hero-left-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
          width: 100%;
          z-index: 3;
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          font-family: var(--mono);
          font-size: clamp(0.7rem, 1.2vw, 0.8rem);
          font-weight: 800;
          color: #555555;
          letter-spacing: 0.14em;
        }

        .eyebrow-line {
          width: 24px;
          height: 2px;
          background: #FFD91A;
        }

        .hero-headline {
          font-family: var(--head);
          font-weight: 900;
          line-height: 0.95;
          color: #050505;
          margin: 0 0 22px;
          letter-spacing: -0.04em;
          width: 100%;
        }

        .hi-im-part {
          font-size: clamp(2rem, 4.8vw, 4.4rem);
          font-weight: 800;
          color: #050505;
        }

        .brijesh-name-wrap {
          position: relative;
          display: inline-block;
          margin-top: 4px;
          max-width: 100%;
        }

        .brijesh-text {
          position: relative;
          z-index: 2;
          margin: 0;
          color: #050505;
          font-family: var(--head);
          font-weight: 900;
          font-size: clamp(2.5rem, 8.5vw, 125px);
          line-height: 0.9;
          letter-spacing: -0.045em;
          word-break: break-word;
        }

        .brush-underline-svg {
          position: absolute;
          z-index: 1;
          left: -4%;
          bottom: -12px;
          width: 108%;
          height: clamp(35px, 5vw, 70px);
          pointer-events: none;
        }

        .hero-description {
          font-family: var(--body);
          font-size: clamp(0.95rem, 1.4vw, 1.18rem);
          color: #4a483e;
          line-height: 1.55;
          max-width: 460px;
          margin-bottom: 34px;
        }

        /* Action Buttons */
        .hero-actions-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 48px;
          flex-wrap: wrap;
          width: 100%;
        }

        .btn-primary-work {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px clamp(20px, 3vw, 30px);
          border-radius: 999px;
          background: #11130f;
          color: #ffffff;
          font-family: var(--mono);
          font-size: 0.88rem;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 4px 4px 0 #FFD600;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn-primary-work:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 var(--magenta);
        }

        .btn-secondary-resume {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 11px clamp(18px, 2.5vw, 24px);
          border: 2px solid #11130f;
          border-radius: 999px;
          background: #ffffff;
          color: #11130f;
          font-family: var(--mono);
          font-size: 0.85rem;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 3px 3px 0 #11130f;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .btn-secondary-resume:hover {
          transform: translate(-2px, -2px);
          background: #fafafa;
          box-shadow: 5px 5px 0 #11130f;
        }

        .download-circle {
          display: grid;
          place-items: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #FFD600;
          border: 1.5px solid #11130f;
          font-weight: 900;
          font-size: 0.82rem;
        }

        /* Scroll Down Indicator */
        .hero-scroll-indicator {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--mono);
          font-size: 0.68rem;
          font-weight: 800;
          color: #777777;
          letter-spacing: 0.1em;
        }

        .mouse-icon {
          width: 18px;
          height: 28px;
          border: 2px solid #11130f;
          border-radius: 12px;
          position: relative;
          display: flex;
          justify-content: center;
          padding-top: 4px;
        }

        .mouse-dot {
          width: 3px;
          height: 6px;
          border-radius: 2px;
          background: #FFD600;
          animation: mouseScroll 1.6s infinite ease-in-out;
        }

        @keyframes mouseScroll {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.3; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .scroll-line {
          width: 12px;
          height: 2px;
          background: #FFD600;
        }

        /* RIGHT PORTRAIT INTEGRATED COMPOSITION */
        .hero-right-portrait {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          position: relative;
          width: 100%;
          min-width: 0;
          background: transparent;
          border: none;
          box-shadow: none;
        }

        .portrait-composition-stage {
          position: relative;
          width: 100%;
          max-width: 780px;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          background: transparent;
          border: none;
          box-shadow: none;
        }

        .portrait-exact-img {
          width: clamp(480px, 44vw, 760px);
          max-width: 100%;
          height: auto;
          max-height: clamp(540px, 72vh, 780px);
          object-fit: contain;
          object-position: bottom right;
          display: block;
          background: transparent;
          border: none;
          box-shadow: none;
          outline: none;
          transition: transform 0.35s ease;
        }

        .portrait-composition-stage:hover .portrait-exact-img {
          transform: scale(1.01);
        }

        @media (min-width: 1440px) {
          .portrait-exact-img {
            width: clamp(680px, 48vw, 760px);
          }
        }

        @media (min-width: 1280px) and (max-width: 1439px) {
          .portrait-exact-img {
            width: clamp(580px, 46vw, 680px);
          }
        }

        @media (min-width: 961px) and (max-width: 1279px) {
          .portrait-exact-img {
            width: clamp(480px, 44vw, 580px);
          }
        }

        @media (max-width: 960px) {
          .hero-exact-section {
            padding-top: 100px;
            padding-bottom: 40px;
          }
          .hero-exact-container {
            display: flex;
            flex-direction: column;
            gap: 28px;
            width: calc(100% - 32px);
          }
          .hero-left-content {
            display: contents;
          }
          .hero-header-block {
            order: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .hero-eyebrow {
            justify-content: center;
          }
          .hero-description {
            max-width: 100%;
            text-align: center;
          }
          .hero-right-portrait {
            order: 2;
            width: 100%;
            justify-content: center;
          }
          .portrait-composition-stage {
            justify-content: center;
            max-width: 100%;
          }
          .portrait-exact-img {
            width: min(100%, 480px);
            max-height: 480px;
            object-position: center;
          }
          .hero-actions-block {
            order: 3;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-actions-row {
            justify-content: center;
          }
          .hero-scroll-indicator {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-actions-row {
            flex-direction: column;
            width: 100%;
          }
          .btn-primary-work,
          .btn-secondary-resume {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
