# Form Validation Guide

## Regular Expression (Regex) Validation

### Email Validation

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

**Breaking down the regex:**

- `^` - Start of string
- `[^\s@]+` - One or more characters that are NOT whitespace or @
- `@` - Literal @ symbol
- `[^\s@]+` - One or more characters that are NOT whitespace or @
- `\.` - Literal dot (escaped)
- `[^\s@]+` - One or more characters that are NOT whitespace or @
- `$` - End of string

**Valid examples:**

- ✅ `user@example.com`
- ✅ `john.doe@company.co.th`
- ✅ `test123@mail.org`

**Invalid examples:**

- ❌ `user@` (no domain)
- ❌ `@example.com` (no username)
- ❌ `user @example.com` (contains space)
- ❌ `user@@example.com` (double @)

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

**Rules:**

- Minimum 6 characters
- Cannot be empty

**More advanced password regex (optional):**

```javascript
// At least 8 characters, 1 uppercase, 1 lowercase, 1 number
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special char
const veryStrongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
```

## Validation Best Practices

### 1. Client-Side Validation (JavaScript)

**Pros:**

- ✅ Immediate feedback to users
- ✅ Better user experience
- ✅ Reduces server load

**Cons:**

- ❌ Can be bypassed (disable JavaScript)
- ❌ Not secure on its own

### 2. Server-Side Validation

**Pros:**

- ✅ Cannot be bypassed
- ✅ Secure
- ✅ Consistent validation

**Cons:**

- ❌ Slower feedback
- ❌ Requires server round-trip

### 3. HTML5 Built-in Validation

```html
<input type="email" required /> <input type="password" minlength="6" required />
```

**Pros:**

- ✅ No JavaScript needed
- ✅ Browser handles it
- ✅ Accessible

**Cons:**

- ❌ Limited customization
- ❌ Different browsers behave differently

## Complete Validation Example

```javascript
import { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Email validation
  const validateEmail = (value) => {
    if (value === "") {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Invalid email address";
    }
    return "";
  };

  // Password validation
  const validatePassword = (value) => {
    if (value === "") {
      return "Password is required";
    }
    if (value.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return "";
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    // If there are errors, show them
    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });
      return;
    }

    // If validation passes, proceed
    console.log("Form is valid!", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
}
```

## Common Regex Patterns

### Phone Number (Thai format)

```javascript
const thaiPhoneRegex = /^0[0-9]{9}$/;
// Matches: 0812345678
```

### URL

```javascript
const urlRegex = /^https?:\/\/.+\..+$/;
// Matches: http://example.com, https://google.com
```

### Username (alphanumeric, 3-16 chars)

```javascript
const usernameRegex = /^[a-zA-Z0-9]{3,16}$/;
// Matches: john123, User_Name (if underscore allowed: /^[a-zA-Z0-9_]{3,16}$/)
```

### Credit Card (basic)

```javascript
const creditCardRegex = /^[0-9]{13,19}$/;
// Matches: 1234567890123456
```

## Testing Your Regex

Use online tools:

- [Regex101](https://regex101.com/) - Best for testing and explanation
- [RegExr](https://regexr.com/) - Visual regex tester
- Browser console:
  ```javascript
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(regex.test("user@example.com")); // true
  console.log(regex.test("invalid-email")); // false
  ```

## Security Considerations

⚠️ **Important Security Notes:**

1. **Never trust client-side validation alone**
   - Always validate on the server
   - Client-side can be bypassed

2. **Sanitize user input**
   - Remove dangerous characters
   - Escape HTML/SQL

3. **Use prepared statements for database queries**
   - Prevent SQL injection
   - Never concatenate user input into queries

4. **Hash passwords**
   - Never store plain text passwords
   - Use bcrypt, argon2, or similar

5. **Implement rate limiting**
   - Prevent brute force attacks
   - Limit login attempts

## Resources

- [MDN - Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [MDN - Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [OWASP - Input Validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
