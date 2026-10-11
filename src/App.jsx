import './App.css'
import Navbar from "./Navbar";
import myImage from "./assets/profile1.png";

function App() {
  return (
    <>
      <Navbar />
      
<section id="home" className="hero">
  <div className="hero-content">
    <p className="intro">Hello, I'm</p>

    <h1 className="hero-title">
      LALITH <span>VARDHAN</span>
    </h1>

    <h2>
      Aspiring <span>AI Engineer</span>
    </h2>

    <p className="hero-description">
      Python Developer passionate about AI,
      machine learning, and building useful projects.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="primary-btn">
        View Projects ↗
      </a>

      <a href="#contact" className="secondary-btn">
        Contact Me
      </a>
    </div>
  </div>

  <div className="hero-image">
    < img src={myImage} alt="3D AI model" />
  </div>
</section>

<section id="about" className="about-section">
  <div className="about-container">

    <div className="about-heading">
      <span className="section-label">GET TO KNOW ME</span>
      <h2>About <span>Me</span></h2>
      <p className="about-subtitle">
        Curious mind. Problem solver. Future AI Engineer.
      </p>
    </div>

    <div className="about-content">
      <div className="about-text">
        <h3>Building the Future with <span>AI</span></h3>

        <p>
          Hi! I'm Lalith Vardhan, a Computer Science Engineering
          student passionate about Artificial Intelligence,
          software development, and solving real-world problems
          through technology.
        </p>

        <p>
          I'm strengthening my programming and problem-solving
          skills with Python and C++, while exploring Data
          Structures and Algorithms, machine learning, and
          modern web development.
        </p>

        <p>
          I enjoy turning ideas into practical projects. My
          goal is to build intelligent applications, learn from
          challenging problems, and grow into an AI Engineer
          who creates technology that makes a difference.
        </p>

        <a href="#projects" className="about-button">
          Explore My Projects <span>↗</span>
        </a>
      </div>

      <div className="about-cards">
        <article className="about-card">
          <span className="about-icon">🧠</span>
          <h3>AI & Machine Learning</h3>
          <p>
            Exploring intelligent systems, computer vision,
            and practical AI applications.
          </p>
        </article>

        <article className="about-card">
          <span className="about-icon">💻</span>
          <h3>Problem Solving</h3>
          <p>
            Building a strong foundation in Python, C++,
            algorithms, and data structures.
          </p>
        </article>

        <article className="about-card">
          <span className="about-icon">🚀</span>
          <h3>Building Projects</h3>
          <p>
            Turning concepts into useful applications and
            learning through hands-on development.
          </p>
        </article>

        <article className="about-card">
          <span className="about-icon">🎯</span>
          <h3>Future Goals</h3>
          <p>
            Working towards AI engineering internships
            and impactful software engineering roles.
          </p>
        </article>
      </div>
    </div>

    <div className="about-footer">
      <span>ALWAYS LEARNING</span>
      <span>ALWAYS BUILDING</span>
      <span>ALWAYS IMPROVING</span>
    </div>

  </div>
</section>

<section id="skills" className="skills-section">
  <div className="skills-container">

    <div className="skills-heading">
      <span className="section-label">WHAT I WORK WITH</span>
      <h2>My <span>Skills</span></h2>
      <p>Building strong foundations, one skill at a time.</p>
    </div>

    <div className="skills-grid">

      <article className="skill-card">
        <span className="skill-icon">⌨️</span>
        <h3>Programming</h3>
        <div className="skill-tags">
          <span>Python</span>
          <span>C++</span>
          <span>OOP</span>
        </div>
        <p>Programming fundamentals, object-oriented programming, and problem solving.</p>
      </article>

      <article className="skill-card">
        <span className="skill-icon">🧩</span>
        <h3>Data Structures</h3>
        <div className="skill-tags">
          <span>Arrays</span>
          <span>Strings</span>
          <span>Algorithms</span>
        </div>
        <p>Developing algorithmic thinking and building a foundation in DSA.</p>
      </article>

      <article className="skill-card">
        <span className="skill-icon">🤖</span>
        <h3>AI & Computer Vision</h3>
        <div className="skill-tags">
          <span>OpenCV</span>
          <span>AI/ML</span>
          <span>Python</span>
        </div>
        <p>Exploring computer vision and practical intelligent applications.</p>
      </article>

      <article className="skill-card">
        <span className="skill-icon">🌐</span>
        <h3>Web Development</h3>
        <div className="skill-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>React</span>
        </div>
        <p>Building responsive interfaces and learning modern frontend development.</p>
      </article>

      <article className="skill-card">
        <span className="skill-icon">🛠️</span>
        <h3>Tools & Workflow</h3>
        <div className="skill-tags">
          <span>Git</span>
          <span>GitHub</span>
          <span>VS Code</span>
        </div>
        <p>Practising version control and maintaining organized project workflows.</p>
      </article>

      <article className="skill-card">
        <span className="skill-icon">📚</span>
        <h3>Currently Learning</h3>
        <div className="skill-tags">
          <span>DSA</span>
          <span>Machine Learning</span>
          <span>LLMs</span>
        </div>
        <p>Expanding my knowledge through consistent practice and hands-on projects.</p>
      </article>

    </div>
  </div>
</section>


<section id="contact" className="contact-section">
  <div className="contact-container">

    <span className="section-label">LET'S CONNECT</span>

    <h2>Have an idea? <span>Let's talk.</span></h2>

    <p className="contact-description">
      I'm interested in AI, software development, collaborative
      projects, and opportunities to learn. Feel free to connect
      with me.
    </p>

    <a
      className="contact-email"
      href="mailto:YOUR_EMAIL@example.com"
    >
      ✉ Contact Me
    </a>

    <div className="contact-links">
      <a
        href="https://github.com/Lalith836"
        target="_blank"
        rel="noreferrer"
      >
        GitHub ↗
      </a>

      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn ↗
      </a>
    </div>

    <div className="contact-bottom">
      <span>Designed & built with care</span>
      <span>© {new Date().getFullYear()} Lalith Vardhan</span>
    </div>

  </div>
</section>





    
    </>
  );
}

export default App;
