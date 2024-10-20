function findLargest() {
    const input = document.getElementById("numbers").value;
    const numbers = input.split(',').map(Number);
    const largest = Math.max(...numbers);
    document.getElementById("result").textContent = "The largest number is " + largest;
}