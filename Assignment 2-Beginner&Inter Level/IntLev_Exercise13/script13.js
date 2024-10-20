function cloneObject() {
    const original = {
        name: 'Tatty',
        address: { city: 'Naryn', country: 'KG' }
    };
    
    const cloned = JSON.parse(JSON.stringify(original));

    document.getElementById("result").textContent = "Cloned Object: " + JSON.stringify(cloned);
}
