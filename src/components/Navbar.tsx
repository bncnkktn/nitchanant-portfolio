import { useState, useRef, useEffect } from 'react';
import { Download, Eye, EyeOff, Globe, Lock, Menu, Moon, Sun, ChevronDown, X } from 'lucide-react';
import { Lang, PROFILE, UI_COPY } from '../data/portfolioData';

interface NavbarProps {
  lang: Lang;
  onToggleLang: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  ndaMode: boolean;
  onToggleNda: () => void;
}

export function Navbar({
  lang,
  onToggleLang,
  theme,
  onToggleTheme,
  ndaMode,
  onToggleNda,
}: NavbarProps) {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResumeOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  return (
    <div className="navbar-wrap">
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#top" className="brand" onClick={() => setMobileMenuOpen(false)}>
            <span className="brand-mark">NK</span>
            <span>Nitchanant.</span>
          </a>

          <div className="nav-links">
            <a href="#work">{UI_COPY.nav.work[lang]}</a>
            <a href="#skills">{UI_COPY.nav.skills[lang]}</a>
            <a href="#experience">{UI_COPY.nav.experience[lang]}</a>
            <a href="#contact">{UI_COPY.nav.contact[lang]}</a>
          </div>

          <div className="nav-controls">
            {/* Desktop-only utility pills */}
            <button
              type="button"
              className={`pill-btn desktop-only ${ndaMode ? 'active' : ''}`}
              onClick={onToggleNda}
              title="Toggle anonymized client brand names"
              aria-pressed={ndaMode}
            >
              {ndaMode ? <EyeOff size={14} /> : <Eye size={14} />}
              <span>{ndaMode ? UI_COPY.nav.ndaOn[lang] : UI_COPY.nav.ndaOff[lang]}</span>
            </button>

            <button
              type="button"
              className="pill-btn desktop-only"
              onClick={onToggleLang}
              aria-label="Toggle Language"
            >
              <Globe size={14} />
              <span>{lang === 'en' ? 'TH' : 'EN'}</span>
            </button>

            <button
              type="button"
              className="pill-btn desktop-only"
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
            </button>

            {/* Always-visible Resume button */}
            <div className="dropdown" ref={dropdownRef}>
              <button
                type="button"
                className="pill-btn primary"
                onClick={() => {
                  setResumeOpen((prev) => !prev);
                  setMobileMenuOpen(false);
                }}
                aria-expanded={resumeOpen}
              >
                <Download size={14} />
                <span>{UI_COPY.nav.downloadResume[lang]}</span>
                <ChevronDown size={13} />
              </button>

              {resumeOpen && (
                <div className="dropdown-menu">
                  {PROFILE.resumes.map((r) => (
                    <div key={r.id} className="dropdown-item dropdown-item-row">
                      <div>
                        <div>{r.label[lang]}</div>
                        <small>{r.desc[lang]}</small>
                      </div>
                      <div className="resume-lang-actions">
                        <a
                          href={r.href.en}
                          target="_blank"
                          rel="noreferrer"
                          className={`resume-lang-pill ${lang === 'en' ? 'is-primary' : ''}`}
                          onClick={() => setResumeOpen(false)}
                          title="Download English PDF"
                        >
                          <Download size={11} />
                          <span>EN</span>
                        </a>
                        <a
                          href={r.href.th}
                          target="_blank"
                          rel="noreferrer"
                          className={`resume-lang-pill ${lang === 'th' ? 'is-primary' : ''}`}
                          onClick={() => setResumeOpen(false)}
                          title="ดาวน์โหลดไฟล์ภาษาไทย (PDF)"
                        >
                          <Download size={11} />
                          <span>TH</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="pill-btn mobile-menu-btn"
              onClick={() => {
                setMobileMenuOpen((prev) => !prev);
                setResumeOpen(false);
              }}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Clean Floating Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-links">
            <a href="#work" onClick={() => setMobileMenuOpen(false)}>
              {UI_COPY.nav.work[lang]}
            </a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)}>
              {UI_COPY.nav.skills[lang]}
            </a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)}>
              {UI_COPY.nav.experience[lang]}
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              {UI_COPY.nav.contact[lang]}
            </a>
          </div>

          <div className="mobile-drawer-controls">
            <button
              type="button"
              className={`pill-btn ${ndaMode ? 'active' : ''}`}
              onClick={onToggleNda}
            >
              {ndaMode ? <EyeOff size={14} /> : <Eye size={14} />}
              <span>{ndaMode ? UI_COPY.nav.ndaOn[lang] : UI_COPY.nav.ndaOff[lang]}</span>
            </button>

            <button type="button" className="pill-btn" onClick={onToggleLang}>
              <Globe size={14} />
              <span>{lang === 'en' ? 'ภาษาไทย (TH)' : 'English (EN)'}</span>
            </button>

            <button type="button" className="pill-btn" onClick={onToggleTheme}>
              {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
              <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
            </button>
          </div>
        </div>
      )}

      {ndaMode && (
        <div className="nda-banner" role="status">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Lock size={14} style={{ flexShrink: 0 }} />
            <span>{UI_COPY.ndaBanner[lang]}</span>
          </span>
          <button
            type="button"
            onClick={onToggleNda}
            style={{ textDecoration: 'underline', fontWeight: 800, fontSize: '0.8rem' }}
          >
            {lang === 'en' ? 'Show Real Brand Names' : 'แสดงชื่อแบรนด์จริง'}
          </button>
        </div>
      )}
    </div>
  );
}
