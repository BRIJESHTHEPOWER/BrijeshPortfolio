import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section about-exact-section">
      <div className="wrap about-exact-container">
        
        {/* LEFT COLUMN: Hi I'm Brijesh, Full Stack Developer, Bio, Info Pills, Buttons & Socials */}
        <div className="about-col-left">
          <div className="about-header-block">
            <div className="kicker-row">
              <span className="section-kicker-line">—</span>
              <span className="section-kicker-text">ABOUT ME</span>
            </div>

            <h2 className="hero-name-title">
              <span className="hi-im">Hi, I'm</span>
              <br />
              <span className="brijesh-neon-highlight">BRIJESH</span>
            </h2>

            <p className="about-lead-copy">
              I turn ideas into real-world web applications with clean UI, scalable backend and modern technologies.
            </p>
          </div>

          {/* 3 Quick Info Columns */}
          <div className="quick-info-grid">
            <div className="info-badge-item">
              <span className="info-icon">🎓</span>
              <div className="info-text">
                <strong>MCA</strong>
                <small>Graduate</small>
              </div>
            </div>
            <div className="info-badge-item">
              <span className="info-icon">📍</span>
              <div className="info-text">
                <strong>Mangalore</strong>
                <small>Karnataka</small>
              </div>
            </div>
            <div className="info-badge-item">
              <span className="info-icon">&lt;/&gt;</span>
              <div className="info-text">
                <strong>Open to</strong>
                <small>Opportunities</small>
              </div>
            </div>
          </div>

          <div className="about-social-block">
            {/* Action Buttons Row */}
            <div className="connect-action-row">
              <a href="#contact" className="btn-connect-black">
                <span>Let's Connect</span>
                <span className="btn-arrow">↗</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="download-resume-wrap"
              >
                <div className="download-icon-circle">
                  <span>↓</span>
                </div>
                <div className="download-text">
                  <strong>Download</strong>
                  <small>Resume</small>
                </div>
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="social-icons-wrapper">
              <div className="social-links-row">
                <a href="https://github.com/BRIJESHTHEPOWER" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/brijesh-611a2b31b" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z" />
                  </svg>
                </a>
                <a href="mailto:brijeshwork08@gmail.com" className="social-icon-btn" aria-label="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="social-icon-btn whatsapp-btn" aria-label="WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.483 1.332 5.001l-1.417 5.176 5.297-1.39a9.92 9.92 0 004.773 1.218h.004c5.505 0 9.988-4.479 9.989-9.985 0-2.667-1.037-5.175-2.923-7.062A9.919 9.919 0 0012.012 2z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon-btn insta-btn" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4405F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>

              <div className="doodle-talk-annotation">
                <span className="doodle-arrow-left">⤵</span>
                <span>Let's Talk!</span>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: Brijesh Cutout Portrait (aboutpage1.png) */}
        <motion.div
          className="about-col-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="cutout-portrait-container">
            <img
              src="/aboutpage1.png"
              alt="Brijesh - Full Stack Developer"
              className="portrait-glow-cutout"
            />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Timeline & Process Cards 01 IDEA, 02 BUILD, 03 SHIP */}
        <div className="about-col-right">
          <div className="process-timeline-wrapper">
            <div className="timeline-vertical-rail" />

            {/* STEP 01: IDEA */}
            <motion.div
              className="step-card-box"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="step-timeline-dot">01</div>
              <div className="step-card-inner">
                <div className="step-header-group">
                  <div className="step-main-info">
                    <h3 className="step-title">IDEA</h3>
                    <p className="step-description">
                      I understand the problem, research solutions and plan the best approach.
                    </p>
                  </div>

                  {/* Big Graphic Illustration: Lightbulb & Checklist */}
                  <div className="step-graphic-box idea-graphic">
                    <div className="big-lightbulb-icon">💡</div>
                    <div className="checklist-tags">
                      <span>✓ Ideas</span>
                      <span>✓ Research</span>
                      <span>✓ Plan</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* STEP 02: BUILD (Canary Yellow Highlighted Card) */}
            <motion.div
              className="step-card-box is-highlighted-card"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <div className="step-timeline-dot highlight-dot">02</div>
              <div className="step-card-inner">
                <div className="step-header-group">
                  <div className="step-main-info">
                    <h3 className="step-title">BUILD</h3>
                    <p className="step-description">
                      I develop modern, scalable and user-friendly web applications.
                    </p>
                  </div>

                  {/* Big Graphic Illustration: Code IDE Window */}
                  <div className="step-graphic-box build-graphic">
                    <div className="ide-code-window">
                      <div className="ide-header">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="ide-code-lines">
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                    <span className="code-badge-sticker">&lt;/&gt;</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* STEP 03: SHIP */}
            <motion.div
              className="step-card-box"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              <div className="step-timeline-dot">03</div>
              <div className="step-card-inner">
                <div className="step-header-group">
                  <div className="step-main-info">
                    <h3 className="step-title">SHIP</h3>
                    <p className="step-description">
                      I test, deploy and keep improving based on real user feedback.
                    </p>
                  </div>

                  {/* Big Graphic Illustration: Rocket */}
                  <div className="step-graphic-box ship-graphic">
                    <div className="big-rocket-icon">🚀</div>
                    <div className="rocket-smoke-clouds">💨</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>

      <style>{`
        .about-exact-section {
          position: relative;
          background: #fdfaf2;
          color: var(--ink);
          padding: 90px 0 110px;
          overflow: hidden;
        }

        .about-exact-container {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.9fr) minmax(0, 1.05fr);
          gap: 28px;
          align-items: center;
        }

        /* LEFT COLUMN STYLING */
        .about-col-left {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .kicker-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--mono);
          font-size: 0.76rem;
          font-weight: 800;
          color: var(--green);
          letter-spacing: 0.12em;
        }

        .hero-name-title {
          font-family: var(--head);
          font-size: clamp(2.4rem, 4.2vw, 3.8rem);
          font-weight: 900;
          line-height: 1.04;
          margin: 10px 0 14px;
          letter-spacing: -0.02em;
          color: #11130f;
        }

        .hi-im {
          font-weight: 700;
          font-size: 0.85em;
        }

        .brijesh-neon-highlight {
          display: inline-block;
          background: var(--hero-yellow);
          padding: 2px 14px;
          border: 3px solid var(--ink);
          border-radius: 12px;
          box-shadow: 4px 4px 0 var(--ink);
          color: var(--ink);
        }

        .fullstack-pill-badge {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          border: 2px solid var(--ink);
          border-radius: 999px;
          background: var(--hero-yellow);
          font-family: var(--mono);
          font-size: 0.74rem;
          font-weight: 800;
          color: var(--ink);
          box-shadow: 3px 3px 0 var(--ink);
          width: fit-content;
          margin-bottom: 18px;
        }

        .about-lead-copy {
          font-size: 0.9rem;
          color: #4a483e;
          line-height: 1.5;
          margin-bottom: 22px;
        }

        /* 3 Quick Info Grid Column */
        .quick-info-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 8px;
          margin-bottom: 24px;
          width: 100%;
        }

        .info-badge-item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 6px;
          border: 2px solid var(--ink);
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 3px 3px 0 var(--ink);
          min-width: 0;
          width: 100%;
        }

        .info-icon {
          font-size: 1rem;
          flex-shrink: 0;
        }

        .info-text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
          min-width: 0;
          overflow: hidden;
        }

        .info-text strong {
          font-family: var(--head);
          font-size: 0.72rem;
          font-weight: 800;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .info-text small {
          font-family: var(--mono);
          font-size: 0.58rem;
          color: #555555;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          letter-spacing: -0.01em;
        }

        /* Connect Buttons Row */
        .connect-action-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .btn-connect-black {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border: 2.5px solid var(--ink);
          border-radius: 999px;
          background: var(--ink);
          color: #ffffff;
          font-family: var(--mono);
          font-size: 0.8rem;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 4px 4px 0 var(--hero-yellow);
          transition: transform 0.2s ease;
        }

        .btn-connect-black:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 var(--magenta);
        }

        .download-resume-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: var(--ink);
        }

        .download-icon-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 2px solid var(--ink);
          background: var(--hero-yellow);
          display: grid;
          place-items: center;
          font-weight: 800;
          box-shadow: 2px 2px 0 var(--ink);
        }

        .download-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .download-text strong {
          font-family: var(--head);
          font-size: 0.78rem;
        }

        .download-text small {
          font-family: var(--mono);
          font-size: 0.65rem;
          color: #666666;
        }

        /* Social Icons Wrapper */
        .social-icons-wrapper {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .social-links-row {
          display: flex;
          gap: 8px;
        }

        .social-icon-btn {
          width: 38px;
          height: 38px;
          border: 2px solid var(--ink);
          border-radius: 10px;
          background: #ffffff;
          display: grid;
          place-items: center;
          color: var(--ink);
          box-shadow: 2px 2px 0 var(--ink);
          transition: transform 0.15s ease, background 0.15s ease;
        }

        .social-icon-btn:hover {
          transform: translateY(-2px);
          background: var(--hero-yellow);
        }

        .doodle-talk-annotation {
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: var(--serif-italic);
          font-style: italic;
          font-size: 0.9rem;
          color: #555555;
        }

        /* CENTER COLUMN: PORTRAIT CUTOUT & NEON GLOW */
        .about-col-center {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-width: 0;
          overflow: hidden;
        }

        .cutout-portrait-container {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .portrait-glow-cutout {
          max-width: 100%;
          width: 100%;
          height: auto;
          max-height: 440px;
          object-fit: contain;
          filter: drop-shadow(4px 10px 18px rgba(0, 0, 0, 0.14));
          pointer-events: none;
        }

        .dark-sticky-note {
          position: absolute;
          bottom: 10px;
          right: -10px;
          background: #11130f;
          color: #ffffff;
          border: 2px solid var(--hero-yellow);
          padding: 8px 14px;
          border-radius: 12px;
          box-shadow: 4px 4px 0 var(--ink);
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--body);
          font-size: 0.76rem;
          font-weight: 800;
          transform: rotate(4deg);
        }

        .yellow-smiley {
          font-size: 1.1rem;
        }

        /* Doodle Text Tags around center portrait */
        .doodle-text-tag {
          position: absolute;
          font-family: var(--serif-italic);
          font-style: italic;
          font-size: 0.88rem;
          color: #444444;
          display: flex;
          flex-direction: column;
          line-height: 1.25;
          z-index: 5;
        }

        .tag-problem-solving {
          top: 10px;
          left: -14px;
        }

        .tag-building-products {
          top: 24px;
          right: -14px;
        }

        .tag-stack-left {
          left: -24px;
          top: 40%;
        }

        .tag-features-right {
          right: -24px;
          top: 42%;
        }

        .doodle-arrow-curved {
          font-size: 1.1rem;
        }

        /* RIGHT COLUMN: TIMELINE & PROCESS CARDS */
        .about-col-right {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .process-timeline-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding-left: 20px;
        }

        .timeline-vertical-rail {
          position: absolute;
          left: -6px;
          top: 18px;
          bottom: 18px;
          width: 2.5px;
          background: var(--ink);
          z-index: 1;
        }

        .step-card-box {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-start;
        }

        .step-timeline-dot {
          position: absolute;
          left: -20px;
          top: 18px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid var(--ink);
          background: #11130f;
          color: #ffffff;
          font-family: var(--head);
          font-size: 0.72rem;
          font-weight: 900;
          display: grid;
          place-items: center;
        }

        .step-timeline-dot.highlight-dot {
          background: var(--hero-yellow);
          color: var(--ink);
        }

        .step-card-inner {
          width: 100%;
          padding: 18px 20px;
          border: 2.5px solid var(--ink);
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 5px 5px 0 var(--ink);
        }

        .step-card-box.is-highlighted-card .step-card-inner {
          background: var(--hero-yellow);
          box-shadow: 7px 7px 0 var(--ink);
        }

        .step-header-group {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 14px;
        }

        .step-main-info {
          flex: 1;
        }

        .step-title {
          margin: 0 0 4px;
          font-family: var(--head);
          font-size: 1.35rem;
          font-weight: 900;
          color: var(--ink);
        }

        .step-description {
          margin: 0 0 12px;
          font-size: 0.84rem;
          color: #444444;
          line-height: 1.45;
        }

        .step-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .step-pills-row span {
          padding: 3px 9px;
          border: 1px solid var(--ink);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.85);
          font-family: var(--mono);
          font-size: 0.68rem;
          font-weight: 700;
        }

        /* Step Right Side Graphics */
        .step-graphic-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .idea-graphic {
          align-items: flex-end;
        }

        .big-lightbulb-icon {
          font-size: 2.2rem;
        }

        .checklist-tags {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-family: var(--mono);
          font-size: 0.62rem;
          font-weight: 800;
        }

        .checklist-tags span {
          background: var(--hero-yellow);
          padding: 1px 6px;
          border: 1px solid var(--ink);
          border-radius: 4px;
        }

        .build-graphic {
          position: relative;
        }

        .ide-code-window {
          width: 72px;
          height: 48px;
          border: 2px solid var(--ink);
          border-radius: 8px;
          background: #11130f;
          padding: 4px;
        }

        .ide-header {
          display: flex;
          gap: 3px;
          margin-bottom: 4px;
        }

        .ide-header span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #ff5f56;
        }

        .ide-header span:nth-child(2) { background: #ffbd2e; }
        .ide-header span:nth-child(3) { background: #27c93f; }

        .ide-code-lines i {
          display: block;
          height: 3px;
          background: var(--hero-yellow);
          margin-bottom: 3px;
          border-radius: 2px;
        }

        .ide-code-lines i:nth-child(1) { width: 80%; }
        .ide-code-lines i:nth-child(2) { width: 50%; }
        .ide-code-lines i:nth-child(3) { width: 90%; }

        .code-badge-sticker {
          position: absolute;
          bottom: -6px;
          right: -8px;
          background: #ffffff;
          border: 1.5px solid var(--ink);
          border-radius: 4px;
          font-family: var(--mono);
          font-size: 0.65rem;
          font-weight: 900;
          padding: 1px 4px;
        }

        .big-rocket-icon {
          font-size: 2.2rem;
        }

        .rocket-smoke-clouds {
          font-size: 0.9rem;
        }

        /* BOTTOM STATS & CTA BAR */
        .bottom-stats-cta-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          border: 2.5px solid var(--ink);
          border-radius: 18px;
          background: #11130f;
          color: #ffffff;
          margin-top: 22px;
          box-shadow: 6px 6px 0 var(--ink);
        }

        .status-always-learning {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .live-green-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 8px var(--green);
        }

        .status-always-learning div {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
        }

        .status-always-learning strong {
          font-family: var(--head);
          font-size: 0.76rem;
        }

        .status-always-learning small {
          font-family: var(--mono);
          font-size: 0.64rem;
          color: #aaaaaa;
        }

        .stat-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.1;
        }

        .stat-column strong {
          font-family: var(--head);
          font-size: 1.1rem;
          color: var(--hero-yellow);
        }

        .stat-column small {
          font-family: var(--mono);
          font-size: 0.62rem;
          color: #aaaaaa;
        }

        .btn-view-projects-yellow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 18px;
          border: 2px solid var(--ink);
          border-radius: 999px;
          background: var(--hero-yellow);
          color: var(--ink);
          font-family: var(--mono);
          font-size: 0.74rem;
          font-weight: 800;
          text-decoration: none;
          transition: transform 0.15s ease;
        }

        .btn-view-projects-yellow:hover {
          transform: translateY(-2px);
          background: var(--magenta);
          color: #ffffff;
        }

        @media (max-width: 1120px) {
          .about-exact-container {
            display: flex;
            flex-direction: column;
            gap: 28px;
          }
          .about-col-left {
            display: contents;
          }
          .about-header-block {
            order: 1;
            width: 100%;
          }
          .about-col-center {
            order: 2;
            width: 100%;
          }
          .quick-info-grid {
            order: 3;
            width: 100%;
          }
          .about-col-right {
            order: 4;
            width: 100%;
          }
          .about-social-block {
            order: 5;
            width: 100%;
          }
          .doodle-text-tag {
            position: relative;
            inset: auto;
            margin-bottom: 8px;
          }
          .bottom-stats-cta-bar {
            flex-wrap: wrap;
            gap: 14px;
          }
        }

        @media (max-width: 480px) {
          .quick-info-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .connect-action-row {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
          }
          .btn-connect-black,
          .download-resume-wrap {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
