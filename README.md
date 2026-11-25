# Nitchanant Kimkethanom — Interactive Portfolio Website

เว็บพอร์ตโฟลิโอแบบ Interactive สร้างด้วย **React 19 + TypeScript + Vite + Custom CSS Design Tokens** พร้อมฟีเจอร์เด่น:
- **Bilingual Toggle (EN / TH)** สลับภาษาอังกฤษ-ไทยทั้งเว็บ
- **NDA Mode Toggle** สลับซ่อนชื่อแบรนด์ลูกค้าจริง ↔ ชื่อแบบ Anonymized ในคลิกเดียว
- **Light / Dark Mode** พร้อมบันทึกค่าใน `localStorage`
- **Role Lens Filter** กรองผลงานตามสายงาน (`All`, `UX/UI & Research`, `Frontend & Web`, `Business Systems & QA`)
- **Interactive Case Study Modals** ครบทั้ง 10 ผลงาน (Group 1 Flagship aCommerce, Group 2 UX Research/Audit/QA, Group 3 Web Dev & AppSheet Systems)
- **Interactive Design-to-Code Token Lab** ให้ Recruiter ทดลองปรับ Design Tokens และดู CSS แบบเรียลไทม์
- **Direct Resume Downloads** เชื่อมต่อกับไฟล์ PDF ใน `public/resumes/`

## วิธีรันดูบนเครื่อง (Local Development)
เปิด PowerShell ในโฟลเดอร์นี้ (`D:\Bell\for apply work\05_Portfolio_Website`) แล้วรัน:
```powershell
npm.cmd run dev
```
จากนั้นเปิดเบราว์เซอร์ไปที่ `http://localhost:5173`

## วิธี Build ไฟล์สำหรับเผยแพร่ (Production Build)
```powershell
npm.cmd run build
```
ไฟล์พร้อมอัปโหลดจะอยู่ในโฟลเดอร์ `dist/`

## วิธี Deploy ออนไลน์ฟรี (แนะนำ)
### วิธีที่ 1: Vercel (ง่ายและเร็วที่สุด)
1. อัปโหลดโฟลเดอร์ `05_Portfolio_Website` ขึ้น GitHub Repository ของคุณ
2. เข้า [vercel.com](https://vercel.com) → **Add New Project** → เลือก Repository
3. Framework Preset จะตรวจจับเป็น **Vite** อัตโนมัติ → กด **Deploy**
4. นำลิงก์ที่ได้ (เช่น `https://nitchanant-portfolio.vercel.app`) ไปใส่ใน `webPortfolioUrl` ของไฟล์ `01_Resumes_and_CV/generator/profile-data.json` แล้วรัน `node build-documents.mjs` เพื่ออัปเดตลิงก์ลงทุกเรซูเม่!

### วิธีที่ 2: Netlify Drag & Drop (ไม่ต้องใช้ Git)
1. รัน `npm.cmd run build`
2. เข้า [app.netlify.com/drop](https://app.netlify.com/drop) แล้วลากโฟลเดอร์ `dist/` ไปวางได้เลย
