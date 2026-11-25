import { useState } from 'react';
import { Check, Copy, Download, ExternalLink, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Lang, PROFILE, UI_COPY } from '../data/portfolioData';
import { Reveal } from './Reveal';

interface ContactSectionProps {
  lang: Lang;
}

export function ContactSection({ lang }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal variant="scale">
          <div className="contact-panel">
          <div>
            <div className="section-kicker" style={{ color: 'inherit', opacity: 0.72 }}>
              {UI_COPY.contact.kicker[lang]}
            </div>
            <h2 className="section-title" style={{ marginBottom: 12 }}>
              {UI_COPY.contact.title[lang]}
            </h2>
            <p style={{ opacity: 0.88, fontSize: '0.95rem', marginBottom: 20 }}>
              {UI_COPY.contact.desc[lang]}
            </p>

            <div style={{ display: 'grid', gap: 10, marginBottom: 24, fontSize: '0.9rem', fontWeight: 600 }}>
              <div className="contact-info-row">
                <span className="contact-info-main">
                  <Mail size={15} />
                  <span>{PROFILE.email}</span>
                </span>
                <button type="button" className="contact-mini-copy" onClick={handleCopyEmail}>
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copied ? UI_COPY.contact.copied[lang] : (lang === 'en' ? 'Copy' : 'คัดลอก')}</span>
                </button>
              </div>
              <div className="contact-info-row">
                <span className="contact-info-main">
                  <Phone size={15} />
                  <a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a>
                </span>
              </div>
              <div className="contact-info-row">
                <span className="contact-info-main">
                  <MapPin size={15} />
                  <span>{PROFILE.location[lang]}</span>
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <a
                href={`mailto:${PROFILE.email}`}
                className="btn contact-btn-primary"
              >
                <Mail size={16} />
                <span>{UI_COPY.contact.sendEmail[lang]}</span>
              </a>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="btn contact-btn-secondary"
              >
                <Linkedin size={15} />
                <span>{UI_COPY.contact.openLinkedin[lang]}</span>
                <ExternalLink size={13} />
              </a>

              <a
                href={PROFILE.notionUrl}
                target="_blank"
                rel="noreferrer"
                className="btn contact-btn-secondary"
              >
                <span>{UI_COPY.contact.openNotion[lang]}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, marginBottom: 12 }}>
              {UI_COPY.contact.resumesHeading[lang]}
            </h3>
            <div className="resume-cards">
              {PROFILE.resumes.map((r) => (
                <div key={r.id} className="resume-link-card">
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{r.label[lang]}</div>
                    <div style={{ fontSize: '0.78rem', opacity: 0.72 }}>{r.desc[lang]}</div>
                  </div>
                  <div className="resume-lang-actions">
                    <a
                      href={r.href.en}
                      target="_blank"
                      rel="noreferrer"
                      className={`resume-lang-pill ${lang === 'en' ? 'is-primary' : ''}`}
                      title="Download English PDF"
                    >
                      <Download size={12} />
                      <span>EN</span>
                    </a>
                    <a
                      href={r.href.th}
                      target="_blank"
                      rel="noreferrer"
                      className={`resume-lang-pill ${lang === 'th' ? 'is-primary' : ''}`}
                      title="ดาวน์โหลดไฟล์ภาษาไทย (PDF)"
                    >
                      <Download size={12} />
                      <span>TH</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
