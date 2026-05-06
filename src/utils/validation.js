// Email validation function
export const validateEmail = (value) => {
  if (value === "") {
    return "Email is required";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return "Invalid email address";
  }
  return "";
};

// Password validation function
export const validatePassword = (value) => {
  if (value === "") {
    return "Password is required";
  }
  if (value.length < 6) {
    return "Password must be at least 6 characters long";
  }
  return "";
};
