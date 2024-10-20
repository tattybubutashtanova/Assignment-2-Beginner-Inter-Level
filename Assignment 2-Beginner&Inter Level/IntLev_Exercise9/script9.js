function checkSubstring() {
    const str = document.getElementById("string").value;
    const substring = document.getElementById("substring").value;

    const isPresent = str.includes(substring);
    document.getElementById("result").textContent = isPresent ? "Substring found" : "Substring not found";
}
