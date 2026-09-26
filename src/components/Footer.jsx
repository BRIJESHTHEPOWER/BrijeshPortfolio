export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <a href="#home" className="footer-mark">B</a>
        <p>Designed and built by Brijesh with React and Framer Motion.</p>
        <div className="footer-links">
          <a href="https://github.com/BRIJESHTHEPOWER" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/brijesh-611a2b31b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:brijeshwork08@gmail.com">Email</a>
        </div>
      </div>
      <style>{`
        .footer {
          border-top: 2px solid var(--ink);
          background: var(--paper-2);
          padding: 28px 0;
        }
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
        }
        .footer-mark {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          border: 2px solid var(--ink);
          border-radius: 50%;
          background: var(--acid);
          font-family: var(--head);
          font-weight: 900;
          text-decoration: none;
        }
        .footer p {
          margin: 0;
          color: var(--muted);
          font-weight: 700;
          text-align: center;
        }
        .footer-links {
          display: flex;
          gap: 14px;
          font-weight: 900;
        }
        .footer a {
          text-decoration: none;
        }
        @media (max-width: 760px) {
          .footer-inner {
            flex-direction: column;
            text-align: center;
          }
          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}
