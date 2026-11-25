import { ArrowUpRight, RotateCcw } from 'lucide-react';
import {
  CASE_STUDIES,
  CaseStudy,
  Lang,
  ProjectGroup,
  RoleFilter,
  UI_COPY,
} from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisual';
import { Reveal } from './Reveal';
import { useSlidingIndicator } from '../hooks/useSlidingIndicator';

interface WorkShowcaseProps {
  lang: Lang;
  ndaMode: boolean;
  filter: RoleFilter;
  onFilterChange: (f: RoleFilter) => void;
  onSelectProject: (study: CaseStudy) => void;
}

const GROUPS: ProjectGroup[] = ['flagship', 'research', 'apps', 'creative3d'];
const FILTERS: RoleFilter[] = ['all', 'flagship', 'research', 'apps', 'creative3d'];

export function WorkShowcase({
  lang,
  ndaMode,
  filter,
  onFilterChange,
  onSelectProject,
}: WorkShowcaseProps) {
  const filterSlider = useSlidingIndicator<HTMLDivElement>(filter, lang);
  const getCount = (f: RoleFilter) =>
    f === 'all' ? CASE_STUDIES.length : CASE_STUDIES.filter((c) => c.group === f).length;

  const visibleGroups = filter === 'all' ? GROUPS : [filter];
  const visibleTotal = getCount(filter);

  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <div>
              <div className="section-kicker">{UI_COPY.work.kicker[lang]}</div>
              <h2 className="section-title">{UI_COPY.work.title[lang]}</h2>
              <p className="section-desc">{UI_COPY.work.desc[lang]}</p>
            </div>

            <div className="filter-row-wrap">
              <div
                ref={filterSlider.containerRef}
                className="filter-bar has-slider"
                role="tablist"
                aria-label="Filter projects by category"
              >
                <span className="sliding-pill sliding-pill-ink" style={filterSlider.style} aria-hidden="true" />
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    type="button"
                    role="tab"
                    aria-selected={filter === f}
                    className={`filter-tab tab-${f} ${filter === f ? 'active' : ''}`}
                    onClick={() => onFilterChange(f)}
                  >
                    <span>{UI_COPY.work.filters[f][lang]}</span>
                    <span className={`filter-count count-${f}`}>{getCount(f)}</span>
                  </button>
                ))}
              </div>

              {filter !== 'all' && (
                <div className={`filter-status-pill status-${filter}`}>
                  <span>
                    {lang === 'en'
                      ? `Showing ${visibleTotal} of ${CASE_STUDIES.length} projects`
                      : `แสดง ${visibleTotal} จาก ${CASE_STUDIES.length} โปรเจกต์`}
                  </span>
                  <button
                    type="button"
                    className="filter-reset-btn"
                    onClick={() => onFilterChange('all')}
                  >
                    <RotateCcw size={12} />
                    <span>{lang === 'en' ? 'Show All' : 'ดูทั้งหมด'}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        {/* Keyed by filter so switching categories triggers crisp visual transition */}
        <div key={filter} className="filter-transition-wrap">
          {visibleGroups.map((group) => {
            const items = CASE_STUDIES.filter((c) => c.group === group);
            if (items.length === 0) return null;

            const groupMeta = UI_COPY.work.groups[group];
            const gridClass =
              items.length === 1
                ? 'projects-grid single-featured'
                : items.length === 2 || items.length === 4
                ? 'projects-grid two-col'
                : 'projects-grid';

            return (
              <div className="group-block" key={group}>
                <div className="group-heading">
                  <span className={`group-badge badge-${group}`}>{groupMeta.badge}</span>
                  <span>{groupMeta.title[lang]}</span>
                </div>

                <div className={gridClass}>
                  {items.map((study) => {
                    const title = ndaMode && study.titleNda ? study.titleNda[lang] : study.title[lang];
                    const client = ndaMode && study.clientNda ? study.clientNda[lang] : study.client[lang];
                    const cardDesc =
                      ndaMode && study.shortSummaryNda
                        ? study.shortSummaryNda[lang]
                        : study.shortSummary
                        ? study.shortSummary[lang]
                        : ndaMode && study.summaryNda
                        ? study.summaryNda[lang]
                        : study.summary[lang];

                    return (
                      <article
                        key={study.id}
                        role="button"
                        tabIndex={0}
                        className={`project-card ${items.length === 1 ? 'project-card-wide' : ''}`}
                        onClick={() => onSelectProject(study)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onSelectProject(study);
                          }
                        }}
                      >
                        <ProjectVisual id={study.id} badge={study.metricBadge[lang]} ndaMode={ndaMode} />

                        <div className="project-body">
                          <div className="card-meta-row">
                            <span className="card-category">{study.category[lang]}</span>
                          </div>

                          <h3>{title}</h3>
                          <div className="card-client">
                            {client} · {study.period}
                          </div>
                          <p className="card-summary">{cardDesc}</p>

                          <div className="tag-row">
                            {study.tags.slice(0, 3).map((t) => (
                              <span className="tag" key={t}>
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="card-cta">
                            <span>{UI_COPY.work.readCase[lang]}</span>
                            <ArrowUpRight size={16} />
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
