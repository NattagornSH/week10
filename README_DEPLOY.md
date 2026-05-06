# 🚀 Deploy to Vercel

## วิธี Deploy

### 1. ผ่าน Vercel Dashboard (แนะนำ)

1. ไปที่ [vercel.com](https://vercel.com)
2. Login ด้วย GitHub account
3. คลิก **"Add New Project"**
4. เลือก repository **week10**
5. Vercel จะตรวจจับ Vite โดยอัตโนมัติ
6. คลิก **"Deploy"**

### 2. ผ่าน Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## ⚙️ Configuration

ไฟล์ที่เตรียมไว้แล้ว:

- ✅ `vercel.json` - Vercel configuration
- ✅ `vite.config.js` - Vite build settings
- ✅ `.vercelignore` - Files to ignore

## 📝 Build Settings (ถ้าต้องการตั้งค่าเอง)

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## 🎮 Features

เว็บไซต์นี้มี:

- 🎨 Genshin Impact Theme
- 🎵 Background Music (Dawn Winery Theme)
- 🎬 Video Background
- 💎 Primogem Cursor
- 🌟 Paimon Icon
- ✨ Particle Effects

## ⚠️ หมายเหตุ

- ไฟล์วิดีโอและเสียงอาจใช้เวลาในการโหลดครั้งแรก
- Autoplay music อาจถูกบล็อกโดยเบราว์เซอร์ (ผู้ใช้ต้องคลิกเพื่อเล่น)
- Cursor Primogem ทำงานได้ดีที่สุดบน Desktop

## 🔗 Environment Variables

ไม่ต้องตั้งค่า environment variables เพิ่มเติม

## ✅ Checklist

- [x] Build สำเร็จ
- [x] vercel.json พร้อมแล้ว
- [x] vite.config.js ตั้งค่าแล้ว
- [x] ไฟล์ static อยู่ใน public/
- [x] Routing configuration สำหรับ SPA

พร้อม Deploy แล้ว! 🎉
