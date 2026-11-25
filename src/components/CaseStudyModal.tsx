import { useEffect, useRef, useState } from 'react';
import {
  BookOpen,
  ChevronDown,
  ExternalLink,
  FileText,
  Globe,
  Lock,
  Maximize2,
  Monitor,
  PlayCircle,
  Smartphone,
  X,
} from 'lucide-react';
import { CaseStudy, GalleryItem, Lang, UI_COPY } from '../data/portfolioData';
import { useSlidingIndicator } from '../hooks/useSlidingIndicator';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  lang: Lang;
  onToggleLang: () => void;
  ndaMode: boolean;
  onClose: () => void;
}

export function CaseStudyModal({ study, lang, onToggleLang, ndaMode, onClose }: CaseStudyModalProps) {
  const [activeShotIdx, setActiveShotIdx] = useState(0);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [viewMode, setViewMode] = useState<'summary' | 'full'>('summary');
  const contextRef = useRef<HTMLDivElement | null>(null);

  const viewSlider = useSlidingIndicator<HTMLDivElement>(viewMode, `${lang}-${study?.id ?? ''}`);
  const gallerySlider = useSlidingIndicator<HTMLDivElement>(activeShotIdx, `${lang}-${study?.id ?? ''}`);

  const handleExpandFull = () => {
    setViewMode('full');
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        contextRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  };

  useEffect(() => {
    setActiveShotIdx(0);
    setLightboxItem(null);
    setViewMode('summary');
  }, [study?.id]);

  useEffect(() => {
    if (!study) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxItem) setLightboxItem(null);
        else onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [study, lightboxItem, onClose]);

  if (!study) return null;

  const title = ndaMode && study.titleNda ? study.titleNda[lang] : study.title[lang];
  const client = ndaMode && study.clientNda ? study.clientNda[lang] : study.client[lang];
  const summary = ndaMode && study.summaryNda ? study.summaryNda[lang] : study.summary[lang];
  const context = ndaMode && study.contextNda ? study.contextNda[lang] : study.context[lang];
  const methodologyItems =
    ndaMode && study.methodologyNda ? study.methodologyNda[lang] : study.methodology[lang];

  const showGallery = Boolean(study.gallery && study.gallery.length > 0 && !(ndaMode && study.hideGalleryOnNda));
  const activeShot = showGallery && study.gallery ? study.gallery[activeShotIdx] ?? study.gallery[0] : null;
  const activeType = activeShot?.mediaType ?? 'image';

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div className="card-category" style={{ display: 'inline-block', marginBottom: 8 }}>
              {study.category[lang]} · {study.metricBadge[lang]}
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.42rem', fontWeight: 800, lineHeight: 1.22 }}>
              {title}
            </h3>
          </div>

          <div className="modal-header-actions">
            <button
              type="button"
              className="pill-btn modal-lang-btn"
              onClick={onToggleLang}
              aria-label={lang === 'en' ? 'Switch to Thai' : 'Switch to English'}
              title={lang === 'en' ? 'สลับเป็นภาษาไทย' : 'Switch to English'}
            >
              <Globe size={14} />
              <span>{lang === 'en' ? 'TH' : 'EN'}</span>
            </button>

            <button type="button" className="modal-close" onClick={onClose} aria-label="Close modal">
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="modal-body">
        <div
          ref={viewSlider.containerRef}
          className="modal-view-bar has-slider"
          role="tablist"
          aria-label="Reading mode"
        >
          <span className="sliding-pill sliding-pill-elevated" style={viewSlider.style} aria-hidden="true" />
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'summary'}
            className={`modal-view-tab ${viewMode === 'summary' ? 'active' : ''}`}
            onClick={() => setViewMode('summary')}
          >
            <FileText size={14} />
            <span>{lang === 'en' ? 'Quick Summary' : 'แบบสรุป'}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'full'}
            className={`modal-view-tab ${viewMode === 'full' ? 'active' : ''}`}
            onClick={() => setViewMode('full')}
          >
            <BookOpen size={14} />
            <span>{lang === 'en' ? 'Full Case Study' : 'อ่านแบบเต็ม'}</span>
          </button>
        </div>

        <div className="modal-meta-grid">
          <div>
            <div className="modal-meta-label">{UI_COPY.modal.role[lang]}</div>
            <div className="modal-meta-value">{study.role[lang]}</div>
          </div>
          <div>
            <div className="modal-meta-label">{UI_COPY.modal.client[lang]}</div>
            <div className="modal-meta-value">{client}</div>
          </div>
          <div>
            <div className="modal-meta-label">{UI_COPY.modal.period[lang]}</div>
            <div className="modal-meta-value">{study.period}</div>
          </div>
        </div>

        {/* Direct Project Links (Live Demo, Figma Prototype, YouTube Showreel) */}
        {study.links && study.links.length > 0 && (
          <div className="modal-links-row">
            {study.links.map((lnk) => (
              <a
                key={lnk.href}
                href={lnk.href}
                target="_blank"
                rel="noreferrer"
                className={`btn ${lnk.primary ? 'intro-cta-peach' : 'intro-cta-ghost'}`}
                style={{ padding: '9px 16px', fontSize: '0.84rem' }}
              >
                <span>{lnk.label[lang]}</span>
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        )}

        {/* Interactive Multi-Media Showcase (HD Video + YouTube + High-Res Image + PDF Viewer) */}
        {showGallery && study.gallery && activeShot && (
          <div className="modal-gallery">
            <div className="gallery-header">
              <h4 style={{ margin: 0 }}>
                {lang === 'en' ? 'Live Demos & Visual Artifacts' : 'วิดีโอหน้าเว็บจริงและภาพผลงาน'}
              </h4>
              <div style={{ display: 'flex', gap: 6 }}>
                {activeType === 'pdf' ? (
                  <a
                    href={activeShot.src}
                    target="_blank"
                    rel="noreferrer"
                    className="pill-btn"
                  >
                    <ExternalLink size={13} />
                    <span>{lang === 'en' ? 'Open PDF' : 'เปิด PDF เต็มหน้า'}</span>
                  </a>
                ) : activeType === 'youtube' ? null : (
                  <button
                    type="button"
                    className="pill-btn"
                    onClick={() => setLightboxItem(activeShot)}
                  >
                    <Maximize2 size={13} />
                    <span>{lang === 'en' ? 'Full Screen' : 'ขยายดูเต็มจอ'}</span>
                  </button>
                )}
              </div>
            </div>

            <div ref={gallerySlider.containerRef} className="gallery-tabs has-slider">
              <span className="sliding-pill sliding-pill-ink" style={gallerySlider.style} aria-hidden="true" />
              {study.gallery.map((shot, idx) => {
                const shotType = shot.mediaType ?? 'image';
                return (
                  <button
                    key={shot.id}
                    type="button"
                    aria-selected={idx === activeShotIdx}
                    className={`gallery-tab ${idx === activeShotIdx ? 'active' : ''}`}
                    onClick={() => setActiveShotIdx(idx)}
                  >
                    {shotType === 'video' || shotType === 'youtube' ? (
                      <PlayCircle size={12} />
                    ) : shotType === 'pdf' ? (
                      <FileText size={12} />
                    ) : shot.device === 'mobile' ? (
                      <Smartphone size={12} />
                    ) : (
                      <Monitor size={12} />
                    )}
                    <span>{shot.label[lang]}</span>
                  </button>
                );
              })}
            </div>

            <div
              key={activeShot.id}
              className={`gallery-frame tab-media-fade ${activeShot.device === 'mobile' ? 'is-mobile' : ''} ${
                activeType === 'video' || activeType === 'youtube' ? 'is-video' : ''
              }`}
            >
              {activeType === 'video' ? (
                <video
                  key={activeShot.src}
                  src={activeShot.src}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="gallery-video"
                  onLoadedMetadata={(e) => {
                    if (activeShot.silent) {
                      e.currentTarget.muted = true;
                      e.currentTarget.volume = 0;
                    }
                  }}
                  onVolumeChange={(e) => {
                    if (activeShot.silent && (!e.currentTarget.muted || e.currentTarget.volume !== 0)) {
                      e.currentTarget.muted = true;
                      e.currentTarget.volume = 0;
                    }
                  }}
                />
              ) : activeType === 'youtube' ? (
                <iframe
                  key={activeShot.src}
                  src={activeShot.src}
                  title={activeShot.label[lang]}
                  className="gallery-youtube"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : activeType === 'pdf' ? (
                <iframe
                  key={activeShot.src}
                  src={activeShot.src}
                  title={activeShot.label[lang]}
                  className="gallery-pdf"
                />
              ) : (
                <img src={activeShot.src} alt={activeShot.label[lang]} />
              )}
            </div>

            <p className="gallery-caption">{activeShot.caption[lang]}</p>
          </div>
        )}

        {ndaMode && study.hideGalleryOnNda && (
          <div className="nda-banner" style={{ margin: '0 0 20px', borderRadius: 16 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Lock size={14} style={{ flexShrink: 0 }} />
              {lang === 'en'
                ? 'Visual mockups hidden while NDA Mode is active. Turn off NDA Mode in the navbar to preview.'
                : 'ซ่อนภาพม็อกอัปแบรนด์ลูกค้าไว้เนื่องจากเปิด NDA Mode (ปิด NDA Mode ที่แถบเมนูด้านบนเพื่อดูภาพจริง)'}
            </span>
          </div>
        )}

        <div key={viewMode} className="tab-panel-fade">
          <div className="case-section modal-summary-box">
            <h4>{lang === 'en' ? 'Overview' : 'สรุปภาพรวม'}</h4>
            <p>{summary}</p>
          </div>

          {viewMode === 'full' && (
            <>
              <div ref={contextRef} className="case-section" style={{ scrollMarginTop: 16 }}>
                <h4>{UI_COPY.modal.context[lang]}</h4>
                <p>{context}</p>
              </div>

              <div className="case-section">
                <h4>{UI_COPY.modal.challenge[lang]}</h4>
                <p>{study.challenge[lang]}</p>
              </div>

              <div className="case-section">
                <h4>{UI_COPY.modal.methodology[lang]}</h4>
                <ul className="case-list">
                  {methodologyItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="case-section">
                <h4>{UI_COPY.modal.deliverables[lang]}</h4>
                <ul className="case-list">
                  {study.deliverables[lang].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          )}

          <div className="case-section impact-box">
            <h4>{UI_COPY.modal.impact[lang]}</h4>
            <ul className="case-list">
              {study.impact[lang].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {viewMode === 'summary' && (
            <div className="modal-expand-row">
              <button
                type="button"
                className="btn intro-cta-ghost modal-expand-btn"
                onClick={handleExpandFull}
              >
                <span>
                  {lang === 'en'
                    ? 'Read full case study (Context, Process & Deliverables)'
                    : 'อ่านรายละเอียดแบบเต็ม (ที่มา, กระบวนการ และชิ้นงานทั้งหมด)'}
                </span>
                <ChevronDown size={16} />
              </button>
            </div>
          )}
        </div>

        <div className="tag-row" style={{ marginBottom: 0 }}>
          {study.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        </div>
      </div>

      {lightboxItem && (
        <div
          className="lightbox-overlay"
          onClick={(e) => {
            e.stopPropagation();
            setLightboxItem(null);
          }}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setLightboxItem(null)}
            aria-label="Close full media"
          >
            <X size={22} />
          </button>

          {lightboxItem.mediaType === 'video' ? (
            <video
              src={lightboxItem.src}
              controls
              autoPlay
              loop
              muted
              playsInline
              className="lightbox-video"
              onClick={(e) => e.stopPropagation()}
              onLoadedMetadata={(e) => {
                if (lightboxItem.silent) {
                  e.currentTarget.muted = true;
                  e.currentTarget.volume = 0;
                }
              }}
              onVolumeChange={(e) => {
                if (lightboxItem.silent && (!e.currentTarget.muted || e.currentTarget.volume !== 0)) {
                  e.currentTarget.muted = true;
                  e.currentTarget.volume = 0;
                }
              }}
            />
          ) : (
            <img
              src={lightboxItem.src}
              alt={lightboxItem.label[lang]}
              className="lightbox-img"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </div>
  );
}
