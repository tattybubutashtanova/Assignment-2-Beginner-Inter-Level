function checkPalindrome() {
    const str = document.getElementById("inputString").value;
    const cleanedStr = str.toLowerCase().replace(/[\W_]/g, ''); 
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    const isPalindrome = cleanedStr === reversedStr;
    document.getElementById("result").textContent = isPalindrome ? "It's a palindrome" : "Not a palindrome.";
}
