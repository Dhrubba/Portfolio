import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-brand">Dhrubajyoti Bhuyan</span>
          <p className="footer-tagline">Full-Stack Developer · Data Enthusiast</p>
        </div>
        <div className="footer-center">
          <p>Dhemaji Engineering College, Assam</p>
        </div>
        <div className="footer-right">
          <a href="https://github.com/Dhrubba" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/dhrubajyoti-bhuyan-77723436b" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dhrubajyoti Bhuyan. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
