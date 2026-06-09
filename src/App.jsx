import { useMemo, useState } from "react";
import "./index.css";
import { siteData } from "./content";

function App() {
  const [language, setLanguage] = useState("zh");
  const [theme, setTheme] = useState("light");
  const content = useMemo(() => siteData[language], [language]);

  return (
    <main className={`site-shell theme-${theme}`}>
      <header className="site-header">
        <div className="site-brand">
          <span className="brand-dot" />
          <span>{content.meta.name}</span>
        </div>

        <nav className="site-nav" aria-label="Primary">
          {content.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-controls">
          <button
            type="button"
            className={`toggle-chip ${language === "zh" ? "is-active" : ""}`}
            onClick={() => setLanguage("zh")}
          >
            中文
          </button>
          <button
            type="button"
            className={`toggle-chip ${language === "en" ? "is-active" : ""}`}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <button
            type="button"
            className="theme-button"
            onClick={() => setTheme((value) => (value === "light" ? "dark" : "light"))}
          >
            {theme === "light" ? "Night" : "Day"}
          </button>
        </div>
      </header>

      <section className="hero" id="hero">
        <div className="hero-copy">
          <p className="hero-kicker">{content.hero.kicker}</p>
          <h1 className="hero-title">
            {content.hero.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="hero-subtitle">{content.hero.subtitle}</p>

          <div className="hero-tags">
            {content.hero.badges.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#work" className="primary-link">
              {content.hero.primary}
            </a>
            <a href="#contact" className="secondary-link">
              {content.hero.secondary}
            </a>
          </div>
        </div>
      </section>

      <section className="about-grid" id="about">
        {content.introCards.map((block) => (
          <article key={block.id} className="neo-card">
            <span className="neo-card__eyebrow">{block.title}</span>
            <p className="neo-card__content">{block.body}</p>
          </article>
        ))}
      </section>

      <section className="work" id="work">
        <div className="section-copy">
          <p>{language === "zh" ? "精选作品" : "Selected work"}</p>
          <h2>
            {language === "zh"
              ? "展示我如何构建、整理并完成软件交付的项目。"
              : "Projects that show how I build, clean up, and deliver software."}
          </h2>
        </div>

        <div className="project-list">
          {content.projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-head">
                <span>{project.index}</span>
                <p>{project.stack}</p>
              </div>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <ul>
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <a href={project.repo} target="_blank" rel="noreferrer">
                {language === "zh" ? "查看仓库" : "View repository"}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="resume" id="resume">
        <div className="section-copy">
          <p>{content.resume.title}</p>
          <h2>{content.resume.subtitle}</h2>
        </div>

        <div className="resume-grid">
          <article className="resume-card">
            <h3>{language === "zh" ? "个人定位" : "Positioning"}</h3>
            <p>{content.resume.positioning}</p>
          </article>

          <article className="resume-card">
            <h3>{language === "zh" ? "目标岗位" : "Target roles"}</h3>
            <ul>
              {content.resume.roles.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <article className="resume-card">
            <h3>{language === "zh" ? "核心技术" : "Core stack"}</h3>
            <div className="skill-groups">
              {content.resume.skills.map((group) => (
                <div key={group.title} className="skill-group">
                  <strong>{group.title}</strong>
                  <p>{group.text}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section-copy">
          <p>{content.contact.title}</p>
          <h2>{content.contact.subtitle}</h2>
        </div>

        <div className="contact-grid">
          {content.contact.links.map((link) => (
            <a
              key={link.label}
              className="contact-card"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="contact-card__title">{link.label}</span>
              <strong className="contact-card__value">{link.value}</strong>
            </a>
          ))}

          <article className="newsletter-card">
            <span className="newsletter-card__title">{content.contact.actionTitle}</span>
            <p className="newsletter-card__content">{content.contact.actionBody}</p>
            <a className="newsletter-card__button" href="mailto:2325826552@qq.com">
              {content.contact.actionButton}
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;
