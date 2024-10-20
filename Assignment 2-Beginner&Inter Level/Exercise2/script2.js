function reverseString(str) {
    return str.split('').reverse().join('');
}

function displayReversedString() {
    const input = document.getElementById("inputString").value;
    const result = reverseString(input);
    document.getElementById("result").textContent = "Reverse is " + result;
    
}