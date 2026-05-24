import "../styles/Education.css";

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Dhemaji Engineering College (DEC)",
    location: "Dhemaji, Assam",
    year: "2023 – Present",
    status: "Ongoing",
    description:
      "Pursuing a Bachelor's degree in CSE with focus on full-stack development, data structures, algorithms, and emerging technologies. Actively participating in hackathons and technical events.",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary (Class XII) – Science",
    institution: "St. Claret School",
    location: "Assam",
    year: "2021 – 2023",
    status: "Completed",
    description:
      "Completed higher secondary education with Physics, Chemistry, Mathematics and Computer Science as core subjects. Built a strong foundation in analytical thinking and problem solving.",
    icon: "📘",
  },
  {
    degree: "Secondary (Class X)",
    institution: "St. Claret School",
    location: "Assam",
    year: "Until 2021",
    status: "Completed",
    description:
      "Completed schooling with distinction in Mathematics and Sciences. Developed early interest in computers and technology.",
    icon: "🏫",
  },
];

function Education() {
  return (
    <div className="education-page">
      <div className="page-header">
        <h1 className="page-title">Education</h1>
        <p className="page-subtitle">My academic journey — from school to engineering college</p>
      </div>

      <div className="timeline">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot">
              <span>{edu.icon}</span>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-institution">🏛️ {edu.institution}</p>
                  <p className="edu-location">📍 {edu.location}</p>
                </div>
                <div className="timeline-meta">
                  <span className="edu-year">{edu.year}</span>
                  <span className={`edu-status ${edu.status === "Ongoing" ? "status-ongoing" : "status-done"}`}>
                    {edu.status}
                  </span>
                </div>
              </div>
              <p className="edu-description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
