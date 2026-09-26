import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const PROJECTS = [
  {
    id: 'resume-ai',
    name: 'ResumeAI',
    category: 'AI & CareerTech',
    type: 'Featured AI Platform',
    copy: 'An intelligent AI-powered resume analyzer platform leveraging LLMs for automated resume scoring, ATS optimization, skill gap analysis, and tailored career recommendations.',
    stack: ['React', 'Python', 'FastAPI', 'LLM / Gemini', 'Tailwind'],
    accent: 'var(--coral)',
    liveDemo: 'https://github.com/BRIJESHTHEPOWER',
    sourceCode: 'https://github.com/BRIJESHTHEPOWER',
    demoVideo: '/videos/ResumeAnalyzer.mp4',
    thumbnail: '',
    note: 'Interactive AI demo • Instant ATS score & feedback.',
    featured: true,
  },
  {
    id: 'vidhanai',
    name: 'VidhanAI',
    category: 'AI & LegalTech',
    type: 'Featured AI Platform',
    copy: 'An intelligent legal assistant platform leveraging AI for automated document analysis, contract drafting, case law research, and instant legal insights.',
    stack: ['React', 'Python', 'FastAPI', 'Groq / LLM', 'MongoDB'],
    accent: 'var(--hero-yellow)',
    liveDemo: 'https://www.vidhanai.me/',
    sourceCode: 'https://github.com/BRIJESHTHEPOWER/ai-legal-system',
    demoVideo: '/videos/vidhanai-demo.mp4',
    thumbnail: '',
    note: 'Public demo • 5 requests per visitor every 24 hours.',
    featured: true,
  },
  {
    id: 'cloud-hub',
    name: 'Cloud Workspace Hub',
    category: 'Collaboration',
    type: 'Realtime Platform',
    copy: 'A real-time workspace concept with task boards, collaborative documents, shared state, and fast team workflows.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    accent: 'var(--blue)',
    liveDemo: 'https://github.com/BRIJESHTHEPOWER',
    sourceCode: 'https://github.com/BRIJESHTHEPOWER',
    demoVideo: '/videos/cloud-workspace-demo.mp4',
    thumbnail: '',
  },
  {
    id: 'realtime-analytics',
    name: 'Real-Time Telemetry',
    category: 'Dashboard',
    type: 'Analytics Dashboard',
    copy: 'A live metrics interface for system performance telemetry, business signals, charts, and WebSocket-powered updates.',
    stack: ['React', 'FastAPI', 'Recharts', 'WebSockets'],
    accent: 'var(--green)',
    liveDemo: 'https://github.com/BRIJESHTHEPOWER',
    sourceCode: 'https://github.com/BRIJESHTHEPOWER',
    demoVideo: '/videos/analytics-demo.mp4',
    thumbnail: '',
  },
  {
    id: 'ecommerce-suite',
    name: 'Smart E-Commerce Suite',
    category: 'Commerce',
    type: 'Storefront System',
    copy: 'A high-converting storefront system with real-time inventory management, seamless checkout flows, search, and customer analytics.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    accent: 'var(--coral)',
    liveDemo: 'https://github.com/BRIJESHTHEPOWER',
    sourceCode: 'https://github.com/BRIJESHTHEPOWER',
    demoVideo: '/videos/ecommerce-demo.mp4',
    thumbnail: '',
  },
  {
    id: 'devcollab',
    name: 'DevCollab IDE',
    category: 'Developer Tool',
    type: 'Realtime Code Tool',
    copy: 'A collaborative code editor concept with live multi-user cursors, instant syntax highlighting, and WebRTC streaming.',
    stack: ['React', 'Socket.io', 'WebRTC', 'Monaco Editor'],
    accent: 'var(--violet)',
    liveDemo: 'https://github.com/BRIJESHTHEPOWER',
    sourceCode: 'https://github.com/BRIJESHTHEPOWER',
    demoVideo: '/videos/devcollab-demo.mp4',
    thumbnail: '',
  },
]

const CATEGORIES = ['All', 'AI & CareerTech', 'AI & LegalTech', 'Collaboration', 'Dashboard', 'Commerce', 'Developer Tool']

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

function VideoModal({ videoData, onClose }) {
  if (!videoData) return null

  return (
    <AnimatePresence>
      <motion.div
        className="video-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="video-modal-content"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <div className="modal-title">
              <span className="live-dot-pulse" />
              <h3>{videoData.title} — Video Recording Walkthrough</h3>
            </div>
            <button className="modal-close-btn" onClick={onClose} type="button">✕</button>
          </div>
          <div className="modal-video-container">
            <video
              src={videoData.videoUrl}
              controls
              autoPlay
              playsInline
              className="modal-video-player"
            />
          </div>
          <div className="modal-footer">
            {videoData.liveDemoUrl && videoData.liveDemoUrl !== '#' && (
              <a
                className="modal-action-btn primary"
                href={videoData.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Live Demo ↗
              </a>
            )}
            <button className="modal-action-btn secondary" type="button" onClick={onClose}>
              Close Walkthrough
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)
  const [viewMode, setViewMode] = useState('3d') // '3d' | 'grid'
  const [showFullGallery, setShowFullGallery] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [modalVideo, setModalVideo] = useState(null)
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  )

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isDragging = useRef(false)
  const startX = useRef(0)
  const videoRefs = useRef({})

  const filteredProjects = PROJECTS.filter((p) =>
    selectedCategory === 'All' ? true : p.category === selectedCategory
  )

  useEffect(() => {
    setActiveIndex(0)
  }, [selectedCategory])

  // Auto rotate timer
  useEffect(() => {
    if (!autoRotate || filteredProjects.length <= 1) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredProjects.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [autoRotate, filteredProjects.length])

  // Handle active video playback
  useEffect(() => {
    Object.keys(videoRefs.current).forEach((key) => {
      const vid = videoRefs.current[key]
      if (vid) {
        if (parseInt(key, 10) === activeIndex) {
          vid.play().catch(() => {})
        } else {
          vid.pause()
          vid.currentTime = 0
        }
      }
    })
  }, [activeIndex])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length)
  }

  const handleMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0
  }

  const handleMouseUp = (e) => {
    if (!isDragging.current) return
    isDragging.current = false
    const endX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0
    const diff = endX - startX.current
    if (diff > 45) {
      handlePrev()
    } else if (diff < -45) {
      handleNext()
    }
  }

  const galleryFiltered = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.copy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.stack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const currentProject = filteredProjects[activeIndex] || filteredProjects[0]

  return (
    <section id="projects" className="section projects-3d-section">
      {modalVideo && (
        <VideoModal videoData={modalVideo} onClose={() => setModalVideo(null)} />
      )}

      <div className="wrap">
        {/* Section Header */}
        <div className="projects-head">
          <div>
            <span className="section-kicker">Interactive Showcase</span>
            <h2 className="section-title">Featured Project Deck</h2>
          </div>
          <div className="view-mode-toggle">
            <button
              className={`toggle-btn ${viewMode === '3d' ? 'active' : ''}`}
              onClick={() => setViewMode('3d')}
              type="button"
            >
              3D Rotating Deck 🔄
            </button>
            <button
              className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              type="button"
            >
              Grid View 📄
            </button>
          </div>
        </div>

        {/* Category Pills Header */}
        <div className="category-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`cat-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        {viewMode === '3d' ? (
          /* 3D ROTATING COVER FLOW STAGE */
          <div className="stage-3d-wrapper">
            <div
              className="stage-3d-viewport"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
            >
              <div className="cards-3d-container">
                {filteredProjects.map((project, index) => {
                  const total = filteredProjects.length
                  let offset = index - activeIndex

                  if (offset < -Math.floor(total / 2)) offset += total
                  if (offset > Math.floor(total / 2)) offset -= total

                  const isActive = offset === 0
                  const isVisible = Math.abs(offset) <= 3

                  if (!isVisible) return null

                  const isMobile = windowWidth < 768
                  const isTablet = windowWidth >= 768 && windowWidth < 1200

                  // Calculate 3D transforms responsive for mobile/tablet/desktop
                  const rotateY = isMobile ? offset * -12 : isTablet ? offset * -18 : offset * -25
                  const translateX = isMobile ? offset * 42 : isTablet ? offset * 150 : offset * 260
                  const translateZ = isMobile
                    ? -Math.abs(offset) * 60 + (isActive ? 30 : 0)
                    : isTablet
                    ? -Math.abs(offset) * 100 + (isActive ? 60 : 0)
                    : -Math.abs(offset) * 140 + (isActive ? 90 : 0)
                  const scale = isActive
                    ? 1
                    : isMobile
                    ? Math.max(0.85, 1 - Math.abs(offset) * 0.1)
                    : Math.max(0.76, 1 - Math.abs(offset) * 0.1)
                  const opacity = isActive ? 1 : Math.max(0.35, 1 - Math.abs(offset) * 0.25)
                  const zIndex = 100 - Math.abs(offset) * 10

                  return (
                    <div
                      key={project.id || project.name}
                      className={`card-3d-item ${isActive ? 'is-active' : ''}`}
                      onClick={() => setActiveIndex(index)}
                      style={{
                        transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                        opacity: opacity,
                        zIndex: zIndex,
                      }}
                    >
                      <div className="card-top-header">
                        <span className="badge-type">{project.type}</span>
                        <span className="card-index-num">0{index + 1}</span>
                      </div>

                      {/* Video Player Box inside 3D Card */}
                      <div className="card-video-box">
                        <div className="video-browser-bar">
                          <div className="browser-dots">
                            <span />
                            <span />
                            <span />
                          </div>
                          <span className="browser-url">{project.name.toLowerCase().replace(/\s+/g, '')}.dev</span>
                        </div>

                        <div className="video-media-viewport">
                          {project.demoVideo ? (
                            <video
                              ref={(el) => (videoRefs.current[index] = el)}
                              src={project.demoVideo}
                              muted
                              loop
                              playsInline
                              className="card-video-el"
                            />
                          ) : (
                            <div className="fallback-card-art" style={{ background: project.accent }}>
                              <span>{project.name}</span>
                            </div>
                          )}

                          <button
                            type="button"
                            className="play-overlay-trigger"
                            onClick={(e) => {
                              e.stopPropagation()
                              setModalVideo({
                                videoUrl: project.demoVideo,
                                title: project.name,
                                liveDemoUrl: project.liveDemo,
                              })
                            }}
                          >
                            <span className="play-icon">▶</span>
                            <span>Expand Walkthrough</span>
                          </button>
                        </div>
                      </div>

                      <h3 className="card-title">{project.name}</h3>
                      <p className="card-copy">{project.copy}</p>

                      <div className="card-stack-pills">
                        {project.stack.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>

                      <div className="card-actions-row">
                        {project.liveDemo && project.liveDemo !== '#' && (
                          <a
                            className="card-btn primary"
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            LIVE DEMO <ArrowIcon />
                          </a>
                        )}
                        {project.sourceCode && (
                          <a
                            className="card-btn secondary"
                            href={project.sourceCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            GITHUB <ArrowIcon />
                          </a>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* 3D Navigation Controls & Status Footer */}
            <div className="stage-controls-bar">
              <button
                type="button"
                className="nav-arrow-btn"
                onClick={handlePrev}
                aria-label="Previous Project"
              >
                ←
              </button>

              <div className="active-project-info">
                <span className="counter-text">
                  0{activeIndex + 1} / 0{filteredProjects.length} — {currentProject?.name}
                </span>
                <span className="drag-hint">DRAG CARDS OR CLICK TO ROTATE</span>
              </div>

              <button
                type="button"
                className="nav-arrow-btn"
                onClick={handleNext}
                aria-label="Next Project"
              >
                →
              </button>
            </div>
          </div>
        ) : (
          /* GRID VIEW */
          <div className="grid-gallery-wrap">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="grid-card">
                <div className="card-top-header">
                  <span className="badge-type">{project.type}</span>
                  <span className="card-index-num">0{index + 1}</span>
                </div>
                {project.demoVideo && (
                  <video
                    src={project.demoVideo}
                    controls
                    muted
                    loop
                    playsInline
                    className="grid-video-preview"
                  />
                )}
                <h3>{project.name}</h3>
                <p>{project.copy}</p>
                <div className="card-stack-pills">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="card-actions-row">
                  {project.liveDemo && project.liveDemo !== '#' && (
                    <a className="card-btn primary" href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      LIVE DEMO <ArrowIcon />
                    </a>
                  )}
                  {project.sourceCode && (
                    <a className="card-btn secondary" href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                      GITHUB <ArrowIcon />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PROMINENT "MORE PROJECTS" BUTTON */}
        <div className="more-projects-bar">
          <button
            type="button"
            className="more-projects-btn"
            onClick={() => setShowFullGallery(true)}
          >
            <span>More Projects ⚡ (Open Full Gallery)</span>
            <span className="more-icon">↗</span>
          </button>
        </div>
      </div>

      {/* FULL SCREEN GALLERY OVERLAY */}
      <AnimatePresence>
        {showFullGallery && (
          <motion.div
            className="full-gallery-overlay"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="gallery-header wrap">
              <button
                className="gallery-close-pill"
                onClick={() => setShowFullGallery(false)}
                type="button"
              >
                ← Return to Home
              </button>
              <div>
                <span className="section-kicker">Full Archive</span>
                <h2>All Projects & Engineering Builds</h2>
              </div>
              <button
                className="gallery-close-x"
                onClick={() => setShowFullGallery(false)}
                type="button"
              >
                ✕
              </button>
            </div>

            <div className="gallery-search-wrap wrap">
              <input
                type="text"
                className="gallery-search-input"
                placeholder="Search projects by name, technology, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="gallery-grid-wrap wrap">
              <div className="grid-gallery-wrap">
                {galleryFiltered.map((project, index) => (
                  <div key={project.id} className="grid-card">
                    <div className="card-top-header">
                      <span className="badge-type">{project.type}</span>
                      <span className="card-index-num">0{index + 1}</span>
                    </div>
                    {project.demoVideo && (
                      <video
                        src={project.demoVideo}
                        controls
                        muted
                        loop
                        playsInline
                        className="grid-video-preview"
                      />
                    )}
                    <h3>{project.name}</h3>
                    <p>{project.copy}</p>
                    <div className="card-stack-pills">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <div className="card-actions-row">
                      {project.liveDemo && project.liveDemo !== '#' && (
                        <a className="card-btn primary" href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          LIVE DEMO <ArrowIcon />
                        </a>
                      )}
                      {project.sourceCode && (
                        <a className="card-btn secondary" href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                          GITHUB <ArrowIcon />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .projects-3d-section {
          position: relative;
          background: #0f110e;
          color: #f9f6ef;
          padding: clamp(60px, 8vh, 100px) 0 clamp(60px, 8vh, 110px);
          overflow: hidden;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .projects-3d-section .wrap {
          width: min(1440px, calc(100% - clamp(24px, 5vw, 40px)));
          margin: 0 auto;
        }

        .projects-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: clamp(24px, 4vh, 32px);
        }

        .projects-head .section-title {
          color: #ffffff;
          font-size: clamp(1.8rem, 4.5vw, 3.8rem);
          line-height: 1.05;
        }

        .view-mode-toggle {
          display: flex;
          gap: 6px;
          padding: 5px;
          border: 2px solid rgba(255, 255, 255, 0.18);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
        }

        .toggle-btn {
          padding: 8px 18px;
          border: none;
          border-radius: 999px;
          background: transparent;
          color: #b0b0b0;
          font-family: var(--mono);
          font-size: 0.78rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s ease;
          min-height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
        }

        .toggle-btn.active {
          background: var(--hero-yellow);
          color: var(--ink);
          box-shadow: 0 4px 12px rgba(240, 206, 37, 0.35);
        }

        /* Category Filter Bar */
        .category-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: flex-start;
          margin-bottom: clamp(28px, 4vh, 44px);
        }

        .cat-pill {
          padding: 8px 18px;
          min-height: 40px;
          border: 2px solid rgba(255, 255, 255, 0.16);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.05);
          color: #e0e0e0;
          font-family: var(--mono);
          font-size: 0.76rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
        }

        .cat-pill:hover,
        .cat-pill.active {
          background: var(--magenta);
          color: #ffffff;
          border-color: var(--magenta);
          box-shadow: 0 4px 16px rgba(196, 30, 117, 0.4);
        }

        /* 3D STAGE & COVERFLOW ENGINE */
        .stage-3d-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stage-3d-viewport {
          position: relative;
          width: 100%;
          height: 560px;
          perspective: 1200px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: grab;
          user-select: none;
        }

        .stage-3d-viewport:active {
          cursor: grabbing;
        }

        .cards-3d-container {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Dark Premium Card Aesthetic */
        .card-3d-item {
          position: absolute;
          width: min(450px, calc(100vw - 32px));
          padding: 22px;
          border: 2px solid rgba(255, 255, 255, 0.16);
          border-radius: 20px;
          background: #181a17;
          color: #ffffff;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.65);
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          transform-style: preserve-3d;
          cursor: pointer;
          box-sizing: border-box;
        }

        .card-3d-item.is-active {
          border-color: var(--hero-yellow);
          box-shadow: 
            0 30px 70px rgba(0, 0, 0, 0.85),
            0 0 25px rgba(240, 206, 37, 0.3);
        }

        .card-top-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
          font-family: var(--mono);
          font-size: 0.76rem;
          font-weight: 800;
        }

        .badge-type {
          padding: 5px 12px;
          border: 2px solid var(--ink);
          background: var(--hero-yellow);
          color: var(--ink);
          border-radius: 999px;
        }

        .card-index-num {
          font-size: 1.15rem;
          color: var(--hero-yellow);
        }

        .card-video-box {
          border: 2px solid rgba(255, 255, 255, 0.18);
          border-radius: 14px;
          overflow: hidden;
          background: #000;
          margin-bottom: 16px;
        }

        .video-browser-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 7px 14px;
          background: #222421;
          color: #a0a0a0;
          font-family: var(--mono);
          font-size: 0.68rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .browser-dots {
          display: flex;
          gap: 5px;
        }

        .browser-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ff5f56;
        }
        .browser-dots span:nth-child(2) { background: #ffbd2e; }
        .browser-dots span:nth-child(3) { background: #27c93f; }

        .video-media-viewport {
          position: relative;
          aspect-ratio: 16 / 9;
          width: 100%;
          background: #000000;
          overflow: hidden;
        }

        .card-video-el {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .fallback-card-art {
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          font-family: var(--head);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--ink);
        }

        .play-overlay-trigger {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(3px);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: none;
          color: #ffffff;
          font-family: var(--mono);
          font-weight: 800;
          font-size: 0.85rem;
          opacity: 0;
          transition: opacity 0.2s ease;
          cursor: pointer;
        }

        .card-3d-item:hover .play-overlay-trigger {
          opacity: 1;
        }

        .play-icon {
          font-size: 0.95rem;
        }

        .card-title {
          margin: 0 0 6px;
          font-family: var(--head);
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          line-height: 1.15;
          color: #ffffff;
        }

        .card-copy {
          margin: 0 0 16px;
          color: #b5b8b2;
          font-size: clamp(0.82rem, 1.4vw, 0.88rem);
          line-height: 1.45;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-stack-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 18px;
        }

        .card-stack-pills span {
          padding: 4px 10px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.06);
          border-radius: 6px;
          color: #d0d5ce;
          font-family: var(--mono);
          font-size: 0.7rem;
          font-weight: 700;
        }

        .card-actions-row {
          display: flex;
          gap: 10px;
        }

        .card-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px;
          min-height: 44px;
          border: 2px solid transparent;
          border-radius: 999px;
          font-family: var(--mono);
          font-size: 0.76rem;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .card-btn.primary {
          background: var(--hero-yellow);
          color: var(--ink);
        }

        .card-btn.primary:hover {
          background: var(--magenta);
          color: #ffffff;
        }

        .card-btn.secondary {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .card-btn.secondary:hover {
          background: #ffffff;
          color: var(--ink);
        }

        /* Controls Bar Below 3D Stage */
        .stage-controls-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(12px, 3vw, 20px);
          margin-top: clamp(24px, 4vh, 36px);
          width: 100%;
          flex-wrap: wrap;
        }

        .nav-arrow-btn {
          width: 48px;
          height: 48px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          font-size: 1.2rem;
          cursor: pointer;
          display: grid;
          place-items: center;
          transition: all 0.2s ease;
        }

        .nav-arrow-btn:hover {
          background: var(--hero-yellow);
          color: var(--ink);
          border-color: var(--hero-yellow);
        }

        .active-project-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 0;
          text-align: center;
        }

        .counter-text {
          font-family: var(--head);
          font-size: clamp(0.95rem, 2vw, 1.15rem);
          font-weight: 800;
          color: #ffffff;
        }

        .drag-hint {
          font-family: var(--mono);
          font-size: 0.65rem;
          color: #888888;
          letter-spacing: 0.1em;
          margin-top: 2px;
        }

        /* Prominent More Projects Button Bar */
        .more-projects-bar {
          display: flex;
          justify-content: center;
          margin-top: clamp(36px, 5vh, 54px);
          width: 100%;
        }

        .more-projects-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 14px 32px;
          min-height: 48px;
          border: 2px solid var(--ink);
          border-radius: 999px;
          background: var(--hero-yellow);
          color: var(--ink);
          font-family: var(--head);
          font-size: clamp(0.92rem, 1.8vw, 1.05rem);
          font-weight: 800;
          cursor: pointer;
          box-shadow: 5px 5px 0 #ffffff;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .more-projects-btn:hover {
          transform: translate(-3px, -3px);
          background: var(--magenta);
          color: #ffffff;
          box-shadow: 8px 8px 0 var(--hero-yellow);
        }

        .more-icon {
          font-size: 1.1rem;
        }

        /* GRID VIEW */
        .grid-gallery-wrap {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));
          gap: 26px;
        }

        .grid-card {
          padding: 20px;
          border-radius: 20px;
          background: #181a17;
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.16);
          min-width: 0;
          box-sizing: border-box;
        }

        .grid-video-preview {
          width: 100%;
          height: 190px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 14px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* FULL GALLERY OVERLAY */
        .full-gallery-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: #0f110e;
          color: #ffffff;
          overflow-y: auto;
          padding-bottom: 80px;
        }

        .gallery-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 40px;
          padding-bottom: 24px;
          border-bottom: 2px solid rgba(255, 255, 255, 0.15);
          flex-wrap: wrap;
          gap: 16px;
        }

        .gallery-close-pill {
          padding: 10px 20px;
          border: 2px solid var(--hero-yellow);
          border-radius: 999px;
          background: var(--hero-yellow);
          color: var(--ink);
          font-family: var(--mono);
          font-weight: 800;
          cursor: pointer;
        }

        .gallery-close-x {
          width: 44px;
          height: 44px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          background: transparent;
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 800;
          cursor: pointer;
        }

        .gallery-search-wrap {
          margin-top: 30px;
          margin-bottom: 36px;
        }

        .gallery-search-input {
          width: 100%;
          padding: 16px 22px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          font-family: var(--body);
          font-size: 1rem;
          outline: none;
        }

        .gallery-search-input:focus {
          border-color: var(--hero-yellow);
          background: rgba(255, 255, 255, 0.1);
        }

        /* VIDEO MODAL */
        .video-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 999999;
          background: rgba(0, 0, 0, 0.88);
          backdrop-filter: blur(8px);
          display: grid;
          place-items: center;
          padding: 20px;
        }

        .video-modal-content {
          width: min(920px, 100%);
          background: #181a17;
          border: 2px solid var(--hero-yellow);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          background: var(--hero-yellow);
          color: var(--ink);
        }

        .modal-title h3 {
          margin: 0;
          font-family: var(--head);
          font-size: 1.15rem;
        }

        .modal-close-btn {
          width: 36px;
          height: 36px;
          border: 2px solid var(--ink);
          border-radius: 50%;
          background: #ffffff;
          color: var(--ink);
          font-weight: 800;
          cursor: pointer;
        }

        .modal-video-container {
          background: #000;
          max-height: 60vh;
          display: flex;
          justify-content: center;
        }

        .modal-video-player {
          width: 100%;
          max-height: 60vh;
          object-fit: contain;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          padding: 16px 24px;
          background: #181a17;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .modal-action-btn {
          padding: 10px 22px;
          border-radius: 999px;
          font-family: var(--mono);
          font-weight: 800;
          font-size: 0.8rem;
          text-decoration: none;
          cursor: pointer;
          border: 2px solid transparent;
        }

        .modal-action-btn.primary {
          background: var(--hero-yellow);
          color: var(--ink);
        }

        .modal-action-btn.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        .live-dot-pulse {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--magenta);
          display: inline-block;
          margin-right: 8px;
        }

        @media (max-width: 767px) {
          .projects-3d-section {
            padding-top: clamp(80px, 12vh, 100px);
            padding-bottom: clamp(40px, 6vh, 60px);
          }
          .projects-3d-section .wrap {
            width: calc(100% - 32px);
            max-width: 100%;
            margin-inline: auto;
            padding-inline: 0;
            box-sizing: border-box;
          }
          .projects-head {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 20px;
          }
          .projects-head .section-title {
            font-size: clamp(32px, 8vw, 44px);
            line-height: 1.05;
            max-width: 100%;
            margin: 0;
          }
          .view-mode-toggle {
            width: 100%;
            gap: 4px;
            margin-bottom: 0;
            box-sizing: border-box;
          }
          .toggle-btn {
            flex: 1;
            text-align: center;
          }
          .category-bar {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
            gap: 8px;
            width: 100%;
            height: auto;
            min-height: 0;
            margin: 20px 0;
            padding: 0;
          }
          .cat-pill {
            flex: 0 0 auto;
            font-size: 0.74rem;
            padding: 8px 14px;
          }
          .stage-3d-wrapper {
            position: relative;
            width: 100%;
            margin-top: 0;
            min-height: 0;
            display: flex;
            flex-direction: column;
          }
          .stage-3d-viewport {
            position: relative;
            width: 100%;
            height: auto;
            min-height: 0;
            perspective: none;
            display: block;
            margin-top: 0;
            overflow: visible;
          }
          .cards-3d-container {
            position: relative;
            width: 100%;
            height: auto;
            min-height: 0;
            display: block;
            transform-style: flat;
          }
          .card-3d-item {
            box-sizing: border-box;
          }
          .card-3d-item.is-active {
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            transform: none !important;
            margin: 0 auto;
            opacity: 1 !important;
            z-index: 10 !important;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
          }
          .card-3d-item:not(.is-active) {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            opacity: 0 !important;
            pointer-events: none !important;
            transform: none !important;
            z-index: 1 !important;
          }
          .stage-controls-bar {
            margin-top: 20px;
            gap: 12px;
            justify-content: space-between;
          }
          .more-projects-btn {
            width: 100%;
          }
          .grid-gallery-wrap {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        @media (min-width: 768px) and (max-width: 1199px) {
          .projects-3d-section {
            padding-top: clamp(90px, 12vh, 120px);
          }
          .projects-head {
            margin-bottom: 24px;
          }
          .category-bar {
            margin-bottom: 24px;
          }
          .stage-3d-viewport {
            height: 500px;
            perspective: 900px;
          }
          .card-3d-item {
            width: min(400px, 80vw);
            padding: 20px;
          }
          .grid-gallery-wrap {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
          }
        }
      `}</style>
    </section>
  )
}
