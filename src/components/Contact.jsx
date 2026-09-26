import { useState } from 'react'
import { motion } from 'framer-motion'

const CONTACT_METHODS = [
  {
    id: 'whatsapp',
    label: 'WHATSAPP',
    value: 'Chat directly on WhatsApp',
    href: 'https://wa.me/918301840897?text=Hi%20Brijesh%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.483 1.332 5.001l-1.417 5.176 5.297-1.39a9.92 9.92 0 004.773 1.218h.004c5.505 0 9.988-4.479 9.989-9.985 0-2.667-1.037-5.175-2.923-7.062A9.919 9.919 0 0012.012 2z" />
      </svg>
    ),
    bgColor: '#e8f7ed',
  },
  {
    id: 'email',
    label: 'EMAIL',
    value: 'brijeshwork08@gmail.com',
    href: 'mailto:brijeshwork08@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    bgColor: '#11130f',
    iconColor: '#fff',
  },
  {
    id: 'github',
    label: 'GITHUB',
    value: 'github.com/BRIJESHTHEPOWER',
    href: 'https://github.com/BRIJESHTHEPOWER',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    bgColor: '#11130f',
    iconColor: '#fff',
  },
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    value: 'linkedin.com/in/brijesh-611a2b31b',
    href: 'https://www.linkedin.com/in/brijesh-611a2b31b',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z" />
      </svg>
    ),
    bgColor: '#eaf3fc',
  },
  {
    id: 'instagram',
    label: 'INSTAGRAM',
    value: 'instagram.com',
    href: 'https://www.instagram.com/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4405F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    bgColor: '#fce8ef',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section id="contact" className="section contact-section-v2">
      <div className="wrap contact-container">
        
        {/* LEFT COLUMN: Copy Title, Contact Cards, Availability Pill */}
        <div className="contact-left-col">
          <div className="kicker-group">
            <span className="section-kicker">Contact</span>
          </div>

          <h2 className="contact-main-title">
            Have a build in mind? Let us make it{' '}
            <span className="concrete-highlight">
              concrete.
              <span className="doodle-sparkle">⚡</span>
            </span>
          </h2>

          <p className="contact-lead-text">
            Send a message for freelance work, internships, collaborations, or product ideas that need a clean technical direction.
          </p>

          {/* Contact Method Cards Stack */}
          <div className="contact-cards-stack">
            {CONTACT_METHODS.map((method) => (
              <a
                key={method.id}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="contact-pill-card"
              >
                <div className="card-icon-wrap" style={{ background: method.bgColor, color: method.iconColor || 'inherit' }}>
                  {method.icon}
                </div>
                <div className="card-text-group">
                  <span className="card-label-mono">{method.label}</span>
                  <strong className="card-value-text">{method.value}</strong>
                </div>
                <div className="card-arrow-circle">
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>

          {/* Availability Status Badge & Annotation */}
          <div className="availability-wrapper">
            <div className="availability-badge-pill">
              <span className="status-live-dot" />
              <span>AVAILABLE FOR WORK</span>
            </div>
            <div className="divider-line" />
            <span className="availability-subtext">
              Open to opportunities, collaborations and interesting projects.
            </span>
          </div>

          {/* Curved Hand-drawn Annotation */}
          <div className="doodle-annotation-left">
            <span>Ideas → Collaborate → Build ↗</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Browser Window Form Frame */}
        <motion.div
          className="contact-right-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Floating Badge */}
          <div className="floating-top-badge">
            <span className="green-pulse-dot" />
            <span>Open for Freelance / Full-time</span>
          </div>

          {/* Browser Window Box Container */}
          <div className="browser-form-frame">
            <div className="browser-header-bar">
              <div className="window-action-dots">
                <span className="dot-red" />
                <span className="dot-yellow" />
                <span className="dot-green" />
              </div>
              <div className="browser-title-badge">
                <span>SEND A MESSAGE</span>
                <span className="mail-icon">✉</span>
              </div>
            </div>

            <form className="browser-form-body" onSubmit={handleSubmit}>

              {/* Form Input: Name */}
              <div className="form-field">
                <label htmlFor="name-input">Name</label>
                <div className="input-with-icon">
                  <span className="field-icon">👤</span>
                  <input
                    id="name-input"
                    required
                    name="name"
                    type="text"
                    placeholder="Your name"
                  />
                </div>
              </div>

              {/* Form Input: Email */}
              <div className="form-field">
                <label htmlFor="email-input">Email</label>
                <div className="input-with-icon">
                  <span className="field-icon">✉</span>
                  <input
                    id="email-input"
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Form Input: Message */}
              <div className="form-field">
                <label htmlFor="message-input">Message</label>
                <div className="input-with-icon textarea-wrap">
                  <span className="field-icon textarea-icon">📝</span>
                  <textarea
                    id="message-input"
                    required
                    name="message"
                    rows="4"
                    placeholder="Tell me what you want to build..."
                  />
                </div>
              </div>

              {/* Submit Action Row */}
              <div className="form-submit-row">
                <button type="submit" className="send-message-btn">
                  <span>✈ {sent ? 'Message Sent!' : 'Send message'}</span>
                  <span className="btn-arrow">→</span>
                </button>

                <div className="annotation-click-hint">
                  <span>Click to start a conversation!</span>
                </div>
              </div>
            </form>

          </div>

          {/* Bottom Right Code Sticker */}
          <div className="bottom-code-sticker">
            <span className="code-icon">&lt;/&gt;</span>
            <span>Let's turn your idea into reality.</span>
          </div>

          {/* Bottom Center Doodle Annotation */}
          <div className="bottom-doodle-text">
            <span>GOOD IDEAS BUILD GOOD THINGS.</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-section-v2 {
          position: relative;
          background: #fdfaf2;
          color: var(--ink);
          padding: 100px 0 110px;
          overflow: hidden;
        }

        .contact-container {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: clamp(32px, 5vw, 54px);
          align-items: start;
        }

        /* Left Column Copy & Cards */
        .contact-left-col {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .contact-main-title {
          font-family: var(--head);
          font-size: clamp(2.2rem, 4.8vw, 4.2rem);
          font-weight: 800;
          line-height: 1.06;
          margin: 12px 0 20px;
          letter-spacing: -0.02em;
          color: #11130f;
        }

        .concrete-highlight {
          position: relative;
          background: var(--hero-yellow);
          padding: 0 10px;
          border-radius: 6px;
          display: inline-block;
          border: 2px solid var(--ink);
          box-shadow: 3px 3px 0 var(--ink);
        }

        .doodle-sparkle {
          position: absolute;
          right: -24px;
          top: -8px;
          font-size: 1.4rem;
        }

        .contact-lead-text {
          font-size: clamp(0.95rem, 1.5vw, 1.15rem);
          color: #4a483e;
          line-height: 1.6;
          margin-bottom: 28px;
          max-width: 520px;
        }

        /* Contact Method Cards */
        .contact-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 30px;
        }

        .contact-pill-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 18px;
          border: 2px solid var(--ink);
          border-radius: 16px;
          background: #faf8f2;
          text-decoration: none;
          color: var(--ink);
          box-shadow: 4px 4px 0 var(--hero-yellow);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          min-width: 0;
        }

        .contact-pill-card:hover {
          transform: translate(-3px, -3px);
          background: #ffffff;
          box-shadow: 6px 6px 0 var(--ink);
        }

        .card-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 2px solid var(--ink);
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .card-text-group {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }

        .card-label-mono {
          font-family: var(--mono);
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--green);
          letter-spacing: 0.08em;
        }

        .card-value-text {
          font-family: var(--body);
          font-size: clamp(0.85rem, 1.2vw, 0.95rem);
          font-weight: 800;
          color: var(--ink);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-arrow-circle {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 2px solid var(--ink);
          background: var(--hero-yellow);
          display: grid;
          place-items: center;
          font-weight: 800;
          font-size: 0.95rem;
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }

        .contact-pill-card:hover .card-arrow-circle {
          transform: rotate(-45deg);
          background: var(--magenta);
          color: #ffffff;
        }

        /* Availability Badge */
        .availability-wrapper {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 10px;
        }

        .availability-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border: 2px solid var(--ink);
          border-radius: 999px;
          background: var(--hero-yellow);
          font-family: var(--mono);
          font-size: 0.74rem;
          font-weight: 800;
          color: var(--ink);
          box-shadow: 3px 3px 0 var(--ink);
        }

        .status-live-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 8px var(--green);
        }

        .divider-line {
          width: 2px;
          height: 20px;
          background: var(--ink);
        }

        .availability-subtext {
          font-family: var(--body);
          font-size: 0.85rem;
          color: #555555;
          font-weight: 600;
          max-width: 260px;
        }

        .doodle-annotation-left {
          margin-top: 14px;
          font-family: var(--serif-italic);
          font-style: italic;
          font-size: 0.95rem;
          color: #666666;
        }

        /* RIGHT COLUMN: BROWSER FORM FRAME */
        .contact-right-col {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .floating-top-badge {
          position: absolute;
          top: -24px;
          right: 20px;
          z-index: 10;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px;
          border: 2px solid var(--ink);
          border-radius: 999px;
          background: #ffffff;
          font-family: var(--mono);
          font-size: 0.74rem;
          font-weight: 800;
          box-shadow: 3px 3px 0 var(--ink);
        }

        .green-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--green);
        }

        .browser-form-frame {
          position: relative;
          border: 3px solid var(--ink);
          border-radius: 20px;
          background: #fdfaf2;
          box-shadow: 10px 10px 0 var(--ink);
          overflow: hidden;
        }

        .browser-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background: #ebe4d4;
          border-bottom: 2.5px solid var(--ink);
        }

        .window-action-dots {
          display: flex;
          gap: 7px;
        }

        .window-action-dots span {
          width: 11px;
          height: 11px;
          border: 2px solid var(--ink);
          border-radius: 50%;
        }

        .dot-red { background: var(--coral); }
        .dot-yellow { background: var(--hero-yellow); }
        .dot-green { background: var(--green); }

        .browser-title-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--mono);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* Form Body */
        .browser-form-body {
          position: relative;
          padding: 28px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }



        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-field label {
          font-family: var(--body);
          font-size: 0.88rem;
          font-weight: 800;
          color: var(--ink);
        }

        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }

        .field-icon {
          position: absolute;
          left: 14px;
          font-size: 1rem;
          pointer-events: none;
          color: #777777;
        }

        .textarea-icon {
          top: 14px;
        }

        .input-with-icon input,
        .input-with-icon textarea {
          width: 100%;
          padding: 12px 14px 12px 42px;
          border: 2px solid var(--ink);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.85);
          font-family: var(--body);
          font-size: 0.94rem;
          font-weight: 600;
          color: var(--ink);
          outline: none;
          transition: background 0.2s ease, box-shadow 0.2s ease;
        }

        .input-with-icon textarea {
          min-height: 120px;
          resize: vertical;
        }

        .input-with-icon input:focus,
        .input-with-icon textarea:focus {
          background: #ffffff;
          box-shadow: 4px 4px 0 var(--hero-yellow);
        }

        /* Submit Button Row */
        .form-submit-row {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 10px;
        }

        .send-message-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border: 2.5px solid var(--ink);
          border-radius: 999px;
          background: var(--ink);
          color: #ffffff;
          font-family: var(--body);
          font-size: 0.95rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 5px 5px 0 var(--hero-yellow);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .send-message-btn:hover {
          transform: translate(-3px, -3px);
          box-shadow: 8px 8px 0 var(--magenta);
          background: #000000;
        }

        .btn-arrow {
          font-size: 1.1rem;
        }

        .annotation-click-hint {
          font-family: var(--serif-italic);
          font-style: italic;
          font-size: 0.92rem;
          color: #555555;
        }



        /* Bottom Code Sticker */
        .bottom-code-sticker {
          position: absolute;
          bottom: -22px;
          right: -10px;
          background: #ffffff;
          border: 2.5px solid var(--ink);
          padding: 8px 16px;
          border-radius: 12px;
          box-shadow: 4px 4px 0 var(--ink);
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--body);
          font-size: 0.8rem;
          font-weight: 800;
          transform: rotate(-3deg);
        }

        .code-icon {
          font-family: var(--mono);
          color: var(--magenta);
          font-weight: 900;
        }

        .bottom-doodle-text {
          margin-top: 18px;
          text-align: center;
          font-family: var(--mono);
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #666666;
        }

        @media (max-width: 960px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .bottom-code-sticker {
            position: relative;
            inset: auto;
            transform: none;
            margin-top: 10px;
            max-width: 100%;
          }
          .floating-top-badge {
            position: relative;
            top: auto;
            right: auto;
            margin-bottom: 12px;
            align-self: flex-start;
          }
          .form-submit-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .send-message-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
