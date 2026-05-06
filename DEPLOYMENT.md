# Deployment Guide

## 🚀 Deploy Your React App

This guide will help you deploy your React login app to various hosting platforms.

## Option 1: Vercel (Recommended)

Vercel is the easiest and fastest way to deploy Vite apps.

### Method A: Using Vercel CLI

1. **Install Vercel CLI:**

   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**

   ```bash
   vercel login
   ```

3. **Deploy:**

   ```bash
   cd week10
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N`
   - What's your project's name? `week10` (or your choice)
   - In which directory is your code located? `./`
   - Want to override the settings? `N`

5. **Your app is live!** 🎉
   - Vercel will give you a URL like: `https://week10-xxx.vercel.app`

### Method B: Using Vercel Website

1. **Push to GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)**

3. **Click "Add New Project"**

4. **Import your GitHub repository**

5. **Configure:**
   - Framework Preset: Vite
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`

6. **Click "Deploy"**

7. **Done!** Your app is live.

## Option 2: Netlify

### Method A: Drag and Drop

1. **Build your app:**

   ```bash
   npm run build
   ```

2. **Go to [netlify.com](https://netlify.com)**

3. **Drag and drop the `dist` folder** to Netlify

4. **Your app is live!**

### Method B: Using Netlify CLI

1. **Install Netlify CLI:**

   ```bash
   npm i -g netlify-cli
   ```

2. **Login:**

   ```bash
   netlify login
   ```

3. **Initialize:**

   ```bash
   netlify init
   ```

4. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

### Method C: Connect GitHub

1. **Push to GitHub** (see Vercel Method B step 1)

2. **Go to [netlify.com](https://netlify.com)**

3. **Click "Add new site" → "Import an existing project"**

4. **Connect to GitHub and select your repo**

5. **Configure:**
   - Build command: `npm run build`
   - Publish directory: `dist`

6. **Click "Deploy site"**

## Option 3: GitHub Pages

1. **Install gh-pages:**

   ```bash
   npm install -D gh-pages
   ```

2. **Update `vite.config.js`:**

   ```javascript
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";

   export default defineConfig({
     plugins: [react()],
     base: "/week10/", // Replace with your repo name
   });
   ```

3. **Add deploy scripts to `package.json`:**

   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy:**

   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repo on GitHub
   - Settings → Pages
   - Source: `gh-pages` branch
   - Save

6. **Your app will be at:**
   `https://yourusername.github.io/week10/`

## Option 4: Render

1. **Push to GitHub** (see Vercel Method B step 1)

2. **Go to [render.com](https://render.com)**

3. **Click "New +" → "Static Site"**

4. **Connect your GitHub repo**

5. **Configure:**
   - Build Command: `npm run build`
   - Publish Directory: `dist`

6. **Click "Create Static Site"**

## Option 5: Firebase Hosting

1. **Install Firebase CLI:**

   ```bash
   npm install -g firebase-tools
   ```

2. **Login:**

   ```bash
   firebase login
   ```

3. **Initialize:**

   ```bash
   firebase init hosting
   ```

4. **Configure:**
   - What do you want to use as your public directory? `dist`
   - Configure as a single-page app? `Yes`
   - Set up automatic builds? `No`

5. **Build your app:**

   ```bash
   npm run build
   ```

6. **Deploy:**
   ```bash
   firebase deploy
   ```

## 📝 After Deployment

1. **Test your deployed app:**
   - Try logging in
   - Refresh the page
   - Test on mobile
   - Check localStorage in DevTools

2. **Update your README:**
   - Add the live demo link
   - Update the deployment section

3. **Share your link:**
   - Add to your assignment submission
   - Share with classmates
   - Add to your portfolio

## 🔧 Troubleshooting

### Blank page after deployment?

1. **Check base URL in `vite.config.js`:**

   ```javascript
   base: "/"; // For Vercel, Netlify
   base: "/repo-name/"; // For GitHub Pages
   ```

2. **Check build output:**
   ```bash
   npm run build
   npm run preview
   ```

### Styles not loading?

1. **Make sure Tailwind is configured correctly**
2. **Check `postcss.config.js`**
3. **Verify `index.css` has Tailwind directives**

### localStorage not working?

1. **Check browser privacy settings**
2. **Make sure site is served over HTTPS**
3. **Check for browser extensions blocking storage**

## 🎯 Recommended Platform

For this project, I recommend **Vercel** because:

- ✅ Easiest setup
- ✅ Automatic deployments from GitHub
- ✅ Free SSL certificate
- ✅ Great performance
- ✅ Built-in analytics
- ✅ Perfect for Vite apps

## 📊 Comparison

| Platform     | Ease       | Speed  | Free Tier   | Auto Deploy |
| ------------ | ---------- | ------ | ----------- | ----------- |
| Vercel       | ⭐⭐⭐⭐⭐ | ⚡⚡⚡ | ✅ Generous | ✅ Yes      |
| Netlify      | ⭐⭐⭐⭐⭐ | ⚡⚡⚡ | ✅ Generous | ✅ Yes      |
| GitHub Pages | ⭐⭐⭐     | ⚡⚡   | ✅ Free     | ⚠️ Manual   |
| Render       | ⭐⭐⭐⭐   | ⚡⚡   | ✅ Limited  | ✅ Yes      |
| Firebase     | ⭐⭐⭐     | ⚡⚡⚡ | ✅ Good     | ⚠️ Manual   |

## 🔗 Custom Domain (Optional)

If you have a custom domain:

### Vercel

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify

1. Go to Domain Settings
2. Add custom domain
3. Update DNS records

## 📱 Testing Your Deployment

After deployment, test:

- [ ] App loads correctly
- [ ] Login form works
- [ ] Validation shows errors
- [ ] Successful login works
- [ ] Page refresh maintains session
- [ ] Logout clears session
- [ ] Responsive on mobile
- [ ] localStorage works
- [ ] All styles load correctly

## 🎉 Success!

Once deployed, your app is live and accessible to anyone with the URL!

**Don't forget to:**

1. Add the link to your README
2. Submit the link with your assignment
3. Test thoroughly
4. Share with your instructor

---

**Happy Deploying! 🚀**
