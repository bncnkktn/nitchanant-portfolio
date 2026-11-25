import { useCallback, useEffect, useState } from 'react';
import { ExternalLink, Linkedin } from 'lucide-react';
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

function getStudyFromHash(): CaseStudy | null {
  if (typeof window === 'undefined') return null;
  const hash = window.location.hash;
  if (!hash.startsWith('#case=')) return null;
  const id = decodeURIComponent(hash.slice('#case='.length));
  return CASE_STUDIES.find((c) => c.id === id) ?? null;
}

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
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(() => getStudyFromHash());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('nk-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('nk-lang', lang);
  }, [lang]);

  useEffect(() => {
    const syncFromHash = () => {
      setSelectedStudy(getStudyFromHash());
    };
    window.addEventListener('hashchange', syncFromHash);
    window.addEventListener('popstate', syncFromHash);
    return () => {
      window.removeEventListener('hashchange', syncFromHash);
      window.removeEventListener('popstate', syncFromHash);
    };
  }, []);

  const openStudy = useCallback((study: CaseStudy, replace = false) => {
    setSelectedStudy(study);
    const targetHash = `#case=${encodeURIComponent(study.id)}`;
    if (window.location.hash !== targetHash) {
      if (replace) {
        window.history.replaceState(null, '', targetHash);
      } else {
        window.history.pushState({ caseModal: true }, '', targetHash);
      }
    }
  }, []);

  const closeStudy = useCallback(() => {
    setSelectedStudy(null);
    if (window.location.hash.startsWith('#case=')) {
      if (window.history.state && (window.history.state as { caseModal?: boolean }).caseModal) {
        window.history.back();
      } else {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }
  }, []);

  const currentIdx = selectedStudy ? CASE_STUDIES.findIndex((c) => c.id === selectedStudy.id) : -1;
  const prevStudy = currentIdx >= 0 ? CASE_STUDIES[(currentIdx - 1 + CASE_STUDIES.length) % CASE_STUDIES.length] : null;
  const nextStudy = currentIdx >= 0 ? CASE_STUDIES[(currentIdx + 1) % CASE_STUDIES.length] : null;

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
            if (found) openStudy(found);
          }}
        />
        <WorkShowcase
          lang={lang}
          ndaMode={ndaMode}
          filter={filter}
          onFilterChange={setFilter}
          onSelectProject={(study) => openStudy(study)}
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
          <div className="footer-actions">
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="footer-top-btn"
            >
              <Linkedin size={13} />
              <span>LinkedIn</span>
              <ExternalLink size={11} />
            </a>
            <a href="#top" className="footer-top-btn">
              {lang === 'en' ? 'Back to top ↑' : 'กลับขึ้นด้านบน ↑'}
            </a>
          </div>
        </div>
      </footer>

      <CaseStudyModal
        study={selectedStudy}
        prevStudy={prevStudy}
        nextStudy={nextStudy}
        onNavigate={(target) => openStudy(target, true)}
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === 'en' ? 'th' : 'en'))}
        ndaMode={ndaMode}
        onClose={closeStudy}
      />
    </>
  );
}
export default App;
