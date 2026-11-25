import { Code2, Layers, SearchCheck, SlidersHorizontal, Wrench } from 'lucide-react';
import { Lang, SKILL_PILLARS, TOOL_STACK, UI_COPY } from '../data/portfolioData';
import { Reveal } from './Reveal';

interface InteractiveSkillsLabProps {
  lang: Lang;
}

export function InteractiveSkillsLab({ lang }: InteractiveSkillsLabProps) {
  const pillarMeta: Record<string, { icon: React.ReactNode; toneClass: string }> = {
    research: { icon: <SearchCheck size={16} />, toneClass: 'pillar-icon-peach' },
    design: { icon: <Layers size={16} />, toneClass: 'pillar-icon-lilac' },
    frontend: { icon: <Code2 size={16} />, toneClass: 'pillar-icon-butter' },
    platform: { icon: <SlidersHorizontal size={16} />, toneClass: 'pillar-icon-sky' },
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <div>
              <div className="section-kicker">{UI_COPY.skills.kicker[lang]}</div>
              <h2 className="section-title">{UI_COPY.skills.title[lang]}</h2>
              <p className="section-desc">{UI_COPY.skills.desc[lang]}</p>
            </div>
          </div>
        </Reveal>

        <div className="skills-cards skills-cards-full">
          {SKILL_PILLARS.map((pillar, idx) => {
            const meta = pillarMeta[pillar.id];
            return (
              <Reveal key={pillar.id} delay={idx * 75} variant="up">
                <div className="skill-pillar" style={{ height: '100%' }}>
                  <h3>
                    <span className={`pillar-icon ${meta.toneClass}`}>
                      {meta.icon}
                    </span>
                    <span>{pillar.title[lang]}</span>
                  </h3>
                  <div className="tag-row" style={{ marginBottom: 0 }}>
                    {pillar.items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={160} variant="up">
          <div className="tools-strip-card">
            <div className="tools-strip-header">
              <span className="pillar-icon pillar-icon-peach">
                <Wrench size={15} />
              </span>
              <h3>{UI_COPY.skills.toolsHeading[lang]}</h3>
            </div>

            <div className="tools-badge-grid">
              {TOOL_STACK.map((tool) => (
                <span className="tool-chip" key={tool.name}>
                  <span className="tool-chip-name">{tool.name}</span>
                  <span className="tool-chip-cat">{tool.category}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
