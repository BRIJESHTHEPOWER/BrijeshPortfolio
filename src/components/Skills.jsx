import { useState, useRef } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'

const ALL_SKILLS = [
  { name: 'React', category: 'Frontend', color: 'var(--blue)', textColor: '#fff' },
  { name: 'JavaScript', category: 'Frontend', color: 'var(--hero-yellow)', textColor: 'var(--ink)' },
  { name: 'HTML5 & CSS3', category: 'Frontend', color: 'var(--coral)', textColor: '#fff' },
  { name: 'Tailwind CSS', category: 'Frontend', color: '#38bdf8', textColor: 'var(--ink)' },
  { name: 'Framer Motion', category: 'Frontend', color: 'var(--magenta)', textColor: '#fff' },
  
  { name: 'Node.js', category: 'Backend', color: 'var(--green)', textColor: '#fff' },
  { name: 'Express.js', category: 'Backend', color: '#11130f', textColor: '#fff' },
  { name: 'Python', category: 'Backend', color: 'var(--hero-yellow)', textColor: 'var(--ink)' },
  { name: 'FastAPI', category: 'Backend', color: 'var(--acid)', textColor: 'var(--ink)' },
  { name: 'REST APIs', category: 'Backend', color: 'var(--coral)', textColor: '#fff' },

  { name: 'PostgreSQL', category: 'Data', color: 'var(--blue)', textColor: '#fff' },
  { name: 'MongoDB', category: 'Data', color: 'var(--green)', textColor: '#fff' },
  { name: 'Schema Design', category: 'Data', color: 'var(--violet)', textColor: '#fff' },
  { name: 'Analytics', category: 'Data', color: 'var(--magenta)', textColor: '#fff' },

  { name: 'Git & GitHub', category: 'Workflow', color: 'var(--ink)', textColor: '#fff' },
  { name: 'CI/CD Pipelines', category: 'Workflow', color: 'var(--blue)', textColor: '#fff' },
  { name: 'Vite', category: 'Workflow', color: 'var(--hero-yellow)', textColor: 'var(--ink)' },
  { name: 'Deployment', category: 'Workflow', color: 'var(--acid)', textColor: 'var(--ink)' },
]

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Data', 'Workflow']

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')
  const containerRef = useRef(null)
  const pillRefs = useRef([])

  // Motion values for offset displacement when bumped
  const offsets = useRef(ALL_SKILLS.map(() => ({
    x: useMotionValue(0),
    y: useMotionValue(0)
  })))

  const activeDragIndex = useRef(null)

  const filteredSkills = ALL_SKILLS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  )

  const handleDragStart = (index) => {
    activeDragIndex.current = index
  }

  const handleDrag = (dragIndex) => {
    const activeEl = pillRefs.current[dragIndex]
    const containerEl = containerRef.current
    if (!activeEl || !containerEl) return

    const activeRect = activeEl.getBoundingClientRect()
    const activeCenter = {
      x: activeRect.left + activeRect.width / 2,
      y: activeRect.top + activeRect.height / 2
    }

    ALL_SKILLS.forEach((_, j) => {
      if (j === dragIndex) return

      const targetEl = pillRefs.current[j]
      if (!targetEl) return

      const targetRect = targetEl.getBoundingClientRect()
      const targetCenter = {
        x: targetRect.left + targetRect.width / 2,
        y: targetRect.top + targetRect.height / 2
      }

      let dx = targetCenter.x - activeCenter.x
      let dy = targetCenter.y - activeCenter.y
      let dist = Math.sqrt(dx * dx + dy * dy) || 0.001

      const minThreshold = (activeRect.width / 2 + targetRect.width / 2) * 0.75

      if (dist < minThreshold) {
        const overlap = minThreshold - dist
        const nx = dx / dist
        const ny = dy / dist

        let pushX = offsets.current[j].x.get() + nx * overlap * 0.7
        let pushY = offsets.current[j].y.get() + ny * overlap * 0.7

        animate(offsets.current[j].x, pushX, { type: 'spring', stiffness: 350, damping: 22 })
        animate(offsets.current[j].y, pushY, { type: 'spring', stiffness: 350, damping: 22 })
      }
    })
  }

  const resetAllPills = () => {
    ALL_SKILLS.forEach((_, idx) => {
      animate(offsets.current[idx].x, 0, { type: 'spring', stiffness: 220, damping: 20 })
      animate(offsets.current[idx].y, 0, { type: 'spring', stiffness: 220, damping: 20 })
    })
  }

  const shufflePills = () => {
    ALL_SKILLS.forEach((_, idx) => {
      const randomX = (Math.random() - 0.5) * 160
      const randomY = (Math.random() - 0.5) * 120
      animate(offsets.current[idx].x, randomX, { type: 'spring', stiffness: 260, damping: 18 })
      animate(offsets.current[idx].y, randomY, { type: 'spring', stiffness: 260, damping: 18 })
    })
  }

  return (
    <section id="skills" className="section skills-unified-section">
      <div className="wrap">
        {/* Section Header */}
        <div className="skills-head">
          <div>
            <span className="section-kicker">Interactive Tech Playground</span>
            <h2 className="section-title">Tools I Use to Build Full-Stack Products</h2>
          </div>
          <p className="lead">
            Every layer of technology in one interactive box. Drag any pill, bump them together, filter by category, or shuffle the canvas!
          </p>
        </div>

        {/* ONE UNIFIED MASTER SKILLS BOX */}
        <motion.div
          className="master-skills-box paper-panel grain-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Controls Bar inside Master Box */}
          <div className="master-box-header">
            <div className="category-filter-group">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`tech-filter-pill ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat === 'All' ? '⚡ All Stack (18)' : cat}
                </button>
              ))}
            </div>

            <div className="master-action-controls">
              <button
                type="button"
                className="action-control-btn shuffle-btn"
                onClick={shufflePills}
                title="Shuffle Pill Layout"
              >
                Shuffle 🎲
              </button>

              <button
                type="button"
                className="action-control-btn reset-btn"
                onClick={resetAllPills}
                title="Reset Positions"
              >
                Reset ↺
              </button>

              <span className="physics-drag-badge">🖐️ Drag & Bump Physics</span>
            </div>
          </div>

          {/* Interactive Physics Playground Canvas inside Single Box */}
          <div ref={containerRef} className="skills-interactive-canvas">
            {ALL_SKILLS.map((skillItem, index) => {
              const isFilteredIn = activeCategory === 'All' || skillItem.category === activeCategory

              return (
                <motion.span
                  key={skillItem.name}
                  ref={(el) => (pillRefs.current[index] = el)}
                  className={`master-tech-pill ${isFilteredIn ? 'is-highlighted' : 'is-dimmed'}`}
                  style={{
                    '--i': index,
                    backgroundColor: skillItem.color,
                    color: skillItem.textColor,
                    x: offsets.current[index].x,
                    y: offsets.current[index].y,
                  }}
                  drag
                  dragConstraints={containerRef}
                  dragElastic={0.15}
                  onDragStart={() => handleDragStart(index)}
                  onDrag={() => handleDrag(index)}
                  whileHover={{ scale: 1.1, zIndex: 90 }}
                  whileTap={{ scale: 1.15 }}
                  whileDrag={{ scale: 1.2, zIndex: 100, boxShadow: '8px 8px 0 var(--ink)' }}
                >
                  <span className="pill-category-dot" />
                  <span className="pill-text">{skillItem.name}</span>
                  <span className="pill-tag">{skillItem.category}</span>
                </motion.span>
              )
            })}
          </div>

          {/* Footer Bar inside Master Box */}
          <div className="master-box-footer">
            <span className="footer-status-indicator">
              <span className="status-dot" /> High-Performance Full Stack Architecture
            </span>
            <span className="footer-tagline">React • Node.js • Python • PostgreSQL • Cloud</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .skills-unified-section {
          background: rgba(235, 228, 212, 0.45);
          padding: 95px 0;
        }

        .skills-head {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 40px;
          align-items: end;
          margin-bottom: 40px;
        }

        /* SINGLE UNIFIED MASTER SKILLS BOX STYLING */
        .master-skills-box {
          position: relative;
          border: 3px solid var(--ink);
          border-radius: 24px;
          background: #fdfaf2;
          box-shadow: 10px 10px 0 var(--ink), var(--shadow);
          overflow: hidden;
          padding: 0;
        }

        /* Header controls bar inside master box */
        .master-box-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding: 20px 24px;
          background: var(--hero-yellow);
          border-bottom: 3px solid var(--ink);
          height: auto;
          min-height: 0;
        }

        .category-filter-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
        }

        .tech-filter-pill {
          padding: 7px 16px;
          border: 2px solid var(--ink);
          border-radius: 999px;
          background: #ffffff;
          color: var(--ink);
          font-family: var(--mono);
          font-size: 0.78rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 2px 2px 0 var(--ink);
          transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
        }

        .tech-filter-pill:hover,
        .tech-filter-pill.active {
          background: var(--magenta);
          color: #ffffff;
          box-shadow: 4px 4px 0 var(--ink);
          transform: translateY(-2px);
        }

        .master-action-controls {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .action-control-btn {
          padding: 7px 14px;
          border: 2px solid var(--ink);
          border-radius: 999px;
          background: #ffffff;
          color: var(--ink);
          font-family: var(--mono);
          font-size: 0.76rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 2px 2px 0 var(--ink);
          transition: transform 0.15s ease, background 0.15s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
        }

        .action-control-btn:hover {
          transform: translateY(-2px);
          box-shadow: 4px 4px 0 var(--ink);
        }

        .shuffle-btn:hover {
          background: var(--acid);
        }

        .reset-btn:hover {
          background: var(--coral);
          color: #ffffff;
        }

        .physics-drag-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border: 2px solid var(--ink);
          border-radius: 999px;
          background: #ffffff;
          font-family: var(--mono);
          font-size: 0.74rem;
          font-weight: 800;
          color: var(--ink);
          box-shadow: 2px 2px 0 var(--ink);
          user-select: none;
          white-space: nowrap;
        }

        /* SINGLE CANVAS STAGE FOR ALL PILLS */
        .skills-interactive-canvas {
          position: relative;
          min-height: 400px;
          padding: 32px 28px;
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
          gap: 14px;
          background: 
            linear-gradient(90deg, rgba(17, 19, 15, 0.04) 1px, transparent 1px) 0 0 / 36px 36px,
            linear-gradient(rgba(17, 19, 15, 0.04) 1px, transparent 1px) 0 0 / 36px 36px,
            #fdfaf2;
        }

        /* INDIVIDUAL DRAGGABLE PILL INSIDE SINGLE BOX */
        .master-tech-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 11px 20px;
          border: 2px solid var(--ink);
          border-radius: 999px;
          font-family: var(--body);
          font-size: 0.92rem;
          font-weight: 800;
          cursor: grab;
          user-select: none;
          touch-action: none;
          box-shadow: 4px 4px 0 var(--ink);
          transform: rotate(calc((var(--i) - 4) * 1.2deg));
          transition: opacity 0.3s ease, transform 0.2s ease;
          will-change: transform;
        }

        .master-tech-pill:active {
          cursor: grabbing;
        }

        .master-tech-pill.is-dimmed {
          opacity: 0.25;
          filter: grayscale(0.5);
        }

        .master-tech-pill.is-highlighted {
          opacity: 1;
        }

        .pill-category-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: currentColor;
          border: 1px solid var(--ink);
        }

        .pill-tag {
          padding: 2px 8px;
          border: 1px solid var(--ink);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.35);
          color: var(--ink);
          font-family: var(--mono);
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        /* Footer bar inside master box */
        .master-box-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          background: #ffffff;
          border-top: 3px solid var(--ink);
          font-family: var(--mono);
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--ink);
        }

        .footer-status-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .status-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 8px var(--green);
        }

        .footer-tagline {
          color: var(--muted);
        }

        /* TABLET STYLING (768px - 1199px) */
        @media (min-width: 768px) and (max-width: 1199px) {
          .skills-head {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .master-box-header {
            padding: 18px 20px;
            gap: 10px;
            justify-content: flex-start;
          }
          .category-filter-group,
          .master-action-controls {
            gap: 8px;
          }
          .tech-filter-pill,
          .action-control-btn,
          .physics-drag-badge {
            min-height: 40px;
            padding: 8px 14px;
            font-size: 0.76rem;
          }
          .skills-interactive-canvas {
            min-height: 260px;
            padding: 24px 20px;
            gap: 12px;
          }
        }

        /* MOBILE STYLING (<768px) */
        @media (max-width: 767px) {
          .skills-head {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .master-box-header {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
            gap: 8px;
            padding: 14px 16px;
            height: auto;
            min-height: 0;
          }
          .category-filter-group,
          .master-action-controls {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            width: auto;
          }
          .tech-filter-pill,
          .action-control-btn,
          .physics-drag-badge {
            min-height: 40px;
            padding: 8px 14px;
            font-size: 0.74rem;
            width: auto;
            max-width: max-content;
          }
          .skills-interactive-canvas {
            min-height: 0;
            padding: 20px 14px;
            gap: 10px;
          }
          .master-tech-pill {
            padding: 8px 14px;
            font-size: 0.82rem;
            gap: 6px;
          }
          .master-box-footer {
            flex-direction: column;
            gap: 6px;
            align-items: flex-start;
            padding: 12px 16px;
          }
        }
      `}</style>
    </section>
  )
}
