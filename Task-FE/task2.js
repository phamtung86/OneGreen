function isValidPassword(password) {
    // Kiểm tra độ dài ít nhất 8 ký tự
    if (password.length < 8) return false;

    // Chữ in hoa
    const hasUpperCase = /[A-Z]/.test(password);

    // Chữ số
    const hasDigit = /\d/.test(password);

    // Ký tự đặc biệt
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    return hasUpperCase && hasDigit && hasSpecialChar;
}


console.log(isValidPassword("Hello@123")); // Output: true
console.log(isValidPassword("hello123"));  // Output: false (thiếu chữ in hoa & ký tự đặc biệt)
console.log(isValidPassword("HELLO@123")); // Output: true
console.log(isValidPassword("H@12"));      // Output: false (ít hơn 8 ký tự)
console.log(isValidPassword("HelloWorld"));// Output: false (không có số và ký tự đặc biệt)
