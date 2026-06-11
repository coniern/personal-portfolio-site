import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import "./index.css";
import { siteData } from "./content";

const SECTION_IDS = ["hero", "about", "work", "archive", "resume", "contact"];

const iconSources = {
  note: "https://media.lordicon.com/assets/icons/blocks/message-info.json",
  arrow: "https://media.lordicon.com/assets/icons/blocks/button-arrow-right.json",
  orbit: "https://media.lordicon.com/assets/icons/blocks/dots-circle-right.json",
  card: "https://media.lordicon.com/assets/icons/blocks/card-arrow.json",
};

function LordIcon({ src, size = 28, trigger = "hover", className = "" }) {
  return (
    <lord-icon
      src={src}
      trigger={trigger}
      colors="primary:#151515,secondary:#8a8a8a"
      stroke="regular"
      loading="lazy"
      className={className}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
    />
  );
}

function ProjectCover({ type, index, category }) {
  return (
    <div className={`project-cover project-cover--${type}`} aria-hidden="true">
      <span className="project-cover__frame" />
      <span className="project-cover__line project-cover__line--a" />
      <span className="project-cover__line project-cover__line--b" />
      <span className="project-cover__shape project-cover__shape--a" />
      <span className="project-cover__shape project-cover__shape--b" />
      <span className="project-cover__index">{index}</span>
      <span className="project-cover__caption">{category}</span>
    </div>
  );
}

function SectionMarker({ icon, label }) {
  return (
    <div className="section-marker">
      <LordIcon src={icon} size={24} />
      <span>{label}</span>
    </div>
  );
}

function App() {
  const shellRef = useRef(null);
  const [language, setLanguage] = useState("zh");
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  const content = useMemo(() => siteData[language], [language]);

  const uiText = useMemo(
    () =>
      language === "zh"
        ? {
            topButton: "回到顶部",
            archiveCount: "公开仓库",
            featuredCount: "主区精选",
            repoLink: "打开仓库",
            footerLead: "Portfolio notes by",
            archiveMeta: "收录全部公开仓库",
          }
        : {
            topButton: "Back to top",
            archiveCount: "public repos",
            featuredCount: "featured here",
            repoLink: "Open repo",
            footerLead: "Portfolio notes by",
            archiveMeta: "full public repository archive",
          },
    [language],
  );

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-16% 0px -46% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    let ticking = false;

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;

      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

        setScrollProgress(maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0);
        setShowTop(scrollTop > window.innerHeight * 0.7);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [language]);

  useLayoutEffect(() => {
    const shell = shellRef.current;

    if (!shell || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.from(".site-header__inner > *", {
        autoAlpha: 0,
        y: -18,
        duration: 0.7,
        stagger: 0.06,
        ease: "power3.out",
      });

      gsap.from("[data-hero-item]", {
        autoAlpha: 0,
        y: 24,
        duration: 0.82,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.08,
      });

      const revealTargets = gsap.utils.toArray("[data-reveal]");
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            gsap.to(entry.target, {
              autoAlpha: 1,
              y: 0,
              duration: 0.84,
              ease: "power3.out",
              clearProps: "opacity,visibility,transform",
            });

            revealObserver.unobserve(entry.target);
          });
        },
        {
          threshold: 0.16,
          rootMargin: "0px 0px -8% 0px",
        },
      );

      revealTargets.forEach((target) => {
        gsap.set(target, {
          autoAlpha: 0,
          y: 24,
        });
        revealObserver.observe(target);
      });

      return () => revealObserver.disconnect();
    }, shell);

    return () => ctx.revert();
  }, [language]);

  return (
    <main ref={shellRef} className="site-shell" data-language={language}>
      <div className="page-progress" aria-hidden="true">
        <span
          className="page-progress__bar"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <header className="site-header">
        <div className="site-header__inner section-frame">
          <a className="site-brand" href="#hero" aria-label={content.meta.name}>
            <span className="site-brand__lead">{uiText.footerLead}</span>
            <span className="site-brand__name">{content.meta.name}</span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            {content.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "is-active" : ""}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-controls">
            <div className="toggle-group" aria-label="Language">
              <button
                type="button"
                className={`toggle-chip ${language === "zh" ? "is-active" : ""}`}
                aria-pressed={language === "zh"}
                onClick={() => setLanguage("zh")}
              >
                中文
              </button>
              <button
                type="button"
                className={`toggle-chip ${language === "en" ? "is-active" : ""}`}
                aria-pressed={language === "en"}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="hero" id="hero">
        <div className="section-frame hero-layout">
          <div className="hero-copy">
            <div className="eyebrow" data-hero-item>
              <LordIcon src={iconSources.orbit} size={24} />
              <span>{content.hero.eyebrow}</span>
            </div>

            <h1 className="hero-title" data-hero-item>
              {content.hero.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>

            <p className="hero-subtitle" data-hero-item>
              {content.hero.subtitle}
            </p>

            <div className="hero-badges" data-hero-item>
              {content.hero.badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>

            <div className="hero-actions" data-hero-item>
              <a href="#work" className="hero-link hero-link--primary">
                <span>{content.hero.primary}</span>
                <LordIcon src={iconSources.arrow} size={22} className="link-icon" />
              </a>
              <a href="#archive" className="hero-link">
                <span>{content.hero.secondary}</span>
                <LordIcon src={iconSources.card} size={22} className="link-icon" />
              </a>
            </div>
          </div>

          <aside className="hero-margin" data-hero-item>
            <div className="paper-note">
              <SectionMarker icon={iconSources.note} label={uiText.archiveMeta} />
              <ul className="margin-list">
                {content.hero.notes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="margin-stats">
              <article className="stat-card">
                <span>{uiText.archiveCount}</span>
                <strong>{content.repoArchive.length}</strong>
              </article>
              <article className="stat-card">
                <span>{uiText.featuredCount}</span>
                <strong>{content.featuredProjects.length}</strong>
              </article>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-block about" id="about">
        <div className="section-frame">
          <div className="section-header" data-reveal>
            <div className="section-heading">
              <SectionMarker icon={iconSources.note} label={content.about.label} />
              <h2 className="section-title">{content.about.title}</h2>
            </div>
            <p className="section-note">{content.about.note}</p>
          </div>

          <div className="note-grid">
            {content.about.cards.map((card, index) => (
              <article
                key={card.id}
                className={`paper-panel note-card note-card--${index + 1}`}
                data-reveal
              >
                <span className="note-card__title">{card.title}</span>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block work" id="work">
        <div className="section-frame">
          <div className="section-header" data-reveal>
            <div className="section-heading">
              <SectionMarker icon={iconSources.card} label={content.works.label} />
              <h2 className="section-title">{content.works.title}</h2>
            </div>
            <p className="section-note">{content.works.note}</p>
          </div>

          <div className="project-grid">
            {content.featuredProjects.map((project, index) => (
              <article
                key={project.id}
                className={`paper-panel project-card ${index === 0 ? "project-card--wide" : ""}`}
                data-reveal
              >
                <ProjectCover
                  type={project.coverType}
                  index={project.index}
                  category={project.category}
                />
                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span>{project.index}</span>
                    <p>{project.stack}</p>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <span>{uiText.repoLink}</span>
                    <LordIcon src={iconSources.arrow} size={22} className="link-icon" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block archive" id="archive">
        <div className="section-frame">
          <div className="section-header" data-reveal>
            <div className="section-heading">
              <SectionMarker icon={iconSources.orbit} label={content.archive.label} />
              <h2 className="section-title">{content.archive.title}</h2>
            </div>
            <p className="section-note">{content.archive.note}</p>
          </div>

          <div className="paper-panel archive-panel" data-reveal>
            <div className="archive-panel__head">
              <span>{content.meta.githubHandle}</span>
              <strong>{content.repoArchive.length}</strong>
            </div>

            <div className="archive-list">
              {content.repoArchive.map((repo) => (
                <a
                  key={repo.id}
                  className="archive-row"
                  href={repo.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="archive-row__main">
                    <strong>{repo.label}</strong>
                    <p>{repo.description}</p>
                  </div>
                  <div className="archive-row__meta">
                    <span>{repo.language}</span>
                    <span>{repo.type}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block resume" id="resume">
        <div className="section-frame">
          <div className="section-header" data-reveal>
            <div className="section-heading">
              <SectionMarker icon={iconSources.note} label={content.resume.label} />
              <h2 className="section-title">{content.resume.title}</h2>
            </div>
            <p className="section-note">{content.resume.note}</p>
          </div>

          <div className="resume-grid">
            {content.resume.cards.map((card) => (
              <article
                key={card.id}
                className={`paper-panel resume-card ${card.groups ? "resume-card--stack" : ""}`}
                data-reveal
              >
                <span className="resume-card__title">{card.title}</span>

                {card.body ? <p>{card.body}</p> : null}

                {card.items ? (
                  <ul>
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}

                {card.groups ? (
                  <div className="stack-groups">
                    {card.groups.map((group) => (
                      <div key={group.title} className="stack-group">
                        <strong>{group.title}</strong>
                        <p>{group.text}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block contact" id="contact">
        <div className="section-frame">
          <div className="section-header" data-reveal>
            <div className="section-heading">
              <SectionMarker icon={iconSources.card} label={content.contact.label} />
              <h2 className="section-title">{content.contact.title}</h2>
            </div>
            <p className="section-note">{content.contact.note}</p>
          </div>

          <div className="contact-layout">
            {content.contact.links.map((link) => (
              <a
                key={link.label}
                className="paper-panel contact-card"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                data-reveal
              >
                <span className="contact-card__label">{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-frame site-footer__inner">
          <div>
            <span className="site-footer__lead">{uiText.footerLead}</span>
            <strong>{content.meta.name}</strong>
          </div>
          <p>{content.contact.closing}</p>
        </div>
      </footer>

      <button
        type="button"
        className={`back-to-top ${showTop ? "is-visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={uiText.topButton}
      >
        <LordIcon src={iconSources.arrow} size={20} className="back-to-top__icon" />
        <span>{uiText.topButton}</span>
      </button>
    </main>
  );
}

export default App;
