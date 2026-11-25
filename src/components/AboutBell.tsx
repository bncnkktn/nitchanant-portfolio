import { Lang } from '../data/portfolioData';
import { Reveal } from './Reveal';

interface AboutBellProps {
  lang: Lang;
}

export function AboutBell({ lang }: AboutBellProps) {
  return (
    <section id="about" className="about-bell-section">
      <div className="container">
        <Reveal>
          <div className="about-bell-grid">
            {/* Left: Tilted Portrait with Offset Pastel Backing & Hand-Drawn Die-Cut Stickers */}
            <div className="about-photo-stage">
              <div className="about-photo-offset" aria-hidden="true" />
              <div className="about-photo-card">
                <img
                  src="./images/hero-portrait.jpg"
                  alt="Nitchanant (Bell) Kimkethanom"
                  className="about-photo-img"
                />
              </div>

              {/* Top-Right Butter-Yellow Hand-Drawn Potted Flower Sticker */}
              <svg
                className="about-sticker about-st-flower"
                viewBox="0 0 74 96"
                width="68"
                height="88"
                fill="none"
                aria-hidden="true"
              >
                {/* Thick Sticker Backing Outline */}
                <g stroke="#FFFDF9" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round">
                  <circle cx="37" cy="24" r="14" fill="#FFE885" />
                  <path d="M37 38 V54" />
                  <path d="M23 56 C23 48, 51 48, 51 56 L54 74 C54 84, 20 84, 20 74 Z" fill="#FFE885" />
                </g>
                {/* Yellow Flower Petals */}
                <circle cx="37" cy="14" r="7.5" fill="#FFE885" stroke="#3D261F" strokeWidth="2.2" />
                <circle cx="46.5" cy="21" r="7.5" fill="#FFE885" stroke="#3D261F" strokeWidth="2.2" />
                <circle cx="43" cy="31" r="7.5" fill="#FFE885" stroke="#3D261F" strokeWidth="2.2" />
                <circle cx="31" cy="31" r="7.5" fill="#FFE885" stroke="#3D261F" strokeWidth="2.2" />
                <circle cx="27.5" cy="21" r="7.5" fill="#FFE885" stroke="#3D261F" strokeWidth="2.2" />
                <circle cx="37" cy="23.5" r="6" fill="#FFA89B" stroke="#3D261F" strokeWidth="2.2" />
                {/* Stem & Tiny Leaf */}
                <path d="M37 36 V54" stroke="#3D261F" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M37 47 C43 44, 48 45, 49 41 C44 40, 40 42, 37 47 Z" fill="#A8F2C8" stroke="#3D261F" strokeWidth="2" strokeLinejoin="round" />
                {/* Cute Chubby Vase */}
                <path
                  d="M27 54 H47 C48 59, 54 63, 53 74 C52 82, 22 82, 21 74 C20 63, 26 59, 27 54 Z"
                  fill="#FFE885"
                  stroke="#3D261F"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                />
                <ellipse cx="37" cy="54" rx="10" ry="2.6" fill="#FFF3B0" stroke="#3D261F" strokeWidth="2" />
              </svg>

              {/* Bottom-Left Rosy-Pink Sketch Kitty Sticker */}
              <svg
                className="about-sticker about-st-kitty"
                viewBox="0 0 82 94"
                width="74"
                height="86"
                fill="none"
                aria-hidden="true"
              >
                {/* Thick Sticker Backing Outline */}
                <g stroke="#FFFDF9" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round">
                  <path d="M22 30 L18 14 L33 22 C38 20, 44 20, 49 22 L64 14 L60 30 C64 36, 65 44, 60 51 C63 60, 62 74, 54 80 H28 C20 74, 19 60, 22 51 C17 44, 18 36, 22 30 Z" fill="#FFD1DA" />
                </g>
                {/* Tail */}
                <path
                  d="M57 72 C70 70, 74 56, 67 49"
                  stroke="#C44D6D"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                {/* Kitty Body */}
                <path
                  d="M26 50 C21 58, 21 74, 29 80 H53 C61 74, 61 58, 56 50 Z"
                  fill="#FFD5DF"
                  stroke="#C44D6D"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                />
                {/* Kitty Head & Ears */}
                <path
                  d="M22 31 L19 15 L33 23 C38 21, 44 21, 49 23 L63 15 L60 31 C64 38, 62 49, 52 52 C45 54, 37 54, 30 52 C20 49, 18 38, 22 31 Z"
                  fill="#FFE3EA"
                  stroke="#C44D6D"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                />
                {/* Face Details */}
                <circle cx="33" cy="37" r="2.3" fill="#C44D6D" />
                <circle cx="49" cy="37" r="2.3" fill="#C44D6D" />
                <ellipse cx="28" cy="41" rx="3.2" ry="1.8" fill="#FFA4BA" />
                <ellipse cx="54" cy="41" rx="3.2" ry="1.8" fill="#FFA4BA" />
                <path d="M38 41 Q41 44 44 41" stroke="#C44D6D" strokeWidth="2" strokeLinecap="round" />
                {/* Little Paws holding a tiny heart */}
                <circle cx="34" cy="64" r="4" fill="#FFE3EA" stroke="#C44D6D" strokeWidth="2" />
                <circle cx="48" cy="64" r="4" fill="#FFE3EA" stroke="#C44D6D" strokeWidth="2" />
                <path
                  d="M41 68 C41 68, 35 64, 35 60.5 C35 58.8, 36.5 57.5, 38.2 57.5 C39.5 57.5, 40.5 58.3, 41 59.3 C41.5 58.3, 42.5 57.5, 43.8 57.5 C45.5 57.5, 47 58.8, 47 60.5 C47 64, 41 68, 41 68 Z"
                  fill="#FF7B9C"
                />
              </svg>
            </div>

            {/* Right: Warm Personal Bio Copy */}
            <div className="about-bell-copy">
              <h2 className="about-bell-heading">
                {lang === 'en' ? (
                  <>
                    Hi!
                    <br />
                    I’m <span>Bell</span>
                  </>
                ) : (
                  <>
                    สวัสดีค่ะ!
                    <br />
                    เบลล์ <span>ณิชนันท์</span>
                  </>
                )}
              </h2>

              <div className="about-bell-paragraphs">
                {lang === 'en' ? (
                  <>
                    <p>
                      I’m an Information Technology graduate from KMITL and a UX/UI Designer &amp; Shopify Theme Builder intern at aCommerce, focused on crafting digital products with clarity, warmth, and real business impact.
                    </p>
                    <p>
                      My work blends thoughtful e-commerce research, modular Figma design systems, and live production code (Shopify OS 2.0 Liquid, React, TypeScript) - with a soft spot for tiny micro-interactions that make interfaces feel genuinely human.
                    </p>
                    <p>
                      Outside of UX &amp; frontend, my roots in 3D/VR game development (Global Game Jam 2025 winner) and teaching kids LEGO robotics keep me curious, playful, and always excited to turn complex ideas into something intuitive.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      เบลล์เป็นบัณฑิตสาขาเทคโนโลยีสารสนเทศ สจล. และนักศึกษาฝึกงานตำแหน่ง UX/UI Designer &amp; Shopify Theme Builder ที่ aCommerce ที่ชอบออกแบบผลิตภัณฑ์ดิจิทัลให้ใช้งานง่าย มีคาแรกเตอร์ และตอบโจทย์ทั้งผู้ใช้และธุรกิจค่ะ
                    </p>
                    <p>
                      สไตล์การทำงานของเบลล์คือการเชื่อม UX Research, ระบบดีไซน์บน Figma และโค้ดที่ใช้งานจริง (Shopify OS 2.0 Liquid, React, TypeScript) เข้าด้วยกัน พร้อมใส่ใจดีเทลเล็กๆ ที่ทำให้หน้าเว็บดูมีชีวิตและน่าใช้งาน
                    </p>
                    <p>
                      นอกจากงานเว็บและ UX/UI เบลล์ยังอินกับงาน 3D/VR (เจ้าของรางวัล Global Game Jam 2025) และสอนหุ่นยนต์ LEGO ให้น้องๆ ในวันหยุด ทำให้ติดนิสัยชอบย่อยเรื่องซับซ้อนให้เข้าใจง่ายและสนุกอยู่เสมอค่ะ
                    </p>
                  </>
                )}
              </div>

              <div className="about-bell-chips">
                <span className="about-chip chip-peach">
                  {lang === 'en' ? 'KMITL IT · GPA 2.91' : 'ไอที สจล. · GPA 2.91'}
                </span>
                <span className="about-chip chip-butter">
                  {lang === 'en' ? 'aCommerce Intern' : 'ฝึกงาน aCommerce'}
                </span>
                <span className="about-chip chip-lilac">
                  {lang === 'en' ? 'UX/UI · Shopify · 3D/VR' : 'UX/UI · Shopify · 3D/VR'}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
