function capitalizeWords() {
    const sentence = document.getElementById("sentence").value;
    const capitalizedSentence = sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    document.getElementById("result").textContent = "Capitalized: " + capitalizedSentence;
}
