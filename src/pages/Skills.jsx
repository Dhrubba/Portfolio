import "../styles/Skills.css";

const mySkills = [
  { category: "Languages", items: ["Python", "JavaScript", "Java", "C/C++", "HTML/CSS"], color: "#4f8ef7" },
  { category: "Frameworks", items: ["Express.js", "Node.js", "React", "Tkinter"], color: "#f76b4f" },
  { category: "Libraries", items: ["Pandas", "NumPy", "Matplotlib", "SciPy"], color: "#4fd68b" },
  { category: "Databases", items: ["MongoDB", "SQL"], color: "#f7c94f" },
  { category: "Tools & IDEs", items: ["Git/GitHub", "VS Code", "IntelliJ IDEA", "Jupyter Notebook", "PyCharm"], color: "#b04ff7" },
  { category: "Core Concepts", items: ["OOP", "DSA", "REST APIs", "Full-Stack Dev", "Data Analysis"], color: "#f74fa0" },
];

function Skills() {

  return (
    <div className="skills-page">
      <div className="page-header">
        <h1 className="page-title">Skills</h1>
        <p className="page-subtitle">Technologies I work with</p>
      </div>

      <section className="skills-section">
        <h2 className="section-title">My Tech Stack</h2>
        <div className="skills-grid">
          {mySkills.map((group, i) => (
            <div className="skill-group" key={i} style={{ "--accent": group.color }}>
              <h3 className="skill-category">{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((item, j) => (
                  <span className="skill-tag" key={j}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
