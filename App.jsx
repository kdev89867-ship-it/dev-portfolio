import { useState } from "react";
import "./index.css";

const projects = [
  {
    number: "01",
    name: "StudyMate-AI",
    type: "AI · Education",
    description:
      "A student study management application designed to organize subjects, track tasks, monitor progress, and provide AI-powered study assistance.",
    stack: ["React", "Node.js", "MongoDB", "Gemini API"],
    github: "https://github.com/kdev89867-ship-it/StudyMate-AI",
    demo: "",
  },
  {
    number: "02",
    name: "Expired Product Detector",
    type: "Computer Vision",
    description:
      "A project concept for detecting expired products and presenting product information through a user-friendly dashboard.",
    stack: ["Python", "Computer Vision", "Dashboard"],
    github: "https://github.com/kdev89867-ship-it",
    demo: "",
  },
  {
    number: "03",
    name: "Algorithm Practice",
    type: "Data Structures & Algorithms",
    description:
      "A collection of coding exercises covering arrays, strings, binary search, trees, and other problem-solving techniques.",
    stack: ["C++", "DSA", "Problem Solving"],
    github: "https://github.com/kdev89867-ship-it",
    demo: "",
  },
];

const skills = [
  "C++",
  "Java",
  "JavaScript",
  "React.js",
  "HTML",
  "CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
  "Problem Solving",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          DK<span>.</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["About", "Skills", "Projects", "Education", "Contact"].map(
            (item) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={item}
                onClick={closeMenu}
              >
                {item}
              </a>
            )
          )}
          <a
            className="nav-resume"
            href="mailto:YOUR_EMAIL@example.com"
          >
            Let's talk ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              COMPUTER SCIENCE STUDENT
            </div>

            <h1>
              Building ideas
              <br />
              into <span className="gradient-text">digital</span>
              <br />
              experiences.
            </h1>

            <p className="hero-description">
              Hi, I'm <strong>Dev Kumar</strong>. I'm a B.Tech CSE
              student interested in software development, web
              technologies, and building useful digital products.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore my work ↗
              </a>
              <a className="button secondary" href="#contact">
                Contact me
              </a>
            </div>

            <div className="hero-meta">
              <span>📍 Lucknow, India</span>
              <span>🎓 B.Tech CSE</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Developer profile">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="profile-top">
                <span>DEVELOPER PROFILE</span>
                <span className="profile-dot">●</span>
              </div>
              <div className="avatar">DK</div>
              <h2>Dev Kumar</h2>
              <p>Developer in progress.</p>
              <div className="code-window">
                <span className="code-muted">// My mindset</span>
                <br />
                <span className="code-purple">const</span> goals = [
                <br />
                &nbsp;&nbsp;<span className="code-green">"Learn"</span>,
                <br />
                &nbsp;&nbsp;<span className="code-green">"Build"</span>,
                <br />
                &nbsp;&nbsp;<span className="code-green">"Improve"</span>
                <br />
                ];
              </div>
            </div>
            <div className="floating-tag tag-one">{"</>"} React</div>
            <div className="floating-tag tag-two">✦ Problem solver</div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <span className="section-label">01 / ABOUT ME</span>
            <h2>A little about <span>my journey.</span></h2>
          </div>
          <div className="about-grid">
            <p className="about-lead">
              I enjoy turning concepts into working projects and
              learning how technology solves real-world problems.
            </p>
            <div className="about-detail">
              <p>
                I'm pursuing a Bachelor of Technology in Computer
                Science and Engineering at Babu Banarasi Das
                University, Lucknow.
              </p>
              <p>
                My current focus is strengthening my programming
                fundamentals, building full-stack applications,
                practicing DSA, and preparing for software
                development opportunities.
              </p>
              <a className="text-link" href="#projects">
                See what I'm building ↗
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <span className="section-label">02 / MY TOOLKIT</span>
            <h2>Technologies I <span>work with.</span></h2>
            <p className="section-description">
              A growing toolkit for building practical software.
              Update these tags to match your actual experience.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <span className="section-label">03 / SELECTED WORK</span>
            <h2>Projects with <span>purpose.</span></h2>
            <p className="section-description">
              A selection of academic work, experiments, and
              development practice.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-type">{project.type}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading">
            <span className="section-label">04 / EDUCATION</span>
            <h2>Learning is <span>continuous.</span></h2>
          </div>
          <div className="education-card">
            <div className="education-marker">🎓</div>
            <div>
              <span className="education-date">EXPECTED 2027</span>
              <h3>Bachelor of Technology — CSE</h3>
              <p>Babu Banarasi Das University, Lucknow</p>
              <p className="education-note">
                Computer Science & Engineering
              </p>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <span className="section-label">05 / GET IN TOUCH</span>
          <h2>Have an idea?<br /><span>Let's connect.</span></h2>
          <p>
            Open to connecting with developers, learning from
            others, and exploring suitable internship and
            entry-level opportunities.
          </p>
          <a
            className="button primary"
            href="mailto:dk2574905@gmail.com"
          >
            Email me ↗
          </a>
          <div className="social-links">
            <a href="https://github.com/kdev89867-ship-it"
               target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/dev-kumar-13076a301/?isSelfProfile=true"
               target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">DK<span>.</span></a>
        <p>Designed & built by Dev Kumar · © {new Date().getFullYear()}</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
