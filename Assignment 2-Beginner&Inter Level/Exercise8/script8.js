function calculateFactorial() {
    const num = parseInt(document.getElementById("number").value);
    
    if (isNaN(num) || num < 0) {
        document.getElementById("result").textContent = "enter a number.";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    
    document.getElementById("result").textContent = "Factorial of " + num + " is " + factorial;
}
