function validatePassword(password) {
  if (typeof password !== "string") {
    return "Error: Password must be a string.";
  }
  if (password.length < 8) {
    return "Error: Password must be at least 8 characters long.";
  }
  if (!/[A-Z]/.test(password)) {
    return "Error: Password must contain at least one uppercase letter.";
  }
  if (!/[0-9]/.test(password)) {
    return "Error: Password must contain at least one number.";
  }
  if (/password/i.test(password)) {
    return "Error: Password must not contain the word \"password\".";
  }
  return "Strong Password";
}