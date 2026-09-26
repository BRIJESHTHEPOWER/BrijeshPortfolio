import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Replace with your actual WhatsApp phone number including country code (without + or spaces)
// Example: "919876543210" for India (+91)
const WHATSAPP_NUMBER = '918301840897'

const PRESET_TOPICS = [
  'General Inquiry / Project Discussion',
  'Build a new web application',
  'Add a feature to existing project',
  'Freelance / Contract work',
  'Code review & performance optimization',
]

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState(PRESET_TOPICS[0])
  const [customMessage, setCustomMessage] = useState('')

  const handleSendMessage = (e) => {
    e?.preventDefault()
    let textDetails = ''
    if (customMessage.trim()) {
      textDetails = `Hi Brijesh! ${customMessage.trim()}`
    } else if (selectedTopic && selectedTopic !== 'General Inquiry / Project Discussion') {
      textDetails = `Hi Brijesh! I'd like to discuss: ${selectedTopic}`
    } else {
      textDetails = `Hi Brijesh, I saw your portfolio and would like to connect!`
    }

    const encodedText = encodeURIComponent(textDetails)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="wa-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="wa-card paper-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.22 }}
          >
            <div className="wa-card-header">
              <div className="wa-avatar-wrap">
                <div className="wa-avatar">B</div>
                <span className="wa-status-dot" />
              </div>
              <div>
                <h4 className="wa-card-title">Message Brijesh</h4>
                <p className="wa-card-sub">Typically replies quickly on WhatsApp</p>
              </div>
              <button className="wa-close-btn" onClick={() => setIsOpen(false)} aria-label="Close modal">
                ✕
              </button>
            </div>

            <form onSubmit={handleSendMessage} className="wa-card-body">
              <label className="wa-label">
                Select Project Requirement:
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="wa-select"
                >
                  {PRESET_TOPICS.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </label>

              <label className="wa-label">
                Details / Notes (Optional):
                <textarea
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="e.g., Want to add a new dashboard view or integration..."
                  className="wa-textarea"
                  rows={3}
                />
              </label>

              <button type="submit" className="wa-send-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Open WhatsApp Chat
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="wa-trigger-wrapper">
        {!isOpen && (
          <span className="wa-tooltip">Direct WhatsApp Chat</span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`wa-float-btn ${isOpen ? 'active' : ''}`}
          aria-label="Contact on WhatsApp"
        >
          <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="wa-pulse" />
        </button>
      </div>

      <style>{`
        .wa-container {
          position: fixed;
          bottom: calc(28px + env(safe-area-inset-bottom, 0px));
          right: clamp(16px, 4vw, 28px);
          z-index: 9990;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
          font-family: var(--body);
        }
        .wa-trigger-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .wa-tooltip {
          position: absolute;
          right: 68px;
          white-space: nowrap;
          background: var(--ink);
          color: var(--paper);
          font-family: var(--mono);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 6px;
          border: 1px solid var(--acid);
          pointer-events: none;
          box-shadow: 0 4px 14px rgba(0,0,0,0.18);
          animation: floatTooltip 3s ease-in-out infinite;
        }
        @keyframes floatTooltip {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .wa-float-btn {
          position: relative;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          border: 2px solid var(--ink);
          background: #25D366;
          color: #ffffff;
          display: grid;
          place-items: center;
          cursor: pointer;
          box-shadow: 4px 4px 0 var(--ink);
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
        }
        .wa-float-btn:hover {
          transform: translate(-2px, -2px) scale(1.05);
          box-shadow: 6px 6px 0 var(--ink);
          background: #20bd5a;
        }
        .wa-float-btn.active {
          background: var(--ink);
          color: #25D366;
        }
        .wa-icon {
          width: 30px;
          height: 30px;
        }
        .wa-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid #25D366;
          opacity: 0.75;
          animation: waPulse 2s infinite ease-out;
          pointer-events: none;
        }
        @keyframes waPulse {
          0% { transform: scale(0.95); opacity: 0.8; }
          100% { transform: scale(1.35); opacity: 0; }
        }

        .wa-card {
          width: min(320px, calc(100vw - 32px));
          background: var(--paper);
          border: 2px solid var(--ink);
          box-shadow: 8px 8px 0 var(--ink);
          border-radius: 12px;
          overflow: hidden;
        }
        .wa-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: var(--ink);
          color: var(--paper);
          border-bottom: 2px solid var(--ink);
        }
        .wa-avatar-wrap {
          position: relative;
        }
        .wa-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--acid);
          color: var(--ink);
          font-family: var(--head);
          font-weight: 900;
          display: grid;
          place-items: center;
          font-size: 0.85rem;
          border: 2px solid var(--paper);
        }
        .wa-status-dot {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 10px;
          height: 10px;
          background: #25D366;
          border: 2px solid var(--ink);
          border-radius: 50%;
        }
        .wa-card-title {
          margin: 0;
          font-size: 0.95rem;
          font-family: var(--head);
          font-weight: 800;
          color: var(--paper);
        }
        .wa-card-sub {
          margin: 2px 0 0;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.72);
        }
        .wa-close-btn {
          margin-left: auto;
          background: transparent;
          border: none;
          color: var(--paper);
          font-size: 1rem;
          cursor: pointer;
          padding: 4px;
          opacity: 0.8;
          transition: opacity 150ms;
        }
        .wa-close-btn:hover {
          opacity: 1;
        }
        .wa-card-body {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .wa-label {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 800;
          font-family: var(--mono);
          color: var(--ink);
        }
        .wa-select, .wa-textarea {
          width: 100%;
          border: 2px solid var(--ink);
          background: rgba(255, 252, 241, 0.9);
          padding: 10px;
          font-size: 0.82rem;
          color: var(--ink);
          outline: none;
          border-radius: 6px;
        }
        .wa-select:focus, .wa-textarea:focus {
          background: white;
          box-shadow: 3px 3px 0 var(--acid);
        }
        .wa-send-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 12px;
          border: 2px solid var(--ink);
          border-radius: 6px;
          background: #25D366;
          color: white;
          font-weight: 800;
          font-size: 0.9rem;
          cursor: pointer;
          box-shadow: 4px 4px 0 var(--ink);
          transition: transform 150ms ease, box-shadow 150ms ease;
        }
        .wa-send-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 var(--ink);
          background: #20bd5a;
        }

        @media (max-width: 600px) {
          .wa-container {
            bottom: calc(20px + env(safe-area-inset-bottom, 0px));
            right: 16px;
          }
          .wa-tooltip {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
