function checkAnagram() {
    const str1 = document.getElementById("string1").value.toLowerCase().replace(/[\W_]/g, '');
    const str2 = document.getElementById("string2").value.toLowerCase().replace(/[\W_]/g, '');

    const isAnagram = str1.split('').sort().join('') === str2.split('').sort().join('');
    document.getElementById("result").textContent = isAnagram ? "Anagram" : "Not an anagram";
}
