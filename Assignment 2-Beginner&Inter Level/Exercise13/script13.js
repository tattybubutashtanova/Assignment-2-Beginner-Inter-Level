function convertToString() {
    const number = document.getElementById("number").value;
    const stringRepresentation = number.toString();
    document.getElementById("result").textContent = "String: " + stringRepresentation;
}
