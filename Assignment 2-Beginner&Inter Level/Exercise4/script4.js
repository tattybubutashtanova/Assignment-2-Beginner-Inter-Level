function convertToFarenheit() {
    const celcius = parseFloat(document.getElementById("celcius").value);
    const farenheit = (celcius * 9/5) + 32;
    document.getElementById("result").textContent = celcius + " degrees in Celcius is " + farenheit + " degrees in Farenheit";

}