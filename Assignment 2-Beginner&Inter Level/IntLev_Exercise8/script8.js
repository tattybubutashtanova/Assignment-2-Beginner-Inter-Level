function getUniqueValues() {
    const input = document.getElementById("array").value;
    const array = input.split(',').map(Number);

    const uniqueValues = [...new Set(array)];
    document.getElementById("result").textContent = "Unique Values: " + uniqueValues.join(', ');
}
