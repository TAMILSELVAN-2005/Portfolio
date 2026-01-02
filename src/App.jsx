import './App.css'
import { resumeData } from './data/resume'

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <header className="section-heading">
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <div>
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  </header>
)

function App() {
  const { hero, socials, education, skills, experience, projects, certificates, achievements, interests } =
    resumeData

  const navItems = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
  ]

  return (
    <div className="page">
      <nav className="top-nav">
        <div className="brand">
          <span className="brand-badge">{hero.initials}</span>
          <div>
            <strong>{hero.name}</strong>
            <p>{hero.title}</p>
          </div>
        </div>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a className="primary-btn" href={`mailto:${hero.email}`}>
          Let&apos;s Talk
        </a>
      </nav>

      <main>
        <section id="hero" className="hero">
          <div className="hero-text">
            <h1>{hero.name}</h1>
            <p className="hero-title">{hero.title}</p>
            <p className="hero-summary">{hero.summary}</p>
            <div className="hero-meta">
              <span>{hero.location}</span>
              <span>{hero.availability}</span>
            </div>
            <div className="hero-actions">
              <a className="primary-btn" href={`mailto:${hero.email}`}>
                Email Tamilselvan
              </a>
              <a className="ghost-btn" href={`tel:${hero.phone.replace(/\s+/g, '')}`}>
                Call {hero.phone}
              </a>
            </div>
            <div className="stats">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <p>{stat.value}</p>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-media">
            <div className="headshot" style={{ backgroundImage: "url('/Profile.jpeg')"}}>

            </div>
            <div className="contacts-card">
              <h3>Connect</h3>
              <ul>
                <li>
                  <span>Email</span>
                  <a href={`mailto:${hero.email}`}>{hero.email}</a>
                </li>
                <li>
                  <span>Phone</span>
                  <a href={`tel:${hero.phone.replace(/\s+/g, '')}`}>{hero.phone}</a>
                </li>
              </ul>
              <div className="socials">
                {socials.map((social) => (
                  <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section-card">
          <SectionHeading eyebrow="Education" title="Academic foundation" subtitle="Rigorous STEM training." />
          <div className="education-grid">
            {education.map((item) => (
              <article key={item.school}>
                <p className="eyebrow">{item.period}</p>
                <h3>{item.school}</h3>
                <p>{item.program}</p>
                <span>{item.detail}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-card">
          <SectionHeading
            eyebrow="Skills"
            title="Tech stack & strengths"
            subtitle="Balanced mix of engineering, design, and collaboration."
          />
          <div className="skills-grid">
            <div>
              <h3>Programming Languages</h3>
              <p>{skills.languages.join(' · ')}</p>
            </div>
            <div>
              <h3>Web Technologies</h3>
              <p>{skills.web.join(' · ')}</p>
            </div>
            <div>
              <h3>Tools</h3>
              <p>{skills.tools.join(' · ')}</p>
            </div>
            <div>
              <h3>Soft Skills</h3>
              <p>{skills.soft.join(' · ')}</p>
            </div>
          </div>
        </section>

        <section id="experience" className="section-card">
          <SectionHeading
            eyebrow="Experience"
            title="Hands-on internships"
            subtitle="Delivering outcomes across web and platform initiatives."
          />
          <div className="timeline">
            {experience.map((role) => (
              <article key={role.role} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-top">
                    <h3>{role.role}</h3>
                    <span>{role.period}</span>
                  </div>
                  <p className="company">{role.company}</p>
                  <p className="project">{role.project}</p>
                  <ul>
                    {role.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {role.link && (
                    <a className="ghost-btn" href={role.link} target="_blank" rel="noreferrer">
                      View Credential
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-card">
          <SectionHeading
            title="Projects"
            subtitle="Every project pairs usability with measurable impact."
          />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className={`project-card${index === 0 ? ' featured-project' : ''}`}
              >
                <div className="projects-header">
                  <div className="project-title-group">
                    <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{project.name}</h3>
                  </div>
                  <span>{project.period}</span>
                </div>
                <p className="stack">{project.stack}</p>
                <p>{project.summary}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View project ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="credentials" className="split-section">
          <div className="section-card">
            <SectionHeading
              title="Certificates"
              subtitle="Industry-recognized credentials."
            />
            <ul className="certificate-list">
              {certificates.map((certificate) => (
                <li key={certificate.title}>
                  <div>
                    <h3>{certificate.title}</h3>
                    <span>{certificate.period}</span>
                    <br></br>
                    {certificate.link && (
                    <a href={certificate.link} target="_blank" rel="noreferrer">
                        Verify ↗
                    </a>
                  )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div id="achievements" className="section-card">
            <SectionHeading title="Beyond the classroom" subtitle="Achievements."/>
            <ul className="achievements">
              {achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
            <div className="interests">
              <p className="eyebrow">Interests</p>
              <div>
                {interests.map((interest) => (
                  <span key={interest}>{interest}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {hero.name}</p>
        <div className="footer-links">
          {socials.map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default App

