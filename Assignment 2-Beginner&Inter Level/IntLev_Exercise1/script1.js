function sortArray() {
    const input = document.getElementById("numbers").value;
    const numbers = input.split(',').map(Number);
    
    // Bubble sort algorithm
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
            }
        }
    }
    
    document.getElementById("result").textContent = "Sorted: " + numbers.join(', ');
}
