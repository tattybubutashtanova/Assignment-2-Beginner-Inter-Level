function printDateTime() {
    const currentDateTime = new Date();
    document.getElementById("result").textContent = currentDateTime.toLocaleString();
}
