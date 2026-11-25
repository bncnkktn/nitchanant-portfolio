import React from 'react';
import { SmartVideo } from './SmartVideo';

interface ProjectVisualProps {
  id: string;
  badge: string;
  ndaMode?: boolean;
}

export function ProjectVisual({ id, badge, ndaMode = false }: ProjectVisualProps) {
  // Real HD Video & High-Res Photo covers for Flagship Shopify projects
  if (id === 'shopify-core-theme') {
    return (
      <div className="project-visual-wrap project-visual-photo" style={{ background: 'linear-gradient(135deg, #fff0e6 0%, #fff8e3 100%)' }}>
        <span className="project-visual-badge">▶ {badge}</span>
        <div className="card-shot-pair">
          <div className="card-shot-main">
            <SmartVideo
              src="./media/shopify/theme-2a-desktop.mp4"
              className="card-live-video"
            />
          </div>
          <div className="card-shot-side">
            <SmartVideo
              src="./media/shopify/theme-2a-mobile.mp4"
              className="card-live-video"
            />
          </div>
        </div>
      </div>
    );
  }

  if (id === 'flamingo-d2c-presales' && !ndaMode) {
    return (
      <div className="project-visual-wrap project-visual-photo" style={{ background: 'linear-gradient(135deg, #fefce0 0%, #fff2ec 100%)' }}>
        <span className="project-visual-badge">{badge}</span>
        <div className="card-shot-single">
          <img src="./images/shopify/flamingo-d2c-storefront.jpg" alt="Flamingo APAC D2C Storefront Mockup" />
        </div>
      </div>
    );
  }

  if (id === 'lifebalance-webapp') {
    return (
      <div className="project-visual-wrap project-visual-photo" style={{ background: 'linear-gradient(135deg, #fff9db 0%, #ffece8 100%)' }}>
        <span className="project-visual-badge">{badge}</span>
        <div className="card-shot-pair">
          <div className="card-shot-main">
            <img src="./images/lifebalance/dashboard.png" alt="LifeBalance Health Dashboard" />
          </div>
          <div className="card-shot-side">
            <img src="./images/lifebalance/presentation.png" alt="LifeBalance Laptop Mockup" />
          </div>
        </div>
      </div>
    );
  }

  if (id === 'appsheet-pos-inventory') {
    return (
      <div className="project-visual-wrap project-visual-photo" style={{ background: 'linear-gradient(135deg, #ffece8 0%, #e9fdf2 100%)' }}>
        <span className="project-visual-badge">{badge}</span>
        <div className="card-shot-mobile-pair">
          <div className="card-shot-phone">
            <img src="./images/appsheet/dashboard-waste.png" alt="AppSheet Waste Ratio Dashboard" />
          </div>
          <div className="card-shot-phone">
            <img src="./images/appsheet/production-table.png" alt="AppSheet Production & Waste Log Table" />
          </div>
        </div>
      </div>
    );
  }

  if (id === 'coworking-booking') {
    return (
      <div className="project-visual-wrap project-visual-photo" style={{ background: 'linear-gradient(135deg, #eaf7ff 0%, #e9fdf2 100%)' }}>
        <span className="project-visual-badge">{badge}</span>
        <div className="card-shot-mobile-pair">
          <div className="card-shot-phone">
            <img src="./images/coworking/ui-room-detail.png" alt="IT KMITL Co-working Space Common Room Detail UI" />
          </div>
          <div className="card-shot-phone">
            <img src="./images/coworking/ui-seat-map.png" alt="IT KMITL Co-working Space Floor Plan & Seat Map UI" />
          </div>
        </div>
      </div>
    );
  }

  if (id === 'vaccinote-aws') {
    return (
      <div className="project-visual-wrap project-visual-photo" style={{ background: 'linear-gradient(135deg, #f5f0ff 0%, #eaf7ff 100%)' }}>
        <span className="project-visual-badge">{badge}</span>
        <div className="card-shot-single card-shot-contain">
          <img src="./images/vaccinote/aws-architecture.png" alt="VacciNote AWS Multi-AZ Cloud Architecture Diagram" />
        </div>
      </div>
    );
  }

  if (id === 'vr-wildlife') {
    return (
      <div className="project-visual-wrap project-visual-reel">
        <span className="project-visual-badge">▶ {badge}</span>
        <img
          src="./images/games/campwild-open-forest.png"
          alt="CampWild VR Stage 2 Open Forest"
          className="reel-bg-img"
        />
        <div className="reel-scrim" />
        <div className="reel-play-center" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <polygon points="8,5 19,12 8,19" />
          </svg>
        </div>
        <div className="reel-thumb-inset">
          <img
            src="./images/games/campwild-dense-forest.png"
            alt="CampWild VR Stage 3 Dense Forest"
          />
          <span>VR Demo</span>
        </div>
      </div>
    );
  }

  if (id === 'doddidough-game') {
    return (
      <div className="project-visual-wrap project-visual-reel">
        <span className="project-visual-badge">▶ {badge}</span>
        <img
          src="./images/games/doddidough-thumb.jpg"
          alt="DoddiDough 3D Bakery Platformer Gameplay Demo"
          className="reel-bg-img"
        />
        <div className="reel-scrim" />
        <div className="reel-play-center" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <polygon points="8,5 19,12 8,19" />
          </svg>
        </div>
      </div>
    );
  }

  if (id === 'peter-bubble-vr') {
    return (
      <div className="project-visual-wrap project-visual-reel">
        <span className="project-visual-badge">▶ {badge}</span>
        <img
          src="./images/games/peter-bubble-thumb.jpg"
          alt="Peter Bubble VR Gameplay Demo"
          className="reel-bg-img"
        />
        <div className="reel-scrim" />
        <div className="reel-play-center" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <polygon points="8,5 19,12 8,19" />
          </svg>
        </div>
      </div>
    );
  }

  if (id === 'blender-3d-animation') {
    return (
      <div className="project-visual-wrap project-visual-reel">
        <span className="project-visual-badge">▶ {badge}</span>
        <img
          src="./images/3d/showreel-latest.jpg"
          alt="3D Modeling & Animation Latest Showreel"
          className="reel-bg-img"
        />
        <div className="reel-scrim" />
        <div className="reel-play-center" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <polygon points="8,5 19,12 8,19" />
          </svg>
        </div>
        <div className="reel-thumb-inset">
          <img
            src="./images/3d/showreel-animation.jpg"
            alt="Animation Compilation Reel"
          />
          <span>Reel 02</span>
        </div>
      </div>
    );
  }
  const configs: Record<string, { bg: string; art: React.ReactNode }> = {
    'shopify-core-theme': {
      bg: 'linear-gradient(135deg, #e4fced 0%, #fefce0 100%)',
      art: (
        <svg viewBox="0 0 260 130" width="240" height="120" fill="none">
          {/* 3-Step Evolution: Architecture -> Beauty UI -> Live Liquid Code */}
          <rect x="8" y="14" width="74" height="102" rx="12" fill="#ffffff" stroke="#13201b" strokeWidth="1.8" />
          <text x="16" y="30" fill="#0b3b30" fontSize="7.5" fontWeight="800" fontFamily="sans-serif">1. 11 SECTIONS</text>
          <rect x="16" y="37" width="58" height="22" rx="5" fill="#82eda6" />
          <text x="23" y="51" fill="#0b3b30" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">7 Core</text>
          <rect x="16" y="64" width="58" height="22" rx="5" fill="#fff38a" />
          <text x="19" y="78" fill="#5e4700" fontSize="7" fontWeight="700" fontFamily="sans-serif">4 Config</text>
          <text x="16" y="104" fill="#687870" fontSize="6.8" fontFamily="sans-serif">Theme 2A Sign-off</text>

          <rect x="92" y="14" width="74" height="102" rx="12" fill="#ffffff" stroke="#13201b" strokeWidth="1.8" />
          <text x="100" y="30" fill="#4c1d95" fontSize="7.5" fontWeight="800" fontFamily="sans-serif">2. BEAUTY UI</text>
          <rect x="100" y="37" width="58" height="32" rx="6" fill="#ffd2be" />
          <text x="106" y="56" fill="#862e11" fontSize="7.5" fontWeight="800" fontFamily="sans-serif">Youthlabo</text>
          <rect x="100" y="75" width="58" height="14" rx="7" fill="#13201b" />
          <text x="107" y="84.5" fill="#82eda6" fontSize="6.8" fontWeight="700" fontFamily="sans-serif">AJAX Refill</text>
          <text x="100" y="104" fill="#687870" fontSize="6.8" fontFamily="sans-serif">45:30:15:10</text>

          <rect x="176" y="14" width="76" height="102" rx="12" fill="#13201b" />
          <text x="184" y="31" fill="#82eda6" fontSize="7.5" fontWeight="800" fontFamily="monospace">3. LIQUID</text>
          <text x="184" y="47" fill="#fff38a" fontSize="7" fontFamily="monospace">{'{% schema %}'}</text>
          <text x="184" y="61" fill="#e2e8f0" fontSize="6.8" fontFamily="monospace">header.liquid</text>
          <text x="184" y="74" fill="#e2e8f0" fontSize="6.8" fontFamily="monospace">refill.liquid</text>
          <text x="184" y="87" fill="#e2e8f0" fontSize="6.8" fontFamily="monospace">buybox.liquid</text>
          <rect x="184" y="95" width="60" height="13" rx="6" fill="#82eda6" />
          <text x="190" y="104" fill="#0b3b30" fontSize="6.5" fontWeight="800" fontFamily="sans-serif">OS 2.0 LIVE</text>
        </svg>
      ),
    },
    'flamingo-d2c-presales': {
      bg: 'linear-gradient(135deg, #fefce0 0%, #fff2ec 100%)',
      art: (
        <svg viewBox="0 0 260 130" width="240" height="120" fill="none">
          <rect x="16" y="14" width="168" height="100" rx="12" fill="#13201b" />
          <rect x="24" y="24" width="152" height="80" rx="6" fill="#faf9f5" />
          <rect x="34" y="34" width="40" height="18" rx="4" fill="#ffd2be" />
          <rect x="80" y="34" width="40" height="18" rx="4" fill="#fff38a" />
          <rect x="126" y="34" width="40" height="18" rx="4" fill="#82eda6" />
          <text x="34" y="70" fill="#13201b" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">BRAND WALL · E-E-A-T</text>
          <rect x="34" y="79" width="74" height="16" rx="8" fill="#13201b" />
          <text x="44" y="90" fill="#ffffff" fontSize="8" fontWeight="700" fontFamily="sans-serif">D2C FUNNEL →</text>
          <rect x="192" y="28" width="52" height="88" rx="12" fill="#ffffff" stroke="#13201b" strokeWidth="2" />
          <rect x="200" y="42" width="36" height="24" rx="5" fill="#82eda6" />
          <rect x="200" y="72" width="36" height="8" rx="4" fill="#e2e8f0" />
          <rect x="200" y="86" width="36" height="16" rx="8" fill="#13201b" />
        </svg>
      ),
    },
    'ps-digital-identity': {
      bg: 'linear-gradient(135deg, #f5f0ff 0%, #ffece8 100%)',
      art: (
        <svg viewBox="0 0 260 130" width="240" height="120" fill="none">
          <circle cx="72" cy="65" r="42" fill="#ffffff" stroke="#231819" strokeWidth="2" strokeDasharray="5 4" />
          <circle cx="72" cy="65" r="32" fill="#ffa89b" />
          <circle cx="72" cy="57" r="10" fill="#5e1913" />
          <path d="M54 83 C54 71, 90 71, 90 83" fill="#5e1913" />
          <rect x="132" y="24" width="112" height="36" rx="12" fill="#ffffff" stroke="#231819" strokeWidth="1.8" />
          <text x="144" y="46" fill="#7a231c" fontSize="14" fontWeight="800" fontFamily="sans-serif">76.2% Live</text>
          <rect x="132" y="68" width="112" height="36" rx="12" fill="#dccbff" />
          <text x="144" y="84" fill="#4c1d95" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">32px–96px Tested</text>
          <text x="144" y="96" fill="#4c1d95" fontSize="8" fontFamily="sans-serif">16 / 21 Teammates</text>
        </svg>
      ),
    },
    'emi-b2b-audit': {
      bg: 'linear-gradient(135deg, #eaf7ff 0%, #f5f0ff 100%)',
      art: (
        <svg viewBox="0 0 260 130" width="240" height="120" fill="none">
          <rect x="14" y="14" width="232" height="102" rx="14" fill="#ffffff" stroke="#231819" strokeWidth="1.8" />
          <rect x="26" y="26" width="84" height="50" rx="8" fill="#b8e8ff" />
          <rect x="118" y="26" width="52" height="50" rx="8" fill="#dccbff" />
          <rect x="178" y="26" width="56" height="22" rx="6" fill="#ffa89b" />
          <rect x="178" y="54" width="56" height="22" rx="6" fill="#ffe885" />
          <rect x="26" y="86" width="60" height="18" rx="9" fill="#e11d48" />
          <text x="39" y="98" fill="#ffffff" fontSize="8" fontWeight="700" fontFamily="sans-serif">HIGH</text>
          <rect x="94" y="86" width="64" height="18" rx="9" fill="#f59e0b" />
          <text x="108" y="98" fill="#ffffff" fontSize="8" fontWeight="700" fontFamily="sans-serif">MEDIUM</text>
          <rect x="166" y="86" width="68" height="18" rx="9" fill="#a8f2c8" />
          <text x="180" y="98" fill="#0b5d4b" fontSize="8" fontWeight="700" fontFamily="sans-serif">67 SLIDES</text>
        </svg>
      ),
    },
    'multibrand-qa': {
      bg: 'linear-gradient(135deg, #ffece8 0%, #fff9db 100%)',
      art: (
        <svg viewBox="0 0 260 130" width="240" height="120" fill="none">
          <rect x="16" y="16" width="228" height="98" rx="14" fill="#ffffff" stroke="#231819" strokeWidth="1.8" />
          <circle cx="42" cy="44" r="10" fill="#a8f2c8" />
          <path d="M38 44 L41 47 L47 41" stroke="#0b5d4b" strokeWidth="2" strokeLinecap="round" />
          <rect x="62" y="38" width="120" height="10" rx="5" fill="#faf2ec" />
          <circle cx="42" cy="70" r="10" fill="#ffa89b" />
          <path d="M38 70 L41 73 L47 67" stroke="#5e1913" strokeWidth="2" strokeLinecap="round" />
          <rect x="62" y="64" width="150" height="10" rx="5" fill="#ffece8" />
          <circle cx="42" cy="96" r="10" fill="#ffe885" />
          <rect x="62" y="90" width="96" height="10" rx="5" fill="#231819" />
          <text x="166" y="98" fill="#231819" fontSize="9" fontWeight="800" fontFamily="sans-serif">59 STEPS</text>
        </svg>
      ),
    },
    'abbott-usability': {
      bg: 'linear-gradient(135deg, #e9fdf2 0%, #eaf7ff 100%)',
      art: (
        <svg viewBox="0 0 260 130" width="240" height="120" fill="none">
          <rect x="20" y="16" width="76" height="98" rx="14" fill="#ffffff" stroke="#231819" strokeWidth="2" />
          <rect x="30" y="30" width="56" height="24" rx="6" fill="#ffa89b" />
          <rect x="30" y="62" width="56" height="10" rx="5" fill="#faf2ec" />
          <rect x="30" y="82" width="56" height="18" rx="9" fill="#231819" />
          <rect x="112" y="22" width="128" height="24" rx="12" fill="#ffffff" stroke="#231819" strokeWidth="1.5" />
          <text x="124" y="37" fill="#231819" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">1. Comprehension</text>
          <rect x="112" y="54" width="128" height="24" rx="12" fill="#ffe885" />
          <text x="124" y="69" fill="#6b4600" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">2. Missing Info</text>
          <rect x="112" y="86" width="128" height="24" rx="12" fill="#dccbff" />
          <text x="124" y="101" fill="#4c1d95" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">3. Usability Friction</text>
        </svg>
      ),
    },
    'red-team-critique': {
      bg: 'linear-gradient(135deg, #f5f0ff 0%, #ffece8 100%)',
      art: (
        <svg viewBox="0 0 260 130" width="240" height="120" fill="none">
          <rect x="18" y="18" width="224" height="94" rx="16" fill="#ffffff" stroke="#231819" strokeWidth="1.8" />
          <rect x="32" y="32" width="90" height="30" rx="10" fill="#dccbff" />
          <text x="44" y="51" fill="#4c1d95" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">STEELMAN</text>
          <rect x="132" y="32" width="96" height="30" rx="10" fill="#231819" />
          <text x="145" y="51" fill="#ffe885" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">SCORE 9/10</text>
          <rect x="32" y="74" width="58" height="22" rx="11" fill="#a8f2c8" />
          <text x="42" y="88" fill="#0b5d4b" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">Observed</text>
          <rect x="98" y="74" width="66" height="22" rx="11" fill="#b8e8ff" />
          <text x="108" y="88" fill="#075985" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">Evidence</text>
          <rect x="172" y="74" width="56" height="22" rx="11" fill="#ffa89b" />
          <text x="181" y="88" fill="#5e1913" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">Hypoth.</text>
        </svg>
      ),
    },
    'appsheet-pos-inventory': {
      bg: 'linear-gradient(135deg, #ffece8 0%, #e9fdf2 100%)',
      art: (
        <svg viewBox="0 0 260 130" width="240" height="120" fill="none">
          <rect x="18" y="18" width="112" height="94" rx="14" fill="#ffffff" stroke="#231819" strokeWidth="1.8" />
          <rect x="30" y="32" width="12" height="38" fill="#231819" />
          <rect x="46" y="32" width="6" height="38" fill="#231819" />
          <rect x="56" y="32" width="14" height="38" fill="#231819" />
          <rect x="74" y="32" width="5" height="38" fill="#231819" />
          <rect x="84" y="32" width="10" height="38" fill="#231819" />
          <rect x="98" y="32" width="18" height="38" fill="#231819" />
          <line x1="24" y1="51" x2="124" y2="51" stroke="#f26b5b" strokeWidth="2.5" />
          <text x="36" y="92" fill="#7a231c" fontSize="9" fontWeight="800" fontFamily="sans-serif">BARCODE POS</text>
          <rect x="142" y="18" width="100" height="42" rx="12" fill="#a8f2c8" />
          <text x="154" y="43" fill="#0b5d4b" fontSize="10" fontWeight="800" fontFamily="sans-serif">AUTO STOCK</text>
          <rect x="142" y="68" width="100" height="44" rx="12" fill="#ffe885" />
          <text x="154" y="94" fill="#6b4600" fontSize="10" fontWeight="800" fontFamily="sans-serif">WASTE % KPI</text>
        </svg>
      ),
    },
    'lifebalance-webapp': {
      bg: 'linear-gradient(135deg, #fff9db 0%, #ffece8 100%)',
      art: (
        <svg viewBox="0 0 260 130" width="240" height="120" fill="none">
          <rect x="16" y="14" width="228" height="102" rx="14" fill="#ffffff" stroke="#231819" strokeWidth="1.8" />
          <rect x="28" y="26" width="60" height="18" rx="9" fill="#231819" />
          <text x="38" y="38" fill="#ffa89b" fontSize="8" fontWeight="700" fontFamily="sans-serif">Nutrition</text>
          <rect x="94" y="26" width="60" height="18" rx="9" fill="#faf2ec" />
          <text x="106" y="38" fill="#231819" fontSize="8" fontWeight="700" fontFamily="sans-serif">Exercise</text>
          <rect x="160" y="26" width="52" height="18" rx="9" fill="#faf2ec" />
          <text x="174" y="38" fill="#231819" fontSize="8" fontWeight="700" fontFamily="sans-serif">Sleep</text>
          <rect x="34" y="72" width="24" height="32" rx="6" fill="#ffa89b" />
          <rect x="68" y="58" width="24" height="46" rx="6" fill="#ffe885" />
          <rect x="102" y="66" width="24" height="38" rx="6" fill="#b8e8ff" />
          <rect x="136" y="52" width="24" height="52" rx="6" fill="#231819" />
          <circle cx="198" cy="78" r="22" stroke="#a8f2c8" strokeWidth="7" />
        </svg>
      ),
    },
    'coworking-booking': {
      bg: 'linear-gradient(135deg, #eaf7ff 0%, #e9fdf2 100%)',
      art: (
        <svg viewBox="0 0 260 130" width="240" height="120" fill="none">
          <rect x="16" y="16" width="228" height="98" rx="14" fill="#ffffff" stroke="#231819" strokeWidth="1.8" />
          <text x="30" y="34" fill="#075985" fontSize="8.5" fontWeight="800" fontFamily="sans-serif">IT KMITL · COMMON &amp; CREATIVE ROOM</text>
          <rect x="30" y="44" width="32" height="24" rx="6" fill="#a8f2c8" />
          <rect x="70" y="44" width="32" height="24" rx="6" fill="#a8f2c8" />
          <rect x="110" y="44" width="32" height="24" rx="6" fill="#ffa89b" />
          <rect x="30" y="76" width="32" height="24" rx="6" fill="#a8f2c8" />
          <rect x="70" y="76" width="72" height="24" rx="6" fill="#231819" />
          <text x="82" y="91" fill="#ffffff" fontSize="8" fontWeight="700" fontFamily="sans-serif">BOOKED ✓</text>
          <rect x="156" y="44" width="74" height="56" rx="10" fill="#eaf7ff" stroke="#b8e8ff" strokeWidth="1.5" />
          <text x="166" y="68" fill="#075985" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">Real-Time</text>
          <text x="166" y="82" fill="#075985" fontSize="8" fontWeight="600" fontFamily="sans-serif">Seat Map</text>
        </svg>
      ),
    },
    'vaccinote-aws': {
      bg: 'linear-gradient(135deg, #f5f0ff 0%, #eaf7ff 100%)',
      art: (
        <svg viewBox="0 0 260 130" width="240" height="120" fill="none">
          <rect x="14" y="14" width="232" height="102" rx="14" fill="#ffffff" stroke="#4c1d95" strokeWidth="1.8" />
          <rect x="24" y="24" width="96" height="82" rx="10" fill="#f5f0ff" stroke="#dccbff" strokeWidth="1.4" />
          <text x="34" y="40" fill="#4c1d95" fontSize="8" fontWeight="800" fontFamily="sans-serif">AZ 1A · VPC</text>
          <rect x="34" y="48" width="76" height="20" rx="6" fill="#ffa89b" />
          <text x="44" y="61" fill="#5e1913" fontSize="7.5" fontWeight="800" fontFamily="sans-serif">EC2 + Django</text>
          <rect x="34" y="74" width="76" height="22" rx="6" fill="#b8e8ff" />
          <text x="43" y="88" fill="#075985" fontSize="7.5" fontWeight="800" fontFamily="sans-serif">RDS Primary</text>
          <rect x="140" y="24" width="96" height="82" rx="10" fill="#eaf7ff" stroke="#b8e8ff" strokeWidth="1.4" />
          <text x="150" y="40" fill="#075985" fontSize="8" fontWeight="800" fontFamily="sans-serif">AZ 1B · AUTO</text>
          <rect x="150" y="48" width="76" height="20" rx="6" fill="#ffe885" />
          <text x="160" y="61" fill="#6b4600" fontSize="7.5" fontWeight="800" fontFamily="sans-serif">ALB + Scale</text>
          <rect x="150" y="74" width="76" height="22" rx="6" fill="#dccbff" />
          <text x="156" y="88" fill="#4c1d95" fontSize="7.2" fontWeight="800" fontFamily="sans-serif">RDS Standby</text>
          <line x1="120" y1="65" x2="140" y2="65" stroke="#4c1d95" strokeWidth="2" strokeDasharray="3 2" />
        </svg>
      ),
    },
    'vr-wildlife': {
      bg: 'linear-gradient(135deg, #e9fdf2 0%, #fff9db 100%)',
      art: (
        <svg viewBox="0 0 260 130" width="240" height="120" fill="none">
          <rect x="16" y="16" width="228" height="98" rx="16" fill="#ffffff" stroke="#231819" strokeWidth="1.8" />
          <rect x="30" y="34" width="94" height="54" rx="22" fill="#231819" />
          <rect x="40" y="44" width="74" height="34" rx="14" fill="#a8f2c8" />
          <text x="53" y="65" fill="#0b5d4b" fontSize="11" fontWeight="800" fontFamily="sans-serif">VR UE5</text>
          <text x="138" y="46" fill="#231819" fontSize="11.5" fontWeight="800" fontFamily="sans-serif">VR Wildlife</text>
          <text x="138" y="61" fill="#564244" fontSize="8" fontWeight="600" fontFamily="sans-serif">Oculus Quest 2</text>
          <rect x="138" y="72" width="92" height="20" rx="10" fill="#ffe885" />
          <text x="148" y="85" fill="#6b4600" fontSize="8" fontWeight="800" fontFamily="sans-serif">3 Mission Stages</text>
        </svg>
      ),
    },
    'doddidough-game': {
      bg: 'linear-gradient(135deg, #ffece8 0%, #fff9db 100%)',
      art: (
        <svg viewBox="0 0 260 130" width="240" height="120" fill="none">
          <rect x="16" y="16" width="228" height="98" rx="16" fill="#ffffff" stroke="#231819" strokeWidth="1.8" />
          <circle cx="74" cy="65" r="34" fill="#ffa89b" stroke="#231819" strokeWidth="2" />
          <circle cx="74" cy="65" r="12" fill="#ffffff" stroke="#231819" strokeWidth="2" />
          <rect x="54" y="46" width="8" height="3" rx="1.5" fill="#ffe885" transform="rotate(-25 54 46)" />
          <rect x="84" y="44" width="8" height="3" rx="1.5" fill="#b8e8ff" transform="rotate(20 84 44)" />
          <rect x="92" y="72" width="8" height="3" rx="1.5" fill="#a8f2c8" transform="rotate(-15 92 72)" />
          <text x="122" y="50" fill="#7a231c" fontSize="12" fontWeight="800" fontFamily="sans-serif">DoddiDough</text>
          <text x="122" y="65" fill="#564244" fontSize="8.2" fontWeight="600" fontFamily="sans-serif">3D Bakery Platformer</text>
          <rect x="122" y="76" width="106" height="20" rx="10" fill="#dccbff" />
          <text x="132" y="89" fill="#4c1d95" fontSize="7.8" fontWeight="800" fontFamily="sans-serif">BP_Grid · Slippery</text>
        </svg>
      ),
    },
    'peter-bubble-vr': {
      bg: 'linear-gradient(135deg, #fff9db 0%, #f5f0ff 100%)',
      art: (
        <svg viewBox="0 0 260 130" width="240" height="120" fill="none">
          <rect x="16" y="16" width="228" height="98" rx="16" fill="#ffffff" stroke="#231819" strokeWidth="1.8" />
          <rect x="44" y="38" width="44" height="56" rx="10" fill="#ffe885" stroke="#231819" strokeWidth="2" />
          <rect x="62" y="24" width="8" height="22" rx="3" fill="#231819" />
          <circle cx="56" cy="82" r="5" fill="#231819" />
          <circle cx="68" cy="85" r="5" fill="#231819" />
          <circle cx="78" cy="79" r="5" fill="#231819" />
          <text x="108" y="48" fill="#231819" fontSize="11.5" fontWeight="800" fontFamily="sans-serif">Peter Bubble</text>
          <text x="108" y="63" fill="#564244" fontSize="8" fontWeight="600" fontFamily="sans-serif">Game Jam · Quest 3 VR</text>
          <rect x="108" y="74" width="118" height="20" rx="10" fill="#ffa89b" />
          <text x="118" y="87" fill="#5e1913" fontSize="7.8" fontWeight="800" fontFamily="sans-serif">#256fes Low-Poly Art</text>
        </svg>
      ),
    },
    'blender-3d-animation': {
      bg: 'linear-gradient(135deg, #ffece8 0%, #f5f0ff 55%, #fff9db 100%)',
      art: (
        <svg viewBox="0 0 260 130" width="240" height="120" fill="none">
          <polygon points="130,18 186,46 130,74 74,46" fill="#ffa89b" stroke="#231819" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="74,46 130,74 130,114 74,86" fill="#dccbff" stroke="#231819" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="186,46 130,74 130,114 186,86" fill="#ffe885" stroke="#231819" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="52" cy="36" r="10" fill="#b8e8ff" stroke="#231819" strokeWidth="1.6" />
          <rect x="196" y="78" width="44" height="22" rx="11" fill="#231819" />
          <text x="205" y="92" fill="#ffa89b" fontSize="8.5" fontWeight="800" fontFamily="sans-serif">3D / FX</text>
        </svg>
      ),
    },
  };

  const item = configs[id] ?? configs['shopify-core-theme'];

  return (
    <div className="project-visual-wrap" style={{ background: item.bg }}>
      <span className="project-visual-badge">{badge}</span>
      {item.art}
    </div>
  );
}
