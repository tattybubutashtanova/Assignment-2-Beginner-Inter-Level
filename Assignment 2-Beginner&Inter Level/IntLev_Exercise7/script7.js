function flattenArray() {
    const input = document.getElementById("nestedArray").value;
    const nestedArray = JSON.parse(input);

    const flatArray = nestedArray.flat(Infinity);
    document.getElementById("result").textContent = "Flattened Array: " + JSON.stringify(flatArray);
}