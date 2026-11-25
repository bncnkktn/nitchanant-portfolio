import { useEffect, useState } from 'react';
import { CASE_STUDIES, CaseStudy, Lang, PROFILE, RoleFilter } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkShowcase } from './components/WorkShowcase';
import { CaseStudyModal } from './components/CaseStudyModal';
import { InteractiveSkillsLab } from './components/InteractiveSkillsLab';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { ScrollProgress } from './components/Reveal';
import { CursorStarTrail } from './components/CursorStarTrail';

export function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('nk-lang');
    return saved === 'th' ? 'th' : 'en';
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('nk-theme');
    return saved === 'dark' ? 'dark' : 'light';
  });

  const [ndaMode, setNdaMode] = useState<boolean>(false);
  const [filter, setFilter] = useState<RoleFilter>('all');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('nk-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('nk-lang', lang);
  }, [lang]);

  return (
    <>
      <CursorStarTrail />
      <ScrollProgress />
      <Navbar
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === 'en' ? 'th' : 'en'))}
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
        ndaMode={ndaMode}
        onToggleNda={() => setNdaMode((prev) => !prev)}
      />

      <main>
        <Hero
          lang={lang}
          ndaMode={ndaMode}
          onQuickOpenCase={(caseId) => {
            const found = CASE_STUDIES.find((c) => c.id === caseId);
            if (found) setSelectedStudy(found);
          }}
        />
        <WorkShowcase
          lang={lang}
          ndaMode={ndaMode}
          filter={filter}
          onFilterChange={setFilter}
          onSelectProject={setSelectedStudy}
        />
        <InteractiveSkillsLab lang={lang} />
        <ExperienceTimeline lang={lang} ndaMode={ndaMode} />
        <ContactSection lang={lang} />
      </main>

      <footer>
        <div className="container footer-inner">
          <div>
            © {new Date().getFullYear()} {PROFILE.name[lang]} · {PROFILE.location[lang]}
          </div>
          <a href="#top" className="footer-top-btn">
            {lang === 'en' ? 'Back to top ↑' : 'กลับขึ้นด้านบน ↑'}
          </a>
        </div>
      </footer>

      <CaseStudyModal
        study={selectedStudy}
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === 'en' ? 'th' : 'en'))}
        ndaMode={ndaMode}
        onClose={() => setSelectedStudy(null)}
      />
    </>
  );
}
export default App;
