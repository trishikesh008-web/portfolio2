import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  Heart,
  Layers3,
  Mail,
  MapPin,
  Sparkles,
  UserRound,
} from 'lucide-react';
import heroImage from './assets/portfolio-hero.png';

const projects = [
  {
    title: 'My Portfolio Website',
    type: 'Personal project',
    summary: 'A React website that introduces who I am, what I can build, and the skills I am growing as a front-end developer.',
    stack: ['React', 'Vite', 'CSS'],
  },
  {
    title: 'Responsive Web Pages',
    type: 'Practice work',
    summary: 'Clean web layouts made with HTML, CSS, and JavaScript, focused on mobile-friendly design and smooth user experience.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'React Components',
    type: 'Learning project',
    summary: 'Reusable cards, buttons, navigation sections, and page layouts built while learning modern React development.',
    stack: ['Components', 'Props', 'UI'],
  },
];

const skills = ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'Git', 'VS Code', 'Problem Solving'];

function App() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#home">
          <span className="brand-mark">T</span>
          Rishikesh
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={16} />
            Personal Portfolio
          </p>
          <h1>Hi, I&apos;m Rishikesh.</h1>
          <p className="intro">
            I am learning React.js and building modern, responsive websites. This portfolio is about my journey, my skills, and the kind of work I want to create.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#about">
              About Me
              <ArrowUpRight size={18} />
            </a>
            <a className="button ghost" href="mailto:hello@example.com">
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-media" aria-label="Personal developer workspace">
          <img src={heroImage} alt="Modern developer workspace with laptop and project sketches" />
        </div>
      </section>

      <section className="stats-band" aria-label="Portfolio highlights">
        <div>
          <strong>React</strong>
          <span>Currently learning</span>
        </div>
        <div>
          <strong>Web</strong>
          <span>Designing and building</span>
        </div>
        <div>
          <strong>Growth</strong>
          <span>Improving every project</span>
        </div>
      </section>

      <section className="about-section" id="about">
        <div>
          <p className="eyebrow">
            <Heart size={16} />
            About Me
          </p>
          <h2>A curious learner who enjoys turning ideas into websites.</h2>
        </div>
        <div className="about-copy">
          <p>
            I enjoy creating web pages that look neat, feel simple to use, and work well on different screen sizes. My focus right now is learning React.js, strengthening JavaScript, and practicing clean front-end design.
          </p>
          <p>
            I like working step by step: planning the layout, building components, styling the page, and improving the final result until it feels complete.
          </p>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">
            <Layers3 size={16} />
            My Work
          </p>
          <h2>Projects and practice work that show what I am building.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <span>{project.summary}</span>
              <div className="stack-list">
                {project.stack.map((item) => (
                  <small key={item}>{item}</small>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section" id="skills">
        <div>
          <p className="eyebrow">
            <GraduationCap size={16} />
            Skills
          </p>
          <h2>The tools and concepts I am growing with.</h2>
        </div>
        <div className="skill-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div>
          <p className="eyebrow">
            <MapPin size={16} />
            Get In Touch
          </p>
          <h2>Let&apos;s connect.</h2>
          <p>I&apos;m open to learning opportunities, project ideas, and front-end development work.</p>
        </div>
        <div className="contact-actions">
          <a className="icon-link" href="mailto:hello@example.com" aria-label="Email">
            <Mail size={20} />
          </a>
          <a className="icon-link" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Code2 size={20} />
          </a>
          <a className="icon-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <UserRound size={20} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
