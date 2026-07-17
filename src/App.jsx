import "./App.css";

function App() {
  return (
    <>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <h2 className="logo">SID.EXE</h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </nav>

      {/* ================= HOME ================= */}

      <section id="home" className="container">

        <h1>Hi I'm Siddharth Dubey</h1>

        <h2>Data Analyst | AI & ML Enthusiast</h2>

        <p>
          Building intelligent solutions with data and creating impactful AI powered applications.
        </p>

        <a href="#projects">
          <button>Explore My Work</button>
        </a>

      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="about">

        <h2>About Me</h2>

        <p>
          Hello! I'm Siddharth Dubey, a passionate Data Analyst and AI & ML
          enthusiast. I enjoy working with Python, SQL, Power BI, Excel and
          Machine Learning to solve real world problems. I love learning new
          technologies and building projects that create meaningful impact.
        </p>

      </section>

      {/* ================= SKILLS ================= */}

      <section className="skills" id="skills">

        <h2>My Skills</h2>

        <div className="skills-container">

          <div className="skill-card">
            <h3>HTML</h3>
            <p>Building responsive web pages.</p>
          </div>

          <div className="skill-card">
            <h3>CSS</h3>
            <p>Modern UI and animations.</p>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>Interactive web applications.</p>
          </div>

          <div className="skill-card">
            <h3>React JS</h3>
            <p>Creating dynamic user interfaces.</p>
          </div>

          <div className="skill-card">
            <h3>Python</h3>
            <p>Data Analysis and Automation.</p>
          </div>

          <div className="skill-card">
            <h3>SQL</h3>
            <p>Database querying and management.</p>
          </div>

          <div className="skill-card">
            <h3>Power BI</h3>
            <p>Interactive dashboards and reports.</p>
          </div>

          <div className="skill-card">
            <h3>Excel</h3>
            <p>Advanced data analysis and reporting.</p>
          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section className="projects" id="projects">

        <h2>My Projects</h2>

        <div className="project-container">

          <div className="project-card">

            <h3>Netflix Data Analysis</h3>

            <p>
              Analyzed Netflix dataset using Python, Pandas, NumPy and Matplotlib
              to discover trends and insights.
            </p>

            <button>View Project</button>

          </div>

          <div className="project-card">

            <h3>Sales Dashboard</h3>

            <p>
              Interactive Power BI dashboard with KPIs and business insights for
              decision making.
            </p>

            <button>View Project</button>

          </div>

          <div className="project-card">

            <h3>Student Management System</h3>

            <p>
              Developed using React JS with SQL database integration for efficient
              student record management.
            </p>

            <button>View Project</button>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="contact" id="contact">

        <h2>Contact Me</h2>

        <p>
          Feel free to connect with me for internships, projects,
          collaborations or opportunities.
        </p>

        <div className="contact-container">

          <div className="contact-card">
            <h3>Email</h3>
            <p>siddharth88630@gmail.com</p>
          </div>

          <div className="contact-card">
            <h3>Phone</h3>
            <p>+91 9058652593</p>
          </div>

          <div className="contact-card">
            <h3>Location</h3>
            <p>Bareilly, Uttar Pradesh, India</p>
          </div>

        </div>

        <div className="social-links">

          <a
            href="https://github.com/siddharthdubey"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/siddharth-dubey-6a9a9b421"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <p>
          © 2026 Siddharth Dubey | Built with React JS
        </p>

      </footer>

    </>
  );
}

export default App;