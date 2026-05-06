# React Login Form with Validation & Session Management

A simple React application demonstrating form validation, session management using localStorage, and Tailwind CSS styling.

## 🚀 Live Demo

[Add your deployed link here]

## ✨ Features

- ✅ **Email Validation**: Uses regex to validate email format
- ✅ **Password Validation**: Ensures password is at least 6 characters
- ✅ **HTML5 Built-in Validation**: Email input type for basic validation
- ✅ **JavaScript Validation**: Custom validation logic for both fields
- ✅ **Session Persistence**: Login state persists after page refresh using localStorage
- ✅ **Responsive Design**: Works on all screen sizes
- ✅ **Beautiful UI**: Styled with Tailwind CSS
- ✅ **User Feedback**: Clear error messages for validation failures

## 🛠️ Technologies Used

- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **localStorage** - Session management

## 📦 Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd week10
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🎯 How It Works

### Form Validation

The app implements two layers of validation:

1. **HTML5 Validation**: The email input uses `type="email"` for basic browser validation
2. **JavaScript Validation**: Custom validation functions check:
   - Email format using regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
   - Password length (minimum 6 characters)

### Session Management

The app uses **localStorage** to persist login sessions:

- **On Login**: Email is saved to `localStorage.setItem('userEmail', email)`
- **On Page Load**: Checks for existing session with `localStorage.getItem('userEmail')`
- **On Logout**: Removes session with `localStorage.removeItem('userEmail')`

### Browser Storage Comparison

| Storage Type       | Lifetime                  | Scope                               | Capacity        |
| ------------------ | ------------------------- | ----------------------------------- | --------------- |
| **localStorage**   | Permanent (until cleared) | Same origin                         | ~5-10MB         |
| **sessionStorage** | Until tab/window closes   | Same tab                            | ~5-10MB         |
| **Cookies**        | Set expiration date       | Same origin + can be sent to server | ~4KB per cookie |

**Why localStorage for this project?**

- Persists across browser sessions (survives page refresh)
- Larger storage capacity than cookies
- Simpler API than cookies
- No server-side interaction needed

## 🔒 Security Notes

⚠️ **Important**: This is a demo application for learning purposes. In production:

- Never store sensitive data in localStorage (use httpOnly cookies for auth tokens)
- Always validate on the server side
- Use proper authentication systems (JWT, OAuth, etc.)
- Implement HTTPS
- Add CSRF protection

## 📝 Validation Examples

### Email Validation

```javascript
function validateEmail(value) {
  if (value === "") {
    return "Email is required";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return "Invalid email address";
  }
  return "";
}
```

### Password Validation

```javascript
function validatePassword(value) {
  if (value === "") {
    return "Password is required";
  }
  if (value.length < 6) {
    return "Password must be at least 6 characters long";
  }
  return "";
}
```

## 🎨 UI Features

- Gradient backgrounds
- Smooth transitions and hover effects
- Error state styling
- Success state with user email display
- Responsive layout
- Icon feedback for errors and success

## 📚 Learning Objectives

This project demonstrates:

- React hooks (`useState`, `useEffect`)
- Form handling in React
- Client-side validation
- Regular expressions (regex)
- Browser storage APIs
- Conditional rendering
- Tailwind CSS utility classes

## 🔄 User Flow

1. User enters email and password
2. On submit, validation runs
3. If validation fails, error messages appear
4. If validation passes, email is saved to localStorage
5. User sees welcome screen with their email
6. On page refresh, session persists
7. User can logout, which clears localStorage

## 📱 Screenshots

### Login Screen

- Clean form with email and password fields
- Real-time validation feedback

### Welcome Screen

- Displays logged-in user's email
- Logout button to clear session

## 🤝 Contributing

Feel free to fork and improve this project!

## 📄 License

MIT

---

**Due Date**: 5pm 07/05/26

**Assignment**: React Challenge - Form Validation & Session Management
