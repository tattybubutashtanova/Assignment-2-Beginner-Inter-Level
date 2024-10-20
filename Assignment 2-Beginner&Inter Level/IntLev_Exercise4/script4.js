function countWords() {
    const text = document.getElementById("text").value;
    const words = text.toLowerCase().match(/\b\w+\b/g);
    
    const wordCount = {};
    if (words) {
        words.forEach(word => {
            wordCount[word] = (wordCount[word] || 0) + 1;
        });
    }
    
    document.getElementById("result").textContent = JSON.stringify(wordCount);
}
