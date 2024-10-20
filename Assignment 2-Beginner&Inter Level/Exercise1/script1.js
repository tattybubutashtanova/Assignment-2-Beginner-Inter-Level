function sumTwoNumbers(a, b) {
    return a + b;
}

function displaySum() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = sumTwoNumbers(num1, num2);
    document.getElementById("result").textContent = "Sum is " + result;
}