function validateEmail() {
    const email = document.getElementById("email").value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const isValid = regex.test(email);
    document.getElementById("result").textContent = isValid ? "Valid " : "Invalid ";
}
