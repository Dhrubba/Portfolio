import "../styles/Home.css";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-avatar">
          <div className="avatar-circle">DB</div>
          <div className="avatar-ring"></div>
        </div>
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Dhrubajyoti Bhuyan</h1>
          <p className="hero-title">Full-Stack Developer &amp; Data Enthusiast</p>
          <p className="hero-location">📍 Dhemaji Engineering College, Assam</p>
        </div>
      </section>

      <section className="bio-section">
        <h2 className="section-title">About Me</h2>
        <div className="bio-card">
          <p>
            I'm a passionate Computer Science student at Dhemaji Engineering College,
            Assam, with a strong foundation in full-stack web development, data analysis,
            and embedded systems. I enjoy solving real-world problems through code and
            have actively participated in national-level hackathons like <strong>Smart India Hackathon 2025</strong> and <strong>SKY Hack 2.0</strong>.
          </p>
          <p>
            I've built projects ranging from Arduino-based error detection devices to
            full-stack event management systems and Python data analysis dashboards.
            I'm driven by curiosity and love combining engineering with creativity.
          </p>
          <p>
            Currently exploring AI/ML through Zindi Data Science Challenges and
            freelancing on web development projects to sharpen my real-world skills.
          </p>
        </div>
      </section>

      <section className="highlights-section">
        <div className="highlight-card">
          <span className="highlight-icon">🏆</span>
          <h3>Hackathons</h3>
          <p>SIH 2025, SKY Hack 2.0, InnovateX & more</p>
        </div>
        <div className="highlight-card">
          <span className="highlight-icon">💻</span>
          <h3>Projects</h3>
          <p>Arduino, Full-Stack Apps, Data Analysis</p>
        </div>
        <div className="highlight-card">
          <span className="highlight-icon">🌐</span>
          <h3>Freelance</h3>
          <p>Web dev, APIs, Responsive Frontends</p>
        </div>
      </section>

    </div>
  );
}

export default Home;
