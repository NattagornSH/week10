# Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 📋 Project Structure

```
week10/
├── src/
│   ├── App.jsx              # Main login component
│   ├── StorageDemo.jsx      # Storage comparison demo (optional)
│   ├── App.css              # Custom styles
│   ├── index.css            # Tailwind directives
│   └── main.jsx             # Entry point
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies
├── README.md                # Full documentation
├── VALIDATION.md            # Validation guide
└── QUICKSTART.md            # This file
```

## 🎯 Testing the App

### Test Login Flow

1. Open the app in your browser
2. Try submitting empty form → See validation errors
3. Enter invalid email (e.g., "test") → See email error
4. Enter short password (< 6 chars) → See password error
5. Enter valid credentials:
   - Email: `test@example.com`
   - Password: `password123`
6. Click "Sign In" → See welcome screen with your email

### Test Session Persistence

1. After logging in, refresh the page
2. You should still be logged in (email persists)
3. Open DevTools → Application → Local Storage
4. See `userEmail` stored there
5. Click "Log Out" → Session cleared

### Test Storage Demo (Optional)

1. Change `App.jsx` import in `main.jsx`:
   ```javascript
   import App from "./StorageDemo.jsx";
   ```
2. Restart dev server
3. Test all three storage types
4. See the differences in behavior

## 🔍 Inspecting Storage in Browser

### Chrome/Edge DevTools

1. Press `F12` or `Cmd+Option+I` (Mac)
2. Go to **Application** tab
3. Left sidebar:
   - **Local Storage** → See localStorage items
   - **Session Storage** → See sessionStorage items
   - **Cookies** → See cookies

### Firefox DevTools

1. Press `F12` or `Cmd+Option+I` (Mac)
2. Go to **Storage** tab
3. Expand sections to see stored data

## 🎨 Customizing Styles

The app uses Tailwind CSS. To customize:

### Change Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    }
  }
}
```

### Add Custom CSS

Edit `src/App.css` or `src/index.css`

## 📝 Assignment Checklist

- [x] ✅ Created new Vite + React project
- [x] ✅ Installed and configured Tailwind CSS
- [x] ✅ Created login form with email and password
- [x] ✅ Implemented HTML5 validation (type="email")
- [x] ✅ Implemented JavaScript validation with regex
- [x] ✅ Email validation with regex pattern
- [x] ✅ Password validation (min 6 characters)
- [x] ✅ Session management with localStorage
- [x] ✅ Session persists after page refresh
- [x] ✅ Display user email after login
- [x] ✅ Logout functionality clears localStorage
- [x] ✅ Studied browser storage types (Local/Session/Cookies)
- [x] ✅ Created documentation

## 🐛 Troubleshooting

### Tailwind styles not working?

1. Make sure `index.css` has Tailwind directives
2. Check `tailwind.config.js` content paths
3. Restart dev server

### localStorage not persisting?

1. Check browser privacy settings
2. Make sure you're not in incognito/private mode
3. Check DevTools → Application → Local Storage

### Validation not working?

1. Check browser console for errors
2. Verify regex patterns are correct
3. Make sure form has `onSubmit` handler

## 📚 Next Steps

1. Deploy to Vercel/Netlify
2. Add more validation rules
3. Implement "Remember Me" checkbox
4. Add password strength indicator
5. Create registration form
6. Add forgot password flow

## 🔗 Useful Links

- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [MDN Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [Regex101 Tester](https://regex101.com/)

## 💡 Tips

- Use React DevTools extension for debugging
- Check console for errors
- Test in different browsers
- Try different screen sizes (responsive design)
- Clear localStorage if you get stuck: `localStorage.clear()`

---

**Happy Coding! 🎉**
