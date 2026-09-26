import { motion } from 'framer-motion'

const ITEMS = [
  ['2026 - Present', 'Full Stack Developer Intern', 'CleanCode', 'Building UI components, REST APIs, auth flows, and deployment-friendly application features with a production mindset.'],
  ['2024 - 2026', 'MCA - Master of Computer Applications', 'St Agnes Autonomous College, Mangalore', 'Studying software engineering, web development, databases, and cloud-oriented application architecture.'],
  ['2023', 'Full Stack & Web Development Intern', 'Encode and Data Tech', 'Built responsive web applications and practiced complete development cycles from UI structure to API integration.'],
  ['2022 - 2023', 'Self-Taught Developer', 'Personal Projects', 'Started with HTML, CSS, and JavaScript, then moved into React, Node.js, Python, databases, and project-based learning.'],
]

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="wrap experience-grid">
        <div>
          <span className="section-kicker">Journey</span>
          <h2 className="section-title">Learning, building, and leveling up in public.</h2>
          <p className="lead">A practical path through formal study, internships, and self-directed projects.</p>
        </div>

        <div className="timeline">
          {ITEMS.map(([year, role, place, copy], index) => (
            <motion.article
              key={`${year}-${role}`}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <time>{year}</time>
              <h3>{role}</h3>
              <strong>{place}</strong>
              <p>{copy}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          background: var(--ink);
          color: var(--paper);
        }
        .experience-section .section-kicker {
          color: var(--acid);
        }
        .experience-section .section-kicker::before {
          background: var(--paper);
        }
        .experience-section .lead {
          color: rgba(245, 240, 230, 0.72);
        }
        .experience-grid {
          display: grid;
          grid-template-columns: 0.82fr 1.18fr;
          gap: 60px;
        }
        .timeline {
          position: relative;
          display: grid;
          gap: 16px;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 15px;
          top: 12px;
          bottom: 12px;
          width: 2px;
          background: var(--acid);
        }
        .timeline article {
          position: relative;
          margin-left: 48px;
          padding: 22px;
          border: 2px solid var(--paper);
          background: rgba(245, 240, 230, 0.08);
        }
        .timeline article::before {
          content: '';
          position: absolute;
          left: -42px;
          top: 24px;
          width: 18px;
          height: 18px;
          border: 2px solid var(--paper);
          background: var(--acid);
          border-radius: 50%;
        }
        .timeline time {
          display: inline-flex;
          margin-bottom: 12px;
          font-family: var(--mono);
          font-size: 0.76rem;
          font-weight: 800;
          color: var(--acid);
        }
        .timeline h3 {
          margin: 0;
          font-family: var(--head);
          font-size: clamp(1.35rem, 2.4vw, 2rem);
          line-height: 1;
        }
        .timeline strong {
          display: block;
          margin-top: 8px;
          color: rgba(245, 240, 230, 0.78);
        }
        .timeline p {
          margin: 12px 0 0;
          color: rgba(245, 240, 230, 0.64);
        }
        @media (max-width: 900px) {
          .experience-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
