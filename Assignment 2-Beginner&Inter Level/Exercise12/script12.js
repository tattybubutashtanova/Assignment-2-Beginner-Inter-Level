function generateRandom() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);

    if (isNaN(min) || isNaN(max) || min > max) {
        document.getElementById("result").textContent = "Invalid range";
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("result").textContent = "Random Number: " + randomNumber;
}
