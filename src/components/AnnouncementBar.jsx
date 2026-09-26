import { motion } from 'framer-motion'

export default function AnnouncementBar() {
  return (
    <motion.div
      className="announcement-bar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="announcement-content">
        <a href="#contact" className="announcement-link">
          <span>YAY! Your free guide is on its way to your inbox! Ready to fast-track your dream writing career? Join the 1,500+ copywriters who started their journey with the Copy Posse Launch Pad</span>
          <span className="announcement-pointer" aria-hidden="true">👇</span>
        </a>
      </div>

      <style>{`
        .announcement-bar {
          position: relative;
          z-index: 1010;
          width: 100%;
          background-color: var(--magenta);
          color: #ffffff;
          padding: 12px 20px;
          text-align: center;
          font-family: var(--body);
          font-size: clamp(0.78rem, 1.25vw, 0.94rem);
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: -0.01em;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
        }
        .announcement-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .announcement-link {
          color: #ffffff;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 6px;
          transition: opacity 0.2s ease;
        }
        .announcement-link:hover {
          opacity: 0.92;
          text-decoration: underline;
        }
        .announcement-pointer {
          font-size: 1.1em;
          display: inline-block;
          animation: bounceDown 1.8s infinite ease-in-out;
        }
        @keyframes bounceDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        @media (max-width: 640px) {
          .announcement-bar {
            padding: 10px 14px;
            font-size: 0.76rem;
          }
        }
      `}</style>
    </motion.div>
  )
}
