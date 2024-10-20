function checkEvenOdd() {
    const num = parseInt(document.getElementById("number").value);
    const result = (num % 2 === 0) ? "Even" : "Odd";
    document.getElementById("result").textContent = "The number is " + result;
}
