import "../styles/Contact.css";

function Contact() {
  const contacts = [
    {
      icon: "✉️",
      label: "Email",
      value: "dhrubadummymail@gmail.com",
      link: "mailto:dhrubadummmymail@gmail.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/dhrubajyoti.dummy",
      link: "https://linkedin.com/in/dhruba.dummy",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/Dhruba.dummy",
      link: "https://github.com/Dhruba.dummy",
    },
    {
      icon: "📘",
      label: "Facebook",
      value: "facebook.com/dhruba.dummy",
      link: "https://facebook.com/dhruba.dummy",
    },
    {
      icon: "📸",
      label: "Instagram",
      value: "@dhruba.dummy",
      link: "https://instagram.com/dhruba.dummy",
    },
    {
      icon: "🌐",
      label: "Portfolio",
      value: "dhrubajyoti.vercel.app",
      link: "https://dhrubajyoti.vercel.app",
    },
  ];

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">
          Feel free to reach out — I'm always open to new opportunities and collaborations!
        </p>
      </div>

      <div className="contact-grid">
        {contacts.map((c, i) => (
          <a
            key={i}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">{c.icon}</span>
            <div className="contact-info">
              <span className="contact-label">{c.label}</span>
              <span className="contact-value">{c.value}</span>
            </div>
            <span className="contact-arrow">→</span>
          </a>
        ))}
      </div>

      
    </div>
  );
}

export default Contact;
