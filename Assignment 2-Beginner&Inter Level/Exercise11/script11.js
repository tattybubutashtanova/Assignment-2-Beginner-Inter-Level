function sumArray() {
    const input = document.getElementById("numbers").value;
    const numbers = input.split(',').map(Number);
    const sum = numbers.reduce((total, num) => total + num, 0);
    
    document.getElementById("result").textContent = "Sum: " + sum;
}
