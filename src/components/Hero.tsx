import { useState, useRef, useEffect } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Layers,
  MapPin,
  Monitor,
  Pause,
  Play,
  Smartphone,
} from 'lucide-react';
import { Lang } from '../data/portfolioData';
import { Reveal } from './Reveal';
import { useSlidingIndicator } from '../hooks/useSlidingIndicator';
import { AboutBell } from './AboutBell';
import { SmartVideo } from './SmartVideo';

interface HeroProps {
  lang: Lang;
  ndaMode: boolean;
  onQuickOpenCase: (caseId: string) => void;
}

const STAGE_SLIDES = [
  {
    id: 'theme2a',
    caseId: 'shopify-core-theme',
    tabEn: '01 · Theme 2A',
    tabTh: '01 · Theme 2A',
    url: 'youthlabo.myshopify.com',
    desktopVideo: './media/shopify/theme-2a-desktop.mp4',
    mobileVideo: './media/shopify/theme-2a-mobile.mp4',
    captionEn: 'Live HD Recording • Signed-off Theme 2A (11 Sections: 7 Core + 4 Configurable) + Ready to Refill AJAX',
    captionTh: 'วิดีโอหน้าเว็บจริง HD • Theme 2A ที่ผ่าน Sign-off (11 Sections) + Ready to Refill (AJAX)',
    accent: '#ffa89b',
  },
  {
    id: 'theme2a-pdp',
    caseId: 'shopify-core-theme',
    tabEn: '02 · 2A PDP',
    tabTh: '02 · หน้าสินค้า 2A PDP',
    url: 'youthlabo.myshopify.com/products/hydra-glow-serum',
    desktopVideo: './media/shopify/theme-2a-pdp-desktop.mp4',
    mobileVideo: './media/shopify/theme-2a-pdp-mobile.mp4',
    captionEn: 'Live HD Recording • Theme 2A Product Detail Page featuring modular main-product-info.liquid Buy Box & Theme-Native CSS',
    captionTh: 'วิดีโอหน้าสินค้าจริง HD • Theme 2A PDP โชว์ main-product-info.liquid Buy Box แบบโมดูลาร์และ Theme-Native CSS',
    accent: '#a8f2c8',
  },
  {
    id: 'theme3a',
    caseId: 'shopify-core-theme',
    tabEn: '03 · Theme 3A',
    tabTh: '03 · Theme 3A',
    url: 'youthlabo.myshopify.com/theme-3a',
    desktopVideo: './media/shopify/theme-3a-desktop.mp4',
    mobileVideo: './media/shopify/theme-3a-mobile.mp4',
    captionEn: 'Live HD Recording • Theme 3A Editorial Storytelling, Key Ingredients & Trust-Driven Architecture',
    captionTh: 'วิดีโอหน้าเว็บจริง HD • Theme 3A เน้นการเล่าเรื่องแบรนด์, Key Ingredients และความน่าเชื่อถือ',
    accent: '#ffe885',
  },
  {
    id: 'blog',
    caseId: 'shopify-core-theme',
    tabEn: '04 · Shop This Blog',
    tabTh: '04 · บทความ Shop This',
    url: 'youthlabo.myshopify.com/blogs/skin-guide',
    desktopVideo: './media/shopify/blog-post-desktop.mp4',
    mobileVideo: './media/shopify/blog-post-mobile.mp4',
    captionEn: 'Live HD Recording • 3-Column Editorial × Commerce: Sticky TOC + Routine Table + Shop This Article',
    captionTh: 'วิดีโอหน้าเว็บจริง HD • คอนเทนต์เชื่อมการขาย 3 คอลัมน์: สารบัญ + ตาราง Routine + ปุ่มช้อปในบทความ',
    accent: '#dccbff',
  },
  {
    id: 'about',
    caseId: 'shopify-core-theme',
    tabEn: '05 · About Us',
    tabTh: '05 · หน้า About Us',
    url: 'youthlabo.myshopify.com/pages/about-us',
    desktopVideo: './media/shopify/about-us-desktop.mp4',
    mobileVideo: './media/shopify/about-us-mobile.mp4',
    captionEn: 'Live HD Recording • Brand Storytelling, COSMAX × aCommerce Timeline & Clinical Credibility Bento',
    captionTh: 'วิดีโอหน้าเว็บจริง HD • เล่าเรื่องแบรนด์ ไทม์ไลน์ COSMAX × aCommerce และข้อมูลทดสอบทางคลินิก',
    accent: '#b8e8ff',
  },
] as const;

const FLOATING_CHIPS = [
  { id: 'brands', caseId: 'shopify-core-theme', val: '19 Sites', en: 'Benchmarked', th: 'เว็บที่วิเคราะห์', cls: 'chip-mint' },
  { id: 'liquid', caseId: 'shopify-core-theme', val: '4 Liquid', en: 'OS 2.0 Coded', th: 'โค้ด Liquid จริง', cls: 'chip-butter' },
  { id: 'adoption', caseId: 'ps-digital-identity', val: '76.2%', en: 'Team Adoption', th: 'ใช้งานจริงในทีม', cls: 'chip-lilac' },
  { id: 'audit', caseId: 'emi-b2b-audit', val: '67 Slides', en: 'B2B Audit', th: 'สไลด์ Audit', cls: 'chip-peach' },
];

const ROLE_TAGS_EN = ['UX/UI Designer', 'Shopify Builder', 'Frontend Developer', 'Product Designer'];
const ROLE_TAGS_TH = ['UX/UI Designer', 'Shopify Builder', 'Frontend Developer', 'Product Designer'];

const MARQUEE_ITEMS = [
  'UX Research & Benchmarking',
  'Figma Design Systems',
  'Shopify OS 2.0 & Liquid',
  'React & TypeScript',
  'Usability Testing',
  '3D & VR Prototyping',
  'Staging QA & Audits',
  'E-Commerce Strategy',
];

export function Hero({ lang, ndaMode, onQuickOpenCase }: HeroProps) {
  const [slideIdx, setSlideIdx] = useState(0);
  const [roleIdx, setRoleIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mobileView, setMobileView] = useState<'mobile' | 'desktop'>('mobile');

  const stageSlider = useSlidingIndicator<HTMLDivElement>(slideIdx, lang);
  const deviceSlider = useSlidingIndicator<HTMLDivElement>(mobileView, lang);

  const desktopVidRef = useRef<HTMLVideoElement>(null);
  const mobileVidRef = useRef<HTMLVideoElement>(null);

  const activeSlide = STAGE_SLIDES[slideIdx] ?? STAGE_SLIDES[0];
  const roleTags = lang === 'en' ? ROLE_TAGS_EN : ROLE_TAGS_TH;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIdx((i) => (i + 1) % ROLE_TAGS_EN.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

  const handleTogglePlayback = () => {
    const next = !isPlaying;
    setIsPlaying(next);
    [desktopVidRef.current, mobileVidRef.current].forEach((vid) => {
      if (!vid) return;
      if (next) void vid.play();
      else vid.pause();
    });
  };

  const handleSelectSlide = (idx: number) => {
    setSlideIdx(idx);
    setIsPlaying(true);
  };

  return (
    <>
      {/* SCREEN 1: FULL-BLEED CALM STARRY HERO */}
      <header id="top" className="lately-hero-full">
        <div className="lately-stars-layer" aria-hidden="true">
          <svg className="lately-star ls-1" viewBox="0 0 24 24" width="18" height="18"><path d="M12 1.8l2.9 6.2 6.8.8-5 4.6 1.3 6.7-6-3.3-6 3.3 1.3-6.7-5-4.6 6.8-.8z" fill="currentColor" /></svg>
          <svg className="lately-star ls-2" viewBox="0 0 24 24" width="22" height="22"><path d="M12 1.8l2.9 6.2 6.8.8-5 4.6 1.3 6.7-6-3.3-6 3.3 1.3-6.7-5-4.6 6.8-.8z" fill="currentColor" /></svg>
          <svg className="lately-star ls-3" viewBox="0 0 24 24" width="17" height="17"><path d="M12 1.8l2.9 6.2 6.8.8-5 4.6 1.3 6.7-6-3.3-6 3.3 1.3-6.7-5-4.6 6.8-.8z" fill="currentColor" /></svg>
          <svg className="lately-star ls-4" viewBox="0 0 24 24" width="21" height="21"><path d="M12 1.8l2.9 6.2 6.8.8-5 4.6 1.3 6.7-6-3.3-6 3.3 1.3-6.7-5-4.6 6.8-.8z" fill="currentColor" /></svg>
          <svg className="lately-star ls-5" viewBox="0 0 24 24" width="18" height="18"><path d="M12 1.8l2.9 6.2 6.8.8-5 4.6 1.3 6.7-6-3.3-6 3.3 1.3-6.7-5-4.6 6.8-.8z" fill="currentColor" /></svg>
          <svg className="lately-star ls-6" viewBox="0 0 24 24" width="20" height="20"><path d="M12 1.8l2.9 6.2 6.8.8-5 4.6 1.3 6.7-6-3.3-6 3.3 1.3-6.7-5-4.6 6.8-.8z" fill="currentColor" /></svg>
          <svg className="lately-star ls-7" viewBox="0 0 24 24" width="19" height="19"><path d="M12 1.8l2.9 6.2 6.8.8-5 4.6 1.3 6.7-6-3.3-6 3.3 1.3-6.7-5-4.6 6.8-.8z" fill="currentColor" /></svg>
          <svg className="lately-star ls-8" viewBox="0 0 24 24" width="17" height="17"><path d="M12 1.8l2.9 6.2 6.8.8-5 4.6 1.3 6.7-6-3.3-6 3.3 1.3-6.7-5-4.6 6.8-.8z" fill="currentColor" /></svg>
          <svg className="lately-star ls-9" viewBox="0 0 24 24" width="16" height="16"><path d="M12 1.8l2.9 6.2 6.8.8-5 4.6 1.3 6.7-6-3.3-6 3.3 1.3-6.7-5-4.6 6.8-.8z" fill="currentColor" /></svg>
          <svg className="lately-star ls-10" viewBox="0 0 24 24" width="19" height="19"><path d="M12 1.8l2.9 6.2 6.8.8-5 4.6 1.3 6.7-6-3.3-6 3.3 1.3-6.7-5-4.6 6.8-.8z" fill="currentColor" /></svg>
        </div>

        <div className="container lately-full-inner">
          <div className="lately-top-bar">
            <div className="lately-status-pill">
              <span className="status-dot" />
              <span>{lang === 'en' ? 'Open to full-time roles' : 'เปิดรับงานประจำ UX/UI · Frontend'}</span>
            </div>
            <div className="lately-loc-meta">
              <MapPin size={12} />
              <span>{lang === 'en' ? 'KMITL · Pathum Thani, TH' : 'สจล. · ปทุมธานี, ประเทศไทย'}</span>
            </div>
          </div>

          <div className="lately-center-block">
            <span className="lately-eyebrow">
              {lang === 'en' ? 'nitchanant kimkethanom (bell)' : 'ณิชนันท์ กิมเกถนอม (เบลล์)'}
            </span>

            <h1 className="lately-title">
              <span className="lately-title-top word-rise" style={{ animationDelay: '0.04s' }}>
                Nitchanant
              </span>
              <span className="lately-title-paren word-rise" style={{ animationDelay: '0.14s' }}>
                ( portfolio )
              </span>
            </h1>

            <p className="lately-bio">
              {lang === 'en' ? (
                <>
                  KMITL IT graduate &amp; aCommerce intern - specializing in{' '}
                  <button
                    type="button"
                    className="intro-inline-pill"
                    onClick={() => setRoleIdx((i) => (i + 1) % roleTags.length)}
                  >
                    <span key={roleTags[roleIdx]} className="pill-word-flip">
                      {roleTags[roleIdx]}
                    </span>
                  </button>{' '}
                  from UX research to live production code.
                </>
              ) : (
                <>
                  บัณฑิตไอที สจล. และนักศึกษาฝึกงานที่ aCommerce ทำงานสาย{' '}
                  <button
                    type="button"
                    className="intro-inline-pill"
                    onClick={() => setRoleIdx((i) => (i + 1) % roleTags.length)}
                  >
                    <span key={roleTags[roleIdx]} className="pill-word-flip">
                      {roleTags[roleIdx]}
                    </span>
                  </button>{' '}
                  ตั้งแต่ทำ UX Research ออกแบบระบบ UI จนถึงขึ้นโค้ดใช้งานจริง
                </>
              )}
            </p>

            <div className="lately-cta-row">
              <a href="#work" className="btn lately-btn-dark">
                <span>{lang === 'en' ? 'Explore 15 Projects' : 'ดูผลงานทั้งหมด (15)'}</span>
                <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn lately-btn-soft">
                <span>{lang === 'en' ? 'Resumes & Contact' : 'เรซูเม่ & ติดต่อ'}</span>
              </a>
            </div>
          </div>

          <div className="lately-full-foot">
            <div className="lately-proof-line">
              <span>
                <i className="lately-dot dot-peach" aria-hidden="true" />
                <strong>{lang === 'en' ? 'aCommerce Intern' : 'ฝึกงาน aCommerce'}</strong>
              </span>
              <span className="lately-proof-sep" aria-hidden="true">·</span>
              <span>
                <i className="lately-dot dot-butter" aria-hidden="true" />
                <strong>{lang === 'en' ? 'GGJ 2025 Award' : 'รางวัล GGJ 2025'}</strong>
              </span>
              <span className="lately-proof-sep" aria-hidden="true">·</span>
              <span>
                <i className="lately-dot dot-lilac" aria-hidden="true" />
                <strong>{lang === 'en' ? '15 Projects' : '15 โปรเจกต์'}</strong>
              </span>
            </div>

            <a href="#about" className="intro-scroll-cue">
              <span>{lang === 'en' ? 'Scroll to explore' : 'เลื่อนลงเพื่อดูผลงาน'}</span>
              <ArrowDown size={14} className="bounce-down" />
            </a>
          </div>
        </div>
      </header>

      {/* SCREEN 2: WARM PERSONAL INTRO ("Hi! I'm Bell") */}
      <AboutBell lang={lang} />

      {/* SCREEN 3: LIVE SHOPIFY SHOWCASE STAGE */}
      <section id="live-showcase" className="section live-stage-section">
        <div className="container">
          <Reveal>
            <div className="live-stage-header">
              <div className="section-kicker">{lang === 'en' ? 'Live Shopify Work' : 'ตัวอย่างหน้าเว็บจริง'}</div>
              <h2 className="section-title">
                {lang === 'en' ? (
                  <>
                    From Research to <span className="shimmer-accent">Live Production.</span>
                  </>
                ) : (
                  <>
                    จาก UX Research สู่ <span className="shimmer-accent">หน้าเว็บใช้งานจริง</span>
                  </>
                )}
              </h2>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="hero-stage-shell">
              <div className="hero-floating-chips">
                {FLOATING_CHIPS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className={`float-chip ${c.cls}`}
                    onClick={() => onQuickOpenCase(c.caseId)}
                  >
                    <strong>{c.val}</strong>
                    <span>{lang === 'en' ? c.en : c.th}</span>
                    <ArrowUpRight size={13} className="chip-arrow" />
                  </button>
                ))}
              </div>

              <div className="stage-controls-bar">
                <div ref={stageSlider.containerRef} className="stage-tabs has-slider" role="tablist">
                  <span className="sliding-pill sliding-pill-ink" style={stageSlider.style} aria-hidden="true" />
                  {STAGE_SLIDES.map((s, idx) => (
                    <button
                      key={s.id}
                      type="button"
                      role="tab"
                      aria-selected={activeSlide.id === s.id}
                      className={`stage-tab ${activeSlide.id === s.id ? 'active' : ''}`}
                      onClick={() => handleSelectSlide(idx)}
                    >
                      {lang === 'en' ? s.tabEn : s.tabTh}
                    </button>
                  ))}
                </div>

                <div className="stage-right-actions">
                  <div ref={deviceSlider.containerRef} className="mobile-device-switch has-slider">
                    <span className="sliding-pill sliding-pill-ink" style={deviceSlider.style} aria-hidden="true" />
                    <button
                      type="button"
                      aria-pressed={mobileView === 'mobile'}
                      className={mobileView === 'mobile' ? 'active' : ''}
                      onClick={() => setMobileView('mobile')}
                    >
                      <Smartphone size={13} />
                      <span>Mobile</span>
                    </button>
                    <button
                      type="button"
                      aria-pressed={mobileView === 'desktop'}
                      className={mobileView === 'desktop' ? 'active' : ''}
                      onClick={() => setMobileView('desktop')}
                    >
                      <Monitor size={13} />
                      <span>Desktop</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    className="pill-btn"
                    onClick={handleTogglePlayback}
                    aria-label={isPlaying ? 'Pause videos' : 'Play videos'}
                  >
                    {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                    <span>{isPlaying ? (lang === 'en' ? 'Pause' : 'หยุด') : (lang === 'en' ? 'Play' : 'เล่น')}</span>
                  </button>

                  <button
                    type="button"
                    className="pill-btn primary"
                    onClick={() => onQuickOpenCase(activeSlide.caseId)}
                  >
                    <Layers size={13} />
                    <span>{lang === 'en' ? 'Case Study' : 'อ่าน Case'}</span>
                  </button>
                </div>
              </div>

              <div className="stage-3d-wrap">
                <div className={`stage-canvas mobile-show-${mobileView}`}>
                  <div className="browser-mockup">
                    <div className="browser-chrome">
                      <div className="window-dots">
                        <span style={{ background: '#ff6b6b' }} />
                        <span style={{ background: '#ffd93d' }} />
                        <span style={{ background: '#6bcb77' }} />
                      </div>
                      <div className="browser-url">
                        <Monitor size={12} style={{ flexShrink: 0 }} />
                        <span>
                          {ndaMode
                            ? activeSlide.url.replace('youthlabo.myshopify.com', 'demo-beauty-store.myshopify.com')
                            : activeSlide.url}
                        </span>
                      </div>
                      <button
                        type="button"
                        className="browser-inspect-btn"
                        onClick={() => onQuickOpenCase(activeSlide.caseId)}
                      >
                        {lang === 'en' ? 'Full Case ↗' : 'ดูเต็ม ๆ ↗'}
                      </button>
                    </div>
                    <div className="browser-viewport video-viewport desktop-aspect">
                      <SmartVideo
                        ref={desktopVidRef}
                        key={activeSlide.desktopVideo}
                        src={activeSlide.desktopVideo}
                        paused={!isPlaying}
                        className="stage-video stage-video-contain"
                      />
                    </div>
                  </div>

                  <div className="phone-mockup">
                    <div className="phone-notch">
                      <Smartphone size={11} />
                      <span>Mobile Live</span>
                    </div>
                    <div className="phone-viewport video-viewport">
                      <SmartVideo
                        ref={mobileVidRef}
                        key={activeSlide.mobileVideo}
                        src={activeSlide.mobileVideo}
                        paused={!isPlaying}
                        className="stage-video stage-video-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="stage-caption-bar">
                <span
                  className="stage-caption-dot"
                  style={{ background: activeSlide.accent }}
                />
                <span>
                  {(() => {
                    const raw = lang === 'en' ? activeSlide.captionEn : activeSlide.captionTh;
                    return ndaMode ? raw.replace(/COSMAX × aCommerce/g, 'Demo Skincare Brand') : raw;
                  })()}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span className="marquee-item" key={idx}>
              <span>{item}</span>
              <span className="marquee-star">·</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
