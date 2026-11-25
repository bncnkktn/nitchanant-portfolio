export type Lang = 'en' | 'th';
export type ProjectGroup = 'flagship' | 'research' | 'apps' | 'creative3d';
export type RoleFilter = 'all' | ProjectGroup;

export interface BiText {
  en: string;
  th: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  mediaType?: 'image' | 'video' | 'pdf' | 'youtube';
  label: BiText;
  device: 'desktop' | 'mobile';
  caption: BiText;
  silent?: boolean;
}

export interface ProjectLink {
  label: BiText;
  href: string;
  primary?: boolean;
}

export interface UxFlowStep {
  step: string;
  label: BiText;
  detail: BiText;
  accent?: 'peach' | 'butter' | 'lilac' | 'sky' | 'mint';
}

export interface UxFlowDiagram {
  title: BiText;
  steps: UxFlowStep[];
}

export interface CaseStudy {
  id: string;
  group: ProjectGroup;
  tracks?: string[];
  category: BiText;
  metricBadge: BiText;
  title: BiText;
  titleNda?: BiText;
  client: BiText;
  clientNda?: BiText;
  period: string;
  role: BiText;
  platform?: BiText;
  team?: BiText;
  summary: BiText;
  summaryNda?: BiText;
  shortSummary?: BiText;
  shortSummaryNda?: BiText;
  tags: string[];
  context: BiText;
  contextNda?: BiText;
  challenge: BiText;
  uxFlow?: UxFlowDiagram;
  methodology: { en: string[]; th: string[] };
  methodologyNda?: { en: string[]; th: string[] };
  deliverables: { en: string[]; th: string[] };
  impact: { en: string[]; th: string[] };
  gallery?: GalleryItem[];
  links?: ProjectLink[];
  hideGalleryOnNda?: boolean;
}

export const PROFILE = {
  name: { en: 'Nitchanant Kimkethanom', th: 'ณิชนันท์ กิมเกถนอม' },
  nickname: { en: 'Bell', th: 'เบลล์' },
  email: 'nitchanantkim@gmail.com',
  phone: '095-164-4297',
  location: { en: 'Pathum Thani, Thailand', th: 'ปทุมธานี, ประเทศไทย' },
  linkedinUrl: 'https://www.linkedin.com/in/nitchanant-kimkethanom-26b409409/',
  notionUrl: 'https://app.notion.com/p/Nitchanant-Portfolio-99866e157756485c92715f85dd49e356',
  resumes: [
    {
      id: 'uxui',
      label: { en: 'UX/UI Designer Resume', th: 'เรซูเม่สาย UX/UI Designer' },
      desc: { en: '1-Page ATS PDF • EN & TH', th: '1 หน้า ATS PDF • มีทั้งไทย / อังกฤษ' },
      href: {
        en: './resumes/Resume_UXUI_Nitchanant_Kimkethanom.pdf',
        th: './resumes/Resume_UXUI_TH_Nitchanant_Kimkethanom.pdf',
      },
    },
    {
      id: 'frontend',
      label: { en: 'Frontend Developer Resume', th: 'เรซูเม่สาย Frontend Developer' },
      desc: { en: '1-Page ATS PDF • EN & TH', th: '1 หน้า ATS PDF • มีทั้งไทย / อังกฤษ' },
      href: {
        en: './resumes/Resume_Frontend_Nitchanant_Kimkethanom.pdf',
        th: './resumes/Resume_Frontend_TH_Nitchanant_Kimkethanom.pdf',
      },
    },
    {
      id: 'master',
      label: { en: 'Full Master CV', th: 'Master CV ฉบับเต็ม (2 หน้า)' },
      desc: { en: '2-Page Comprehensive CV • EN & TH', th: '2 หน้า ครบทุกโปรเจกต์ • ไทย / อังกฤษ' },
      href: {
        en: './resumes/CV_Master_Nitchanant_Kimkethanom.pdf',
        th: './resumes/CV_Master_TH_Nitchanant_Kimkethanom.pdf',
      },
    },
  ],
};

export const UI_COPY = {
  nav: {
    about: { en: 'About', th: 'เกี่ยวกับฉัน' },
    work: { en: 'Case Studies', th: 'ผลงาน' },
    skills: { en: 'Skills', th: 'ทักษะ' },
    experience: { en: 'Experience', th: 'ประสบการณ์' },
    contact: { en: 'Contact', th: 'ติดต่อ' },
    ndaOn: { en: 'NDA Mode: ON', th: 'โหมดซ่อนชื่อลูกค้า: เปิด' },
    ndaOff: { en: 'NDA Mode', th: 'ซ่อนชื่อลูกค้า' },
    downloadResume: { en: 'Resumes', th: 'ดาวน์โหลดเรซูเม่' },
  },
  ndaBanner: {
    en: 'NDA-Safe Mode active: Client brand names are anonymized for public sharing.',
    th: 'เปิดโหมดซ่อนชื่อลูกค้า (NDA Mode): ชื่อแบรนด์ลูกค้าทั้งหมดถูกแทนที่ด้วยชื่อไม่ระบุตัวตนแล้ว',
  },
  hero: {
    badge: {
      en: 'Open to Full-Time Roles • UX/UI Design & Frontend Engineering',
      th: 'พร้อมรับโอกาสงานประจำ • UX/UI Designer & Frontend Developer',
    },
    titlePrefix: {
      en: 'Designing commercial UX systems and ',
      th: 'ออกแบบระบบ UX/UI เชิงพาณิชย์ และ',
    },
    titleHighlight: {
      en: 'shipping them in clean code.',
      th: 'พัฒนาต่อเป็น Frontend ที่ใช้งานได้จริง',
    },
    subtitle: {
      en: "I'm Nitchanant (Bell), a KMITL Information Technology graduate (GPA 2.91) and UX/UI Designer Intern on aCommerce's Professional Services team. I combine Similarweb-backed e-commerce strategy, moderated usability testing, and React/Shopify engineering to turn complex problems into measurable products.",
      th: 'ณิชนันท์ กิมเกถนอม (เบลล์) บัณฑิตคณะเทคโนโลยีสารสนเทศ สจล. (GPA 2.91) และนักศึกษาฝึกงาน UX/UI Designer ทีม Professional Services ที่ aCommerce ผสานกระบวนการ UX Research, กลยุทธ์ E-Commerce และทักษะพัฒนาเว็บ Frontend/Shopify เพื่อสร้างผลิตภัณฑ์ที่ตอบโจทย์ทั้งผู้ใช้และธุรกิจ',
    },
    ctaPrimary: { en: 'Explore Case Studies', th: 'ดูผลงาน Case Studies' },
    ctaSecondary: { en: 'Contact & Resumes', th: 'ติดต่อ & โหลดเรซูเม่' },
  },
  metrics: [
    { value: '19 Sites', label: { en: 'Cross-Track E-Commerce Benchmarked', th: 'เว็บไซต์อ้างอิงที่วิเคราะห์เทียบเกณฑ์' } },
    { value: '4 Liquid', label: { en: 'Shipped Shopify OS 2.0 Sections', th: 'Custom Liquid Components ที่ขึ้นโค้ดจริง' } },
    { value: '76.2%', label: { en: 'Organic Internal Adoption (16/21)', th: 'อัตราใช้งานจริงในทีม (16 จาก 21 คน)' } },
    { value: '67 Slides', label: { en: 'B2B Analytics Heuristic Audit', th: 'สไลด์รายงาน B2B Analytics Audit' } },
  ],
  work: {
    kicker: { en: 'Selected Portfolio', th: 'ผลงานคัดสรร' },
    title: { en: 'Case Studies & Shipped Projects', th: 'ผลงานและ Case Studies' },
    desc: {
      en: 'Browse all 15 projects below, or pick a category to focus on a specific track. Click any card for the full case study, UX flows & demos.',
      th: 'เลือกดูครบทั้ง 15 โปรเจกต์ หรือกรองตามหมวดหมู่ที่สนใจ คลิกที่การ์ดเพื่ออ่านขั้นตอนการทำงาน แผนภาพ UX Flow และดูเดโมจริงค่ะ',
    },
    filters: {
      all: { en: 'All Work', th: 'ทั้งหมด' },
      flagship: { en: 'Commercial UX & Shopify', th: 'UX & Shopify หลัก' },
      research: { en: 'Research, Audits & QA', th: 'Research, Audit & QA' },
      apps: { en: 'Web & Product Apps', th: 'Web & Product Apps' },
      creative3d: { en: '3D, VR & Game Dev', th: '3D, VR & เกม' },
    },
    groups: {
      flagship: {
        badge: '01 · FLAGSHIP',
        title: { en: 'Commercial UX, Strategy & Shopify Builds (aCommerce)', th: 'โปรเจกต์หลัก E-Commerce UX & Shopify (aCommerce)' },
      },
      research: {
        badge: '02 · RESEARCH & QA',
        title: { en: 'UX Research, Heuristic Audits & Staging QA', th: 'UX Research, Heuristic Audit & Staging QA' },
      },
      apps: {
        badge: '03 · WEB & APPS',
        title: { en: 'Web Applications, Product Design & Cloud Systems', th: 'เว็บแอป, Product Design และระบบคลาวด์' },
      },
      creative3d: {
        badge: '04 · 3D, VR & GAMES',
        title: { en: '3D Modeling, VR Experiences & Game Development', th: 'งาน 3D, เกม VR และ Interactive Media' },
      },
    },
    readCase: { en: 'Read Case Study', th: 'อ่านรายละเอียด' },
  },
  modal: {
    role: { en: 'Role', th: 'บทบาท' },
    period: { en: 'Timeline', th: 'ช่วงเวลา' },
    client: { en: 'Organization', th: 'องค์กร / ลูกค้า' },
    platform: { en: 'Platform', th: 'แพลตฟอร์ม' },
    team: { en: 'Collaborators', th: 'ทำงานร่วมกับ' },
    uxFlow: { en: 'UX Flow & Process', th: 'แผนภาพ UX Flow และลำดับการทำงาน' },
    context: { en: 'Background & Context', th: 'ที่มาและบริบท' },
    challenge: { en: 'Core Challenge', th: 'โจทย์และความท้าทาย' },
    methodology: { en: 'Research & Process', th: 'ขั้นตอนการทำงาน' },
    deliverables: { en: 'Key Deliverables', th: 'ชิ้นงานที่ส่งมอบ' },
    impact: { en: 'Impact & Outcomes', th: 'ผลลัพธ์ที่ได้' },
  },
  skills: {
    kicker: { en: 'What I Work With', th: 'ทักษะและเครื่องมือ' },
    title: { en: 'Skills & Toolkit', th: 'ทักษะและเครื่องมือที่ใช้' },
    desc: {
      en: 'Core skills across UX research, UI design systems, frontend & Shopify Liquid development, staging QA, and 3D/VR media.',
      th: 'ครอบคลุมตั้งแต่การทำ UX Research, ออกแบบระบบ UI บน Figma, พัฒนาเว็บ Frontend & Shopify Liquid, การทดสอบ Staging QA ไปจนถึงงาน 3D และ VR',
    },
    toolsHeading: { en: 'Tools, Platforms & Software Stack', th: 'เครื่องมือและแพลตฟอร์มที่ใช้งาน' },
  },
  experience: {
    kicker: { en: 'Background', th: 'ประวัติและประสบการณ์' },
    title: { en: 'Experience & Education', th: 'ประสบการณ์และการศึกษา' },
    workHeading: { en: 'Work Experience', th: 'ประสบการณ์ทำงาน' },
    eduHeading: { en: 'Education & Academic Highlights', th: 'การศึกษาและผลงานเด่น' },
  },
  contact: {
    kicker: { en: 'Get In Touch', th: 'ติดต่อ' },
    title: { en: "Let's work together.", th: 'สนใจร่วมงานหรือพูดคุยเพิ่มเติม' },
    desc: {
      en: 'Open to full-time roles in UX/UI & Web Design, Frontend / Web Development, and QA / IT Software. Download a tailored resume, connect on LinkedIn, or email me directly.',
      th: 'เปิดรับโอกาสงานประจำสาย UX/UI & Web Design, Frontend / Web Developer รวมถึงตำแหน่ง IT / Software & QA ค่ะ สามารถดาวน์โหลดเรซูเม่แยกตามสายงาน ดู LinkedIn หรือส่งอีเมลติดต่อได้ทันที',
    },
    sendEmail: { en: 'Send Email', th: 'ส่งอีเมลติดต่อ' },
    copyEmail: { en: 'Copy Email', th: 'คัดลอกอีเมล' },
    copied: { en: 'Copied!', th: 'คัดลอกแล้ว!' },
    openLinkedin: { en: 'LinkedIn', th: 'LinkedIn' },
    openNotion: { en: 'Notion Portfolio', th: 'Notion Portfolio' },
    resumesHeading: { en: 'Download Tailored Resumes (ATS PDF)', th: 'ดาวน์โหลดเรซูเม่แยกสายงาน (ATS PDF)' },
  },
};

export const CASE_STUDIES: CaseStudy[] = [
  // GROUP 1: FLAGSHIP
  {
    id: 'shopify-core-theme',
    group: 'flagship',
    tracks: ['uxui', 'frontend'],
    category: { en: 'Flagship • UX Architecture & Liquid Code', th: 'โปรเจกต์หลัก • UX Architecture & โค้ด Shopify จริง' },
    metricBadge: { en: '19 Sites • 11 Sections • 4 Liquid Coded', th: '19 เว็บ • 11 โมดูล • ขึ้นโค้ด Liquid จริง' },
    title: {
      en: 'Shopify Standard Webstore - Modular Architecture & Liquid Code',
      th: 'Shopify Standard Webstore - สถาปัตยกรรมโมดูลาร์ & เขียนโค้ด Liquid จริง',
    },
    client: { en: 'aCommerce (Professional Services)', th: 'aCommerce (ทีม Professional Services)' },
    period: 'Aug – Dec 2026',
    role: { en: 'UX/UI Designer & Shopify Theme Builder', th: 'UX/UI Designer & Shopify Theme Builder' },
    platform: { en: 'Responsive Web (Shopify OS 2.0)', th: 'Responsive Web (Shopify OS 2.0)' },
    team: { en: 'Senior UX, PM, Frontend & Shopify Dev', th: 'Senior UX, PM, ทีม Dev Shopify' },
    summary: {
      en: 'Built from 19-site benchmarking & 4 behavioral personas (65% market share) to a signed-off Theme 2A 11-section architecture (7 Core + 4 Configurable), Youthlabo Beauty POC, and 4 production Shopify OS 2.0 Liquid sections with {% schema %} & Theme-Native CSS.',
      th: 'ทำครบทั้งลูป ตั้งแต่เก็บข้อมูล Benchmark 19 เว็บ สังเคราะห์ 4 กลุ่มผู้ซื้อ (65% ของตลาด) วางโครงธีมมาตรฐาน 11 โมดูล (7 Core + 4 Configurable) และทำ Beauty POC (Youthlabo) จนถึงขึ้นโค้ด Shopify Liquid OS 2.0 ใช้งานจริง 4 ส่วน',
    },
    shortSummary: {
      en: '19-site benchmark, Theme 2A 11-section system, Beauty POC, and 4 production Shopify Liquid sections.',
      th: 'Benchmark 19 เว็บ ออกแบบธีมมาตรฐาน 11 โมดูล และขึ้นโค้ด Shopify Liquid ใช้งานจริง 4 ส่วน',
    },
    tags: ['Shopify Liquid', '{% schema %} OS 2.0', '19-Site Benchmark', 'Theme-Native CSS', 'AJAX Cart', 'Youthlabo POC'],
    uxFlow: {
      title: { en: 'End-to-End Theme Architecture & Build Flow', th: 'ลำดับการทำงานตั้งแต่ Research ถึงโค้ดจริง' },
      steps: [
        {
          step: '01',
          label: { en: '19-Site Benchmark', th: 'วิเคราะห์ 19 เว็บ' },
          detail: { en: 'Mega Campaign, D2C & Multi-Brand audit', th: 'เทียบ 3 กลุ่มธุรกิจ แยก Core vs. Config' },
          accent: 'peach',
        },
        {
          step: '02',
          label: { en: '4 Personas (65%)', th: '4 กลุ่มผู้ซื้อ (65%)' },
          detail: { en: 'Journey map & E-E-A-T trust triggers', th: 'วาง Journey 5 ขั้นตอนและจุดสร้างความเชื่อมั่น' },
          accent: 'butter',
        },
        {
          step: '03',
          label: { en: '11-Section Theme 2A', th: 'ออกแบบธีม 11 โมดูล' },
          detail: { en: '7 Core + 4 Configurable & Beauty POC', th: 'ผ่าน Sign-off พร้อมทำหน้าจริงกลุ่มสกินแคร์' },
          accent: 'lilac',
        },
        {
          step: '04',
          label: { en: 'OS 2.0 Liquid Code', th: 'ขึ้นโค้ด Liquid จริง' },
          detail: { en: '4 sections with {% schema %} & Native CSS', th: '4 ส่วนหลัก ลากปรับได้ ไม่ฮาร์ดโค้ดสี/ฟอนต์' },
          accent: 'mint',
        },
      ],
    },
    context: {
      en: 'aCommerce needed a standardized, reusable Shopify Online Store 2.0 default theme blueprint - and production-ready custom sections - so Professional Services teams could launch high-converting client stores rapidly with zero tech debt.',
      th: 'ทีม Professional Services ต้องการทั้งพิมพ์เขียวธีมแม่แบบมาตรฐานบน Shopify OS 2.0 และ Custom Component ที่ขึ้นโค้ดจริงพร้อมใช้งาน เพื่อเปิดร้านให้ลูกค้าแบรนด์ต่าง ๆ ได้อย่างรวดเร็วโดยไม่สร้าง Tech Debt',
    },
    challenge: {
      en: 'Protecting core conversion pathways while allowing merchants to drag-and-drop configurable sections in Shopify Theme Editor - and ensuring custom code automatically inherits any client brand’s native fonts, colors, and button styles.',
      th: 'ต้องออกแบบสูตรหน้าแรกที่ปกป้อง Conversion หลักควบคู่กับความยืดหยุ่นให้เจ้าของร้านลากสลับ Block เองได้ใน Theme Editor พร้อมทำให้โค้ด Custom ดึงฟอนต์ สี และปุ่มจากธีมหลักอัตโนมัติ (Theme-Native Inheritance)',
    },
    methodology: {
      en: [
        '19-Site Cross-Track Benchmarking: Audited 19 reference sites across Mega Campaign (5: Shopee, Lazada, iHerb), Commercial D2C (6: IKEA, Lululemon, Glossier, Fellow), and Multi-Brand Stores (8: Sephora, Central, Power Buy) to separate Core vs. Configurable sections.',
        'Data-Driven Behavioral Personas (65% Market Share): Synthesized Deal Hunter (27%), Convenience Seeker (16%), Proof-Driven Researcher (12%), and Social Discovery Shopper (10%) across Gen Z–Boomers, paired with 5-stage Omnichannel Journey & Google E-E-A-T mapping.',
        'Modular Page Architecture & Beauty POC: Designed 3 theme directions and achieved sign-off on Theme 2A: Easy to Buy (Convenience 45% : Proof 30% : Deal 15% : Social 10%) using an 11 Homepage Sections formula (7 locked Core Sections + 4 swappable Configurable Slots), prototyped in high-fidelity for a skincare demo (Youthlabo / Glowhaus).',
        'Design-to-Code Implementation (Shopify OS 2.0): Converted Figma specs into production Shopify Liquid, CSS, and JS (assisted by Shopify Sidekick for clean refactoring), authoring {% schema %} block architectures and stripping all hardcoded fonts/colors for Theme-Native Global CSS Variable & button inheritance.',
      ],
      th: [
        '19-Site Cross-Track Benchmarking: วิเคราะห์ 19 เว็บอ้างอิง 3 กลุ่ม ได้แก่ Mega Campaign (5 เว็บ: Shopee, Lazada, iHerb), Commercial D2C (6 เว็บ: IKEA, Lululemon, Glossier, Fellow) และ Multi-Brand (8 เว็บ: Sephora, Central, Power Buy) เพื่อแยก Core vs. Configurable',
        'Data-Driven Behavioral Personas (65% ของตลาด): สังเคราะห์ 4 กลุ่มผู้ซื้อ ได้แก่ Deal Hunter (27%), Convenience Seeker (16%), Proof-Driven Researcher (12%) และ Social Discovery Shopper (10%) ครอบคลุม Gen Z–Boomers พร้อมแมป Omnichannel Journey 5 ระยะและหลัก E-E-A-T',
        'Modular 11-Section System & Beauty POC: ออกแบบ 3 ทิศทางธีมจนได้ Sign-off ที่ Theme 2A: Easy to Buy (Convenience 45% : Proof 30% : Deal 15% : Social 10%) วางสูตร 7 Core + 4 Configurable Slots และขึ้นหน้า High-Fidelity กลุ่มสกินแคร์ (Youthlabo / Glowhaus)',
        'Design-to-Code (Shopify OS 2.0): แปลงดีไซน์ Figma เป็นโค้ดจริงด้วย Liquid, CSS, JS (ใช้ Shopify Sidekick ช่วยขึ้นโครงและ Refactor) เขียน {% schema %} แยก Blocks ให้ลากสลับได้ใน Theme Editor และถอด Hardcoded Font/Color ออกทั้งหมดเพื่อดึง Theme-Native CSS อัตโนมัติ',
      ],
    },
    deliverables: {
      en: [
        'yl-site-header.liquid - 3-breakpoint responsive header with Quick-Find Chips and native mobile <dialog> Drawer.',
        'Shop by Category Section - Configurable Fill Circle vs. Fit Inside image styles + mobile horizontal scroll.',
        'ready-to-refill.liquid - Pulls logged-in customer order history (with smart fallback) + AJAX Add to Cart / Buy Now.',
        'main-product-info.liquid (PDP Buy Box) - Independent OS 2.0 blocks supporting Variant Picker, In-Buy-Box Upsell, and Micro-Trust Bar.',
        'High-Fidelity Youthlabo / Glowhaus Beauty POC (Refill, Skincare Routine Builder, Product Comparison, Benefits at a Glance).',
      ],
      th: [
        'yl-site-header.liquid - Header รองรับ Responsive 3 ขนาดจอ พร้อม Quick-Find Chips และ Mobile <dialog> Drawer',
        'Shop by Category - วงกลมหมวดหมู่ตั้งค่าสไตล์ภาพเองได้ (Fill Circle vs. Fit Inside) และรองรับ Horizontal Scroll บนมือถือ',
        'ready-to-refill.liquid - ดึงประวัติสั่งซื้อเดิมของลูกค้าที่ล็อกอิน (พร้อม Fallback) และปุ่ม AJAX Add to Cart / Buy Now',
        'main-product-info.liquid (PDP Buy Box) - โครงสร้าง Block อิสระ รองรับ Variant Picker, In-Buy-Box Upsell และ Micro-Trust Bar',
        'High-Fidelity Beauty Demo (Youthlabo / Glowhaus) ครบทุก Slot (Ready to Refill, Routine Builder, Product Comparison, Benefits at a Glance)',
      ],
    },
    impact: {
      en: [
        'Delivered the full cycle (Research → Strategy → Modular IA → High-Fi UI → Production Liquid Code) approved as the Theme 2A baseline.',
        'Used Theme-Native CSS inheritance so every custom Liquid section adapts automatically across client brand themes without code edits.',
        'Enabled merchants to reorder, toggle, and configure blocks directly inside the Shopify Theme Editor without developer intervention.',
      ],
      th: [
        'ส่งมอบงานครบทุกขั้นตอน (Research → Strategy → Architecture → UI → Production Code) โดย Theme 2A ได้รับ Sign-off เป็น Baseline',
        'ใช้ Theme-Native Inheritance ทำให้ Component ดึงฟอนต์และสีตามธีมของร้านค้าลูกค้าแต่ละแบรนด์ได้โดยอัตโนมัติ',
        'เจ้าของร้านปรับแต่ง เปิด-ปิด และลากสลับ Block เองได้ผ่าน Shopify Theme Editor โดยไม่ต้องแก้โค้ด',
      ],
    },
    gallery: [
      {
        id: 'vid-2a-desktop',
        src: './media/shopify/theme-2a-desktop.mp4',
        mediaType: 'video',
        label: { en: 'Theme 2A (Desktop Video)', th: 'Theme 2A (วิดีโอ Desktop)' },
        device: 'desktop',
        caption: {
          en: 'Live screen recording of the signed-off Theme 2A: Easy to Buy on Shopify OS 2.0 (11 Sections, Ready to Refill AJAX, Best Seller & Trust Bar).',
          th: 'วิดีโอหน้าเว็บจริงของ Theme 2A: Easy to Buy บน Shopify OS 2.0 (11 Sections, Ready to Refill AJAX, Best Seller และ Trust Bar)',
        },
      },
      {
        id: 'vid-2a-mobile',
        src: './media/shopify/theme-2a-mobile.mp4',
        mediaType: 'video',
        label: { en: 'Theme 2A (Mobile Video)', th: 'Theme 2A (วิดีโอ Mobile)' },
        device: 'mobile',
        caption: {
          en: 'Mobile responsive walkthrough of Theme 2A featuring yl-site-header.liquid drawer, horizontal category scroll, and touch-friendly Quick Add.',
          th: 'วิดีโอหน้าจอมือถือของ Theme 2A โชว์ yl-site-header.liquid drawer, horizontal scroll และปุ่ม Quick Add',
        },
      },
      {
        id: 'vid-2a-pdp-desktop',
        src: './media/shopify/theme-2a-pdp-desktop.mp4',
        mediaType: 'video',
        label: { en: 'Theme 2A PDP (Desktop)', th: 'หน้าสินค้า 2A PDP (Desktop)' },
        device: 'desktop',
        caption: {
          en: 'Live desktop recording of the Theme 2A Product Detail Page built with modular main-product-info.liquid Buy Box blocks and Theme-Native CSS inheritance.',
          th: 'วิดีโอหน้าสินค้าจริง (PDP) ของ Theme 2A บน Desktop พัฒนาด้วย main-product-info.liquid Buy Box แบบโมดูลาร์และ Theme-Native CSS',
        },
      },
      {
        id: 'vid-2a-pdp-mobile',
        src: './media/shopify/theme-2a-pdp-mobile.mp4',
        mediaType: 'video',
        label: { en: 'Theme 2A PDP (Mobile)', th: 'หน้าสินค้า 2A PDP (Mobile)' },
        device: 'mobile',
        caption: {
          en: 'Mobile responsive walkthrough of the Theme 2A Product Detail Page showcasing touch-friendly variant selection, Buy Box layout, and product storytelling.',
          th: 'วิดีโอหน้าสินค้า (PDP) ของ Theme 2A บนมือถือ แสดงการเลือกตัวเลือกสินค้า กล่อง Buy Box และข้อมูลรายละเอียดสินค้า',
        },
      },
      {
        id: 'vid-3a-desktop',
        src: './media/shopify/theme-3a-desktop.mp4',
        mediaType: 'video',
        label: { en: 'Theme 3A (Desktop Video)', th: 'Theme 3A (วิดีโอ Desktop)' },
        device: 'desktop',
        caption: {
          en: 'Live recording of Theme 3A (Confidence to Choose / Editorial Storytelling) demonstrating modular section flexibility.',
          th: 'วิดีโอหน้าเว็บจริงของ Theme 3A (Confidence to Choose / Editorial) แสดงความยืดหยุ่นของระบบโมดูลาร์',
        },
      },
      {
        id: 'vid-3a-mobile',
        src: './media/shopify/theme-3a-mobile.mp4',
        mediaType: 'video',
        label: { en: 'Theme 3A (Mobile Video)', th: 'Theme 3A (วิดีโอ Mobile)' },
        device: 'mobile',
        caption: {
          en: 'Mobile responsive recording of Theme 3A storytelling and ingredient credibility modules.',
          th: 'วิดีโอหน้าจอมือถือของ Theme 3A เน้นการเล่าเรื่องและส่วนผสมสำคัญ',
        },
      },
      {
        id: 'vid-blog-desktop',
        src: './media/shopify/blog-post-desktop.mp4',
        mediaType: 'video',
        label: { en: 'Blog & Shop This (Desktop)', th: 'บทความ Shop This (Desktop)' },
        device: 'desktop',
        caption: {
          en: 'Live walkthrough of the 3-column Content-to-Commerce article layout: Sticky TOC, Routine Table, and Sticky Shop This Article sidebar.',
          th: 'วิดีโอการใช้งานหน้าบทความเชื่อมการขาย 3 คอลัมน์: สารบัญซ้าย ตาราง Routine กลาง และ Shop This Article ขวา',
        },
      },
      {
        id: 'vid-blog-mobile',
        src: './media/shopify/blog-post-mobile.mp4',
        mediaType: 'video',
        label: { en: 'Blog & Shop This (Mobile)', th: 'บทความ Shop This (Mobile)' },
        device: 'mobile',
        caption: {
          en: 'Mobile Skin Guide & article experience with collapsible Table of Contents and inline AJAX product cards.',
          th: 'วิดีโอหน้าจอมือถือของ Skin Guide และบทความพร้อมการ์ดสั่งซื้อสินค้าในหน้าเดียว',
        },
      },
      {
        id: 'vid-about-desktop',
        src: './media/shopify/about-us-desktop.mp4',
        mediaType: 'video',
        label: { en: 'About Us (Desktop Video)', th: 'About Us (วิดีโอ Desktop)' },
        device: 'desktop',
        caption: {
          en: 'Live recording of the brand storytelling About Us page (COSMAX × aCommerce timeline, clinical proof & data bento grid).',
          th: 'วิดีโอหน้า About Us เล่าเรื่องแบรนด์ ไทม์ไลน์ COSMAX × aCommerce และข้อมูลการทดสอบทางคลินิก',
        },
      },
      {
        id: 'vid-about-mobile',
        src: './media/shopify/about-us-mobile.mp4',
        mediaType: 'video',
        label: { en: 'About Us (Mobile Video)', th: 'About Us (วิดีโอ Mobile)' },
        device: 'mobile',
        caption: {
          en: 'Mobile responsive recording of the Youthlabo About Us brand story.',
          th: 'วิดีโอหน้าจอมือถือของหน้า About Us',
        },
      },
      {
        id: 'about-us-hi',
        src: './images/shopify/youthlabo-about-us.jpg',
        mediaType: 'image',
        label: { en: 'About Us (Full Page HD)', th: 'About Us (ภาพหน้าเต็ม)' },
        device: 'desktop',
        caption: {
          en: 'High-resolution full-page capture of the About Us storytelling layout.',
          th: 'ภาพเต็มหน้าความละเอียดสูงของหน้า About Us',
        },
      },
    ],
  },
  {
    id: 'flamingo-d2c-presales',
    group: 'flagship',
    tracks: ['uxui', 'frontend'],
    category: { en: 'Flagship • D2C Strategy & POC', th: 'โปรเจกต์หลัก • กลยุทธ์ D2C & POC' },
    metricBadge: { en: 'Pre-sales Pitch + Live Shopify POC', th: 'Pre-sales Pitch + ทดสอบ Shopify จริง' },
    title: {
      en: 'D2C E-Commerce Strategy & Pre-sales Proposal - Flamingo APAC',
      th: 'กลยุทธ์ D2C E-Commerce และข้อเสนอ Pre-sales - Flamingo APAC',
    },
    titleNda: {
      en: 'D2C E-Commerce Strategy & Pre-sales Proposal - Regional Watch Distributor',
      th: 'กลยุทธ์ D2C E-Commerce และข้อเสนอ Pre-sales - ตัวแทนจำหน่ายนาฬิการะดับภูมิภาค',
    },
    client: { en: 'Flamingo APAC (via aCommerce)', th: 'Flamingo APAC (ผ่าน aCommerce)' },
    clientNda: { en: 'Regional Watch & Lifestyle Distributor', th: 'ตัวแทนจำหน่ายนาฬิกาและไลฟ์สไตล์ระดับภูมิภาค' },
    period: 'Aug – Dec 2026',
    role: { en: 'UX/UI Designer & Shopify POC', th: 'UX/UI Designer & Shopify Technical POC' },
    platform: { en: 'Responsive Web (Shopify + Pre-sales Deck)', th: 'เว็บไซต์ Responsive (Shopify + สไลด์ขายงาน)' },
    team: { en: 'Pre-sales Strategists, Senior UX/UI Lead', th: 'ทีมกลยุทธ์ Pre-sales และ Senior UX/UI Lead' },
    summary: {
      en: 'Transitioned a corporate informational website into a transactional D2C funnel backed by E-E-A-T, dual Brand Wall concepts, Tech Product Showcase pitch decks, and hands-on Shopify Theme Editor POC validation.',
      th: 'เปลี่ยนเว็บให้ข้อมูลบริษัทให้กลายเป็นเว็บขายตรง D2C ที่ลูกค้ามั่นใจเรื่องของแท้ ด้วยโครงสร้าง E-E-A-T, Brand Wall 2 ทางเลือก, สไลด์ขายงานสไตล์ Tech Showcase และการทดลองตั้งค่าจริงบน Shopify เพื่อกันเสนอเกินข้อจำกัด',
    },
    shortSummary: {
      en: 'D2C e-commerce strategy, pre-sales pitch deck, and Shopify Theme Editor technical POC.',
      th: 'วางโครงเว็บ D2C ออกแบบ Brand Wall สไลด์ขายงาน และทดลองทำ Technical POC บน Shopify',
    },
    tags: ['D2C Funnel', 'E-E-A-T', 'Pre-sales Deck', 'Shopify Technical POC', 'Figma Auto-Layout'],
    uxFlow: {
      title: { en: 'From Corporate Site to Validated D2C Pitch', th: 'ขั้นตอนเปลี่ยนเว็บข้อมูลบริษัทสู่ข้อเสนอ D2C ที่สร้างได้จริง' },
      steps: [
        {
          step: '01',
          label: { en: 'Funnel & E-E-A-T', th: 'วางโครง Funnel & E-E-A-T' },
          detail: { en: 'Landing → PLP → PDP → Checkout trust flow', th: 'วางเส้นทางซื้อตรงพร้อมจุดยืนยันของแท้' },
          accent: 'peach',
        },
        {
          step: '02',
          label: { en: 'Dual Brand Wall', th: 'ออกแบบ Brand Wall 2 แบบ' },
          detail: { en: 'Priority-led vs. A–Z for executive pitch', th: 'ทำตัวเลือกเรียงแบรนด์เพื่อเปิดบทสนทนากับผู้บริหาร' },
          accent: 'butter',
        },
        {
          step: '03',
          label: { en: 'Shopify Live POC', th: 'ทดสอบ POC หลังบ้าน Shopify' },
          detail: { en: 'Caught 8-col grid & hover limits early', th: 'เช็กข้อจำกัด 8 คอลัมน์และ Hover ก่อนส่งข้อเสนอ' },
          accent: 'sky',
        },
        {
          step: '04',
          label: { en: 'The Selling Page', th: 'สไลด์ขายงานพร้อม Figma' },
          detail: { en: 'Device mockups + build-ready Auto-Layout', th: 'สไลด์ Tech Showcase คู่ไฟล์ Figma ที่ทำได้จริง' },
          accent: 'mint',
        },
      ],
    },
    context: {
      en: 'A regional watch and lifestyle brand distributor operated an informational site without direct online checkout, missing direct revenue and first-party customer data while facing counterfeit skepticism.',
      th: 'ตัวแทนจำหน่ายแบรนด์นาฬิกาและไลฟ์สไตล์ระดับภูมิภาคมีเพียงเว็บไซต์ให้ข้อมูลบริษัท ยังไม่มีระบบซื้อขายตรง ทำให้เสียโอกาสสร้างยอดขายและเก็บ First-Party Data รวมถึงลูกค้ามีความกังวลเรื่องสินค้าลอกเลียนแบบ',
    },
    challenge: {
      en: 'Designing a persuasive Pre-sales storefront vision that builds instant authenticity trust while staying 100% feasible inside real Shopify Theme Editor technical limits.',
      th: 'ต้องออกแบบหน้าเว็บและสไลด์ขายงานที่สร้างความมั่นใจเรื่องของแท้ได้ทันที ขณะเดียวกันต้องมั่นใจว่าทุกองค์ประกอบสร้างได้จริงภายใต้ข้อจำกัดของหลังบ้าน Shopify',
    },
    methodology: {
      en: [
        'Mapped the Informative-to-Commercial transition (Landing → PLP → PDP → Checkout) optimized for First-Party Data capture.',
        'Applied Google E-E-A-T principles alongside aCommerce Proprietary Data to craft 2 strategic Brand Wall options (Priority-ordered vs. A–Z) as a pitch conversation starter.',
        'Executed a live Technical POC inside Shopify Theme Editor, discovering hard platform boundaries (max 8-column Category Grid; avoiding high-effort custom hover states) and reflecting them in Figma Auto-Layout designs.',
      ],
      th: [
        'วางโครงสร้างการเปลี่ยนผ่านจาก Informative Website สู่ Transactional D2C Funnel (Landing → PLP → PDP → Checkout) เพื่อสร้างยอดขายตรงและเก็บ First-Party Data',
        'ประยุกต์ใช้หลัก E-E-A-T ร่วมกับข้อมูลภายในของ aCommerce ออกแบบ Brand Wall 2 ทางเลือก (เรียงตามความสำคัญ vs. เรียง A–Z) เพื่อลดความกังวลเรื่องของปลอม',
        'ลงมือทดสอบตั้งค่า Component บนหลังบ้าน Shopify ด้วยตนเองจนพบข้อจำกัดจริง (เช่น Category Grid รองรับสูงสุด 8 คอลัมน์ และควรเลี่ยง Custom Hover ที่ใช้ Effort สูง) ก่อนขึ้นโครง Figma Auto-Layout',
      ],
    },
    deliverables: {
      en: [
        '"The Selling Page" Pre-sales pitch deck in Tech Product Showcase style with realistic MacBook and Mobile device mockups.',
        'Business Value storytelling slides ("Why aCommerce") paired with modular Storefront Feature highlights.',
        'Validated Figma Auto-Layout component specs aligned to live Shopify Theme Editor constraints.',
      ],
      th: [
        'สไลด์ขายงาน "The Selling Page" สไตล์ Tech Product Showcase สวม UI บน MacBook และ Mobile Mockup สมจริง',
        'สไลด์สื่อสารคุณค่าทางธุรกิจ (Why aCommerce) คู่กับจุดเด่น Storefront Features',
        'ไฟล์ออกแบบ Figma Auto-Layout ที่ตรวจสอบความเป็นไปได้ทางเทคนิคบน Shopify แล้ว',
      ],
    },
    impact: {
      en: [
        'Prevented pre-sales over-promising by catching Shopify 8-column and hover-state constraints before proposal delivery.',
        'Equipped the Pre-sales team with dual Brand Wall options to spark executive alignment during client meetings.',
      ],
      th: [
        'ป้องกันการเสนอฟีเจอร์เกินขอบเขตเทคนิคด้วยการทำ Technical POC ตรวจพบข้อจำกัด Shopify ตั้งแต่ช่วง Pre-sales',
        'ช่วยให้ทีม Pre-sales มีตัวเลือก Brand Wall เชิงกลยุทธ์สำหรับเปิดบทสนทนากับผู้บริหารลูกค้าได้อย่างตรงจุด',
      ],
    },
    hideGalleryOnNda: true,
    gallery: [
      {
        id: 'flamingo-storefront',
        src: './images/shopify/flamingo-d2c-storefront.jpg',
        label: { en: 'D2C Storefront Mockup (v12)', th: 'ม็อกอัปหน้าเว็บ D2C (v12)' },
        device: 'desktop',
        caption: {
          en: 'Full-page D2C Storefront proposal featuring Above-the-fold authority metrics, Partner Brand Wall (Seiko, Timex, Guess, DKNY), core category storytelling, Authenticity Warranty bar & video reviews.',
          th: 'หน้าเว็บ D2C ฉบับสมบูรณ์: สถิติความน่าเชื่อถือบน Hero, แถบ Partner Brand Wall, หมวดสินค้านาฬิกา/เครื่องประดับ/ออดิโอ, แถบรับประกันของแท้ และวิดีโอรีวิว',
        },
      },
    ],
  },
  {
    id: 'ps-digital-identity',
    group: 'flagship',
    tracks: ['uxui'],
    category: { en: 'Flagship • Internal Startup', th: 'โปรเจกต์หลัก • Internal Startup' },
    metricBadge: { en: '76.2% Adoption (16/21)', th: 'ใช้งานจริง 76.2% (16/21 คน)' },
    title: {
      en: 'PS Digital Identity & Lean Adoption Loop',
      th: 'โปรเจกต์ Internal Startup: PS Digital Identity & Adoption Loop',
    },
    client: { en: 'aCommerce Professional Services Team', th: 'ทีม Professional Services, aCommerce' },
    period: 'Aug – Dec 2026',
    role: { en: 'Co-Lead Designer & Researcher', th: 'Co-Lead Designer & Researcher' },
    platform: { en: 'Google Workspace (Avatar & Meet BG)', th: 'Google Workspace (Avatar & พื้นหลังประชุม)' },
    team: { en: 'Co-Lead Intern, PS Team (21 Members)', th: 'คู่หูฝึกงาน และสมาชิกทีม PS 21 คน' },
    summary: {
      en: 'Co-led an internal side venture creating a CI-aligned avatar & virtual background system stress-tested at 32–96px, driving 76.2% organic team adoption without mandates via a White-Glove Concierge experiment.',
      th: 'ร่วมออกแบบระบบ Avatar และพื้นหลังประชุมตาม CI ของทีม ทดสอบความคมชัดที่ขนาดจริง 32–96px แล้วใช้แนวคิด Lean Concierge ลดขั้นตอนยุ่งยากจนทีมหันมาใช้จริงถึง 76.2% โดยไม่ต้องบังคับ',
    },
    shortSummary: {
      en: 'CI-aligned avatar & background system achieving 76.2% organic team adoption via Lean experimentation.',
      th: 'ออกแบบระบบ Avatar และพื้นหลังทีมตาม CI ดันยอดใช้จริง 76.2% ด้วยแนวคิด Lean',
    },
    tags: ['Brand Identity', 'Stress Testing', 'Lean Startup', 'Friction Mapping', 'Concierge MVP'],
    uxFlow: {
      title: { en: 'Lean Adoption Experiment Loop', th: 'ลูปการทดลองผลักดันยอดใช้งานจริง 76.2%' },
      steps: [
        {
          step: '01',
          label: { en: 'CI Template + Safe Zone', th: 'สร้างแม่แบบ + Safe Zone' },
          detail: { en: '1000×1000px Avatar & 16:9 Meet BG', th: 'ออกแบบกรอบภาพ 1:1 และพื้นหลัง 16:9 ตาม CI' },
          accent: 'peach',
        },
        {
          step: '02',
          label: { en: '32–96px Stress Test', th: 'ทดสอบขนาดจริง 32-96px' },
          detail: { en: '8-combination legibility matrix', th: 'เทียบความคมชัด 8 คู่สี ตัดรายละเอียดที่รกออก' },
          accent: 'butter',
        },
        {
          step: '03',
          label: { en: 'Friction Mapping', th: 'หาจุดที่คนไม่อยากเปลี่ยน' },
          detail: { en: 'Found photo cutout & resize friction', th: 'พบว่าคนในทีมติดเรื่องไม่มีเวลาไดคัทและตั้งค่าเอง' },
          accent: 'lilac',
        },
        {
          step: '04',
          label: { en: 'Concierge Rollout', th: 'ทำให้เสร็จพร้อมอัปโหลด' },
          detail: { en: '76.2% adoption (16/21 teammates)', th: 'ส่งรูปพร้อมใช้ตรงถึงมือ ยอดใช้จริงพุ่ง 76.2%' },
          accent: 'mint',
        },
      ],
    },
    context: {
      en: 'During client calls and Google Workspace collaboration, team profiles lacked visual cohesion. As part of the Intern Side Venture Challenge, we set out to unify team identity organically.',
      th: 'ในการประชุมกับลูกค้าและใช้งาน Google Workspace รูปโปรไฟล์และพื้นหลังของทีมยังขาดความเป็นหนึ่งเดียว จึงริเริ่มโปรเจกต์ Internal Startup เพื่อสร้างภาพลักษณ์ทีมให้เป็นมืออาชีพโดยไม่ใช้วิธีบังคับ',
    },
    challenge: {
      en: 'Even well-designed templates fail in busy agencies because employees face high setup friction (cutting out photos, resizing, uploading).',
      th: 'แม้เทมเพลตจะสวยแค่ไหน แต่มักถูกเมินหากพนักงานต้องเสียเวลาไดคัทรูป จัดขนาด และตั้งค่าเองท่ามกลางงานประจำที่แน่น',
    },
    methodology: {
      en: [
        'Designed a 1:1 (1000×1000px) Branded Avatar template with Safe Zone masking and 16:9 Virtual Backgrounds following aCommerce CI.',
        'Ran an Icon-Scale Stress Test at real Google Workspace dimensions (32px–96px) plus an 8-Combination Testing Matrix to strip away visual clutter.',
        'Executed a Lean Startup loop (Observe → Learn → Hypothesize → Experiment → Measure) using Micro-Interviews, Friction Mapping, and a "White-Glove Concierge Test" (delivering pre-cut, ready-to-upload avatars directly to teammates).',
      ],
      th: [
        'ออกแบบ Branded Avatar Template (1:1 ขนาด 1000×1000px พร้อม Safe Zone) และ Virtual Background (16:9) ตาม CI ของ aCommerce',
        'ทำ Icon-Scale Stress Test ทดสอบการมองเห็นจริงที่ขนาดเล็ก 32px–96px บน Google Workspace พร้อม 8-Combination Testing Matrix เพื่อขจัด Visual Clutter',
        'ใช้กระบวนการ Lean Startup ผ่าน Micro-Interviews, Friction Mapping และ "White-Glove Concierge Test" (ไดคัทรูปทำให้เสร็จส่งตรงถึงมือแต่ละคน)',
      ],
    },
    deliverables: {
      en: [
        'Scalable Figma Avatar & Virtual Background system with Safe Zone guidelines.',
        '8-Combination legibility matrix & friction-mapping research deck.',
        'Personalized concierge rollout kit for 21 team members.',
      ],
      th: [
        'ระบบ Figma Template สำหรับ Avatar และ Virtual Background พร้อม Safe Zone',
        'รายงานผล 8-Combination Testing Matrix และ Friction Mapping',
        'ชุดรูปโปรไฟล์พร้อมใช้งานจริงสำหรับสมาชิกทีม',
      ],
    },
    impact: {
      en: [
        'Achieved 76.2% organic adoption (16 out of 21 team members) with zero top-down mandate.',
        'Proved that removing operational friction through concierge onboarding unlocks real behavioral change.',
      ],
      th: [
        'เพิ่มอัตราการใช้งานจริงได้ถึง 76.2% (16 จาก 21 คนในทีม) โดยไม่มีคำสั่งบังคับ',
        'พิสูจน์ว่าการลด Friction ของผู้ใช้ด้วย Concierge Onboarding สร้างการเปลี่ยนแปลงพฤติกรรมได้จริง',
      ],
    },
  },

  // GROUP 2: RESEARCH, AUDIT & QA
  {
    id: 'emi-b2b-audit',
    group: 'research',
    tracks: ['uxui', 'systems'],
    category: { en: 'B2B Analytics Audit', th: 'B2B UX Audit' },
    metricBadge: { en: '67-Slide Heuristic Deck', th: 'รายงาน 67 สไลด์' },
    title: {
      en: 'B2B Analytics Dashboard Audit - EcommerceIQ (EMI)',
      th: 'วิเคราะห์และตรวจสอบ B2B Analytics Dashboard - EcommerceIQ (EMI)',
    },
    titleNda: {
      en: 'Enterprise B2B Analytics Platform Audit',
      th: 'ตรวจสอบ UX แพลตฟอร์ม Enterprise B2B Analytics',
    },
    client: { en: 'EcommerceIQ (EMI Platform)', th: 'แพลตฟอร์ม EcommerceIQ (EMI)' },
    clientNda: { en: 'Enterprise Data Intelligence Platform', th: 'แพลตฟอร์ม Data Intelligence ระดับองค์กร' },
    period: 'Aug – Dec 2026',
    role: { en: 'UX Auditor', th: 'UX Auditor' },
    platform: { en: 'Desktop B2B SaaS Web App', th: 'เว็บแอป B2B SaaS (Desktop)' },
    team: { en: 'Product Stakeholders, Senior UX Lead', th: 'ทีม Product และ Senior UX Lead' },
    summary: {
      en: 'Conducted a 67-slide Fresh Observation Audit and UI deconstruction across 5 enterprise data modules with High/Medium/Low severity rankings.',
      th: 'ตรวจ UX ในมุมมองผู้ใช้งานครั้งแรกและแยกชิ้นส่วนหน้าจอของแพลตฟอร์มวิเคราะห์ข้อมูล B2B ครบ 5 โมดูล รวม 67 สไลด์ พร้อมจัดลำดับความเร่งด่วน High/Medium/Low ให้ทีมหยิบไปแก้ได้ทันที',
    },
    shortSummary: {
      en: '67-slide heuristic audit and UI breakdown across 5 enterprise B2B analytics modules.',
      th: 'ตรวจ UX และแยกโครงสร้าง UI แพลตฟอร์มข้อมูล B2B 5 โมดูล รวม 67 สไลด์',
    },
    tags: ['B2B SaaS', 'Data Visualization', 'UI Deconstruction', 'Severity Matrix'],
    context: {
      en: 'Large B2B analytics platforms often accumulate dense charts and inconsistent controls that overwhelm first-time brand analysts.',
      th: 'แพลตฟอร์มวิเคราะห์ข้อมูล B2B ขนาดใหญ่มักมีกราฟและตารางที่ซับซ้อน ทำให้ผู้ใช้งานครั้งแรกเข้าใจภาพรวมและหาข้อมูลได้ยาก',
    },
    challenge: {
      en: 'Evaluating 5 complex modules objectively without losing sight of both existing visual strengths and actionable engineering priorities.',
      th: 'ต้องประเมินทั้ง 5 โมดูลอย่างเป็นระบบ โดยชี้ให้เห็นทั้งจุดแข็งเดิมและจุดปรับปรุงที่ทีมพัฒนาสามารถหยิบไปจัดลำดับความสำคัญได้ทันที',
    },
    methodology: {
      en: [
        'Performed a Fresh Observation Audit from a first-time user lens across Brand Summary, Market Share, Shoppable Video, Creator Performance, and TikTok Analytics.',
        'Deconstructed core Data Visualization components: Treemaps, Donut Charts, Leaderboards, and Data Tables.',
        'Paired Key Strengths with prioritized Pain Points across High, Medium, and Low severity tiers.',
      ],
      th: [
        'ทำ Fresh Observation Audit ในมุมมองผู้ใช้ครั้งแรกครอบคลุม Brand Summary, Market Share, Shoppable Video, Creator Performance และ TikTok Analytics',
        'ถอดโครงสร้าง Data Visualization เชิงลึก ทั้ง Treemap, Donut Charts, Leaderboard และ Data Tables',
        'สรุปจุดแข็งควบคู่กับ Pain Points พร้อมจัดลำดับความรุนแรง (High, Medium, Low) และข้อเสนอแนะเชิงปฏิบัติการ',
      ],
    },
    deliverables: {
      en: ['67-slide annotated audit deck with component-level screenshots and severity-ranked recommendations.'],
      th: ['รายงาน Audit ฉบับสมบูรณ์ 67 สไลด์ พร้อมภาพประกอบระดับคอมโพเนนต์และแนวทางปรับปรุงตามระดับความเร่งด่วน'],
    },
    impact: {
      en: ['Gave product stakeholders a structured backlog of high-leverage dashboard clarity improvements.'],
      th: ['ช่วยให้ทีม Product เห็นรายการปัญหาที่มีผลกระทบสูงเพื่อนำไปวางแผนปรับปรุง Dashboard ได้ตรงจุด'],
    },
  },
  {
    id: 'multibrand-qa',
    group: 'research',
    tracks: ['uxui', 'systems', 'frontend'],
    category: { en: 'Journey Audits & Staging QA', th: 'UX Audit & Staging QA' },
    metricBadge: { en: '3 Brands • 59 QA Steps', th: '3 แบรนด์ • 59 สเต็ป QA' },
    title: {
      en: 'Multi-Brand UX Journey Audits & Shopify Staging QA',
      th: 'Multi-Brand UX Audits และ Staging QA (Le Creuset, Journal Boutique, Ethos)',
    },
    titleNda: {
      en: 'Multi-Brand Luxury & Lifestyle UX Audits & Shopify Staging QA',
      th: 'วิเคราะห์ User Journey แบรนด์พรีเมียม 3 ราย และตรวจสอบ Shopify Staging QA',
    },
    client: { en: 'Le Creuset, Journal Boutique (TH), Ethos Indonesia', th: 'Le Creuset, Journal Boutique (TH), Ethos Indonesia' },
    clientNda: { en: '3 Regional Premium Retail Brands', th: 'แบรนด์รีเทลพรีเมียมระดับภูมิภาค 3 แบรนด์' },
    period: 'Aug – Dec 2026',
    role: { en: 'UX Auditor & Staging QA', th: 'UX Auditor & Staging QA' },
    platform: { en: 'Responsive Storefront + Shopify Admin', th: 'หน้าร้าน Responsive + ระบบหลังบ้าน Shopify' },
    team: { en: 'Project Managers, Solution Consultants, QA', th: 'ทีม PM, Solution Consultants และทีมส่งมอบระบบ' },
    summary: {
      en: 'Audited end-to-end e-commerce journeys across 3 regional premium brands and verified 11 Shopify training modules (59 sub-steps) on live Staging including Matrixify workflows.',
      th: 'ไล่ตรวจประสบการณ์ซื้อของตั้งแต่หน้าแรกจนถึงตะกร้าให้แบรนด์พรีเมียม 3 ราย และลองกดทดสอบคู่มือ Shopify บนระบบ Staging จริงครบ 11 หัวข้อ (59 ขั้นตอนย่อย) รวมขั้นตอน Matrixify',
    },
    shortSummary: {
      en: 'E-commerce journey audits for 3 brands plus 59-step Shopify Staging QA & Matrixify verification.',
      th: 'ตรวจ User Journey 3 แบรนด์พรีเมียม และทดสอบ Staging QA ระบบ Shopify 59 ขั้นตอน',
    },
    tags: ['Journey Audit', 'Shopify Staging QA', 'Matrixify', 'Feedback Tracker'],
    context: {
      en: 'Premium retail clients require both polished storefront conversion journeys and accurate hands-on Shopify Admin training documentation prior to handover.',
      th: 'ลูกค้าแบรนด์พรีเมียมต้องการทั้งประสบการณ์หน้าเว็บที่ลื่นไหลและคู่มือการใช้งานระบบหลังบ้าน Shopify ที่แม่นยำตรงกับหน้าจอจริงก่อนส่งมอบระบบ',
    },
    challenge: {
      en: 'Shopify Admin UI updates frequently, causing training guides to drift out of sync with live staging environments and creating client confusion.',
      th: 'หน้าจอ Shopify Admin มีการอัปเดตอยู่เสมอ ทำให้คู่มือเดิมไม่ตรงกับระบบจริงและมีขั้นตอนสำคัญที่ขาดหายไป',
    },
    methodology: {
      en: [
        'Audited full storefront journeys (Landing → PLP → PDP → Bag/Checkout) for Journal Boutique (TH) (Mobile viewport & sentiment), Le Creuset (search, color filters, reviews), and Ethos Indonesia.',
        'Executed hands-on Staging QA across all 11 topics (59 sub-steps) of Le Creuset Training Materials v1.2.',
        'Built a structured Google Sheets Feedback Tracker documenting Admin UI changes and missing steps (e.g., Variant ID export in Matrixify).',
      ],
      th: [
        'วิเคราะห์ User Journey (Landing → PLP → PDP → Bag/Checkout) ให้ Journal Boutique (TH) (เน้น Mobile & User Sentiment), Le Creuset (ค้นหา/ฟิลเตอร์สี/รีวิว) และ Ethos Indonesia',
        'ตรวจสอบคู่มือ Shopify Training Materials v1.2 ครบ 11 หัวข้อ (59 สเต็ปย่อย) บนระบบ Staging จริง',
        'สร้าง Google Sheets Feedback Tracker บันทึกจุดที่ UI เปลี่ยนแปลงและขั้นตอนที่ขาดหาย (เช่น การ Export Variant ID ใน Matrixify)',
      ],
    },
    methodologyNda: {
      en: [
        'Audited full storefront journeys (Landing → PLP → PDP → Bag/Checkout) across 3 regional premium retail brands covering mobile viewport UX, search, color filters, and reviews.',
        'Executed hands-on Staging QA across all 11 topics (59 sub-steps) of a luxury cookware client’s Shopify Training Materials v1.2.',
        'Built a structured Google Sheets Feedback Tracker documenting Admin UI changes and missing steps (e.g., Variant ID export in Matrixify).',
      ],
      th: [
        'วิเคราะห์ User Journey (Landing → PLP → PDP → Bag/Checkout) ให้แบรนด์รีเทลพรีเมียมระดับภูมิภาค 3 ราย ครอบคลุม Mobile UX, ระบบค้นหา, ฟิลเตอร์สี และรีวิว',
        'ตรวจสอบคู่มือ Shopify Training Materials v1.2 ครบ 11 หัวข้อ (59 สเต็ปย่อย) บนระบบ Staging จริงให้ลูกค้าแบรนด์เครื่องครัวพรีเมียม',
        'สร้าง Google Sheets Feedback Tracker บันทึกจุดที่ UI เปลี่ยนแปลงและขั้นตอนที่ขาดหาย (เช่น การ Export Variant ID ใน Matrixify)',
      ],
    },
    deliverables: {
      en: ['3 brand journey audit reports', '59-step Staging QA Google Sheets Feedback Tracker with rewrite proposals.'],
      th: ['รายงาน UX Journey Audit ทั้ง 3 แบรนด์', 'Google Sheets Feedback Tracker 59 สเต็ปพร้อมข้อเสนอปรับแก้คู่มือ'],
    },
    impact: {
      en: ['Caught outdated Shopify Admin steps and missing Matrixify instructions before client training delivery.'],
      th: ['ตรวจพบขั้นตอนที่คลาดเคลื่อนและข้อมูล Matrixify ที่ขาดหายได้ก่อนส่งมอบคู่มือให้ลูกค้าใช้งานจริง'],
    },
  },
  {
    id: 'abbott-usability',
    group: 'research',
    tracks: ['uxui'],
    category: { en: 'Moderated Usability Testing', th: 'Usability Testing' },
    metricBadge: { en: '1.5hr Think-Aloud Synthesis', th: 'ทดสอบ 1.5 ชม. • สังเคราะห์ 3 มิติ' },
    title: {
      en: 'Moderated Usability Testing - Abbott Bundle Subscription',
      th: 'Moderated Usability Testing - ระบบสมัครสมาชิก Abbott Bundle',
    },
    titleNda: {
      en: 'Moderated Usability Testing - Recurring Bundle Subscription Flow',
      th: 'Moderated Usability Testing - ระบบสมัครสมาชิกแบบ Bundle Subscription',
    },
    client: { en: 'Abbott (via aCommerce)', th: 'Abbott (ผ่าน aCommerce)' },
    clientNda: { en: 'Global Healthcare Brand', th: 'แบรนด์ผลิตภัณฑ์สุขภาพระดับโลก' },
    period: 'Aug – Dec 2026',
    role: { en: 'Usability Test Moderator', th: 'ผู้ดำเนินการทดสอบผู้ใช้' },
    platform: { en: 'Mobile Web Prototype (Figma)', th: 'ต้นแบบมือถือ Interactive (Figma)' },
    team: { en: 'Senior UX Designer, Product Owner', th: 'Senior UX Designer และ Product Owner' },
    summary: {
      en: 'Moderated a 1.5-hour unguided Think-Aloud mobile prototype session on Figma and synthesized insights across Comprehension, Missing Information, and Usability Friction.',
      th: 'นำเซสชันทดสอบผู้ใช้ 1.5 ชม. บน Figma Mobile Prototype ด้วยวิธี Think-Aloud แบบไม่ชี้นำ แล้วสรุปข้อค้นพบออกเป็น 3 มิติให้ปรับแก้ได้จริงภายใต้ข้อจำกัดของปลั๊กอิน',
    },
    shortSummary: {
      en: '1.5-hour Think-Aloud mobile prototype test synthesizing comprehension & usability insights.',
      th: 'ทดสอบผู้ใช้แบบ Think-Aloud 1.5 ชม. บนต้นแบบมือถือ และสรุปประเด็น UX 3 มิติ',
    },
    tags: ['Think-Aloud Protocol', 'Figma Prototype', 'Subscription UX', 'Qualitative Synthesis'],
    context: {
      en: 'Recurring bundle subscription flows carry higher cognitive stakes than one-time purchases because users need clarity on billing frequency, discounts, and cancellation rules.',
      th: 'ระบบสมัครสมาชิกสินค้าแบบ Bundle มีความซับซ้อนกว่าการซื้อครั้งเดียว ผู้ใช้ต้องเข้าใจรอบการชำระเงิน ส่วนลด และเงื่อนไขการยกเลิกอย่างชัดเจน',
    },
    challenge: {
      en: 'Uncovering genuine comprehension gaps without leading participants, while proposing improvements feasible inside third-party subscription plugin constraints.',
      th: 'ต้องเก็บอินไซต์ความเข้าใจจริงของผู้ใช้โดยไม่ชี้นำ พร้อมเสนอแนวทางปรับปรุงที่ทำได้จริงภายใต้ข้อจำกัดของปลั๊กอิน Subscription',
    },
    methodology: {
      en: [
        'Facilitated a 1.5-hour moderated mobile prototype usability test in Figma using non-leading Think-Aloud prompts.',
        'Synthesized qualitative observations into 3 structured dimensions: Comprehension, Missing Information, and Usability Friction.',
      ],
      th: [
        'ดำเนินเซสชันทดสอบ 1.5 ชั่วโมงผ่าน Interactive Mobile Prototype บน Figma ด้วยเทคนิค Think-Aloud แบบไม่ชี้นำ',
        'สังเคราะห์ผลลัพธ์เชิงคุณภาพออกเป็น 3 มิติ ได้แก่ Comprehension (ความเข้าใจ), Missing Information (ข้อมูลที่ขาด) และ Usability Friction (จุดติดขัด)',
      ],
    },
    deliverables: {
      en: ['3-dimension qualitative synthesis matrix aligned with subscription plugin constraints.'],
      th: ['รายงานสังเคราะห์ผลวิจัย 3 มิติที่ระบุทางแก้สอดคล้องกับข้อจำกัดทางเทคนิคของปลั๊กอิน'],
    },
    impact: {
      en: ['Clarified exact copy and step-order friction points blocking confident subscription sign-ups.'],
      th: ['ชี้ชัดจุดที่ข้อความและลำดับขั้นตอนทำให้ผู้ใช้ลังเลก่อนตัดสินใจสมัครสมาชิก'],
    },
  },
  {
    id: 'red-team-critique',
    group: 'research',
    tracks: ['uxui'],
    category: { en: 'Design Critique', th: 'Design Critique' },
    metricBadge: { en: 'Steelman + Confidence 1–10', th: 'Steelman + คะแนนความเชื่อมั่น 1–10' },
    title: {
      en: 'Independent Design Critique - Red Team Steelman Methodology',
      th: 'Independent Design Critique ด้วยกระบวนการ Steelman Red Team',
    },
    client: { en: 'aCommerce Design Review', th: 'ทีมออกแบบ aCommerce' },
    period: 'Aug – Dec 2026',
    role: { en: 'Red Team Reviewer', th: 'Red Team Reviewer' },
    platform: { en: 'E-Commerce Storefront UI Review', th: 'รีวิว UI หน้าเว็บ E-Commerce' },
    team: { en: 'aCommerce UX/UI Design Team', th: 'ทีมออกแบบ UX/UI ของ aCommerce' },
    summary: {
      en: 'Applied the Steelman critique framework to evaluate subscription banner mental models, classifying 3–7 core findings by evidence tier and confidence score (1–10).',
      th: 'รับหน้าที่ Red Team Reviewer ตรวจแบนเนอร์ Subscription ด้วยหลัก Steelman เพื่อลดอคติส่วนตัว พร้อมแยกข้อสังเกตตามน้ำหนักหลักฐานและคะแนนความเชื่อมั่น 1–10',
    },
    shortSummary: {
      en: 'Steelman UX critique evaluating subscription banner mental models with evidence-tiered scoring.',
      th: 'ตรวจประเมินแบนเนอร์ Subscription ด้วยหลัก Steelman แยกข้อค้นพบตามระดับหลักฐาน',
    },
    tags: ['Red Team Review', 'Steelman Method', 'Mental Models', 'Evidence Classification'],
    context: {
      en: 'Design reviews easily devolve into subjective aesthetic opinions unless grounded in structured bias-reduction methods.',
      th: 'การรีวิวงานออกแบบมักตกหลุมพรางความเห็นส่วนตัว หากไม่มีกรอบวิธีคิดที่ช่วยแยกข้อเท็จจริงออกจากสมมติฐาน',
    },
    challenge: {
      en: 'Stress-testing subscription banner messaging objectively while respecting original design intent.',
      th: 'ประเมินความชัดเจนของข้อความบน Subscription Banner อย่างเป็นกลางโดยไม่มองข้ามเจตนาเดิมของผู้ออกแบบ',
    },
    methodology: {
      en: [
        'Opened the review with Steelman defense - articulating the strongest rationale behind the designer’s intent before critiquing.',
        'Filtered 3–7 core findings classified by evidence tier (Observed, Evidence-backed, Hypothesis) with Confidence Scores (1–10).',
      ],
      th: [
        'เริ่มด้วยการทำความเข้าใจและปกป้องเจตนาของผู้ออกแบบก่อน (Steelman) เพื่อตัดอคติส่วนตัว',
        'คัดกรองปัญหาหลัก 3–7 ข้อ จำแนกตามระดับหลักฐาน (Observed, Evidence-backed, Hypothesis) พร้อมให้คะแนนความเชื่อมั่น (1–10)',
      ],
    },
    deliverables: {
      en: ['Structured Red Team critique report with evidence tiers and confidence scoring.'],
      th: ['รายงาน Red Team Critique แบบจำแนกน้ำหนักหลักฐานและคะแนนความเชื่อมั่น'],
    },
    impact: {
      en: ['Shifted design critique discussions from subjective opinions to testable hypotheses grounded in user mental models.'],
      th: ['ยกระดับการรีวิวงานออกแบบจากความชอบส่วนตัวสู่สมมติฐาน Mental Model ที่นำไปทดสอบต่อได้จริง'],
    },
  },

  // GROUP 3: WEB APPLICATIONS, PRODUCT DESIGN & BUSINESS SYSTEMS
  {
    id: 'appsheet-pos-inventory',
    group: 'apps',
    tracks: ['systems', 'frontend', 'uxui'],
    category: { en: 'Business Systems • AppSheet', th: 'ระบบธุรกิจ • AppSheet' },
    metricBadge: { en: '2 Integrated Internal Apps', th: '2 แอปเชื่อมต่อข้อมูลอัตโนมัติ' },
    title: {
      en: 'Inventory & Waste Management + Mobile Barcode POS Suite',
      th: 'ระบบบริหารสต็อก/ของเสีย และแอป Mobile POS สแกนบาร์โค้ด',
    },
    client: { en: 'Internal Business Digitization Project', th: 'โปรเจกต์ปรับระบบธุรกิจสู่ดิจิทัล' },
    period: '2025 – 2026',
    role: { en: 'System Designer & App Builder', th: 'System Designer & App Builder' },
    platform: { en: 'Mobile Web App (Google AppSheet)', th: 'Mobile App (Google AppSheet & Sheets)' },
    team: { en: 'Solo Builder & Business Stakeholders', th: 'พัฒนาเดี่ยว ร่วมเก็บโจทย์กับเจ้าของกิจการ' },
    summary: {
      en: 'Replaced handwritten factory & retail recordkeeping with relational Google AppSheet apps featuring automated waste reconciliation, executive dashboards, camera barcode POS, and auto stock deduction.',
      th: 'เปลี่ยนการจดสต็อกและยอดขายลงกระดาษมาเป็นระบบแอปบน Google AppSheet ที่เชื่อมข้อมูลสินค้า คู่ค้า และตะกร้าขายเข้าด้วยกัน พร้อมคำนวณสัดส่วนของเสีย สแกนบาร์โค้ดผ่านกล้อง และตัดสต็อกอัตโนมัติ',
    },
    shortSummary: {
      en: 'AppSheet POS, camera barcode scanning, auto stock deduction, and factory waste dashboards.',
      th: 'แอป POS สแกนบาร์โค้ด ตัดสต็อกอัตโนมัติ และแดชบอร์ดคุมของเสียบน AppSheet',
    },
    tags: ['Google AppSheet', 'Relational Modeling', 'Virtual Columns', 'Barcode POS', 'Executive Dashboard'],
    uxFlow: {
      title: { en: 'End-to-End Inventory, Waste & POS Flow', th: 'เส้นทางข้อมูลสต็อก คุมของเสีย และขายหน้าร้าน' },
      steps: [
        {
          step: '01',
          label: { en: 'Stock In', th: 'รับวัตถุดิบเข้า' },
          detail: { en: 'Log supplier batches into relational sheet', th: 'บันทึกรับเข้าเชื่อมข้อมูลสินค้าและคู่ค้า' },
          accent: 'sky',
        },
        {
          step: '02',
          label: { en: 'Production & Waste', th: 'ผลิต & ตัดแต่งของเสีย' },
          detail: { en: 'Virtual Columns auto-calc waste ratio %', th: 'สูตร Virtual Columns คำนวณสัดส่วนของเสียอัตโนมัติ' },
          accent: 'butter',
        },
        {
          step: '03',
          label: { en: 'Barcode Mobile POS', th: 'สแกนขาย POS มือถือ' },
          detail: { en: 'Camera scan, cash/QR & instant stock deduct', th: 'สแกนบาร์โค้ด คิดเงินสด/QR และตัดสต็อกทันที' },
          accent: 'peach',
        },
        {
          step: '04',
          label: { en: 'Live Dashboard', th: 'แดชบอร์ดผู้บริหาร' },
          detail: { en: 'Real-time sales, waste & stock overview', th: 'ดูกราฟยอดขายและของเสียเทียบรายวันได้ทันที' },
          accent: 'mint',
        },
      ],
    },
    context: {
      en: 'Manual paper logs for inventory, production waste, and point-of-sale transactions caused calculation errors and zero real-time visibility for management.',
      th: 'การจดสต็อก ของเสียจากการผลิต และยอดขายลงกระดาษทำให้เกิดความคลาดเคลื่อนและผู้บริหารไม่สามารถดูภาพรวมแบบเรียลไทม์ได้',
    },
    challenge: {
      en: 'Connecting multi-table operational data (products, suppliers, customers, employees, parent-child POS carts) in an intuitive mobile-first interface.',
      th: 'ต้องออกแบบฐานข้อมูลเชิงสัมพันธ์หลายตารางให้เชื่อมโยงกันอย่างแม่นยำ แต่ยังคงใช้งานหน้าจอมือถือได้ง่ายสำหรับพนักงานหน้างาน',
    },
    methodology: {
      en: [
        'Modeled relational tables in Google Sheets linking products, suppliers, customers, employees, and parent-child shopping cart records.',
        'Engineered automated remaining-stock reconciliation and production waste/loss percentage logic via AppSheet Virtual Columns.',
        'Added mobile camera barcode scanning, cash vs. QR/bank-transfer change calculation, and instant stock deduction upon checkout.',
      ],
      th: [
        'ออกแบบโครงสร้างข้อมูลเชิงสัมพันธ์เชื่อมโยงสินค้า ซัพพลายเออร์ ลูกค้า พนักงาน และตาราง Parent-Child ของตะกร้าขาย',
        'พัฒนาสูตรคำนวณสต็อกคงเหลือและเปอร์เซ็นต์ของเสียอัตโนมัติด้วย AppSheet Virtual Columns พร้อม Executive Dashboard เรียลไทม์',
        'รองรับสแกนบาร์โค้ดผ่านกล้องมือถือ แยกการคำนวณเงินสดและโอน/QR พร้อมตัดสต็อกอัตโนมัติทันทีที่ปิดบิล',
      ],
    },
    deliverables: {
      en: ['Inventory & Waste Management Dashboard app', 'Mobile POS & Barcode Scanner app with automated inventory sync.'],
      th: ['แอป Inventory & Waste Management พร้อม Executive Dashboard', 'แอป Mobile POS สแกนบาร์โค้ดเชื่อมต่อการตัดสต็อกอัตโนมัติ'],
    },
    impact: {
      en: ['Eliminated repetitive handwritten bookkeeping and provided real-time visibility into sales, waste ratios, and stock levels.'],
      th: ['ลดขั้นตอนการจดบันทึกด้วยมือ เพิ่มความถูกต้องของข้อมูล และทำให้เห็นยอดขาย สัดส่วนของเสีย และสต็อกแบบเรียลไทม์'],
    },
    gallery: [
      {
        id: 'appsheet-waste-dashboard',
        src: './images/appsheet/dashboard-waste.png',
        mediaType: 'image',
        label: { en: 'Waste Ratio Dashboard', th: 'แดชบอร์ดสัดส่วนของเสีย' },
        device: 'mobile',
        caption: {
          en: 'Live AppSheet Executive Dashboard comparing daily raw material withdrawals (kg) against trimming waste (kg) across production batches.',
          th: 'หน้าแดชบอร์ดจริงบน AppSheet แสดงกราฟเปรียบเทียบปริมาณการเบิกวัตถุดิบ (กก.) กับของเสียจากการตัดแต่ง (กก.) แบบเรียลไทม์',
        },
      },
      {
        id: 'appsheet-production-log',
        src: './images/appsheet/production-table.png',
        mediaType: 'image',
        label: { en: 'Production & Waste Log', th: 'ตารางบันทึกผลิต & ของเสีย' },
        device: 'mobile',
        caption: {
          en: 'Mobile production table tracking item-level trimming waste and calculated loss metrics via AppSheet Virtual Columns with quick-add FAB.',
          th: 'ตารางบันทึกการผลิตและตัดแต่งของเสียรายรายการบนมือถือ คำนวณสัดส่วนอัตโนมัติด้วย Virtual Columns พร้อมปุ่มเพิ่มรายการด่วน',
        },
      },
    ],
  },
  {
    id: 'lifebalance-webapp',
    group: 'apps',
    tracks: ['frontend', 'uxui'],
    category: { en: 'Frontend & UI/UX • Live Demo', th: 'Frontend & UI/UX • มีเว็บจริง' },
    metricBadge: { en: 'Live Netlify App + Figma', th: 'เว็บจริง Netlify + Figma' },
    title: {
      en: 'LifeBalance - Responsive Health Tracker Web App',
      th: 'LifeBalance - เว็บแอปติดตามสุขภาพและแดชบอร์ดข้อมูล',
    },
    client: { en: 'KMITL UI/UX & Web Design Project', th: 'โปรเจกต์วิชา UI/UX และ Web Design (สจล.)' },
    period: '2025',
    role: { en: 'UI/UX Designer & Frontend Developer', th: 'UI/UX Designer & Frontend Developer' },
    platform: { en: 'Responsive Web App (Live on Netlify)', th: 'Responsive Web App (เว็บจริงบน Netlify)' },
    team: { en: 'Solo End-to-End (Design + Code)', th: 'ออกแบบและเขียนโค้ดครบวงจร (เดี่ยว)' },
    summary: {
      en: 'Designed, prototyped, and deployed a live wellness dashboard (Netlify) tracking steps, water, calories, and sleep - iterated via usability testing into a unified Tab Component logging modal.',
      th: 'ออกแบบ ทำ Figma Prototype และเขียนโค้ดขึ้นเว็บจริงบน Netlify สำหรับติดตามก้าวเดิน น้ำ แคลอรี และการนอน พร้อมนำผล Usability Testing มาปรับหน้าบันทึกข้อมูลให้รวมอยู่ใน Tab เดียวเพื่อลดขั้นตอนการคลิก',
    },
    shortSummary: {
      en: 'Live wellness dashboard (Netlify) tracking steps, water, calories & sleep with tested Tab UX.',
      th: 'เว็บแอปแดชบอร์ดสุขภาพ (Netlify) พร้อม Figma Prototype ที่ปรับ UX จากการทดสอบผู้ใช้จริง',
    },
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Chart.js', 'Figma', 'Netlify'],
    uxFlow: {
      title: { en: 'Usability-Driven Design Pivot Flow', th: 'การปรับ UX จากผลทดสอบผู้ใช้จริง (Design Pivot)' },
      steps: [
        {
          step: '01',
          label: { en: 'V1 Prototype Test', th: 'ทดสอบต้นแบบ V1' },
          detail: { en: 'Tested 4 separate category popups', th: 'ลองให้ผู้ใช้กรอก 4 หมวดที่แยกป๊อปอัปกัน' },
          accent: 'peach',
        },
        {
          step: '02',
          label: { en: 'Friction Found', th: 'พบจุดติดขัดหลัก' },
          detail: { en: 'High interaction cost opening/closing modals', th: 'ต้องกดเปิด-ปิดหลายหน้าต่าง ซ้ำซ้อนและล้า' },
          accent: 'butter',
        },
        {
          step: '03',
          label: { en: 'Unified Tab Pivot', th: 'รวมไว้ใน Tab เดียว' },
          detail: { en: 'Merged all 4 logs in 1 horizontal Tab modal', th: 'ย้ายการกรอกทั้ง 4 หมวดมาไว้ในแถบ Tab เดียวกัน' },
          accent: 'lilac',
        },
        {
          step: '04',
          label: { en: 'Live Netlify Build', th: 'พัฒนาและ Deploy จริง' },
          detail: { en: 'Shipped HTML/JS + Chart.js dashboard', th: 'ขึ้นเว็บจริงพร้อมกราฟสรุปและทดสอบซ้ำ' },
          accent: 'mint',
        },
      ],
    },
    context: {
      en: 'Many users abandon daily health trackers when exercise, food, sleep, and water logs are fragmented across scattered pages and cluttered dashboards.',
      th: 'ผู้ใช้จำนวนมากเลิกติดตามสุขภาพเพราะข้อมูลการออกกำลังกาย อาหาร น้ำ และการนอนกระจัดกระจายอยู่หลายหน้าและกรอกข้อมูลซ้ำซ้อน',
    },
    challenge: {
      en: 'Pre-iteration usability testing revealed high Interaction Cost and Cognitive Overload from opening/closing separate modal layers for each health category.',
      th: 'จากผลทดสอบเวอร์ชันแรกพบ Interaction Cost และ Cognitive Overload สูง เพราะต้องเปิด-ปิดหลายป๊อปอัปและหลายหน้าย่อยเพื่อกรอกข้อมูลแต่ละหมวด',
    },
    methodology: {
      en: [
        'Built full interactive UI/UX prototype in Figma and developed the live frontend web app with HTML5, CSS3, JavaScript, Bootstrap 5, and Chart.js.',
        'Initiated a UX design pivot after usability testing: consolidated Exercise, Food, Sleep, and Water inputs into a centralized horizontal Tab Component System inside a single logging modal.',
      ],
      th: [
        'ออกแบบ Interactive Prototype ใน Figma และเขียนโค้ดพัฒนาเว็บจริงด้วย HTML5, CSS3, JavaScript, Bootstrap 5 และ Chart.js',
        'ทำ Usability Testing แล้วปรับโครงสร้างครั้งใหญ่ (Design Pivot) รวมการกรอกข้อมูลทุกหมวดไว้ใน Tab Component System แนวนอนภายใน Modal เดียว',
      ],
    },
    deliverables: {
      en: [
        'Live deployed responsive web app on Netlify with Chart.js visualizations & BMI/Goal progress tracking.',
        'Interactive Figma prototype and Web Design presentation deck.',
      ],
      th: [
        'เว็บแอปพลิเคชันจริงบน Netlify พร้อมแดชบอร์ด Chart.js และระบบติดตามเป้าหมาย/ค่า BMI',
        'Interactive Figma Prototype และชุดหน้าจอออกแบบครบทุก Flow',
      ],
    },
    impact: {
      en: [
        'Follow-up usability testing confirmed significantly fewer workflow steps, lower interaction friction, and higher task completion consistency.',
      ],
      th: [
        'การทดสอบผู้ใช้รอบหลังยืนยันว่าลดจำนวนคลิกและจุดติดขัดได้ชัดเจน ช่วยให้ผู้ใช้บันทึกข้อมูลประจำวันได้ต่อเนื่องขึ้น',
      ],
    },
    links: [
      {
        label: { en: 'Open Live Demo (Netlify)', th: 'เปิดเว็บจริง (Netlify)' },
        href: 'https://lifebalance-65070086.netlify.app/',
        primary: true,
      },
      {
        label: { en: 'Open Figma Prototype', th: 'เปิด Figma Prototype' },
        href: 'https://www.figma.com/proto/OfdXOYE4cKRv7jCsWUYbIk/LifeBalance-Prototype?node-id=1-4&p=f&viewport=-267%2C-1598%2C0.3&t=IQEZxznryxc7m5jW-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4&page-id=0%3A1',
      },
    ],
    gallery: [
      {
        id: 'lb-presentation',
        src: './images/lifebalance/presentation.png',
        mediaType: 'image',
        label: { en: 'Laptop Showcase', th: 'ม็อกอัปหน้าเว็บ' },
        device: 'desktop',
        caption: {
          en: 'LifeBalance desktop landing presentation featuring clean wellness hierarchy and 5 core tracking pillars.',
          th: 'ภาพพรีเซนต์หน้าเว็บ LifeBalance แสดงโครงสร้างสะอาดตาและ 5 ฟีเจอร์หลักด้านสุขภาพ',
        },
      },
      {
        id: 'lb-dashboard',
        src: './images/lifebalance/dashboard.png',
        mediaType: 'image',
        label: { en: 'Health Dashboard', th: 'หน้าแดชบอร์ด' },
        device: 'desktop',
        caption: {
          en: 'Color-coded daily telemetry cards (Steps, Water, Calories, Sleep), BMI indicator, Goal rings, and 80% Monthly Progress radial chart.',
          th: 'แดชบอร์ดสรุปสุขภาพรายวันแยกสีชัดเจน (ก้าวเดิน, น้ำ, แคลอรี, การนอน) พร้อมค่า BMI และกราฟเป้าหมายรายเดือน',
        },
      },
      {
        id: 'lb-home',
        src: './images/lifebalance/home.png',
        mediaType: 'image',
        label: { en: 'Full Landing Page', th: 'หน้าแรกเต็มหน้า' },
        device: 'desktop',
        caption: {
          en: 'Complete scrollable landing page with bento preview, value proposition, and conversion CTA.',
          th: 'หน้า Landing Page เต็มหน้าพร้อมพรีวิวฟีเจอร์และปุ่มเริ่มใช้งาน',
        },
      },
      {
        id: 'lb-log-add',
        src: './images/lifebalance/log-add.png',
        mediaType: 'image',
        label: { en: 'Unified Log Screen', th: 'หน้าบันทึกข้อมูล' },
        device: 'desktop',
        caption: {
          en: 'Post-iteration streamlined logging interface reducing modal hopping and cognitive load.',
          th: 'หน้าบันทึกข้อมูลที่ปรับลดความซับซ้อนหลังทำ Usability Testing',
        },
      },
      {
        id: 'lb-log-popup',
        src: './images/lifebalance/log-popup.png',
        mediaType: 'image',
        label: { en: 'Quick Log Modal', th: 'ป๊อปอัปกรอกข้อมูลไว' },
        device: 'desktop',
        caption: {
          en: 'Focused color-coded quick-entry modal for rapid daily logging.',
          th: 'Modal กรอกข้อมูลแบบรวดเร็วแยกตามสีหมวดหมู่',
        },
      },
    ],
  },
  {
    id: 'coworking-booking',
    group: 'apps',
    tracks: ['uxui'],
    category: { en: 'UX/UI Product Design', th: 'UX/UI Product Design' },
    metricBadge: { en: 'Interactive Figma Prototype', th: 'Figma เล่นได้จริง' },
    title: {
      en: 'IT KMITL Co-working Space Booking App',
      th: 'แอปจองพื้นที่ Co-working Space (คณะ IT สจล.)',
    },
    client: { en: 'Faculty of Information Technology, KMITL', th: 'คณะเทคโนโลยีสารสนเทศ สจล.' },
    period: '2024 – 2025',
    role: { en: 'UX/UI Product Designer', th: 'UX/UI Product Designer' },
    platform: { en: 'Mobile App Prototype (Figma)', th: 'Mobile App Prototype (Figma)' },
    team: { en: 'Student UX Design Project', th: 'โปรเจกต์ออกแบบ UX/UI คณะไอที สจล.' },
    summary: {
      en: 'Redesigned IT KMITL’s fragmented Google Forms & Calendar booking workflow into a centralized responsive prototype with real-time Creative & Common Room seat availability visualizers.',
      th: 'ออกแบบระบบจองห้อง Creative Room และ Common Room คณะ IT สจล. ใหม่ทั้งหมด แทนการสลับดู Google Calendar กับกรอก Google Forms เพื่อลดปัญหาจองซ้อนและเช็กที่นั่งว่างได้ทันที พร้อม Figma Prototype กดเล่นได้จริง',
    },
    shortSummary: {
      en: 'Interactive Figma prototype for IT KMITL room booking with real-time seat availability maps.',
      th: 'ออกแบบแอปจองห้องคณะ IT สจล. ใหม่ พร้อมแผนผังเช็กที่นั่งว่างแบบเรียลไทม์บน Figma',
    },
    tags: ['Figma Prototype', 'User Personas', 'Booking Flows', 'Seat Occupancy UI', 'Responsive Web'],
    uxFlow: {
      title: { en: 'Self-Service Room Booking UX Flow', th: 'เส้นทางผู้ใช้ในการจองและจัดการห้อง (UX Flow)' },
      steps: [
        {
          step: '01',
          label: { en: 'Explore Live Status', th: 'เช็กสถานะห้องว่าง' },
          detail: { en: 'Filter date/time across all 5 rooms', th: 'กรองวัน-เวลา เห็นห้องว่าง/ไม่ว่างครบ 5 ห้อง' },
          accent: 'sky',
        },
        {
          step: '02',
          label: { en: 'Room Detail & Map', th: 'ดูห้อง & ผังที่นั่ง' },
          detail: { en: 'Inspect facilities & pick seat on floor plan', th: 'เช็กสิ่งอำนวยความสะดวกและเลือกที่นั่งบนแผนผัง' },
          accent: 'butter',
        },
        {
          step: '03',
          label: { en: 'Confirm Booking', th: 'ยืนยันการจอง' },
          detail: { en: 'Instant slot lock preventing double bookings', th: 'ล็อกช่วงเวลาทันที ป้องกันการจองซ้อน' },
          accent: 'peach',
        },
        {
          step: '04',
          label: { en: 'Check-In / Cancel', th: 'เช็กอิน / ยกเลิกเอง' },
          detail: { en: 'Manage Remaining & Past bookings in History', th: 'กด Check-In หรือยกเลิกเองได้ในหน้า History' },
          accent: 'mint',
        },
      ],
    },
    context: {
      en: 'Students at IT KMITL had to manually check Google Calendar before submitting a Google Form to book Creative or Common Room spaces, creating confusion and overlapping reservations.',
      th: 'นักศึกษาคณะ IT สจล. ต้องสลับดูตาราง Google Calendar และกรอก Google Forms เพื่อจองห้อง Creative/Common Room ทำให้เช็กที่นั่งว่างไม่ได้ เกิดการจองซ้อน และแก้ไข/ยกเลิกเองไม่ได้',
    },
    challenge: {
      en: 'Solving 5 validated pain points: unclear seat occupancy, dual-tool Forms+Calendar switching, overlapping bookings, zero self-service edit/cancel, and calendar access issues.',
      th: 'แก้ 5 ปัญหาหลักจากการใช้งานจริง: ไม่เห็นสถานะที่นั่งว่าง, ขั้นตอนซับซ้อน, จองซ้อน, แก้ไข/ยกเลิกเองไม่ได้ และปัญหาการเข้าดูปฏิทิน',
    },
    methodology: {
      en: [
        'Mapped student user personas and end-to-end reservation journeys across Creative Room and Common Room scenarios.',
        'Designed real-time room & seat occupancy visualizers and self-service edit/cancel flows as a responsive Figma prototype.',
      ],
      th: [
        'วิเคราะห์พฤติกรรมผู้ใช้งานและวาง Booking Flow ครบวงจรสำหรับทั้ง Creative Room และ Common Room',
        'ออกแบบหน้าแสดงสถานะห้อง/ที่นั่งว่างแบบเห็นภาพชัดเจน พร้อมระบบแก้ไขและยกเลิกการจองด้วยตนเองใน Figma',
      ],
    },
    deliverables: {
      en: ['Interactive IT KMITL Co-working Space Figma Prototype (click link above to test live).'],
      th: ['Interactive Figma Prototype แพลตฟอร์มจองห้อง IT สจล. (กดปุ่มด้านบนเพื่อทดลองเล่นจริง)'],
    },
    impact: {
      en: ['Combined room discovery, live occupancy status, and booking management into a single self-service flow.'],
      th: ['รวมขั้นตอนเช็กที่นั่ง จองห้อง และจัดการการจองไว้ในหน้าจอเดียว ลดปัญหาจองซ้อนและความสับสน'],
    },
    links: [
      {
        label: { en: 'Try Interactive Figma Prototype', th: 'ทดลองเล่น Figma Prototype' },
        href: 'https://www.figma.com/proto/asK5N1VO0mRGXww6DD0NSO/Co-Working-Space-IT-KMITL-Prototype?node-id=1-3199&viewport=567%2C179%2C0.04&t=Q0Rg6VzUcxxtz5A7-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3199&show-proto-sidebar=1&page-id=0%3A1',
        primary: true,
      },
    ],
    gallery: [
      {
        id: 'cw-seat-map',
        src: './images/coworking/ui-seat-map.png',
        mediaType: 'image',
        label: { en: 'Floor Plan & Seat Map', th: 'ผังที่นั่งว่างแบบเรียลไทม์' },
        device: 'mobile',
        caption: {
          en: 'Interactive Common Room floor plan showing color-coded zone availability (A/B/C/Bar seats), live seat count (14 Seats available), and integrated date/time/seat booking picker.',
          th: 'แผนผังห้อง Common Room แบบโต้ตอบแยกสีตามโซนที่นั่ง (A/B/C/Bar seat) แสดงจำนวนที่นั่งว่างแบบเรียลไทม์ พร้อมตัวเลือกวัน-เวลาและที่นั่งในหน้าเดียว',
        },
      },
      {
        id: 'cw-room-detail',
        src: './images/coworking/ui-room-detail.png',
        mediaType: 'image',
        label: { en: 'Room Detail', th: 'รายละเอียดห้อง' },
        device: 'mobile',
        caption: {
          en: 'Common Room detail view featuring real IT KMITL space photography, live seat availability, facility chips (Wi-Fi, Co-space, Charging station), and direct Reserve Now CTA.',
          th: 'หน้ารายละเอียดห้อง Common Room พร้อมภาพบรรยากาศจริงคณะ IT สจล. สถานะที่นั่งว่าง สิ่งอำนวยความสะดวก (Wi-Fi, Co-space, จุดชาร์จไฟ) และปุ่มจองทันที',
        },
      },
      {
        id: 'cw-explore',
        src: './images/coworking/ui-explore.jpg',
        mediaType: 'image',
        label: { en: 'Explore Room Status', th: 'สำรวจสถานะห้องทั้งหมด' },
        device: 'mobile',
        caption: {
          en: 'Scrollable room explorer summarizing live room availability (4 Available / 1 Taken) across Common Room, Creative & Ideation 1–2, and Peer Tutor 2–3 with date-time filter.',
          th: 'หน้าสำรวจสถานะห้องว่างแบบเรียลไทม์ (ว่าง 4 / ไม่ว่าง 1) ครบทั้ง Common Room, Creative & Ideation 1–2 และ Peer Tutor 2–3 พร้อมตัวกรองวัน-เวลา',
        },
      },
      {
        id: 'cw-history',
        src: './images/coworking/ui-history.png',
        mediaType: 'image',
        label: { en: 'Booking History', th: 'ประวัติการจอง' },
        device: 'mobile',
        caption: {
          en: 'Self-service History screen separating Remaining Bookings and Past Bookings with clear Approved / Canceled status indicators and check-in/out timestamps.',
          th: 'หน้าประวัติการจองแยกแท็บการจองที่กำลังจะถึง (Remaining) และประวัติที่ผ่านมา (Past) แสดงสถานะ Approved / Canceled และเวลาเช็กอิน-เช็กเอาต์ชัดเจน',
        },
      },
      {
        id: 'cw-reservation-detail',
        src: './images/coworking/ui-reservation-detail.png',
        mediaType: 'image',
        label: { en: 'Check-In & Cancel', th: 'เช็กอิน & ยกเลิกการจอง' },
        device: 'mobile',
        caption: {
          en: 'Reservation Detail card displaying assigned room & seat (Common Room B07) with one-tap Check In and self-service Cancel Reservation controls.',
          th: 'หน้าสรุปรายละเอียดการจองพร้อมเลขที่นั่ง (Common Room B07) รองรับการกด Check In และยกเลิกการจองด้วยตนเอง',
        },
      },
      {
        id: 'cw-full-canvas',
        src: './images/coworking/figma-overview.png',
        mediaType: 'image',
        label: { en: 'Full Figma System', th: 'ภาพรวมระบบใน Figma' },
        device: 'desktop',
        caption: {
          en: 'Complete Figma design workspace spanning Register/Login, Home, Explore, Profile, Reserve flows for all 5 room types, seat-map components, and History states.',
          th: 'ภาพรวมไฟล์ออกแบบ Figma ครบทุกโมดูล: Register & Login, Home, Explore, Profile, ระบบจองทั้ง 5 ห้อง, คอมโพเนนต์ผังที่นั่ง และ History',
        },
      },
    ],
  },
  {
    id: 'vaccinote-aws',
    group: 'apps',
    tracks: ['systems', 'frontend'],
    category: { en: 'Cloud Architecture & Web App', th: 'สถาปัตยกรรมคลาวด์ AWS & เว็บ' },
    metricBadge: { en: 'AWS Multi-AZ + Django/RDS', th: 'AWS Multi-AZ + Django/RDS' },
    title: {
      en: 'VacciNote - Cloud Vaccine Record Management System',
      th: 'VacciNote - ระบบบันทึกประวัติวัคซีนออนไลน์บนคลาวด์ AWS',
    },
    client: { en: '06016404 Cloud Computing (KMITL)', th: 'วิชา Cloud Computing (สจล.)' },
    period: '2024',
    role: { en: 'System Designer & Cloud Architect (Team)', th: 'ออกแบบระบบและสถาปัตยกรรมคลาวด์ (ทีม)' },
    platform: { en: 'Web App (Django + AWS Multi-AZ)', th: 'เว็บแอป (Django + คลาวด์ AWS Multi-AZ)' },
    team: { en: 'KMITL Cloud Computing Project Team', th: 'ทีมโปรเจกต์วิชา Cloud Computing (สจล.)' },
    summary: {
      en: 'Online vaccine record system built with Django, Bootstrap & PostgreSQL on a resilient AWS Multi-AZ architecture (VPC, ALB, EC2 Auto Scaling, Multi-DB RDS, NAT Gateway, Bastion Host & NACL).',
      th: 'ระบบสมุดบันทึกการฉีดวัคซีนออนไลน์พัฒนาด้วย Django, Bootstrap และ PostgreSQL บนสถาปัตยกรรม AWS Multi-AZ เต็มรูปแบบ (VPC, ALB, EC2 Auto Scaling, RDS Primary/Secondary, NAT Gateway, Bastion Host)',
    },
    shortSummary: {
      en: 'Django & PostgreSQL vaccine tracker deployed on an AWS Multi-AZ VPC with Auto Scaling & RDS.',
      th: 'เว็บแอปบันทึกการฉีดวัคซีน (Django + PostgreSQL) บนสถาปัตยกรรม AWS Multi-AZ เต็มรูปแบบ',
    },
    tags: ['AWS VPC & Multi-AZ', 'EC2 Auto Scaling', 'ALB', 'Amazon RDS (PostgreSQL)', 'Django', 'SAD / Use Case'],
    context: {
      en: 'Paper vaccination booklets and hospital-only computer records prevent patients from accessing vaccination history in emergencies or when traveling.',
      th: 'ประวัติการฉีดวัคซีนเดิมเก็บในสมุดกระดาษหรือคอมพิวเตอร์เฉพาะโรงพยาบาล ทำให้ผู้ป่วยเข้าถึงข้อมูลในกรณีฉุกเฉินหรือเมื่ออยู่ไกลสถานพยาบาลได้ยาก',
    },
    challenge: {
      en: 'Designing a highly available, secure healthcare web architecture separating patient self-view access from medical personnel write permissions while auto-scaling under traffic spikes.',
      th: 'ต้องออกแบบระบบคลาวด์ที่มีความปลอดภัยสูง แยกสิทธิ์ผู้ใช้ทั่วไปกับบุคลากรทางการแพทย์ พร้อมรองรับการขยายตัวอัตโนมัติ (Elasticity & Multi-AZ Resiliency)',
    },
    methodology: {
      en: [
        'System Analysis & Design (SAD): Defined Business, Functional & Non-Functional Requirements and Use Case Diagrams for General Users vs. Medical Personnel.',
        'AWS Multi-AZ Architecture (VPC 10.0.0.0/16): Separated Public Subnets (ALB, NAT Gateway, Bastion Host) from Private Subnets (EC2 Auto Scaling Web Servers & Amazon RDS PostgreSQL Primary/Secondary across AZ 1A & 1B).',
        'Security Hardening: Configured tiered Security Groups (ALB → EC2 → RDS Port 5432, IP-restricted Bastion Host) plus Public/Private Network ACLs.',
      ],
      th: [
        'วิเคราะห์และออกแบบระบบ (SAD): กำหนด Business / Functional / Non-Functional Requirements และ Use Case แยกสิทธิ์ผู้ใช้ทั่วไปกับบุคลากรทางการแพทย์',
        'ออกแบบสถาปัตยกรรม AWS Multi-AZ (VPC 10.0.0.0/16): แยก Public Subnet (ALB, NAT Gateway, Bastion Host) และ Private Subnet (EC2 Auto Scaling + Amazon RDS PostgreSQL Primary/Secondary ข้าม 2 AZ)',
        'วางระบบความปลอดภัยหลายชั้นด้วย Security Groups (ล็อกพอร์ต 5432 เฉพาะ Web Server, จำกัด IP สำหรับ Bastion Host) และ Network ACL',
      ],
    },
    deliverables: {
      en: [
        'Full AWS Multi-AZ Architecture diagram (VPC 10.0.0.0/16, Public/Private Subnets, ALB, EC2 Auto Scaling, RDS Primary/Standby, NAT Gateway & Bastion Host).',
        'System Analysis & Design (SAD), Use Case Diagrams & Django + Amazon RDS deployment blueprint.',
      ],
      th: [
        'แผนผังสถาปัตยกรรม AWS Multi-AZ ฉบับสมบูรณ์ (VPC 10.0.0.0/16, Public/Private Subnets, ALB, EC2 Auto Scaling, RDS Primary/Standby, NAT Gateway และ Bastion Host)',
        'เอกสาร System Analysis & Design (SAD), Use Case Diagram และแบบแปลน Deployment Django + Amazon RDS',
      ],
    },
    impact: {
      en: [
        'Demonstrated production-grade cloud Elasticity (Auto Scaling), High Availability (Multi-AZ failover), and Defense-in-Depth Security (Private Subnets + NACL + SGs).',
      ],
      th: [
        'ประยุกต์ใช้คุณสมบัติคลาวด์ครบทั้ง Elasticity, Horizontal Scalability, Multi-AZ Availability และ Automatic Recovery ในระบบจริง',
      ],
    },
    gallery: [
      {
        id: 'vaccinote-aws-arch',
        src: './images/vaccinote/aws-architecture.png',
        mediaType: 'image',
        label: { en: 'AWS Multi-AZ Architecture', th: 'ผังสถาปัตยกรรม AWS Multi-AZ' },
        device: 'desktop',
        caption: {
          en: 'Complete AWS VPC (10.0.0.0/16) Multi-AZ topology with Internet Gateway, Application Load Balancer, Public/Private Subnets across AZ 1A & 1B, Bastion Host, NAT Gateway, EC2 Auto Scaling Web Servers, and Amazon RDS PostgreSQL Primary/Standby.',
          th: 'แผนผังสถาปัตยกรรม AWS Multi-AZ ฉบับสมบูรณ์ (VPC 10.0.0.0/16) แสดง Internet Gateway, ALB, Public/Private Subnets ข้าม AZ 1A & 1B, Bastion Host, NAT Gateway, EC2 Auto Scaling และ Amazon RDS PostgreSQL Primary/Standby',
        },
      },
      {
        id: 'vaccinote-use-case',
        src: './images/vaccinote/use-case-diagram.png',
        mediaType: 'image',
        label: { en: 'System Use Case Diagram', th: 'แผนภาพ Use Case ระบบ' },
        device: 'desktop',
        caption: {
          en: 'Role-based System Analysis & Design (SAD) Use Case Diagram separating General User self-view permissions from Medical Personnel vaccination record management.',
          th: 'แผนภาพ Use Case จากการวิเคราะห์และออกแบบระบบ (SAD) แยกสิทธิ์การดูข้อมูลของผู้ใช้ทั่วไปออกจากการบันทึกและแก้ไขประวัติวัคซีนของบุคลากรทางการแพทย์',
        },
      },
    ],
  },

  // GROUP 4: 3D, VR & GAME DEVELOPMENT
  {
    id: 'blender-3d-animation',
    group: 'creative3d',
    tracks: ['uxui'],
    category: { en: 'Interactive Media • 3D Showreels', th: 'Interactive Media • 3D & แอนิเมชัน' },
    metricBadge: { en: '2 YouTube Showreels', th: '2 คลิป Showreel จริง' },
    title: {
      en: '3D Modeling & Animation Showreels',
      th: 'ผลงาน 3D Modeling และแอนิเมชัน (Showreels)',
    },
    client: { en: 'KMITL Multimedia & Game Development', th: 'สาขา Multimedia & Game Development (สจล.)' },
    period: '2023 – 2025',
    role: { en: '3D Artist & Animator', th: '3D Artist & Animator' },
    platform: { en: '3D Pipeline (Blender, Maya, UE)', th: '3D Pipeline (Blender, Maya, Unreal Engine)' },
    team: { en: 'Solo & KMITL Coursework Projects', th: 'ผลงานเดี่ยวและงานกลุ่มวิชา Multimedia (สจล.)' },
    summary: {
      en: 'Visually driven 3D modeling, character/camera animation, and real-time visualization portfolio crafted with Blender, Maya, Substance Painter, and Unreal Engine - featuring 2 YouTube showreels.',
      th: 'รวมผลงานปั้นโมเดล 3 มิติ (Hard Surface, Environment, Prop, Character), แอนิเมชัน และการจัดแสงเรนเดอร์ด้วย Blender, Maya, Substance Painter และ Unreal Engine พร้อมคลิป Showreel 2 ชุด',
    },
    shortSummary: {
      en: '3D modeling, PBR texturing, lighting, and animation portfolio with 2 YouTube showreels.',
      th: 'รวมผลงานปั้นโมเดล 3D, ลงพื้นผิว PBR, จัดแสง และแอนิเมชัน พร้อมคลิป Showreel 2 ชุด',
    },
    tags: ['Blender', 'Maya', 'Substance Painter', 'Unreal Engine', 'Character & Camera Animation'],
    context: {
      en: 'Developed across KMITL’s Multimedia & Game Development track, exploring hard-surface, environment, prop, and character pipelines alongside interactive visualization.',
      th: 'พัฒนาตลอดการเรียนแขนงวิชา Multimedia & Game Development ที่ สจล. ครอบคลุมทั้ง Hard Surface, Environment, Prop, Character Modeling และการทำ Animation',
    },
    challenge: {
      en: 'Coordinating clean 3D modeling topology, PBR texturing, cinematic lighting, and smooth character/camera motion across multi-software pipelines.',
      th: 'เชื่อมการทำงานข้ามหลายซอฟต์แวร์ (Blender, Maya, Substance Painter, Unreal Engine) ให้ทั้งแสง พื้นผิว และจังหวะแอนิเมชันออกมาลื่นไหล',
    },
    methodology: {
      en: [
        '3D Modeling: Hard Surface, Environment, Prop, and Character modeling in Blender & Maya.',
        'Texturing & Real-Time Rendering: PBR texturing in Substance Painter and lighting/visualization in Unreal Engine & Blender.',
        'Animation: Character animation and cinematic camera choreography (Computer Graphics & Animation Grade: B+, Visual Design Grade: A).',
      ],
      th: [
        '3D Modeling: ปั้นโมเดล Hard Surface, Environment, Prop และ Character ด้วย Blender และ Maya',
        'Texturing & Rendering: ลงพื้นผิว PBR ด้วย Substance Painter และจัดแสงเรนเดอร์ด้วย Unreal Engine & Blender',
        'Animation: ทำ Character Animation และ Camera Animation (วิชา Computer Graphics & Animation เกรด B+, Visual Design เกรด A)',
      ],
    },
    deliverables: {
      en: ['Latest 3D & Visualization Showreel (YouTube)', 'Animation Compilation Reel (YouTube).'],
      th: ['คลิป Latest 3D Showreel บน YouTube', 'คลิป Animation Compilation บน YouTube'],
    },
    impact: {
      en: ['Built practical instincts in lighting, spatial composition, and motion timing that carry directly into my UI and frontend work.'],
      th: ['สร้างรากฐานด้านมิติ แสงเงา และจังหวะ Motion ที่ต่อยอดมาสู่งานออกแบบ UI และ Interactive Web ได้อย่างโดดเด่น'],
    },
    links: [
      {
        label: { en: 'Watch Latest Showreel', th: 'ดู Latest Showreel' },
        href: 'https://youtu.be/Khb1pzFjRbY?si=OuQMcw-_WppKJgbc',
        primary: true,
      },
      {
        label: { en: 'Animation Compilation', th: 'ดู Animation Compilation' },
        href: 'https://youtu.be/qSHoamK3hlg?si=05q4frdcR9_EpHpM',
      },
    ],
    gallery: [
      {
        id: 'yt-showreel',
        src: 'https://www.youtube.com/embed/Khb1pzFjRbY',
        mediaType: 'youtube',
        label: { en: 'Latest Showreel (YouTube)', th: 'Latest Showreel (YouTube)' },
        device: 'desktop',
        caption: {
          en: 'Featured 3D Modeling, Environment, Lighting & Animation Showreel.',
          th: 'คลิป Showreel ล่าสุดรวมผลงานปั้นโมเดล 3D, จัดแสง และแอนิเมชัน',
        },
      },
      {
        id: 'yt-compilation',
        src: 'https://www.youtube.com/embed/qSHoamK3hlg',
        mediaType: 'youtube',
        label: { en: 'Animation Compilation', th: 'Animation Compilation' },
        device: 'desktop',
        caption: {
          en: 'Character & Camera Animation compilation reel crafted in Maya & Blender.',
          th: 'รวมผลงาน Character & Camera Animation จาก Maya และ Blender',
        },
      },
    ],
  },
  {
    id: 'vr-wildlife',
    group: 'creative3d',
    tracks: ['uxui', 'systems'],
    category: { en: 'Senior Project • VR Educational Game', th: 'Senior Project • เกม VR เพื่อการศึกษา' },
    metricBadge: { en: '+36.2% Learning Gain • 4.35/5', th: 'คะแนนเพิ่ม +36.2% • พึงพอใจ 4.35/5' },
    title: {
      en: 'CampWild VR - Educational VR Game for Camping & Wildlife',
      th: 'CampWild VR - เกม VR เพื่อการเรียนรู้การตั้งค่ายพักแรมและสัตว์ป่า',
    },
    client: { en: 'KMITL Senior Project 1 & 2 (Grade A)', th: 'โครงงานปริญญานิพนธ์ 1 & 2 (สจล. - เกรด A)' },
    period: '2025 – 2026',
    role: { en: 'Co-Developer, VR UX/UI & System Designer', th: 'ผู้พัฒนาเกม VR, ออกแบบ UX/UI และระบบ' },
    platform: { en: 'VR (Unreal Engine 5 • Oculus Quest 2)', th: 'VR (Unreal Engine 5 • Oculus Quest 2)' },
    team: { en: '2-Person Senior Project Team + 30 Testers', th: 'ทีมปริญญานิพนธ์ 2 คน + ผู้ทดสอบจริง 30 คน' },
    summary: {
      en: 'Interactive VR educational game in Unreal Engine 5 for Oculus Quest 2 teaching Thai wildlife conservation and camping skills across 3 stages & 10 missions - validated with 30 testers (+36.2% pre/post learning gain, 4.35/5 satisfaction).',
      th: 'เกม Virtual Reality บน Unreal Engine 5 สำหรับ Oculus Quest 2 เพื่อให้ความรู้ด้านการตั้งค่ายพักแรมและการอนุรักษ์สัตว์ป่าไทยผ่าน 3 ด่าน 10 ภารกิจ ทดสอบจริงกับกลุ่มตัวอย่าง 30 คน (คะแนนหลังเล่นเพิ่ม +36.20%, ความพึงพอใจ 4.35/5.00, Senior Project 2 เกรด A)',
    },
    shortSummary: {
      en: 'UE5 VR game for Oculus Quest 2 (3 stages, 10 missions) validated with 30 testers (+36.2% score).',
      th: 'เกม VR การศึกษาบน UE5 (3 ด่าน 10 ภารกิจ) ทดสอบจริง 30 คน คะแนนความรู้เพิ่ม +36.2%',
    },
    tags: ['Unreal Engine 5', 'Blueprint', 'Oculus Quest 2', 'VR UX/UI', 'Pre/Post Testing (N=30)', 'Blender & Maya'],
    context: {
      en: 'Real-world forest and national park learning faces time, safety, and resource constraints. CampWild VR (ages 18–25 target audience) lets players experience hands-on camping preparation, Thai wildlife observation, and survival safely inside VR.',
      th: 'การเรียนรู้ภาคสนามในป่าและอุทยานแห่งชาติมีข้อจำกัดด้านเวลา ความปลอดภัย และทรัพยากร CampWild VR จึงจำลองประสบการณ์ตั้งค่ายพักแรมและการเรียนรู้สัตว์ป่าไทยสำหรับกลุ่มอายุ 18–25 ปี ผ่านการลงมือปฏิบัติจริงในโลกเสมือน',
    },
    challenge: {
      en: 'Designing intuitive spatial VR controls (Oculus Quest 2 controllers, backpack inventory, wildlife camera, compass navigation & in-game hint system) while optimizing 3D forest environments (manual lighting & LODs) and debugging VR physics & mission logic.',
      th: 'ออกแบบระบบควบคุมและ UI ในโลก VR ให้เข้าใจง่าย (Controller Oculus Quest 2, กระเป๋าเก็บอุปกรณ์, กล้องถ่ายภาพสัตว์ป่า, เข็มทิศ และระบบคำแนะนำ/ใบคำใบ้ซ่อนในด่าน) พร้อมจูนประสิทธิภาพฉากป่า (LOD & Manual Lighting) และแก้บั๊กฟิสิกส์/ภารกิจก่อกองไฟ',
    },
    methodology: {
      en: [
        'Research & Benchmarking: Studied Thai national park eco-tourism, camping practices, and wildlife data alongside competitive game analysis (Camping Simulator & Planet Zoo across 8 criteria).',
        '3-Stage / 10-Mission Level Design: Stage 1 Room (M1 Pack 4 gear categories + medicine, M2 Fire-starter choice) → Stage 2 Open Forest (M3–6 Photograph Wild Water Buffalo, Barking Deer & Wild Elephant, Wildlife Quiz, Find Campsite & Build Campfire) → Stage 3 Dense Forest (M7–10 Photograph Asiatic Black Bear, Wrinkled Hornbill & Tiger, Gear Quiz & Compass Escape).',
        'UE5 Development & Optimization: Built interactive systems in Unreal Engine 5 Blueprint with Autodesk Maya, Blender, Figma & Meta Quest Link, plus instant stage guidance and hidden discoverable hint notes.',
        'Empirical User Evaluation (N = 30, 19F / 11M, ages 18–25): Conducted 60-minute structured playtests (15m Stage 1, 30m Stage 2, 15m Stage 3) paired with 35-point Pre-Test / Post-Test knowledge exams and Google Form satisfaction surveys.',
      ],
      th: [
        'วิจัยและวิเคราะห์: ศึกษาข้อมูลสัตว์ป่าสงวน การตั้งค่ายพักแรม พฤติกรรมผู้เยี่ยมชมอุทยานฯ และวิเคราะห์เทียบเกมอ้างอิง (Camping Simulator และ Planet Zoo) 8 เกณฑ์',
        'ออกแบบ 3 ด่าน 10 ภารกิจ: ด่าน 1 ห้องพัก (จัดกระเป๋า 4 หมวด+ยา, เลือกอุปกรณ์จุดไฟ) → ด่าน 2 ป่าโปร่ง (ถ่ายภาพควายป่า เก้งธรรมดา ช้างป่า, ตอบคำถาม, หาจุดพักแรม, ก่อกองไฟ) → ด่าน 3 ป่าทึบ (ถ่ายภาพหมีควาย นกเงือกปากย่น เสือโคร่ง, ทดสอบใช้อุปกรณ์, ใช้เข็มทิศออกจากป่า)',
        'พัฒนาด้วย Unreal Engine 5 Blueprint, Autodesk Maya, Blender, Figma และ Meta Quest Link พร้อมระบบข้อแนะนำเข้าด่านและใบคำแนะนำที่ซ่อนให้ผู้เล่นค้นหาเอง',
        'ทดสอบและวัดผลจริง (N = 30 คน, หญิง 19 / ชาย 11, อายุ 18–25 ปี): ทดลองเล่นครบ 3 ด่าน (รวม 60 นาที) พร้อมทำแบบทดสอบความรู้ Pre-test / Post-test (เต็ม 35 คะแนน) และแบบประเมินความพึงพอใจ',
      ],
    },
    deliverables: {
      en: [
        'Playable CampWild VR build (Windows 10/11 64-bit + Oculus Quest 2 via Meta Quest Link)',
        'Full Gameplay Demo Video, 3-Stage Unreal Level Maps & Complete N=30 Evaluation Report.',
      ],
      th: [
        'เกม CampWild VR ที่เล่นได้จริงครบ 3 ด่าน 10 ภารกิจบน Windows 64-bit + Oculus Quest 2',
        'วิดีโอเดโมการเล่นจริง, แผนที่ด่าน UE5 และรายงานผลการทดลองวัดผลกับกลุ่มตัวอย่าง 30 คน',
      ],
    },
    impact: {
      en: [
        'Knowledge Gain (+36.20%): Post-test scores jumped from 16.90 ± 4.53 to 29.57 ± 3.44 out of 35 (+12.67 points average across N = 30).',
        'High User Satisfaction (4.35 / 5.00 overall): Learning Effectiveness 4.40/5, Atmosphere & Environment 4.40/5, Fun & Enjoyment 4.37/5 - far exceeding the 3.00/5 target.',
        'Earned Grade A in Senior Project 2 (Final-Year Semester GPS 4.00).',
      ],
      th: [
        'คะแนนความรู้เพิ่มขึ้น +36.20%: คะแนนเฉลี่ยพุ่งจาก Pre-test 16.90 ± 4.53 เป็น Post-test 29.57 ± 3.44 (เต็ม 35 คะแนน, เพิ่มขึ้น +12.67 คะแนน จากกลุ่มตัวอย่าง 30 คน)',
        'ความพึงพอใจรวมระดับ "มาก" 4.35 / 5.00: ประสิทธิภาพการเรียนรู้ 4.40/5, บรรยากาศและสภาพแวดล้อม 4.40/5, ความสนุกเพลิดเพลิน 4.37/5 (สูงกว่าเป้าหมาย 3/5)',
        'คว้าเกรด A วิชา Senior Project 2 (เกรดเฉลี่ยเทอมสุดท้าย 4.00)',
      ],
    },
    gallery: [
      {
        id: 'campwild-demo-video',
        src: './media/games/campwild-vr-demo.mp4',
        mediaType: 'video',
        silent: true,
        label: { en: 'Gameplay Demo (Video)', th: 'วิดีโอเดโมการเล่น' },
        device: 'desktop',
        caption: {
          en: 'Live Unreal Engine 5 VR gameplay demo showcasing interactive exploration, gear handling, and wildlife scenes.',
          th: 'วิดีโอเดโมการเล่นจริงใน Unreal Engine 5 แสดงระบบโต้ตอบ การเตรียมอุปกรณ์ และฉากสำรวจป่า',
        },
      },
      {
        id: 'campwild-open-forest',
        src: './images/games/campwild-open-forest.png',
        mediaType: 'image',
        label: { en: 'Stage 2: Open Forest UI', th: 'ด่าน 2: ป่าโปร่ง & ควิซ' },
        device: 'desktop',
        caption: {
          en: 'Stage 2 Open Forest in-game VR quiz board testing Thai wildlife conservation status with wild water buffalo in the background.',
          th: 'ภาพในเกมด่าน 2 เขตป่าโปร่ง แสดงกระดานคำถามสถานะอนุรักษ์สัตว์ป่าพร้อมฝูงควายป่าในฉากหลัง',
        },
      },
      {
        id: 'campwild-dense-forest',
        src: './images/games/campwild-dense-forest.png',
        mediaType: 'image',
        label: { en: 'Stage 3: Dense Forest', th: 'ด่าน 3: ป่าทึบ' },
        device: 'desktop',
        caption: {
          en: 'Stage 3 Dense Forest real-time lighting & foliage atmosphere built for compass navigation and wildlife missions.',
          th: 'บรรยากาศแสงเงาและต้นไม้ในด่าน 3 เขตป่าทึบ สำหรับภารกิจสำรวจสัตว์ป่าและใช้เข็มทิศหาทางออก',
        },
      },
      {
        id: 'campwild-room',
        src: './images/games/campwild-room.png',
        mediaType: 'image',
        label: { en: 'Stage 1: Prep Room', th: 'ด่าน 1: ห้องพัก' },
        device: 'desktop',
        caption: {
          en: 'Top-down view of Stage 1 Room where players pack 4 camping gear categories, medicine, and select fire-starting tools.',
          th: 'มุมมองด้านบนของด่าน 1 ห้องพัก สำหรับภารกิจจัดกระเป๋า 4 หมวด เก็บยา และเลือกอุปกรณ์จุดไฟ',
        },
      },
      {
        id: 'campwild-map-open',
        src: './images/games/campwild-map-open.png',
        mediaType: 'image',
        label: { en: 'Level Map & Zones', th: 'แผนที่โซนสัตว์ป่า' },
        device: 'desktop',
        caption: {
          en: 'UE5 level zoning separating player exploration zone (blue) from Wild Water Buffalo, Barking Deer, and Wild Elephant habitats (red).',
          th: 'การแบ่งโซนแผนที่ใน UE5 ระหว่างเขตเดินสำรวจของผู้เล่น (สีน้ำเงิน) และเขตสัตว์ป่า 3 ชนิด (สีแดง)',
        },
      },
    ],
  },
  {
    id: 'doddidough-game',
    group: 'creative3d',
    tracks: ['systems'],
    category: { en: '3D Platformer Game', th: 'เกม 3D Platformer' },
    metricBadge: { en: 'Unreal Blueprint • Video Demo', th: 'UE Blueprint • มีวิดีโอเดโม' },
    title: {
      en: 'DoddiDough - 3D Bakery Escape Platformer',
      th: 'DoddiDough - เกม 3D Platformer โดนัทหนีออกจากร้านเบเกอรี่',
    },
    client: { en: 'KMITL Game Development (Group 9: 5-Angies)', th: 'โปรเจกต์พัฒนาเกม สจล. (ทีม 5-Angies)' },
    period: '2024',
    role: { en: 'Level Designer & Unreal Blueprint Developer', th: 'ออกแบบด่าน & เขียน Blueprint (UE)' },
    platform: { en: 'PC 3D Game (Unreal Engine)', th: 'เกม 3D บน PC (Unreal Engine)' },
    team: { en: '5-Person Team (Group 9: 5-Angies)', th: 'ทีมพัฒนาเกม 5 คน (กลุ่ม 5-Angies)' },
    summary: {
      en: 'Playful single-player 3D PC platformer built with Unreal Engine, Blender & Maya where a little donut escapes a giant bakery - owned design & Blueprint physics for 3 signature obstacle stages.',
      th: 'เกม 3D Platformer บน PC พัฒนาด้วย Unreal Engine, Blender และ Maya สวมบทโดนัทหนีออกจากครัวเบเกอรี่ขนาดยักษ์ โดยรับผิดชอบออกแบบและเขียน Blueprint ฟิสิกส์หลัก 3 ด่าน',
    },
    shortSummary: {
      en: '3D PC bakery escape platformer in Unreal Engine - owned level design & Blueprint physics for 3 stages.',
      th: 'เกม 3D Platformer โดนัทหนีออกจากครัวเบเกอรี่ ออกแบบด่านและเขียนฟิสิกส์ Blueprint 3 ด่าน',
    },
    tags: ['Unreal Engine', 'Blueprint Physics', 'Level Design', 'Blender & Maya', 'Playtesting'],
    context: {
      en: 'Built as a 5-person team game development project themed around a vibrant oversized bakery kitchen filled with dynamic kitchenware hazards.',
      th: 'โปรเจกต์ทีม 5 คนธีม "เบเกอรี่สุดหรรษา" จำลองครัวขนาดยักษ์ที่มีอุปสรรคจากเครื่องครัวและวัตถุดิบทำขนม 8 ด่านต่อเนื่อง',
    },
    challenge: {
      en: 'Crafting responsive, hilarious platforming physics (slippery sink & soap momentum vs. deadly hot grill timing) while keeping difficulty fun through iterative playtesting.',
      th: 'จูนฟิสิกส์ของแต่ละด่าน (แรงเสียดทานพื้นลื่นในอ่างล้างจาน/สบู่ และจังหวะกระโดดข้ามตะแกรงร้อน) ให้ท้าทายและสนุกผ่านการทดลองเล่นซ้ำ',
    },
    methodology: {
      en: [
        'Owned 3 core obstacle levels end-to-end: Hot Grill (BP_Grid), Slippery Dish Sink (BP_DishSlippery), and Slippery Soap Zone.',
        'Programmed Unreal Blueprint Event Graphs dynamically modifying Character Movement Ground Friction (8.0 → 0.0) and Braking Deceleration Walking (2000 → 300) plus collision emitters & respawn triggers.',
        'Collaborated across map blockout, dynamic platforms, stamina/topping boosts, and checkpoint pacing.',
      ],
      th: [
        'รับผิดชอบพัฒนา 3 ด่านหลัก: ด่านตะแกรงแสนร้อน (BP_Grid), ด่านอ่างล้างจานลื่นปรื๊ด และด่านสบู่ลื่นปรื๊ดปร๊าด (BP_DishSlippery)',
        'เขียน Blueprint Event Graph ปรับค่า Ground Friction (8.0 → 0.0) และ Braking Deceleration (2000 → 300) แบบเรียลไทม์ พร้อม Collision Trigger และ Particle Emitter',
        'ทำงานร่วมกับทีมศิลป์และโปรแกรมเมอร์ด้าน Map Layout, Stamina, Checkpoints และ Playtesting',
      ],
    },
    deliverables: {
      en: ['Playable PC 3D Platformer (Unreal Engine)', 'Gameplay Demo Video, 8-Stage Level Map & Blueprint Physics Systems.'],
      th: ['เกม 3D Platformer เล่นได้จริงบน PC', 'วิดีโอเดโมการเล่นจริง, ผังแผนที่ 8 ด่าน และระบบฟิสิกส์ Unreal Blueprint'],
    },
    impact: {
      en: ['Shipped a cohesive, vibrant 8-obstacle playable platformer demonstrating hands-on Unreal Blueprint scripting and physics tuning.'],
      th: ['ส่งมอบเกมที่เล่นจบได้จริงครบ 8 ด่าน พิสูจน์ทักษะ Level Design และการเขียนลอจิก Unreal Blueprint'],
    },
    links: [
      {
        label: { en: 'Watch Demo on YouTube', th: 'ดูวิดีโอเดโมบน YouTube' },
        href: 'https://youtu.be/mm6aPTacAqA',
        primary: true,
      },
    ],
    gallery: [
      {
        id: 'doddidough-demo-video',
        src: 'https://www.youtube.com/embed/mm6aPTacAqA?mute=1&rel=0',
        mediaType: 'youtube',
        silent: true,
        label: { en: 'Gameplay Demo (YouTube)', th: 'วิดีโอเดโมการเล่น (YouTube)' },
        device: 'desktop',
        caption: {
          en: 'DoddiDough live gameplay demo showing the giant bakery escape, jumping physics, slippery sink/soap zones & hot grill obstacles.',
          th: 'วิดีโอเดโมเกม DoddiDough โชว์การวิ่งกระโดดหนีออกจากครัวเบเกอรี่ ฟิสิกส์พื้นลื่น และอุปสรรคด่านตะแกรงร้อน',
        },
      },
    ],
  },
  {
    id: 'peter-bubble-vr',
    group: 'creative3d',
    tracks: ['uxui'],
    category: { en: 'Award-Winning • VR Game Jam', th: 'คว้ารางวัล • เกมยิง VR (Game Jam)' },
    metricBadge: { en: '2nd Runner-Up & Popular Vote', th: 'รองชนะเลิศอันดับ 2 & Popular Vote' },
    title: {
      en: 'Peter Bubble - VR Boba Shooter (GGJ 2025)',
      th: 'Peter Bubble - เกมยิงไข่มุกในโลก VR (GGJ 2025)',
    },
    client: { en: 'Global Game Jam & Asset Jam 2025 (ANT x DPU Jamsite)', th: 'Global Game Jam & Asset Jam 2025 (ANT x DPU Jamsite)' },
    period: 'Jan 24–26, 2025',
    role: { en: '3D Art Team (#256fes Low-Poly Assets)', th: 'ทีม Art ปั้นโมเดล 3D (#256fes Low-Poly)' },
    platform: { en: 'VR (Oculus Quest 3 • Unreal Engine)', th: 'VR (Oculus Quest 3 • Unreal Engine)' },
    team: { en: '48-Hour Game Jam Multidisciplinary Team', th: 'ทีมแข่ง Game Jam 48 ชม. (Programmer + Art)' },
    summary: {
      en: 'Won 2nd Runner-Up & Popular Vote out of 24 teams (150 participants) at Global Game Jam & Asset Jam 2025 (ANT x DPU): fast-paced Oculus Quest 3 VR Action Shooter defending a bubble tea shop from cockroach waves using tapioca pearls under strict #256fes low-poly constraints.',
      th: 'คว้ารางวัลรองชนะเลิศอันดับที่ 2 และรางวัล Popular Vote จากผู้เข้าแข่งขัน 150 คน (24 ทีม) ในงาน Global Game Jam & Asset Jam 2025 (ANT x DPU) - เกม Action Shooter บน Oculus Quest 3 สวมบทเจ้าของร้านชานมไข่มุกใช้เม็ดไข่มุกยิงแมลงสาบปกป้องร้านทำคะแนนสูงสุดภายในเวลาที่กำหนด ภายใต้เกณฑ์ #256fes',
    },
    shortSummary: {
      en: 'Award-winning Quest 3 VR shooter (GGJ 2025, 24 teams) built with #256fes ultra-low-poly 3D art.',
      th: 'เกมยิง VR บน Quest 3 คว้า 2 รางวัล (GGJ 2025 จาก 24 ทีม) ปั้นฉากและพร็อพ Low-Poly #256fes',
    },
    tags: ['2nd Runner-Up (24 Teams)', 'Popular Vote', 'Oculus Quest 3', 'Unreal Engine', '#256fes Low-Poly', '3D Props'],
    context: {
      en: 'Built during the 48-hour Global Game Jam & Asset Jam 2025 (ANT x DPU Jamsite, Jan 24–26, 2025 at Dhurakij Pundit University) competing among 150 developers across 24 teams - interpreting the "Bubble" theme into an immersive Thai-inspired VR boba shop defense game with 3 diversifiers (#256fes, Melodic, Documentary).',
      th: 'พัฒนาในงานแข่งขัน Global Game Jam & Asset Jam 2025 (ANT x DPU Jamsite วันที่ 24–26 มกราคม 2568 ณ มหาวิทยาลัยธุรกิจบัณฑิตย์) ท่ามกลางผู้เข้าแข่งขัน 150 คน จาก 24 ทีม โดยตีความโจทย์ "Bubble" เป็นร้านชานมไข่มุกในโลก VR ที่สมจริง พร้อมทำตาม Diversifiers 3 ข้อ (#256fes, Melodic, Documentary)',
    },
    challenge: {
      en: 'Modeling charming, instantly readable bubble-tea shop props, counters, blenders, menus, and cockroach enemies under strict #256fes limits (max 256 triangles & 256×256px textures per asset) to maintain steady Quest 3 VR framerates.',
      th: 'ต้องปั้นโมเดล 3D อุปกรณ์ร้านชานมไข่มุก (เครื่องปั่น เครื่องชง ถังชา เมนู แก้วไข่มุก) และแมลงสาบให้สวยงามน่ารักภายใต้ข้อจำกัดไม่เกิน 256 สามเหลี่ยมและ Texture 256×256px เพื่อเฟรมเรตลื่นบน Quest 3',
    },
    methodology: {
      en: [
        'Art Team Production: Modeled and textured #256fes ultra-low-poly 3D boba shop props, environment assets, and cockroach models.',
        'Cross-Disciplinary Game Jam Sprint: Collaborated live with Dev Team (4) and Design Team (3) across 3 escalating difficulty waves, adaptive Melodic audio, and VR leaderboard testing.',
      ],
      th: [
        'ทีม Art: ปั้นและทำ Texture โมเดล Low-Poly ตามเกณฑ์ #256fes (≤256 tris, ≤256×256px) สำหรับฉากร้านชานม อุปกรณ์ และศัตรู',
        'ทำงานร่วมกับทีม Dev (4 คน) และ Design (3 คน) แบบ Sprint ในงาน Game Jam ครบทั้ง 3 เวฟ, ดนตรีไล่จังหวะ Melodic และระบบ Leaderboard บน VR',
      ],
    },
    deliverables: {
      en: ['Award-winning Oculus Quest 3 VR Game Jam build', 'Live VR Gameplay Demo Video & #256fes Low-Poly 3D Asset Library.'],
      th: ['เกม VR บน Oculus Quest 3 ที่คว้า 2 รางวัลจากการแข่งขันจริง', 'วิดีโอเดโมการเล่นจริงใน VR และคลังโมเดล Low-Poly #256fes'],
    },
    impact: {
      en: [
        'Won 2nd Runner-Up Award and Popular Vote Award out of 24 teams (150 participants) at Global Game Jam & Asset Jam 2025 ANT x DPU Jamsite (Jan 24–26, 2025).',
        'Featured on the IT KMITL official achievement board for standout creative game concept and Oculus Quest 3 VR execution under tight hackathon deadlines.',
      ],
      th: [
        'คว้ารางวัลรองชนะเลิศอันดับที่ 2 และรางวัล Popular Vote จากผู้เข้าแข่งขันทั้งหมด 150 คน (24 ทีม) ในงาน Global Game Jam & Asset Jam 2025 ANT x DPU Jamsite (24–26 ม.ค. 2568)',
        'ได้รับคัดเลือกเผยแพร่บนหน้าผลงานความสำเร็จคณะไอที สจล. จากความโดดเด่นด้านแนวคิดสร้างสรรค์และประสบการณ์ VR ที่สมจริงภายใต้เวลาจำกัด',
      ],
    },
    links: [
      {
        label: { en: 'IT KMITL Award Announcement', th: 'ข่าวประกาศรางวัล (IT KMITL)' },
        href: 'https://www2.it.kmitl.ac.th/th/achievement/19062/',
        primary: true,
      },
      {
        label: { en: 'Watch Demo on YouTube', th: 'ดูวิดีโอเดโมบน YouTube' },
        href: 'https://youtu.be/8Pk86D6b7Jc',
      },
    ],
    gallery: [
      {
        id: 'peter-bubble-demo-video',
        src: 'https://www.youtube.com/embed/8Pk86D6b7Jc?mute=1&rel=0',
        mediaType: 'youtube',
        silent: true,
        label: { en: 'VR Gameplay Demo (YouTube)', th: 'วิดีโอเดโม VR (YouTube)' },
        device: 'desktop',
        caption: {
          en: 'Live VR gameplay footage of Peter Bubble showing the low-poly boba shop environment, straw pearl shooting & enemy waves.',
          th: 'วิดีโอเดโมการเล่นจริงของ Peter Bubble บน VR โชว์ฉากร้านชานม Low-Poly ระบบเป่าไข่มุก และฝูงศัตรู',
        },
      },
    ],
  },
];

export const SKILL_PILLARS = [
  {
    id: 'research',
    title: { en: 'UX Research & Strategy', th: 'UX Research & กลยุทธ์' },
    items: [
      'Design Thinking',
      'Competitor Benchmarking',
      'User Interviews & Qualitative Analysis',
      'Heuristic Audits',
      'Usability Testing (Think-Aloud)',
      'Red Team Critique (Steelman)',
      'User Personas',
      'Journey Mapping',
      'Narrative Commerce',
      'E-E-A-T Strategy',
    ],
  },
  {
    id: 'design',
    title: { en: 'UI Design & Product Systems', th: 'UI Design & ระบบออกแบบ' },
    items: [
      'Figma (Auto-layout & Variants)',
      'Design Systems',
      'Modular Page Architecture',
      'Wireframing & Prototyping',
      'Information Architecture (IA)',
      'Responsive Desktop & Mobile UI',
      'Pre-sales Pitch Decks',
      'Safe Zone Masking',
      '3D Modeling & Animation',
    ],
  },
  {
    id: 'frontend',
    title: { en: 'Frontend, Shopify Liquid & Data', th: 'Frontend, โค้ด Shopify Liquid & ฐานข้อมูล' },
    items: [
      'Shopify Liquid (OS 2.0)',
      '{% schema %} Merchant Blocks',
      'CSS Variables',
      'Shopify AJAX Cart',
      'React.js',
      'TypeScript',
      'HTML5 / CSS3',
      'JavaScript (ES6+)',
      'Vite',
      'Bootstrap 5',
      'Chart.js',
      'SQL / PostgreSQL',
      'Python',
      'C',
      'Google AppSheet',
      'Relational Data Modeling',
      'AWS Cloud Architecture',
    ],
  },
  {
    id: 'platform',
    title: { en: 'E-Commerce Ops, QA & Collaboration', th: 'E-Commerce, QA & การทำงานร่วมทีม' },
    items: [
      'Shopify Theme Editor POC',
      'Shopify Sidekick AI',
      'Shopify Apps',
      'Matrixify Data Workflows',
      'Staging QA & Feedback Trackers',
      'Similarweb Analytics',
      'Developer Handoff',
      'Lean Startup Experimentation',
      'Concierge MVP',
      'Stakeholder Presentation (TH / EN)',
    ],
  },
];

export const TOOL_STACK = [
  { name: 'Figma', category: 'Design' },
  { name: 'Shopify OS 2.0', category: 'E-Commerce' },
  { name: 'Shopify Sidekick AI', category: 'E-Commerce' },
  { name: 'Matrixify', category: 'E-Commerce' },
  { name: 'Similarweb', category: 'Research' },
  { name: 'VS Code', category: 'Dev' },
  { name: 'Git & GitHub', category: 'Dev' },
  { name: 'Vercel', category: 'Dev' },
  { name: 'Netlify', category: 'Dev' },
  { name: 'Google AppSheet', category: 'Apps' },
  { name: 'Google Sheets', category: 'Apps' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Blender', category: '3D' },
  { name: 'Autodesk Maya', category: '3D' },
  { name: 'Substance Painter', category: '3D' },
  { name: 'Unreal Engine 5', category: '3D / VR' },
  { name: 'Adobe Photoshop', category: 'Creative' },
  { name: 'Adobe Illustrator', category: 'Creative' },
  { name: 'Notion', category: 'Workflow' },
  { name: 'Google Workspace', category: 'Workflow' },
];

export const EXPERIENCE_TIMELINE = [
  {
    period: 'Aug 2026 – Dec 2026',
    role: { en: 'UX/UI Designer Intern', th: 'UX/UI Designer Intern' },
    org: { en: 'aCommerce (Professional Services Team)', th: 'บริษัท aCommerce (ทีม Professional Services)' },
    highlights: {
      en: [
        'Delivered 3 flagship commercial/internal initiatives (Shopify Core Theme, Flamingo APAC D2C Pre-sales & POC, PS Digital Identity 76.2% adoption).',
        'Executed 4 research & QA tracks (67-slide EMI B2B Audit, Le Creuset 59-step Staging QA, Abbott 1.5hr Think-Aloud Testing, Steelman Red Team Critique).',
      ],
      th: [
        'รับผิดชอบ 3 โปรเจกต์หลัก (Shopify Core Theme, กลยุทธ์ D2C และ Shopify POC สำหรับ Flamingo APAC, และ PS Digital Identity ที่มีอัตราใช้งาน 76.2%)',
        'ดำเนินงานวิจัยและ QA 4 ชิ้น (EMI B2B Audit 67 สไลด์, Le Creuset Staging QA 59 สเต็ป, Abbott Usability Testing 1.5 ชม., และ Steelman Red Team Critique)',
      ],
    },
    highlightsNda: {
      en: [
        'Delivered 3 flagship commercial/internal initiatives (Shopify Core Theme, Regional Watch Distributor D2C Pre-sales & POC, PS Digital Identity 76.2% adoption).',
        'Executed 4 research & QA tracks (67-slide Enterprise B2B Audit, 59-step Premium Retail Staging QA, 1.5hr Healthcare Subscription Usability Test, Steelman Red Team Critique).',
      ],
      th: [
        'รับผิดชอบ 3 โปรเจกต์หลัก (Shopify Core Theme, กลยุทธ์ D2C และ Shopify POC สำหรับแบรนด์นาฬิการะดับภูมิภาค, และ PS Digital Identity ที่มีอัตราใช้งาน 76.2%)',
        'ดำเนินงานวิจัยและ QA 4 ชิ้น (B2B Platform Audit 67 สไลด์, Staging QA แบรนด์พรีเมียม 59 สเต็ป, Usability Testing แบรนด์สุขภาพ 1.5 ชม., และ Steelman Red Team Critique)',
      ],
    },
  },
  {
    period: '2023 – Present',
    role: { en: 'Robotics Teaching Assistant (Part-time)', th: 'ผู้ช่วยสอนวิชาหุ่นยนต์และตรรกะโปรแกรม (Part-time)' },
    org: { en: "ROBOT'S CHILD & SMART VEDIC MATHS", th: "ROBOT'S CHILD & SMART VEDIC MATHS" },
    highlights: {
      en: [
        'Taught children basic robotics, LEGO construction, and programming logic through hands-on workshops.',
        'Adapted explanations and activities to diverse learning styles and levels, sharpening communication, empathy, and problem-solving.',
      ],
      th: [
        'สอนพื้นฐานหุ่นยนต์ การต่อ LEGO เชิงวิศวกรรม และตรรกะการเขียนโปรแกรมผ่านกิจกรรมลงมือทำจริง',
        'ปรับวิธีอธิบายและกิจกรรมให้เหมาะกับผู้เรียนแต่ละช่วงวัย พัฒนาทักษะการสื่อสาร ความเข้าใจผู้ใช้ และการแก้ปัญหาเฉพาะหน้า',
      ],
    },
  },
];

export const EDUCATION_INFO = {
  period: '2022 – 2026',
  degree: {
    en: 'Bachelor of Science in Information Technology',
    th: 'วิทยาศาสตรบัณฑิต สาขาเทคโนโลยีสารสนเทศ (B.Sc. IT)',
  },
  university: {
    en: "King Mongkut's Institute of Technology Ladkrabang (KMITL)",
    th: 'สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (สจล.)',
  },
  major: {
    en: 'Major: Multimedia and Game Development',
    th: 'แขนงวิชาการพัฒนาสื่อประสมและเกม (Multimedia & Game Development)',
  },
  gpa: '2.91',
  courses: {
    en: [
      'Award: 2nd Runner-Up & Popular Vote (out of 24 teams / 150 participants) - Global Game Jam & Asset Jam 2025 ANT x DPU (Peter Bubble VR)',
      'Final-Year Momentum: Semester GPS 3.83 (Year 4 Sem 1) & 4.00 (Year 4 Sem 2)',
      'Grade A: Web Design, Visual Design Fundamentals for Interactive Media, Senior Project 2, English for Work Preparation',
      'Grade B+: Human Interface Design, Data Structures & Algorithms, Computer Graphics & Animation, MIS',
    ],
    th: [
      'รางวัล: รองชนะเลิศอันดับ 2 และ Popular Vote (จาก 24 ทีม / 150 คน) - Global Game Jam & Asset Jam 2025 ANT x DPU (Peter Bubble VR)',
      'พัฒนาการโดดเด่นในปีสุดท้าย: เกรดเฉลี่ยเทอม 3.83 และ 4.00',
      'เกรด A: Web Design, Visual Design Fundamentals, Senior Project 2, English for Work Preparation',
      'เกรด B+: Human Interface Design, Data Structures & Algorithms, Computer Graphics & Animation, MIS',
    ],
  },
};
