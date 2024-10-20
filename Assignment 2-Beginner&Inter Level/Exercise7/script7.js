function countVowels() {
    const str = document.getElementById("inputString").value.toLowerCase();
    const vowels = str.match(/[aeiou]/g);
    
    const vowelCount = vowels ? vowels.length : 0;
    document.getElementById("result").textContent = "Number of vowels: " + vowelCount;
}
