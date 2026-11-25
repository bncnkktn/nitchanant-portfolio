import { Briefcase, GraduationCap } from 'lucide-react';
import { EDUCATION_INFO, EXPERIENCE_TIMELINE, Lang, UI_COPY } from '../data/portfolioData';
import { Reveal } from './Reveal';

interface ExperienceTimelineProps {
  lang: Lang;
  ndaMode: boolean;
}

export function ExperienceTimeline({ lang, ndaMode }: ExperienceTimelineProps) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <div>
              <div className="section-kicker">{UI_COPY.experience.kicker[lang]}</div>
              <h2 className="section-title">{UI_COPY.experience.title[lang]}</h2>
            </div>
          </div>
        </Reveal>

        <div className="timeline-grid">
          <Reveal variant="left">
            <div className="timeline-card" style={{ height: '100%' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22, fontSize: '1.12rem', fontWeight: 800 }}>
              <span className="pillar-icon pillar-icon-peach">
                <Briefcase size={16} />
              </span>
              <span>{UI_COPY.experience.workHeading[lang]}</span>
            </h3>

            {EXPERIENCE_TIMELINE.map((exp) => {
              const items =
                ndaMode && 'highlightsNda' in exp && exp.highlightsNda
                  ? exp.highlightsNda[lang]
                  : exp.highlights[lang];
              return (
                <div className="timeline-item" key={exp.period}>
                  <span className="timeline-dot" />
                  <div className="timeline-period">{exp.period}</div>
                  <div className="timeline-role">{exp.role[lang]}</div>
                  <div className="timeline-org">{exp.org[lang]}</div>
                  <ul className="case-list" style={{ fontSize: '0.88rem' }}>
                    {items.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
            </div>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <div className="timeline-card" style={{ height: '100%' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22, fontSize: '1.12rem', fontWeight: 800 }}>
              <span className="pillar-icon pillar-icon-butter">
                <GraduationCap size={16} />
              </span>
              <span>{UI_COPY.experience.eduHeading[lang]}</span>
            </h3>

            <div className="timeline-period">{EDUCATION_INFO.period}</div>
            <div className="timeline-role" style={{ marginTop: 4 }}>
              {EDUCATION_INFO.degree[lang]}
            </div>
            <div className="timeline-org">{EDUCATION_INFO.university[lang]}</div>
            <div style={{ fontSize: '0.88rem', color: 'var(--ink-secondary)', marginBottom: 14 }}>
              {EDUCATION_INFO.major[lang]} · <strong>GPA: {EDUCATION_INFO.gpa}</strong>
            </div>

            <ul className="case-list" style={{ fontSize: '0.86rem' }}>
              {EDUCATION_INFO.courses[lang].map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
